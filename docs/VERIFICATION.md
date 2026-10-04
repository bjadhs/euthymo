# Website verification — 4–5 October 2026

Scope: the standalone website for www.euthymo.com. The native Swift app was not changed, rebuilt, or tested as part of this website task.

## Build and route evidence

- Next.js 16.3.8, React 19.3.0, Tailwind CSS 4.3.3, Node 24.12.0, Bun 1.3.13.
- ESLint passed without warnings; production static export passed; TypeScript passed.
- Served the actual `out/` build locally with `serve`, not just the development server.
- `/`, `/privacy/`, `/support/`, and `/terms/` returned HTTP 200 with distinct correct page titles. `/privacy/` has `https://www.euthymo.com/privacy/` as its canonical URL.
- All internal page and fragment links in the four exported pages resolved to exported pages and existing IDs.
- `sitemap.xml`, `robots.txt`, logo icons, and social image returned HTTP 200. A nonexistent path returned HTTP 404.
- Three font licenses are included in the static export. Optimized site assets total approximately 288 KB; the full export is approximately 2 MB.

## Browser review

Reviewed in Chrome through the connected browser, at effective CSS widths of 320, 390, 768, 1049, and 1280 px. The browser had an existing zoom setting, so actual `innerWidth` was measured rather than assuming the viewport override equaled CSS pixels.

- Desktop hero, feature panel, mobile hero, mobile feature panel, and mobile privacy page visually inspected.
- Fixed crowding in the narrow header, heading wrapping, a few pixels of horizontal overflow from the rotated decorative backdrop, and bottom spacing in the illustrative phone.
- Verified the page does not overflow horizontally at 320, 390, 768, or 1280 CSS px.
- Mood selection changed the selected state and explanatory message.
- The habit example toggled completion and updated its count.
- All five feature panels could be opened. Arrow-key navigation moved selection and focus between tabs.
- Mobile menu opened and closed on section navigation. The FAQ opened the selected answer and closed the prior answer.
- No browser errors or warnings were observed during the checks.
- Local review screenshots are in ignored `artifacts/` (desktop, mobile, and feature views). They are not included in the public Git repository.

This is visual and interaction review, not a full accessibility audit or device test matrix. Reduced-motion styles and visible keyboard focus are implemented; assistive-technology behavior has not been comprehensively audited. No native app UI test suite was run.

## Hostinger deployment — 5 October 2026 (Australia/Sydney)

- Published developer name `bijbrin` and contact `bijbrin@gmail.com`, as supplied by the developer. Updated the policy to reflect Hostinger hosting, actual web/proxy logging configuration, and Gmail contact processing. `bun run release:check` passes.
- Pushed deployment commit `c21b060` to `bjadhs/euthymo`. Its GitHub Actions build passed: https://github.com/bjadhs/euthymo/actions/runs/37205499973.
- Cloned the repository into `/opt/euthymo` on the Hostinger VPS. Built the production Docker image there using Node 24 and Bun 1.3.13; lint, static export, TypeScript, and publication checks all passed inside the build.
- Deployed container `euthymo-web` through the existing Traefik proxy on `dokploy-network`. No host ports were added and no existing applications or shared proxy were restarted. Container health and `nginx -t` passed.
- Both base and HTTPS Compose configurations validate. The website container's technical logs rotate at 1 MB per file with a maximum of three files; routine Nginx access logs are disabled.
- Tested the public server at `72.62.72.132` using `curl --resolve` with the intended domain. `/`, `/privacy/`, `/support/`, `/terms/`, `/robots.txt`, `/sitemap.xml`, logo, social image, and hashed CSS returned HTTP 200. Privacy HTML includes the supplied developer name, email, and intended canonical URL. The apex host also returned the homepage.
- `/privacy` redirects to `/privacy/`; a nonexistent page returns 404. Requests for `.env` and `.git/config` return 403. Security headers and one-year hashed-asset caching are present.
- At verification, public DNS still pointed to `2.57.91.91`, not this VPS. The HTTPS activation helper correctly stopped on that mismatch without changing routing. HTTPS certificate issuance, canonical HTTPS redirects, and requests through normal domain resolution remain pending the developer's DNS update.

## Still required before public launch

- Point the apex and `www` DNS records to `72.62.72.132`, then run `bash deploy/enable-https.sh` from `/opt/euthymo`. Verify the certificate, HTTP-to-HTTPS and apex-to-www redirects, and direct legal-page requests through normal public DNS.
- Recheck the policy against the final shipping app if its data handling changes before release.
- Keep the coming-soon state until a real App Store listing is available. The site has no fabricated downloads, ratings, testimonials, or working email collection form.
- Only after the final policy is live, set `ProLinks.privacyPolicy`, add the policy URL to App Store Connect, and provide an easily accessible privacy entry point in the app (for example Settings).

The privacy draft was based on implementation evidence, not a claim of legal certification or guaranteed App Review approval.
