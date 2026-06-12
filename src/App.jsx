import "./App.css";

function App() {
  return (
    <>
      <header className="hero">
        <h1>Hi, I'm Ituze Liza</h1>
        <p>Aspiring Software Engineer</p>
        <a href="#contact">
          <button>Contact Me</button>
        </a>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am passionate about software engineering, web development,
          and building meaningful digital solutions.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: lizaituze1@gmail.com</p>
      </section>
    </>
  );
}

export default App;