import Link from "next/link";
import { Sprout, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <main id="main" className="not-found"><Sprout size={38} strokeWidth={1.4} /><span className="eyebrow mt-5">A LITTLE OFF THE PATH</span><h1>Let’s head home.</h1><p>We couldn’t find this page.<br />Your little space is just over here.</p><Link href="/" className="button button-primary">Back to Moodimo<ArrowUpRight size={17} /></Link></main>;
}
