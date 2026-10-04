"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Check, CheckCheck, Flag, BarChart3, ListTodo, Mic, Sun, Leaf, CloudSun, Coffee } from "lucide-react";

const features = [
  { id: "journal", name: "Your journal", icon: BookOpen, eyebrow: "MORE THAN WORDS", title: "Keep the feeling.\nAnd the little details.", description: "Some moments need a sentence. Others need a photo, a voice note, or a little doodle. Give your days a home that feels like you.", points: ["Write, draw, add photos or record your voice", "Arrange moments on your own journal canvas", "Revisit, edit, or pick up a saved draft"] },
  { id: "habits", name: "Gentle habits", icon: CheckCheck, eyebrow: "SMALL THINGS ADD UP", title: "A rhythm that\nworks for you.", description: "Drink a little water. Step outside. Read a few pages. Make space for the things that matter, with flexible habits that fit your actual days.", points: ["Track check-offs, counts, and timed habits", "Choose your schedule and adjust your goals", "Skip a day or undo a check-in when you need to"] },
  { id: "todos", name: "Everyday to-dos", icon: ListTodo, eyebrow: "A LITTLE LESS ON YOUR MIND", title: "Make room\nfor what matters.", description: "Give your mental checklist somewhere to land. Organize the everyday into projects and small, manageable tasks, then take them one at a time.", points: ["Keep tasks together with projects and tags", "Plan with dates, reminders, and repeat schedules", "Settle into a task with the focus timer"] },
  { id: "goals", name: "Meaningful goals", icon: Flag, eyebrow: "YOUR OWN KIND OF PROGRESS", title: "Big hopes.\nLittle beginnings.", description: "From this week’s intention to something you’ve dreamed about for years. Keep the bigger picture close and make progress in your own way.", points: ["Set weekly, monthly, yearly, and longer-term goals", "Choose personal rewards that mean something to you", "Keep a record of the progress you make"] },
  { id: "insights", name: "Gentle insights", icon: BarChart3, eyebrow: "GET TO KNOW YOUR DAYS", title: "A little perspective\ncan mean a lot.", description: "Look back at the moods, activities, habits, and sleep you’ve recorded. Notice your own patterns, without turning every feeling into a score to beat.", points: ["Explore your mood history across days", "See connections with your everyday activities", "Reflect on patterns, without labels or diagnoses"] },
];

function JournalPanel() {
  return <div className="journal-art" aria-label="Example journal entry">
    <div className="journal-paper"><span className="tape" /><div className="journal-date">MONDAY, MAY 18 <span>✧</span></div><h4>A slower kind<br />of morning.</h4><p className="handwritten">Took the long way home.<br />The world felt a little softer.</p><div className="journal-tags"><span><Leaf size={12} />Outside</span><span><Coffee size={12} />Little joys</span></div><div className="audio-note"><Mic size={17} /><span className="audio-wave" aria-hidden="true">▂▅▃▇▆▂▄▇▅▃▆▂▃▇▅▂▅▃▆▂</span><span>0:12</span></div></div>
    <div className="memory-photo"><Image src="/images/garden.webp" alt="A little garden illustration tucked into the example journal" width={260} height={190} sizes="220px" /><span className="handwritten">somewhere peaceful ♡</span></div>
    <Image className="journal-sticker" src="/images/moods/content.webp" alt="" width={85} height={85} />
    <span className="journal-sparkle" aria-hidden="true">✧</span>
  </div>;
}

function HabitPanel() {
  const [done, setDone] = useState([true, false, false]);
  return <div className="mini-app"><span className="tiny-label">A LITTLE EVERY DAY</span><h4>Your gentle rhythm.</h4><p>Monday, May 18</p><div className="habit-days">{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <span key={index} className={index === 0 ? "active" : ""}>{day}<i>{18 + index}</i></span>)}</div>{[{ name: "Step outside", detail: "A little fresh air", icon: Sun }, { name: "Read a few pages", detail: "Make room for a story", icon: BookOpen }, { name: "A moment to pause", detail: "Come back to yourself", icon: Leaf }].map((habit, index) => <button key={habit.name} className={`habit-row ${done[index] ? "done" : ""}`} aria-pressed={done[index]} onClick={() => setDone(done.map((value, i) => i === index ? !value : value))}><span className="habit-icon"><habit.icon size={21} /></span><span><strong>{habit.name}</strong><small>{habit.detail}</small></span><span className="habit-check">{done[index] && <Check size={14} />}</span></button>)}<div className="mini-app-footer" aria-live="polite">{done.filter(Boolean).length} little {done.filter(Boolean).length === 1 ? "moment" : "moments"} for yourself today.</div></div>;
}

