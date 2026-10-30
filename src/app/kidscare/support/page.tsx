import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Download, MessageCircle, ShieldCheck } from "lucide-react";
import { DocumentLayout } from "@/components/document-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "KidsCare help & support" },
  description: "Help with KidsCare’s local records, optional Kiki AI, backups, privacy controls and TestFlight feedback.",
  alternates: { canonical: "/kidscare/support/" },
  openGraph: { title: "KidsCare help & support", description: "A little help with KidsCare’s family-care beta.", url: "/kidscare/support/", siteName: "KidsCare", images: [] },
  twitter: { card: "summary", title: "KidsCare help & support", images: [] },
};

export default function KidsCareSupport() {
  return <DocumentLayout eyebrow="KIDSCARE · HELP & SUPPORT" title="A little help with care." intro="Practical help for KidsCare’s 1.0 TestFlight beta, from local records to optional conversations with Kiki." sections={[{ id: "help", title: "Everyday help" }, { id: "beta", title: "About this beta" }, { id: "contact", title: "Get in touch" }]}>
    <p><Link href="/kidscare/privacy/">KidsCare privacy policy</Link> · Hosted on the developer’s Euthymo website.</p>
    <section id="help"><div className="support-grid">
      <article className="support-card"><BookOpen aria-hidden="true" size={25} /><h2>Keep records together.</h2><p>Choose the child at the top of Home before adding a care record. Records save on this device and survive reopening the app. The current beta does not synchronize between devices or family members.</p></article>
      <article className="support-card"><MessageCircle aria-hidden="true" size={25} /><h2>Choose how to ask.</h2><p>In Ask Kiki, select a guide and start a conversation. AI requires internet access and explicit consent. Use its privacy controls to disable AI, disable name-and-age personalization, choose whether to save history, or delete chats. For a connection error, check your network and retry.</p></article>
      <article className="support-card"><Download aria-hidden="true" size={25} /><h2>Keep a private copy.</h2><p>Use Privacy & data to export a readable JSON backup or preview and restore a KidsCare backup. Restore replaces current records after confirmation. Store exports privately; deleting data in KidsCare cannot remove copies you shared elsewhere.</p></article>
      <article className="support-card"><ShieldCheck aria-hidden="true" size={25} /><h2>Manage your information.</h2><p>Privacy & data contains controls for local data and preserved recovery copies. Family entries are labels, and the app has no separate biometric lock. Protect access with your device lock.</p><Link href="/kidscare/privacy/">Read the full privacy policy</Link></article>
    </div></section>
    <section id="beta"><h2>What this beta includes.</h2><p>Use synthetic family information while testing. Sign-in, doctor calls, family collaboration and premium screens contain demonstration flows. Booking saves locally without contacting a clinic. No subscription or token payment is charged. Notification preferences do not deliver system notifications.</p><p>Kiki is general information for caregivers. Contact a qualified healthcare professional for medical decisions, and local emergency services for urgent help. Support email is not an emergency or clinical service.</p></section>
    <section id="contact"><h2>Tell us what happened.</h2><p>KidsCare is developed by {site.developerName}. Email <a href={`mailto:${site.supportEmail}?subject=KidsCare%20support`}>{site.supportEmail}</a> or send feedback through Apple’s TestFlight app.</p><p>Include KidsCare version/build, your device and operating system, what you expected, and the steps that caused the issue. A redacted screenshot can help. Leave out child names, birthdates, medical records and full backups unless they are necessary and you choose to share them.</p><p>For a privacy question or request about information you sent to support, use the same email address. The <Link href="/kidscare/privacy/#website">privacy policy</Link> explains support-message handling. This page supports KidsCare; <Link href="/support/">Euthymo support</Link> is separate.</p></section>
  </DocumentLayout>;
}
