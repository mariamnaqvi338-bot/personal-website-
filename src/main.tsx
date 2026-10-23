import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { personal, links, personalNotes, selectedResearch, experience, skills, leadership, photography } from './content/site';
import { about, aboutHeading, graphicWork, reflections } from './content/portfolio';
import './style.css';

const navigation = [['/', 'About Me'], ['/graphics', 'Graphics & Postcards'], ['/reflections', 'Reflections'], ['/photography', 'Photography'], ['/cv', 'CV'], ['/projects', 'Projects'], ['/contact', 'Contact']] as const;
const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
function PageHeading({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return <div className="page-heading"><p className="label">{index} / A PERSONAL COLLECTION</p><h1>{title}</h1><p className="subtitle" dir="auto">{subtitle}</p></div>;
}
function ContentsLabel({ children }: { children: React.ReactNode }) { return <div className="contents-label"><span>Contents</span><span className="dotted-line"/><span>{children}</span></div>; }
function About() {
  return <div className="about-layout"><aside className="about-profile">{personal.portrait && <figure className="profile-photo"><img src={personal.portrait} width="1170" height="1341" alt="Syeda Mariam Naqvi standing beneath a tree" fetchPriority="high"/></figure>}<div className="portrait-signature"><h1>syeda mariam naqvi</h1></div><svg className="portrait-arrow" viewBox="0 0 340 440" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M245 426 C292 426 312 398 290 379 C265 359 257 393 288 355 C320 319 257 334 273 296 C287 262 236 271 199 238 L180 219"/><path className="arrow-tip" d="M177 234 L174 212 L196 220 Z"/></svg></aside><section className="about-story" aria-labelledby="about-title"><h2 id="about-title">{aboutHeading}</h2>{about.map((p,i) => <p key={p} className={i===0 ? 'opening-line' : undefined}><InlineText text={p}/></p>)}</section></div>;
}
function Graphics() {
  return <><PageHeading index="I" title="Graphics & postcards" subtitle="Things made to be seen, held, and sent."/><ContentsLabel>GRAPHIC WORK</ContentsLabel>{graphicWork.map((item, i) => <article className="entry" key={item.title}><span className="entry-number">{roman[i] ?? i + 1}</span><div><h2>{item.title}</h2><p>{item.description}</p>{item.images.length > 0 && <div className="image-grid">{item.images.map(image => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy"/>{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}</div>}<p className="quiet-note">Designs and further details will be added to this collection.</p></div><span className="entry-meta">{item.category}</span></article>)}</>;
}
function Reflections() {
  return <><PageHeading index="II" title="Reflections & writings" subtitle="On memory, belonging, faith, and the things that stay."/><p className="archive-intro">A collection of personal essays, poems, and questions I’m still sitting with.</p><ContentsLabel>{reflections.length} PIECES</ContentsLabel><ol className="reflection-archive">{reflections.map((item,i) => <li className="entry" key={item.slug}><span className="entry-number" aria-hidden="true">{i+1}</span><div><h2><Link to={`/reflections/${item.slug}`}>{item.title}</Link></h2><p>{item.excerpt}</p></div><div className="entry-meta"><span>Reflections & writings</span><Link to={`/reflections/${item.slug}`} aria-label={`Read ${item.title}`}>Read →</Link></div></li>)}</ol></>;
}
function InlineText({text}: {text:string}) {
  return <>{text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part,i) => part.startsWith('***') && part.endsWith('***') ? <strong key={i}><em>{part.slice(3,-3)}</em></strong> : part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2,-2)}</strong> : part.startsWith('*') && part.endsWith('*') ? <em key={i}>{part.slice(1,-1)}</em> : <React.Fragment key={i}>{part}</React.Fragment>)}</>;
}
function WritingImage({src,alt}:{src:string;alt:string}) {
  const [failed,setFailed] = useState(false);
  return <figure className="writing-image">{failed ? <a className="image-fallback" href={src}>View the accompanying image ↗</a> : <a href={src}><img src={src} alt={alt} loading="lazy" onError={()=>setFailed(true)}/></a>}</figure>;
}
function Reflection() {
  const {pathname} = useLocation();
  const index = reflections.findIndex(r => `/reflections/${r.slug}` === pathname);
  const item = reflections[index];
  if(!item) return <NotFound/>;
  const previous = reflections[index-1];
  const next = reflections[index+1];
  return <><Link className="label back-link" to="/reflections">← All reflections & writings</Link><div className="article-heading"><PageHeading index={String(index+1).padStart(2,'0')} title={item.title} subtitle={item.subtitle ?? ''}/><p className="article-byline">By <a href="https://substack.com/@mariam338">syeda mariam</a></p></div><article className="reading-copy reflection-body" aria-label={item.title}>{item.body.split(/\n\n+/).map((block,i) => {
    const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if(image) return <WritingImage key={`${item.slug}-${i}`} alt={image[1]} src={image[2]}/>;
    return <p key={i} dir="auto">{block.split('\n').map((line,j)=><React.Fragment key={j}>{j>0 && <br/>}<bdi dir="auto"><InlineText text={line}/></bdi></React.Fragment>)}</p>;
  })}</article><nav className="reading-navigation" aria-label="Other writings">{previous ? <Link to={`/reflections/${previous.slug}`}><span>← Previous piece</span><strong>{previous.title}</strong></Link> : <Link to="/reflections"><span>← Return to the collection</span><strong>All reflections & writings</strong></Link>}{next && <Link to={`/reflections/${next.slug}`}><span>Next piece →</span><strong>{next.title}</strong></Link>}</nav></>;
}
function Photography() {
  return <><PageHeading index="III" title="Photography" subtitle="People, places, and pieces of life."/><div className="reading-copy"><p>{personalNotes.photography}</p></div>{photography.length > 0 && <div className="photo-tiles" aria-label="Selected photographs">{photography.map(photo => <figure key={photo.src}><a href={photo.src} aria-label={`View photograph: ${photo.alt}`}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async"/></a>{(photo.title || photo.caption) && <figcaption>{photo.title}{photo.title && photo.caption && ' — '}{photo.caption}</figcaption>}</figure>)}</div>}<p className="vsco-invitation">To view more of my photography, <a className="underlined" href={links.vsco}>visit VSCO ↗</a>.</p><p className="vsco-invitation"><a className="underlined" href={links.photography}>Photography portfolio ↗</a></p></>;
}
function CV() {
  return <><PageHeading index="IV" title="Curriculum vitae" subtitle="Education, research, and experience."/><p className="download"><a className="underlined" href={links.cv}>Download my CV (PDF) ↓</a></p><div className="cv-copy"><section><h2>EDUCATION</h2><p>Forman Christian College University</p><p>BSc (Hons) Economics · Minor in Political Science<br/>2023–2027 (expected) · CGPA: 3.56/4.00</p></section><section><h2>EXPERIENCE</h2>{experience.map(item => <article key={item.organization}><p><strong>{item.organization}</strong></p><p className="cv-meta"><strong>{item.role} · {item.date}</strong></p><p>{item.description}</p><ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul></article>)}</section><section><h2>PROJECTS</h2>{selectedResearch.slice(1).map(item => <article key={item.title}><p>{item.title === 'Barriers to girls’ education in Chandrai' ? item.title : <strong>{item.title}</strong>}</p><p className="cv-meta">{item.title === 'Barriers to girls’ education in Chandrai' ? item.label : <strong>{item.label}</strong>}</p><p>{item.description}</p></article>)}</section><section><h2>TECHNICAL SKILLS</h2><p>{skills.join('; ')}.</p></section><section><h2>HONOURS AND ACTIVITIES</h2><p>Vice Rector’s List · Forman Christian College</p><ul>{leadership.map(item => <li key={item}>{item}</li>)}</ul></section></div></>;
}
function Projects() {
  return <><PageHeading index="V" title="Projects" subtitle="Research, questions, and work in practice."/><ContentsLabel>{selectedResearch.length} SELECTED ENTRIES</ContentsLabel>{selectedResearch.map((item,i) => <article className="entry" key={item.title}><span className="entry-number">{roman[i] ?? i+1}</span><div><h2>{item.title}</h2><p>{item.description}</p></div><span className="entry-meta">{item.label}</span></article>)}</>;
}
function Contact() {
  return <><PageHeading index="VI" title="Contact me" subtitle="For a conversation, a question, or something we could make together."/><div className="reading-copy"><p>I’m happy to hear from you about research, writing, photography, design, or collaboration.</p><p><a className="contact-email" href={`mailto:${personal.email}`}>{personal.email}</a></p><p className="quiet-note">{personal.location}</p><div className="contact-links"><a href={links.linkedin}>LinkedIn ↗</a><a href={links.github}>GitHub ↗</a><a href={links.photography}>Photography portfolio ↗</a><a href={links.vsco}>VSCO ↗</a></div></div></>;
}
function NotFound(){ return <div className="empty-state"><h1>Page not found.</h1><Link className="underlined" to="/">Back to About Me</Link></div>; }
function App() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0,0); const page = navigation.find(([path]) => path === location.pathname); const piece = reflections.find(item => `/reflections/${item.slug}` === location.pathname); document.title = `${piece?.title ?? page?.[1] ?? 'Page not found'} — ${personal.name}`; const main = document.getElementById('main'); if(main && location.key !== 'default') main.focus({preventScroll:true}); }, [location]);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><Link className="wordmark" to="/">Syeda Mariam Naqvi</Link><nav aria-label="Main navigation">{navigation.map(([path,label]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}</nav></header><main id="main" className={location.pathname === '/' ? 'about-page' : `${location.pathname.split('/')[1]}-page`} tabIndex={-1}><Routes><Route path="/" element={<About/>}/><Route path="/graphics" element={<Graphics/>}/><Route path="/reflections" element={<Reflections/>}/><Route path="/reflections/:slug" element={<Reflection/>}/><Route path="/photography" element={<Photography/>}/><Route path="/cv" element={<CV/>}/><Route path="/projects" element={<Projects/>}/><Route path="/current-projects" element={<Navigate to="/projects" replace/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><footer><span>Made by Syeda Mariam Naqvi</span><span>© {new Date().getFullYear()} Syeda Mariam Naqvi. All rights reserved.</span></footer></>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
