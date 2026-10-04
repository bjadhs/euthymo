import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/standard-italic.css";
import "@fontsource-variable/dm-sans";
import "@fontsource/indie-flower";
import "./globals.css";
import { Header, Footer } from "@/components/site-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Every feeling has a place here.`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website", locale: "en_AU", siteName: site.name,
    title: `${site.name} — Every feeling has a place here.`,
    description: site.description,
    images: [{ url: "/images/social.jpg", width: 1200, height: 630, alt: "Moodimo — a little space for your whole self" }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/images/social.jpg"] },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export const viewport: Viewport = { themeColor: "#f7f6ef" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
