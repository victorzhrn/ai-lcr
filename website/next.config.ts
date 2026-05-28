import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { withPlausibleProxy } from "next-plausible";

// The parent repo (the npm package) has its own lockfile, so pin the
// workspace root to this folder to avoid Next picking the wrong root.
const here = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: { root: here },
};

export default withPlausibleProxy({
  customDomain: "https://plausible.ideamarketfit.com",
})(nextConfig);
