import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Bell, BookHeart, Check, Cloud, Flower2, Heart, Laptop, LockKeyhole, Palette, ShieldCheck, Smartphone, Smile, Sprout, Tablet, Wind, WifiOff } from "lucide-react";
import { MoodPreview } from "@/components/mood-preview";
import { Explorer } from "@/components/explorer";
import { site, launchHref } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const faqs = [
  { question: "What is Moodimo?", answer: "Moodimo is a private journal for your moods and everyday life. Check in with how you feel, keep a creative journal, build habits, organize to-dos, and make space for meaningful goals. It’s a place to reflect, at your own pace." },
  { question: "Do I need an account or an internet connection?", answer: "No Moodimo account is needed. Your journal saves on your device and the core experience works offline. Optional iCloud sync uses your Apple Account and an internet connection; purchases and restoring purchases also need a connection to Apple." },
  { question: "Who can see what I write?", answer: "Your journal is stored on your device. If you choose iCloud sync, it also syncs through your private iCloud database. Moodimo doesn’t run a server that receives your journal, and it has no advertising or third-party analytics SDKs. App lock adds another layer of privacy on your device. Read our privacy policy for the details, including backups and website hosting." },
  { question: "Will there be a free version?", answer: "Yes. The planned free experience includes mood check-ins, journaling, to-dos, reminders, backups, and a starting set of habits and customizations. Optional Moodimo Pro will offer extras such as iCloud sync, deeper insights, photos and voice notes, and more customization. Pro is still in development; final availability and prices will appear in the app before any purchase." },
  { question: "Which devices will Moodimo support?", answer: "Moodimo is being built for iPhone and iPad running iOS or iPadOS 18 or later, and for Mac running macOS 15 or later. The Mac app is a native Mac experience. The App Store release is coming soon; there isn’t a public download yet." },
  { question: "Can I take my journal with me or delete it?", answer: "Yes. Export a full backup from Settings, restore it on another device, or use optional iCloud sync. Deleted journal entries go to Trash, where you can permanently delete them. Settings also lets you clear your journal and separately remove recovery copies. Exported backup files remain wherever you saved them and aren’t encrypted by Moodimo." },
  { question: "Is Moodimo a mental health treatment?", answer: "Moodimo is a tool for personal reflection and everyday organization. Its insights describe what you record; they don’t diagnose conditions or provide treatment. Use it in whatever way feels helpful alongside the people and professional support you trust." },
];

