import { spawnSync } from "node:child_process";

const run = (command, args) => {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
};

const snapshot = () => {
  const diff = spawnSync("git", ["diff", "--binary", "--", ".", ":(exclude)output", ":(exclude)playwright-report", ":(exclude)test-results"], {
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024
  });
  const status = spawnSync("git", ["status", "--porcelain", "--untracked-files=all"], {
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024
  });
  if (diff.status !== 0 || status.status !== 0) process.exit(1);
  return `${diff.stdout}\n--STATUS--\n${status.stdout}`;
};

const before = snapshot();
run("npm", ["run", "build"]);
const after = snapshot();

if (before !== after) {
  spawnSync("git", ["status", "--short"], { stdio: "inherit" });
  console.error("Generated output is stale. Run npm run build and commit the resulting source-aligned files.");
  process.exit(1);
}
