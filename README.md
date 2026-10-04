# Moodimo at euthymo.com

A warm, private little home for Moodimo. Built with **Next.js 16, React 19, TypeScript, and Tailwind CSS 4**. The public app name is currently **Moodimo**; the website is **https://www.euthymo.com**.

The project is self-contained. It builds to plain HTML, CSS, JavaScript, and locally hosted assets in `out/`, ready for Hostinger. It has no runtime backend, database, API keys, analytics, cookies, signup form, or remote font requests.

## Local development

Use Node.js 22 or newer (24 used for verification) and Bun 1.3.13.

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:3000. To inspect the actual production export:

```sh
bun run build
bun run preview
```

`preview` serves `out/`; stop the dev server before starting it on the same port.

## Pages and behavior

| URL | Content |
| --- | --- |
| `/` | Landing page, interactive mood picker and feature previews, FAQ, coming-soon section |
| `/privacy/` | App and website privacy policy |
| `/terms/` | Apple standard EULA link, purchase information, practical terms |
| `/support/` | Help for backups, privacy, sync, purchases, and contact |
| `/sitemap.xml` | Production sitemap |
| `/robots.txt` | Crawler rules |

Feature previews use invented examples, not screenshots or real journal data. Mood, habit, and to-do interactions are temporary component state. Tabs support keyboard navigation, FAQ uses native disclosure controls, and motion respects Reduce Motion. Mobile navigation, a skip link, focus indicators, page metadata, social sharing images, and a custom 404 page are included.

The logo is the **Little Journal** notebook on peach selected by the owner. Optimized derivatives are bundled, including the browser and Apple touch icons. See [ASSETS.md](ASSETS.md).

## Checks

```sh
bun run lint
bun run build
bun run typecheck
bun run release:check
```

The first three check source and build correctness. `release:check` checks publication details; it currently fails intentionally while the developer identity, working privacy/support email, and final privacy review are outstanding. It is not a legal compliance certification. GitHub Actions builds the site and attaches the `out/` directory as an artifact, without deploying it.

## Before publication

Edit `src/lib/site.ts` with the real developer/business name and a monitored support email. Confirm the public app name (currently Moodimo), the policy date, actual Hostinger log retention and providers, and the policy against the final shipping app. Update the hosting paragraph to reflect the deployed setup, remove its prelaunch sentence, then set `policyReviewed` to `true`. The policy’s preparation notice disappears once both contact fields and this flag are set.

`appStoreUrl` stays empty until a real public listing exists. The site honestly displays **Coming soon**, without a nonfunctional download or waitlist button. Supplying the real listing changes the header and final call to action; update the launch copy and release-status FAQ at the same time.

The privacy content was checked against the app source on 4 October 2026: local journal storage, optional private CloudKit sync, local reminders, app lock, photo/voice attachments, StoreKit, Trash, recovery copies, and unencrypted exports. It distinguishes app content from website hosting logs. Confirm that these practices remain accurate before release.

## GitHub → Hostinger

Repository: https://github.com/bjadhs/euthymo

Only this standalone website belongs in this repository. Native app source, journals, simulator data, credentials, research, and local review screenshots are not included.

### On a Hostinger VPS with Node and Bun installed

```sh
git clone https://github.com/bjadhs/euthymo.git
cd euthymo
bun install --frozen-lockfile
bun run lint
bun run build
bun run typecheck
bun run release:check
```

After those checks pass, serve a copy of **only the contents of `out/`**. Keep the Git checkout, `.git`, and `node_modules` outside the public document root. For a VPS, `deploy/nginx.conf` is a reviewable Nginx template with `www` as canonical, HTTP → HTTPS redirects, a real 404, and long-lived caching for hashed assets. Adjust the document root and TLS certificate paths to the server. Provision a certificate covering both `euthymo.com` and `www.euthymo.com` before enabling its HTTPS blocks. The template turns off Nginx access logging; upstream hosting/security logs still need confirmation.

For each update, `git pull --ff-only`, install using the lockfile, rebuild, and run the checks. Copy the complete new `out/` into a new release directory outside the checkout; switch `/var/www/euthymo/current` to that directory after the copy completes. Keeping the previous release allows a quick rollback without a partially copied live site. This project does not run deployment commands automatically.

### On Hostinger shared hosting

Build locally or download the `euthymo-static-site` artifact from a successful GitHub Actions run. Back up the existing site, then upload the **contents** of `out/` into the domain’s document root (commonly `public_html`). A Next.js Node process is not needed. Do not upload the source repository. Configure the host’s HTTPS and canonical-domain redirects, and use `404.html` for unknown routes. Do not add an SPA rewrite that sends every URL to the homepage: `/privacy/` must load its own document directly.

### Verify after hosting

Verify HTTPS at both domain names, the apex → `www` redirect, and direct requests to `/privacy/`, `/terms/`, `/support/`, `/robots.txt`, and `/sitemap.xml`. Reload legal pages directly, check a nonexistent URL returns a 404, and inspect the page on a phone. Confirm no hosting add-on injects analytics or tracking that contradicts the policy. Publishing the policy does not by itself guarantee App Review approval.

## Connect the privacy URL to the app after it is live

The intended public URL is **https://www.euthymo.com/privacy/**. It is not a live policy until deployed and verified.

After a direct HTTPS request returns the final policy, update the native app’s `ProLinks.privacyPolicy` in `moodimo/moodimo/Pro/ProAccess.swift`:

```swift
static let privacyPolicy: URL? = URL(string: "https://www.euthymo.com/privacy/")
```

Use the same URL in App Store Connect. Also expose it in an easily accessible app location such as Settings; a Pro paywall alone is not a general privacy entry point, particularly while Pro is disabled in release builds. The native app has not been changed by this website project.

References: [Apple App Review privacy requirements](https://developer.apple.com/app-store/review/guidelines/#privacy), [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), [Tailwind PostCSS setup](https://tailwindcss.com/docs/installation/using-postcss), [Apple standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), [Hostinger privacy policy](https://www.hostinger.com/legal/privacy-policy).
