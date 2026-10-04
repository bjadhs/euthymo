import Link from "next/link";
import { hasContact, site } from "@/lib/site";

export function DocumentLayout({ eyebrow, title, intro, updated = false, sections, children }: {
  eyebrow: string; title: string; intro: string; updated?: boolean;
  sections: { id: string; title: string }[]; children: React.ReactNode;
}) {
  return <main id="main"><div className="shell"><div className="document-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>{updated && <span className="document-date">Last updated: {site.policyUpdated}</span>}</div><div className="document-layout"><nav className="document-toc" aria-label="On this page"><span className="eyebrow">ON THIS PAGE</span>{sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav><article className="document-body">{children}</article></div></div></main>;
}

export function PolicyStatus() {
  return !hasContact || !site.policyReviewed ? <aside className="draft-note"><p>This policy is being prepared for Moodimo’s launch. {hasContact ? "The final publication review is still in progress." : "The developer’s identity and privacy contact will be added before publication."}</p></aside> : null;
}

export function ContactDetails() {
  return hasContact ? <p>{site.name} is developed by {site.developerName}. For privacy questions, a concern, or a request about information you have shared with us, email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.</p> : <p>The developer’s privacy contact is being finalized for launch. See the <Link href="/support/">support page</Link> for currently available help. You can manage and delete your on-device journal directly in the app.</p>;
}