function TodoPanel() {
  const [done, setDone] = useState([false, true, false]);
  return <div className="mini-app todo-mini"><span className="tiny-label">ONE THING AT A TIME</span><h4>A little more headspace.</h4><p>Today’s small intentions</p>{["Pick up something fresh", "Water the windowsill plants", "Make time for a walk"].map((task, index) => <button key={task} className={`todo-row ${done[index] ? "done" : ""}`} aria-pressed={done[index]} onClick={() => setDone(done.map((value, i) => i === index ? !value : value))}><span className="habit-check">{done[index] && <Check size={14} />}</span><span>{task}</span></button>)}<div className="focus-example"><span>ROOM TO FOCUS</span><strong>25:00</strong><small>A little time, just for this.</small></div><span className="mini-app-footer">Try checking off an example task.</span></div>;
}

function GoalPanel() {
  return <div className="mini-app goal-mini"><span className="tiny-label">SOMETHING TO LOOK FORWARD TO</span><h4>Grow a little garden.</h4><div className="goal-illustration"><Leaf size={65} strokeWidth={1} /><span>✳</span><SproutIllustration /></div><span className="goal-chip">THIS MONTH</span><p>A few pots. A sunny corner.<br />A small thing to care for.</p><div className="goal-progress"><span /></div><div className="flex justify-between text-xs"><span>3 little steps taken</span><span>5 steps</span></div><div className="mini-app-footer">Progress that means something to you.</div></div>;
}

function SproutIllustration() { return <svg width="64" height="80" viewBox="0 0 64 80" fill="none" aria-hidden="true"><path d="M32 68V25m0 20C8 43 8 20 10 16c21 1 25 12 22 29Zm1-12C34 12 47 8 56 9c2 15-6 26-23 24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M15 57h35l-6 20H21l-6-20Z" fill="#c89976" /></svg>; }

function InsightPanel() {
  return <div className="mini-app insight-mini"><span className="tiny-label">YOUR WEEK, IN FEELINGS</span><h4>Find your own patterns.</h4><p>A little look back</p><div className="insight-chart" aria-label="Illustrative mood chart, not real journal data">{[45, 68, 52, 80, 64, 86, 72].map((height, index) => <div key={index}><span style={{ height: `${height}%` }} /><small>{["M", "T", "W", "T", "F", "S", "S"][index]}</small></div>)}</div><div className="insight-observation"><CloudSun size={27} /><div><strong>What made room for calm?</strong><p>Look back at your outside time,<br />sleep, and everyday moments.</p></div></div><div className="mini-app-footer">Curiosity, without the judgment.</div></div>;
}

export function Explorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const feature = features[active];
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % features.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + features.length) % features.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = features.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabRefs.current[next]?.focus();
  }
  return <>
    <div className="feature-tabs" role="tablist" aria-label="Explore Moodimo features">{features.map((item, index) => <button key={item.id} ref={element => { tabRefs.current[index] = element; }} role="tab" id={`tab-${item.id}`} aria-controls={`panel-${item.id}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => onKeyDown(event, index)}><item.icon size={17} />{item.name}</button>)}</div>
    <div className={`feature-panel panel-${feature.id}`} role="tabpanel" id={`panel-${feature.id}`} aria-labelledby={`tab-${feature.id}`} tabIndex={0} key={feature.id}>
      <div className="feature-panel-copy"><span className="eyebrow">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.description}</p><ul>{feature.points.map(point => <li key={point}><Check size={16} /><span>{point}</span></li>)}</ul><a href="#coming-soon" className="text-link">A little closer to yourself<ArrowUpRight size={17} /></a></div>
      <div className="feature-panel-art">{active === 0 ? <JournalPanel /> : active === 1 ? <HabitPanel /> : active === 2 ? <TodoPanel /> : active === 3 ? <GoalPanel /> : <InsightPanel />}<span className="sample-label">Illustrative preview · example moments</span></div>
    </div>
  </>;
}
