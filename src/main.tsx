import React from 'react';
import { createRoot } from 'react-dom/client';
import { personal, experience, projects, writing } from './content/site';
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
          <p>I’m an Economics undergraduate at Forman Christian College University in Lahore, with a minor in Political Science. My research interests include development economics, education, gender, labour markets, and public policy.</p>
          <p>I’m particularly interested in how household circumstances, social norms, and public institutions shape access to opportunity.</p>
          <p className="home-links"><a href={`mailto:${personal.email}`}>Email</a><a href="#cv">CV</a><a href="#contact">Contact Me</a></p>
          </div>
          {personal.portrait && <img className="portrait" src={personal.portrait} alt="Syeda Mariam Naqvi" />}
        </section>
        <div className="content-grid">
          <div className="main-column">
            <section aria-labelledby="research-title">
              <h2 id="research-title">Research & projects</h2>
              <ol className="research-list">
                {projects.slice(0, 3).map(project => (
                  <li key={project.title}>
                    <h3>{project.title}</h3>
                    <p><em>{project.type}</em></p>
                    <p>{project.question}</p>
                    <p>{project.data}</p>
                  </li>
                ))}
                {writing.map(item => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p><em>{item.status}</em></p>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section aria-labelledby="beyond-title">
              <h2 id="beyond-title">Beyond research</h2>
              <p>Outside my academic work, I enjoy reading and photography. They give me other ways to explore ideas, notice details, and look at the world around me.</p>
            </section>
            <section id="cv" aria-labelledby="cv-title">
              <h2 id="cv-title">CV</h2>
              <p>For my education, research experience, teaching, and technical skills, you can <a href={`${import.meta.env.BASE_URL}Mariam-Naqvi-CV.pdf`} download>download my CV (PDF)</a>.</p>
            </section>
          </div>
          <aside aria-label="Background, affiliations and contact">
            <section aria-labelledby="background-title">
              <h2 id="background-title">Background</h2>
              <ul className="side-list">
                <li>BSc (Hons) Economics, Minor in Political Science, Forman Christian College University. Expected graduation: 2027. CGPA: 3.56/4.00.</li>
                <li>Analytics Intern, Centre for Economic Research in Pakistan (CERP), June–September 2026.</li>
                <li>Research Assistant, DAADRAS, September–December 2025.</li>
                <li>Teaching Assistant, Department of Political Science, FCCU, September 2025–June 2026.</li>
              </ul>
            </section>
            <section aria-labelledby="affiliations-title">
              <h2 id="affiliations-title">Affiliations</h2>
              <ul className="side-list">
                {experience.filter(item => item.organization === 'The Young Economist Initiative').map(item => (
                  <li key={item.organization}>{item.role}, {item.organization}<br />{item.date}</li>
                ))}
                <li>Economics undergraduate, Forman Christian College University</li>
              </ul>
            </section>
            <section id="contact" aria-labelledby="contact-title">
              <h2 id="contact-title">Contact Me</h2>
              <p><a href={`mailto:${personal.email}`}>{personal.email}</a><br />Forman Christian College University<br />{personal.location}</p>
            </section>
          </aside>
        </div>
      </main>
      <footer>
        <div className="footer-inner">
          <div><strong>{personal.name}</strong><p>Economics undergraduate<br />Forman Christian College University</p></div>
          <div><a href={`mailto:${personal.email}`}>{personal.email}</a><p>{personal.location}</p></div>
          <div><a href="#cv">CV</a><p>© {new Date().getFullYear()} {personal.name}</p></div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
