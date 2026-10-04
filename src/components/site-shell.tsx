"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Heart } from "lucide-react";
import { launchHref, site } from "@/lib/site";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label={`${site.name} home`}>
    <Image src="/images/little-journal.webp" alt="" width={42} height={42} className="brand-mark" priority />
    <span>{site.name.toLowerCase()}<span className="brand-dot">.</span></span>
  </Link>;
}

const navigation = [
  { label: "The little things", href: "/#features" },
  { label: "A look inside", href: "/#explore" },
  { label: "Our promise", href: "/#privacy" },
  { label: "FAQs", href: "/#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="shell header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <Link href={launchHref} className="button button-outline nav-cta">{site.appStoreUrl ? "Get Moodimo" : "Meet Moodimo"}<ArrowUpRight size={16} /></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>
      {navigation.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} /></Link>)}
      <Link href={launchHref} onClick={() => setOpen(false)}>{site.appStoreUrl ? "Get Moodimo" : "Coming soon"}<ArrowUpRight size={18} /></Link>
    </nav>}
  </header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-top">
      <div><Brand /><p>A little closer to yourself.<br />One day at a time.</p></div>
      <div className="footer-links"><span className="eyebrow">MAKE YOURSELF AT HOME</span><Link href="/#features">Explore Moodimo</Link><Link href="/#faq">Common questions</Link><Link href="/support/">Help & support</Link></div>
      <div className="footer-links"><span className="eyebrow">THE IMPORTANT THINGS</span><Link href="/privacy/">Privacy policy</Link><Link href="/terms/">Terms of use</Link><span className="footer-note">Your feelings belong to you.</span></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All feelings welcome.</span><span>Made with care <Heart size={13} aria-hidden="true" /></span></div>
  </footer>;
}