export default function Home() {
  return <main id="main">
    <section className="shell hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <span className="hero-eyebrow"><span className="status-dot" />A LITTLE SPACE FOR YOUR WHOLE SELF</span>
        <h1 id="hero-heading">Every feeling<br />has a place<br /><em>here.</em><span className="title-flower" aria-hidden="true">✳</span></h1>
        <p>Your moods. Your little moments. Your everyday life.<br className="desktop-break" /> A kinder way to check in, find your rhythm, and<br className="desktop-break" /> feel a little closer to yourself.</p>
        <div className="hero-actions"><a href="#explore" className="button button-primary">Find your little space<ArrowUpRight size={18} /></a><a href="#features" className="hero-secondary" aria-label="Discover Moodimo’s features"><ArrowDown size={19} /></a></div>
        <div className="platform-note"><Smartphone size={15} /><Tablet size={16} /><Laptop size={18} /><span>Coming soon to iPhone, iPad & Mac</span></div>
      </div>
      <MoodPreview />
    </section>

    <div className="values-strip"><div className="shell"><span><LockKeyhole />Private by nature</span><span><WifiOff />At home, offline</span><span><Heart />Every feeling welcome</span><span><Sprout />Always at your pace</span></div></div>

    <section className="shell intro-section" id="features" aria-labelledby="intro-heading">
      <div className="section-heading centered"><span className="eyebrow">LESS PRESSURE. MORE PRESENCE.</span><h2 id="intro-heading">Life isn’t one feeling.<br />Make room for <em>all of it.</em></h2><p>The bright days. The in-between days. The “I’m not sure” days.<br />You don’t need the right words, a perfect routine, or a fresh start.</p></div>
      <div className="benefit-grid">
        <article className="benefit-card"><div className="benefit-art feeling-art"><Image src="/images/moods/sad.webp" alt="" width={88} height={88} /><Image src="/images/moods/content.webp" alt="" width={120} height={120} /><Image src="/images/moods/joyful.webp" alt="" width={90} height={90} /><span className="tiny-star">✦</span></div><span className="card-number">01 / CHECK IN</span><h3>A moment to notice.</h3><p>Put a feeling to your day. Add the activities, energy, and sleep that give it a little more context.</p></article>
        <article className="benefit-card"><div className="benefit-art moment-art"><span className="mini-note handwritten">Today’s little joy:<br />sun on my face. <SunDoodle /></span><span className="note-leaf"><LeafDoodle /></span></div><span className="card-number">02 / MAKE SPACE</span><h3>Your day, in your own way.</h3><p>Write a few words, save a little memory, or draw what you can’t quite say. There’s no right way to journal.</p></article>
        <article className="benefit-card"><div className="benefit-art growth-art"><span className="growth-line" /><span className="growth-step step-one"><Check size={22} /></span><span className="growth-step step-two"><Check size={22} /></span><span className="growth-step step-three"><Sprout size={30} /></span><span className="handwritten">little by little</span></div><span className="card-number">03 / FIND YOUR RHYTHM</span><h3>Small steps count, too.</h3><p>Build gentle habits and meaningful goals. Keep the things that matter close, at a pace that feels like yours.</p></article>
      </div>
    </section>

    <section className="explore-section" id="explore" aria-labelledby="explore-heading"><div className="shell"><div className="section-heading explore-heading"><div><span className="eyebrow">A LITTLE LOOK INSIDE</span><h2 id="explore-heading">Many little things.<br /><em>One space for you.</em></h2></div><p>A journal, a gentle nudge, a place to begin.<br />Thoughtfully connected, beautifully yours.</p></div><Explorer /></div></section>

    <section className="shell extras-section" aria-labelledby="extras-heading"><div className="extras-intro"><span className="eyebrow">THOUGHTFUL BY DESIGN</span><h2 id="extras-heading">It’s the little<br /><em>things, really.</em></h2><p>The kind of details that make a space feel like your own.</p><Flower2 size={57} strokeWidth={1} className="extras-flower" /></div><div className="extras-grid">{[
      { icon: Palette, title: "A little more you", text: "Mood characters, themes, fonts, and a journal canvas you can make your own." },
      { icon: Bell, title: "A gentle nudge", text: "Optional reminders with your own schedule, quiet hours, and private notification text." },
      { icon: Wind, title: "Room to breathe", text: "A short, guided breathing pause whenever you’d like a moment to settle." },
      { icon: Cloud, title: "At home on your devices", text: "Save on your device first. Choose optional iCloud sync to carry your journal with you." },
    ].map(item => <article key={item.title}><item.icon size={25} strokeWidth={1.4} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section className="privacy-section" id="privacy" aria-labelledby="privacy-heading"><div className="shell privacy-inner"><div className="privacy-illustration" aria-hidden="true"><div className="privacy-orbit" /><span className="privacy-star star-one">✧</span><span className="privacy-star star-two">✦</span><div className="privacy-envelope"><span className="envelope-letter"><Heart size={43} strokeWidth={1.1} /><span>just for you.</span></span><div className="envelope-front" /><span className="envelope-seal"><LockKeyhole size={24} /></span></div><span className="handwritten privacy-note">Your inner world.<br />Yours to keep.</span></div><div className="privacy-copy"><span className="eyebrow">PRIVATE IS A PROMISE</span><h2 id="privacy-heading">Some things<br />are just <em>for you.</em></h2><p>Your thoughts aren’t a product. Your journal lives on your device, with no Moodimo account needed. No ads. No tracking SDKs. No audience to perform for.</p><ul><li><ShieldCheck size={19} />Your journal saves locally, first</li><li><LockKeyhole size={19} />Optional app lock for your personal space</li><li><Cloud size={19} />iCloud sync only when you choose it</li></ul><Link href="/privacy/" className="text-link">Read our privacy promise<ArrowUpRight size={17} /></Link></div></div></section>

    <section className="shell faq-section" id="faq" aria-labelledby="faq-heading"><div className="faq-intro"><span className="eyebrow">A FEW THINGS YOU MIGHT WONDER</span><h2 id="faq-heading">A little<br /><em>more clarity.</em></h2><p>Still curious about something?<br /><Link href="/support/">Find help here <ArrowUpRight size={14} /></Link></p><span className="faq-flower" aria-hidden="true">✳</span></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} name="questions" open={index === 0}><summary>{faq.question}<span className="faq-plus" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></section>

    <section className="shell" id="coming-soon" aria-labelledby="launch-heading"><div className="launch-card"><div className="launch-text"><span className="eyebrow">A KINDER EVERYDAY IS ON ITS WAY</span><h2 id="launch-heading">A little space.<br />A little more <em>you.</em></h2><p>Bring your whole self. We’ll make room.</p>{site.appStoreUrl ? <a href={launchHref} className="button button-primary">Get Moodimo<ArrowUpRight size={17} /></a> : <div className="coming-soon-pill"><span className="status-dot" />Coming soon to the App Store</div>}<div className="launch-platforms"><span><Smartphone size={15} />iPhone</span><span><Tablet size={15} />iPad</span><span><Laptop size={17} />Mac</span></div></div><div className="launch-art"><Image src="/images/garden.webp" alt="Moodimo’s sprout companion, waiting in a peaceful little garden" width={768} height={512} sizes="(max-width: 700px) 90vw, 550px" /><span className="handwritten">see you in your little space.</span></div></div></section>
    <div className="closing-note"><BookHeart size={16} /><span>For the days that feel like everything. And the days that don’t.</span><Smile size={16} /></div>
  </main>;
}

function SunDoodle() { return <svg width="33" height="33" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.6" /><path d="M20 2v5m0 26v5M2 20h5m26 0h5M7 7l4 4m18 18 4 4M7 33l4-4M29 11l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>; }
function LeafDoodle() { return <svg viewBox="0 0 60 70" width="60" height="70" fill="none" aria-hidden="true"><path d="M16 62C10 27 37 14 49 7c7 28-3 44-28 42m-4 12 22-35" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>; }
