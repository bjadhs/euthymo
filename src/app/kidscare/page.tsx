import type { Metadata } from "next";
import Link from "next/link";
import { DocumentLayout } from "@/components/document-layout";

export const metadata: Metadata = {
  title: { absolute: "KidsCare · Family care, kept together" },
  description: "KidsCare’s family-care TestFlight beta: local care records, caregiver activities and optional Kiki AI. Find privacy information and support.",
  alternates: { canonical: "/kidscare/" },
  openGraph: { title: "KidsCare", description: "Family care, kept together.", url: "/kidscare/", siteName: "KidsCare", images: [] },
  twitter: { card: "summary", title: "KidsCare", images: [] },
};

export default function KidsCare() {
  return <DocumentLayout eyebrow="KIDSCARE · FAMILY-CARE BETA" title="Care, kept together." intro="A place for parents and caregivers to organize the little details of family care, with records saved on their device." sections={[{ id: "about", title: "About KidsCare" }, { id: "privacy", title: "Privacy & support" }]}>
    <section id="about"><div className="document-summary"><p>KidsCare brings feeding, sleep, diapers, growth, notes, milestones and appointments into one local tracker. Explore recipes, bundled sleep sounds, caregiver-led activities and age-grouped games. Optional Ask Kiki offers general information after explicit AI consent.</p></div><h2>Currently in TestFlight.</h2><p>Version 1.0 is a family-testing beta. It uses local demo sign-in and sample service flows; use synthetic family information when testing. There is no public App Store download or paid subscription offered here.</p><p>Care records stay on the device. Family collaboration, calls and premium screens include demonstrations. Optional AI sends questions and conversation context to OpenRouter and its model provider, with display names and calculated child age when personalization is enabled.</p></section>
    <section id="privacy"><h2>A clear place to start.</h2><p><Link href="/kidscare/privacy/">Read the KidsCare privacy policy</Link> for data handling, AI controls, exports and deletion.</p><p><Link href="/kidscare/support/">Visit KidsCare help & support</Link> for practical help or to report a beta issue.</p><p>KidsCare is hosted here alongside the developer’s separate <Link href="/">Euthymo journal app</Link>.</p></section>
  </DocumentLayout>;
}
