import { site } from "../src/lib/site";
import { existsSync } from "node:fs";

// This checks publication details, not whether a privacy policy satisfies every law.
const missing: string[] = [];
if (!site.developerName.trim()) missing.push("Set the real developer/business name in src/lib/site.ts.");
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.supportEmail)) missing.push("Set a working support/privacy email in src/lib/site.ts.");
if (!site.policyReviewed) missing.push("Confirm the privacy policy, hosting logs/retention, contact details, and date; set policyReviewed to true.");
if (site.url !== "https://www.euthymo.com") missing.push("Confirm the production canonical domain.");
if (site.appStoreUrl && !/^https:\/\/apps\.apple\.com\//.test(site.appStoreUrl)) missing.push("Use a real Apple App Store URL, or leave it empty for coming soon.");
for (const path of ["out/index.html", "out/privacy/index.html", "out/terms/index.html", "out/support/index.html", "out/404.html", "out/sitemap.xml", "out/robots.txt"]) {
  if (!existsSync(path)) missing.push(`Missing ${path}; run bun run build first.`);
}
if (missing.length) {
  console.error("Before publishing:\n" + missing.map(item => `  • ${item}`).join("\n"));
  process.exit(1);
}
console.log("Publication details and exported routes are present. Verify the live HTTPS URLs after deployment.");
