"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Plus, Sprout, BookOpen, CheckCheck, Flag, Smile, BatteryFull, Signal, Wifi } from "lucide-react";

const moods = [
  { name: "Sad", file: "sad", message: "You don’t have to put a bright side on everything.", color: "#dbe2ee" },
  { name: "Worried", file: "worried", message: "Take it one small moment at a time.", color: "#eee0cb" },
  { name: "Okay", file: "okay", message: "An ordinary day is welcome here, too.", color: "#e9e6bb" },
  { name: "Content", file: "content", message: "A little room to appreciate right now.", color: "#dce7cd" },
  { name: "Joyful", file: "joyful", message: "Here’s to the little things that light you up.", color: "#f6dfab" },
];

export function MoodPreview() {
  const [selected, setSelected] = useState(3);
  const mood = moods[selected];
  return <div className="hero-art">
    <div className="hero-backdrop"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-dot" /></div>
    <div className="handwritten hero-note">a little more you,<br />a little less noise.<svg viewBox="0 0 77 49" fill="none" aria-hidden="true"><path d="M72 3C60 36 22 5 10 40m-7-12 6 16 16-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
    <div className="phone">
      <div className="phone-top"><span>9:41</span><span className="dynamic-island" /><span className="flex items-center gap-1"><Signal size={12} /><Wifi size={12} /><BatteryFull size={17} /></span></div>
      <div className="phone-content">
        <div className="phone-heading"><div><span className="tiny-label">A FRESH LITTLE DAY</span><h3>Hello, you <span>☀</span></h3></div><span className="avatar"><Sprout size={19} /></span></div>
        <div className="garden-preview"><Image src="/images/garden.webp" alt="Moodimo’s little sprout companion in a sunlit garden" width={768} height={512} priority sizes="280px" /><div><span>Come as you are.</span><p>This moment is yours.</p></div></div>
        <div className="phone-mood-panel">
          <div className="flex items-center justify-between"><h4>How are you feeling?</h4><span className="tiny-sparkle">✳</span></div>
          <div className="mood-options" aria-label="Try a mood check-in">
            {moods.map((item, index) => <button key={item.name} onClick={() => setSelected(index)} aria-pressed={selected === index} className={`mood-option ${selected === index ? "selected" : ""}`}>
              <Image src={`/images/moods/${item.file}.webp`} alt="" width={56} height={56} sizes="48px" /><span>{item.name}</span>
            </button>)}
          </div>
          <div className="mood-answer" aria-live="polite" style={{ backgroundColor: mood.color }}><span>{mood.name}</span><p>{mood.message}</p></div>
        </div>
        <div className="phone-moment"><span className="moment-icon"><BookOpen size={17} /></span><div><strong>The little things</strong><p>A walk. A warm cup. A fresh start.</p></div><Plus size={17} /></div>
      </div>
      <div className="phone-dock" aria-hidden="true"><span className="active"><Smile size={17} />Moods</span><span><CheckCheck size={17} />Habits</span><span><BookOpen size={17} />Journal</span><span><Flag size={17} />Goals</span></div>
      <div className="home-indicator" />
    </div>
    <div className="floating-card"><span className="floating-icon"><Sprout size={22} /></span><div><strong>Small steps. Your pace.</strong><span>A little kindness goes a long way.</span></div></div>
    <div className="hero-flower" aria-hidden="true">✳</div>
    <div className="preview-caption"><span className="status-dot" />Interactive preview · tap a feeling<ArrowUpRight size={13} /></div>
  </div>;
}
