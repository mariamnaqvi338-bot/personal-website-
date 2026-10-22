import React from 'react';
import { createRoot } from 'react-dom/client';
import { personal, experience, skills, leadership } from './content/site';
import './style.css';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header>
        <div className="header-inner">
        <a className="site-name" href="#home">{personal.name}</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact Me</a>
        </nav>
        </div>
      </header>
      <main id="main">
        <section id="home" aria-labelledby="home-title">
          <div className="introduction">
          <h1 id="home-title">{personal.name}</h1>
          <p className="role">Economics undergraduate<br />Forman Christian College University, Lahore</p>
          <p>I’m an Economics undergraduate at Forman Christian College University in Lahore, with a minor in Political Science. I expect to graduate in 2027.</p>
          <p>My interests include development economics, education, gender, labour markets, and public policy. I’m particularly interested in how household circumstances, social norms, and public institutions shape access to opportunity.</p>
          <p>My experience includes research and evaluation at the Centre for Economic Research in Pakistan, independent fieldwork on girls’ education in Chandrai, and research and teaching assistance.</p>
          <p>Outside my academic work, I enjoy reading and photography.</p>
          <p className="home-links"><a href={`mailto:${personal.email}`}>Email</a><a href="#cv">CV</a><a href="#contact">Contact Me</a></p>
          </div>
          {personal.portrait && <img className="portrait" src={personal.portrait} alt="Syeda Mariam Naqvi" />}
        </section>
        <div className="content-grid">
        <section id="cv" aria-labelledby="cv-title">
          <h2 id="cv-title">CV</h2>
          <p><a href={`${import.meta.env.BASE_URL}Mariam-Naqvi-CV.pdf`} download>Download my CV (PDF)</a></p>
          <h3>Education</h3>
          <p><strong>Forman Christian College University</strong><br />BSc (Hons) Economics, Minor in Political Science<br />2023–2027 (expected) · CGPA: 3.56/4.00</p>
          <h3>Experience</h3>
          {experience.map(item => (
            <article key={item.organization}>
              <h4>{item.role} — {item.organization}</h4>
              <p className="date">{item.date}</p>
              <p>{item.description}</p>
            </article>
          ))}
          <h3>Skills</h3>
          <p>{skills.join('; ')}.</p>
          <h3>Leadership & activities</h3>
          <ul>{leadership.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact Me</h2>
          <p>You can reach me at <a href={`mailto:${personal.email}`}>{personal.email}</a>.</p>
          <p>{personal.location}</p>
        </section>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
