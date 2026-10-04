# Euthymo at euthymo.com

A warm, private little home for Euthymo. Built with **Next.js 16, React 19, TypeScript, and Tailwind CSS 4**. The public app name is currently **Euthymo**; the website is **https://www.euthymo.com**.

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

The first three check source and build correctness. `release:check` checks publication details; it verifies the configured developer identity, privacy/support email, policy status, and exported routes. It is not a legal compliance certification. GitHub Actions builds the site and attaches the `out/` directory as an artifact, without deploying it.

## Before publication

The public developer name is **bijbrin** and the support/privacy email is **bijbrin@gmail.com**, as supplied by the owner. These are configured in `src/lib/site.ts`. The policy describes the actual Hostinger VPS setup: access logging off in the site’s Nginx container, no access-log configuration in the shared Traefik proxy, capped website-container operational logs, and separate host-level logs. Contact, policy date, and publication status are set. Recheck this description if hosting or data practices change.

`appStoreUrl` stays empty until a real public listing exists. The site honestly displays **Coming soon**, without a nonfunctional download or waitlist button. Supplying the real listing changes the header and final call to action; update the launch copy and release-status FAQ at the same time.

The privacy content was checked against the app source on 4 October 2026: local journal storage, optional private CloudKit sync, local reminders, app lock, photo/voice attachments, StoreKit, Trash, recovery copies, and unencrypted exports. It distinguishes app content from website hosting logs. Confirm that these practices remain accurate before release.

## GitHub → Hostinger

Repository: https://github.com/bjadhs/euthymo

Only this standalone website belongs in this repository. Native app source, journals, simulator data, credentials, research, and local review screenshots are not included.

### Current VPS: Docker + the existing Dokploy Traefik proxy

Public server IP: **72.62.72.132**. The domain’s public A records must use this address, not the server’s Tailscale address.

The repository lives at `/opt/euthymo`. Docker builds with Node 24 and Bun 1.3.13, then serves only the exported `out/` through Nginx. No Node/Bun installation is needed on the host. The `euthymo-web` container joins the existing `dokploy-network` and publishes no host port. Traefik routes the domain through the already-open public ports 80/443. The deployment does not restart or reconfigure other apps.

Initial deployment, before DNS is ready:

```sh
git clone https://github.com/bjadhs/euthymo.git /opt/euthymo
cd /opt/euthymo
docker compose build
docker compose up -d --wait
```

This starts HTTP routing for `euthymo.com` and `www.euthymo.com`. It can be checked before changing DNS:

```sh
curl --resolve www.euthymo.com:80:72.62.72.132 http://www.euthymo.com/privacy/
```

Set the domain DNS records at the authoritative provider:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `72.62.72.132` |
| A | `www` | `72.62.72.132` |

Replace conflicting A/AAAA/CNAME records for those two names. Preserve unrelated records, including email MX/TXT records. If DNS is hosted at Hostinger: Domains → Domain portfolio → Manage → DNS / Nameservers. Do not move nameservers just to deploy this website.

After both names resolve to this VPS:

```sh
cd /opt/euthymo
bash deploy/enable-https.sh
```

The script checks DNS first, then adds the HTTPS routing overlay. The existing Traefik `letsencrypt` resolver issues and renews the certificate. HTTP redirects to HTTPS, and the HTTPS apex redirects to `https://www.euthymo.com`, preserving the path. Confirm the certificate and `/privacy/` before entering the URL in App Store Connect.

Subsequent production updates (after HTTPS is enabled):

```sh
cd /opt/euthymo
git pull --ff-only
docker compose -f compose.yml -f compose.https.yml build
docker compose -f compose.yml -f compose.https.yml up -d --wait
```

The Docker build runs lint, the production build, TypeScript, and publication checks before replacing the running container. A failed build leaves the running container in place. The static site has a health check and bounded container logs. For rollback, rebuild a previously verified Git commit and run the same compose command. Do not run the base compose file alone after enabling HTTPS, because it would remove the HTTPS labels.

`deploy/nginx.conf` is an alternative standalone-host template. It is **not** the active configuration on this VPS; use `deploy/container-nginx.conf` and the Compose files for this deployment.

### Other static hosting

For shared hosting, build locally or download `euthymo-static-site` from a successful GitHub Actions run. Serve only the contents of `out/`; keep `.git`, source, and `node_modules` outside the web root. Configure the host’s HTTPS and canonical-domain redirects and a proper `404.html` response. Do not rewrite all URLs to the homepage: `/privacy/` must load its own document directly.

## Connect the privacy URL to the app after it is live

The intended public URL is **https://www.euthymo.com/privacy/**. It is not a live policy until deployed and verified.

After a direct HTTPS request returns the final policy, update the native app’s `ProLinks.privacyPolicy` in `moodimo/moodimo/Pro/ProAccess.swift`:

```swift
static let privacyPolicy: URL? = URL(string: "https://www.euthymo.com/privacy/")
```

Use the same URL in App Store Connect. Also expose it in an easily accessible app location such as Settings; a Pro paywall alone is not a general privacy entry point, particularly while Pro is disabled in release builds. The native app has not been changed by this website project.

References: [Apple App Review privacy requirements](https://developer.apple.com/app-store/review/guidelines/#privacy), [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), [Tailwind PostCSS setup](https://tailwindcss.com/docs/installation/using-postcss), [Apple standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), [Hostinger privacy policy](https://www.hostinger.com/legal/privacy-policy).
