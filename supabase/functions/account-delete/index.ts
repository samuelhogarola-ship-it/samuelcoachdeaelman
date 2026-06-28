import {
  ACCOUNT_DELETE_RETRY_MESSAGE,
  createAccountDeleteService
} from "./account-delete-handler.mjs";
import { createServiceRoleClient } from "../_shared/admin-auth.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

const buildResponse = (result: {
  status: number;
  headers?: Record<string, string>;
  body: Record<string, unknown>;
}) =>
  new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: {
      ...corsHeaders,
      ...(result.headers || {}),
      "Content-Type": "application/json"
    }
  });

const supabase = createServiceRoleClient();

const verifySession = async (token: string) => {
  const {
    data: { user },
    error
  } = await supabase.auth.getUser(token);

  if (error || !user?.id) {
    return { success: false, error };
  }

  return {
    success: true,
    user
  };
};

const cleanupUserData = async ({
  userId,
  email
}: {
  userId: string;
  email: string | null;
}) => {
  const avatarBucket = supabase.storage.from("profile-avatars");
  const { data: avatarObjects, error: avatarListError } = await avatarBucket.list(userId, {
    limit: 100
  });

  if (avatarListError) {
    return { success: false, error: avatarListError };
  }

  const avatarPaths = (avatarObjects || [])
    .map((file) => file?.name)
    .filter(Boolean)
    .map((fileName) => `${userId}/${fileName}`);

  if (avatarPaths.length) {
    const { error: avatarRemoveError } = await avatarBucket.remove(avatarPaths);
    if (avatarRemoveError) {
      return { success: false, error: avatarRemoveError };
    }
  }

  const deleteOperations = [
    supabase.from("samuel_user_progress").delete().eq("user_id", userId),
    supabase.from("samuel_attempts").delete().eq("user_id", userId)
  ];

  if (email) {
    deleteOperations.push(
      supabase.from("leads").delete().eq("email", email.trim().toLowerCase())
    );
  }

  const results = await Promise.all(deleteOperations);
  const failedResult = results.find((result) => result.error);

  if (failedResult?.error) {
    return {
      success: false,
      error: failedResult.error
    };
  }

  return { success: true };
};

const deleteAuthUser = async ({
  userId
}: {
  userId: string;
}) => {
  const { error } = await supabase.auth.admin.deleteUser(userId);
  if (error) {
    return { success: false, error };
  }

  return { success: true };
};

const accountDeleteService = createAccountDeleteService({
  verifySession,
  cleanupUserData,
  deleteAuthUser,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const result = await accountDeleteService.process(request);
    return buildResponse(result);
  } catch (error) {
    console.error("account delete function failed", error);
    return buildResponse({
      status: 500,
      body: {
        success: false,
        message: ACCOUNT_DELETE_RETRY_MESSAGE
      }
    });
  }
});
