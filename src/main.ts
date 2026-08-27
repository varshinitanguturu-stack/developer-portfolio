import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="portfolio">

    <header>
      <h1>Varshini Tanguturu</h1>
      <p>Software Developer | Python | Data Analytics | Web Development</p>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>

      <section class="hero">
        <h2>Hello, I'm Varshini 👋</h2>
        <p>
          An aspiring software developer passionate about
          Python, web development, data analytics and AI.
        </p>

        <a class="button" href="#projects">View My Projects</a>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am an aspiring software developer interested in building
          useful applications and solving real-world problems.
          I enjoy learning new technologies and developing projects
          using Python, web technologies, SQL and data analytics.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        <div class="skills">
          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>SQL</span>
          <span>Data Analytics</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div class="projects">

          <div class="card">
            <h3>AI Driven Multi Disease System</h3>
            <p>
              An AI and machine-learning based system designed
              for multi-disease prediction.
            </p>
          </div>

          <div class="card">
            <h3>Data Analytics Project</h3>
            <p>
              A project involving data preparation, cleaning,
              transformation and analysis.
            </p>
          </div>

          <div class="card">
            <h3>Developer Portfolio</h3>
            <p>
              A personal portfolio website showcasing my
              skills, projects and experience.
            </p>
          </div>

        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>

        <p>Let's connect and build something together.</p>

        <a
          class="button"
          href="mailto:your-email@example.com"
        >
          Email Me
        </a>
      </section>

    </main>

    <footer>
      <p>© 2026 Varshini Tanguturu</p>
    </footer>

  </div>
`
