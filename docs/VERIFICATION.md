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

This is visual and interaction review, not a full accessibility audit, device test matrix, or live hosting verification. Reduced-motion styles and visible keyboard focus are implemented; assistive-technology behavior has not been comprehensively audited. No native app UI test suite was run.

## Still required before public launch

- Supply the real developer/business name and monitored support/privacy email in `src/lib/site.ts`.
- Confirm hosting providers, logging/retention, policy date, and the policy against the final shipping app; update the prelaunch hosting paragraph and set `policyReviewed` after review. `bun run release:check` currently reports these missing publication details.
- Keep the coming-soon state until a real App Store listing is available. The site has no fabricated downloads, ratings, testimonials, or working email collection form.
- Deploy to Hostinger, verify the domain and certificate, redirects, direct legal-page requests, response codes, and any host-injected scripts. No live deployment was performed.
- Only after the final policy is live, set `ProLinks.privacyPolicy`, add the policy URL to App Store Connect, and provide an easily accessible privacy entry point in the app (for example Settings).

The privacy draft was based on implementation evidence, not a claim of legal certification or guaranteed App Review approval.
