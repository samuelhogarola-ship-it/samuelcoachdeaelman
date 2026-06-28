import {
  ADMIN_USERS_RETRY_MESSAGE,
  createAdminUsersService
} from "./admin-users-handler.mjs";
import {
  createServiceRoleClient,
  createVerifyAdminAccess,
  readAdminBootstrapEmails
} from "../_shared/admin-auth.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, PATCH, OPTIONS"
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
const verifyAdminAccess = createVerifyAdminAccess({
  supabase,
  adminEmails: readAdminBootstrapEmails()
});

const listUsers = async ({
  limit
}: {
  limit: number;
}) => {
  const [{ data: profiles, error: profilesError }, { data: roles, error: rolesError }] =
    await Promise.all([
      supabase
        .from("profiles")
        .select("user_id, email, full_name, avatar_url, created_at, updated_at")
        .order("created_at", { ascending: false })
        .limit(limit),
      supabase
        .from("user_roles")
        .select("user_id, role")
        .in("role", ["student", "admin"])
    ]);

  if (profilesError) {
    return { success: false, error: profilesError };
  }

  if (rolesError) {
    return { success: false, error: rolesError };
  }

  const rolesByUserId = new Map<string, string[]>();
  (roles || []).forEach((row) => {
    if (!rolesByUserId.has(row.user_id)) {
      rolesByUserId.set(row.user_id, []);
    }
    rolesByUserId.get(row.user_id)?.push(row.role);
  });

  return {
    success: true,
    data: (profiles || []).map((profile) => {
      const userRoles = rolesByUserId.get(profile.user_id) || [];
      return {
        ...profile,
        roles: userRoles,
        is_admin: userRoles.includes("admin")
      };
    })
  };
};

const setAdminRole = async ({
  userId,
  isAdmin
}: {
  userId: string;
  isAdmin: boolean;
}) => {
  if (isAdmin) {
    const { error } = await supabase
      .from("user_roles")
      .upsert(
        {
          user_id: userId,
          role: "admin"
        },
        {
          onConflict: "user_id,role"
        }
      );

    if (error) {
      return { success: false, error };
    }
  } else {
    const { error } = await supabase
      .from("user_roles")
      .delete()
      .eq("user_id", userId)
      .eq("role", "admin");

    if (error) {
      return { success: false, error };
    }
  }

  const [{ data: profile, error: profileError }, { data: roles, error: rolesError }] =
    await Promise.all([
      supabase
        .from("profiles")
        .select("user_id, email, full_name, avatar_url, created_at, updated_at")
        .eq("user_id", userId)
        .maybeSingle(),
      supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
    ]);

  if (profileError) {
    return { success: false, error: profileError };
  }

  if (rolesError) {
    return { success: false, error: rolesError };
  }

  const userRoles = (roles || []).map((row) => row.role).filter(Boolean);
  return {
    success: true,
    data: {
      ...profile,
      roles: userRoles,
      is_admin: userRoles.includes("admin")
    }
  };
};

const adminUsersService = createAdminUsersService({
  verifyAdminAccess,
  listUsers,
  setAdminRole,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const result = await adminUsersService.process(request);
    return buildResponse(result);
  } catch (error) {
    console.error("admin users function failed", error);
    return buildResponse({
      status: 500,
      body: {
        success: false,
        message: ADMIN_USERS_RETRY_MESSAGE
      }
    });
  }
});
