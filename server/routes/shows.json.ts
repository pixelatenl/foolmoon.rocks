import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

// Serves the same file as public/shows.json. The Live page fetches
// /shows.json at runtime; this route makes that fetch also resolvable on
// the server (dev SSR and prerendering), where public assets are not
// reachable through the internal fetch. On the static host this route is
// never shipped - the plain public/shows.json file is served instead.
export default defineEventHandler(async () => {
  const file = resolve(process.cwd(), "public/shows.json");
  return JSON.parse(await readFile(file, "utf8"));
});
