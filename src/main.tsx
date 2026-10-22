import React from 'react';
import { createRoot } from 'react-dom/client';
import { personal, links, selectedResearch, personalNotes } from './content/site';
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
          <a href="#research">Research</a>
          <a href="#background">Background</a>
          <a href="#contact">Contact</a>
        </nav>
        </div>
      </header>
      <main id="main">
        <section id="home" aria-labelledby="home-title">
          <div className="hero-inner">
          <div className="introduction">
          <h1 id="home-title">{personal.name}</h1>
          <p className="role">Undergraduate Student in Economics<br />Forman Christian College University, Lahore</p>
          <p>I am pursuing a BSc (Hons) in Economics with a minor in Political Science at Forman Christian College University, Lahore, with expected graduation in 2027. My research interests include development economics, education policy, gender, labour economics, and applied research.</p>
          <p>I am particularly interested in the role of household economic conditions, social norms, and public institutions in shaping educational access and economic opportunity.</p>
          <p className="home-links"><a href={`mailto:${personal.email}`}>Email</a><a href={links.cv}>CV</a></p>
          <p className="profile-links"><a href={links.github}>GitHub</a><a href={links.linkedin}>LinkedIn</a></p>
          </div>
          {personal.portrait && <img className="portrait" src={personal.portrait} alt="Syeda Mariam Naqvi" />}
          </div>
        </section>
        <div className="content-grid">
          <div className="main-column">
            <section id="research" aria-labelledby="research-title">
              <h2 id="research-title">Selected research</h2>
              <ol className="research-list">
                {selectedResearch.map(item => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p><em>{item.label}</em></p>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section aria-labelledby="beyond-title">
              <h2 id="beyond-title">Beyond research</h2>
              <p>{personalNotes.photography}</p>
              <p><a href={links.photography}>Photography</a></p>
              <p className="personal-note">{personalNotes.reading}</p>
            </section>
            <section id="cv" aria-labelledby="cv-title">
              <h2 id="cv-title">CV</h2>
              <p>For my education, research experience, teaching, and technical skills, you can <a href={links.cv}>download my CV (PDF)</a>.</p>
            </section>
          </div>
          <aside aria-label="Background, affiliations and contact">
            <section id="background" aria-labelledby="background-title">
              <h2 id="background-title">Background</h2>
              <ul className="side-list">
                <li>BSc (Hons) Economics, Minor in Political Science, Forman Christian College University. Expected graduation: 2027. CGPA: 3.56/4.00.</li>
                <li>Analytics Intern, Centre for Economic Research in Pakistan (CERP), June–September 2026.</li>
                <li>Teaching Assistant, Department of Political Science, FCCU, September 2025–June 2026.</li>
              </ul>
            </section>
            <section aria-labelledby="affiliations-title">
              <h2 id="affiliations-title">Affiliations</h2>
              <ul className="side-list">
                <li>Co-Founder & Researcher, Young Economists Initiative<br />July 2025–present</li>
                <li>Undergraduate Student in Economics, Forman Christian College University</li>
              </ul>
            </section>
            <section id="contact" aria-labelledby="contact-title">
              <h2 id="contact-title">Contact</h2>
              <p><a href={`mailto:${personal.email}`}>{personal.email}</a><br />Forman Christian College University<br />{personal.location}</p>
            </section>
          </aside>
        </div>
      </main>
      <footer>
        <div className="footer-inner">
          <div><strong>{personal.name}</strong><p>Undergraduate Student in Economics<br />Forman Christian College University</p></div>
          <div><a href={`mailto:${personal.email}`}>{personal.email}</a><p>{personal.location}</p></div>
          <div><a href={links.cv}>CV</a><p>© {new Date().getFullYear()} {personal.name}</p></div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
