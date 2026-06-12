import "./App.css";

const skillGroups = [
  {
    title: "Frontend",
    description: "Clean interfaces, responsive layouts, and smooth user flows.",
  },
  {
    title: "Core Stack",
    description: "HTML, CSS, JavaScript, React, Git, and GitHub.",
  },
  {
    title: "Focus",
    description: "Building meaningful digital solutions that feel polished and useful.",
  },
];

const skillTags = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"];

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          Ituze Liza
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Aspiring Software Engineer</p>
          <h1>Hi, I&apos;m Ituze Liza.</h1>
          <p className="hero-text">
            I design and build thoughtful web experiences with a focus on clean
            structure, responsive UI, and practical results.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Contact Me
            </a>
            <a className="button button-secondary" href="#skills">
              View Skills
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Highlights">
          <div className="hero-card accent-card">
            <span className="card-label">Currently focused on</span>
            <strong>React landing pages and polished UI builds</strong>
          </div>

          <div className="hero-card stats-grid">
            <div>
              <strong>6</strong>
              <span>core skills</span>
            </div>
            <div>
              <strong>1</strong>
              <span>clear goal: ship better experiences</span>
            </div>
          </div>
        </aside>
      </section>

      <section id="about" className="section about-section">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2>Simple, useful, and built with care.</h2>
        </div>
        <p className="section-copy">
          I am passionate about software engineering, web development, and
          building meaningful digital solutions. I enjoy turning ideas into
          clean, accessible pages that are easy to use and easy to maintain.
        </p>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>What I work with right now.</h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </article>
          ))}
        </div>

        <div className="skill-list" aria-label="Skill tags">
          {skillTags.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something together.</h2>
            <p>
              Email me at <a href="mailto:lizaituze1@gmail.com">lizaituze1@gmail.com</a>
            </p>
          </div>

          <a className="button button-primary" href="mailto:lizaituze1@gmail.com">
            Send an Email
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;