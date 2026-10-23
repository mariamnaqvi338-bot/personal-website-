import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { personal, links, personalNotes, selectedResearch, experience, skills, leadership, photography } from './content/site';
import { about, graphicWork, currentProjects, reflections } from './content/portfolio';
import './style.css';

const navigation = [['/', 'About Me'], ['/graphics', 'Graphics & Postcards'], ['/reflections', 'Reflections'], ['/photography', 'Photography'], ['/cv', 'CV'], ['/projects', 'Projects'], ['/current-projects', 'Current Projects'], ['/contact', 'Contact']] as const;
const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
function PageHeading({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return <div className="page-heading"><p className="label">{index} / A PERSONAL COLLECTION</p><h1>{title}</h1><p className="subtitle">{subtitle}</p></div>;
}
function ContentsLabel({ children }: { children: React.ReactNode }) { return <div className="contents-label"><span>Contents</span><span className="dotted-line"/><span>{children}</span></div>; }
function About() {
  return <><div className="about-heading"><p className="label">LAHORE, PAKISTAN</p><h1>Syeda Mariam<br /><em>Naqvi</em></h1><p className="subtitle">A little about me.</p></div><div className="about-copy">{personal.portrait && <img className="portrait" src={personal.portrait} alt="Syeda Mariam Naqvi"/>}{about.map(p => <p key={p}>{p}</p>)}<p className="personal-thought">{personalNotes.reading}</p></div></>;
}
function Graphics() {
  return <><PageHeading index="I" title="Graphics & postcards" subtitle="Things made to be seen, held, and sent."/><ContentsLabel>GRAPHIC WORK</ContentsLabel>{graphicWork.map((item, i) => <article className="entry" key={item.title}><span className="entry-number">{roman[i] ?? i + 1}</span><div><h2>{item.title}</h2><p>{item.description}</p>{item.images.length > 0 && <div className="image-grid">{item.images.map(image => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy"/>{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}</div>}<p className="quiet-note">Designs and further details will be added to this collection.</p></div><span className="entry-meta">{item.category}</span></article>)}</>;
}
function Reflections() {
  return <><PageHeading index="II" title="Reflections" subtitle="Thoughts worked out on the page."/><ContentsLabel>{reflections.length ? `${reflections.length} ENTRIES` : 'AN OPEN NOTEBOOK'}</ContentsLabel>{reflections.length ? reflections.map((item,i) => <article className="entry" key={item.slug}><span className="entry-number">{roman[i] ?? i+1}</span><div><h2><Link to={`/reflections/${item.slug}`}>{item.title}</Link></h2><p>{item.excerpt}</p></div><div className="entry-meta">{item.date && <span>{item.date}</span>}<Link to={`/reflections/${item.slug}`}>Read →</Link></div></article>) : <div className="empty-state"><h2>A space for my writing.</h2><p>Reflections will appear here as I add them.</p></div>}</>;
}
function Reflection() { const { pathname } = useLocation(); const item = reflections.find(r => `/reflections/${r.slug}` === pathname); return item ? <><Link className="label back-link" to="/reflections">← All reflections</Link><PageHeading index="II" title={item.title} subtitle={item.date ?? 'A reflection'}/><article className="reading-copy">{item.paragraphs.map((p,i) => <p key={i}>{p}</p>)}</article></> : <NotFound/>; }
function Photography() {
  return <><PageHeading index="III" title="Photography" subtitle="People, places, and pieces of life."/><div className="reading-copy"><p>{personalNotes.photography}</p><a className="underlined" href={links.photography}>View my photography on VSCO ↗</a></div>{photography.length > 0 && <div className="image-grid">{photography.map(photo => <figure key={photo.src}><a href={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy"/></a><figcaption>{photo.title}{photo.caption && ` — ${photo.caption}`}</figcaption></figure>)}</div>}</>;
}
function CV() {
  return <><PageHeading index="IV" title="Curriculum vitae" subtitle="Education, research, and experience."/><p className="download"><a className="underlined" href={links.cv}>Download my CV (PDF) ↓</a></p><div className="cv-copy"><section><h2>Education</h2><h3>Forman Christian College University</h3><p>BSc (Hons) Economics · Minor in Political Science<br/>2023–2027 (expected) · CGPA: 3.56/4.00</p></section><section><h2>Research & teaching experience</h2>{experience.map(item => <article key={item.organization}><h3>{item.organization}</h3><p className="cv-meta">{item.role} · {item.date}</p><p>{item.description}</p><ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul></article>)}</section><section><h2>Selected projects & writing</h2>{selectedResearch.slice(1).map(item => <article key={item.title}><h3>{item.title}</h3><p className="cv-meta">{item.label}</p><p>{item.description}</p></article>)}</section><section><h2>Technical skills</h2><p>{skills.join('; ')}.</p></section><section><h2>Honours & activities</h2><p>Vice Rector’s List · Forman Christian College</p><ul>{leadership.map(item => <li key={item}>{item}</li>)}</ul></section></div></>;
}
function Projects() {
  return <><PageHeading index="V" title="Projects" subtitle="Research, questions, and work in practice."/><ContentsLabel>{selectedResearch.length} SELECTED ENTRIES</ContentsLabel>{selectedResearch.map((item,i) => <article className="entry" key={item.title}><span className="entry-number">{roman[i] ?? i+1}</span><div><h2>{item.title}</h2><p>{item.description}</p></div><span className="entry-meta">{item.label}</span></article>)}</>;
}
function CurrentProjects() {
  return <><PageHeading index="VI" title="Current projects" subtitle="Work still taking shape."/><ContentsLabel>IN PROGRESS</ContentsLabel>{currentProjects.map((item,i) => <article className="entry" key={item.title}><span className="entry-number">{roman[i] ?? i+1}</span><div><h2>{item.title}</h2><p>{item.description}</p></div><span className="entry-meta">{item.category}</span></article>)}</>;
}
function Contact() {
  return <><PageHeading index="VII" title="Contact me" subtitle="For a conversation, a question, or something we could make together."/><div className="reading-copy"><p>I’m happy to hear from you about research, writing, photography, design, or collaboration.</p><p><a className="contact-email" href={`mailto:${personal.email}`}>{personal.email}</a></p><p className="quiet-note">{personal.location}</p><div className="contact-links"><a href={links.linkedin}>LinkedIn ↗</a><a href={links.github}>GitHub ↗</a><a href={links.photography}>Photography ↗</a></div></div></>;
}
function NotFound(){ return <div className="empty-state"><h1>Page not found.</h1><Link className="underlined" to="/">Back to About Me</Link></div>; }
function App() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0,0); const page = navigation.find(([path]) => path === location.pathname); document.title = `${page?.[1] ?? 'Reflections'} — ${personal.name}`; const main = document.getElementById('main'); if(main && location.key !== 'default') main.focus({preventScroll:true}); }, [location]);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><Link className="wordmark" to="/">Syeda Mariam Naqvi</Link><nav aria-label="Main navigation">{navigation.map(([path,label]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}</nav></header><main id="main" tabIndex={-1}><Routes><Route path="/" element={<About/>}/><Route path="/graphics" element={<Graphics/>}/><Route path="/reflections" element={<Reflections/>}/><Route path="/reflections/:slug" element={<Reflection/>}/><Route path="/photography" element={<Photography/>}/><Route path="/cv" element={<CV/>}/><Route path="/projects" element={<Projects/>}/><Route path="/current-projects" element={<CurrentProjects/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><footer><span>A personal collection by Syeda Mariam Naqvi</span><span>© {new Date().getFullYear()}</span></footer></>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
