document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: white;
      line-height: 1.6;
    }

    .container {
      width: 90%;
      max-width: 1100px;
      margin: auto;
    }

    nav {
      padding: 20px 0;
      border-bottom: 1px solid #334155;
    }

    nav .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
    }

    nav a {
      color: #cbd5e1;
      text-decoration: none;
      margin-left: 25px;
    }

    nav a:hover {
      color: white;
    }

    .hero {
      min-height: 75vh;
      display: flex;
      align-items: center;
      text-align: center;
    }

    .hero-content {
      width: 100%;
    }

    .hero h1 {
      font-size: 52px;
      margin-bottom: 15px;
    }

    .hero h1 span {
      color: #38bdf8;
    }

    .hero p {
      font-size: 20px;
      color: #cbd5e1;
      max-width: 700px;
      margin: 0 auto 30px;
    }

    .btn {
      display: inline-block;
      padding: 12px 25px;
      background: #38bdf8;
      color: #0f172a;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      margin: 5px;
    }

    .btn.secondary {
      background: transparent;
      color: white;
      border: 1px solid #38bdf8;
    }

    section {
      padding: 70px 0;
    }

    .section-title {
      text-align: center;
      font-size: 35px;
      margin-bottom: 40px;
    }

    .about {
      text-align: center;
      max-width: 800px;
      margin: auto;
      color: #cbd5e1;
      font-size: 18px;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      margin-top: 30px;
    }

    .skill {
      background: #1e293b;
      padding: 12px 20px;
      border-radius: 8px;
      border: 1px solid #334155;
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }

    .project {
      background: #1e293b;
      padding: 25px;
      border-radius: 12px;
      border: 1px solid #334155;
    }

    .project h3 {
      color: #38bdf8;
      margin-bottom: 10px;
    }

    .project p {
      color: #cbd5e1;
    }

    .contact {
      text-align: center;
    }

    .contact p {
      color: #cbd5e1;
      margin-bottom: 20px;
    }

    footer {
      text-align: center;
      padding: 25px;
      border-top: 1px solid #334155;
      color: #94a3b8;
    }

    @media (max-width: 600px) {
      .hero h1 {
        font-size: 38px;
      }

      nav .container {
        flex-direction: column;
        gap: 15px;
      }

      nav a {
        margin: 0 8px;
      }
    }
  </style>

  <nav>
    <div class="container">
      <div class="logo">My Portfolio</div>

      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <main>

    <section class="hero">
      <div class="container hero-content">
        <h1>Hello, I'm <span>Varshini</span></h1>

        <p>
          A passionate developer interested in Web Development,
          Python, Data Analytics and AI.
        </p>

        <a class="btn" href="#projects">View My Projects</a>
        <a class="btn secondary" href="#contact">Contact Me</a>
      </div>
    </section>

    <section id="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>

        <p class="about">
          I am an aspiring software developer with an interest in
          building useful and user-friendly applications. I enjoy
          learning new technologies and working on real-world projects.
        </p>
      </div>
    </section>

    <section id="skills">
      <div class="container">
        <h2 class="section-title">Skills</h2>

        <div class="skills">
          <div class="skill">HTML</div>
          <div class="skill">CSS</div>
          <div class="skill">JavaScript</div>
          <div class="skill">TypeScript</div>
          <div class="skill">Python</div>
          <div class="skill">SQL</div>
          <div class="skill">Data Analytics</div>
          <div class="skill">Git & GitHub</div>
        </div>
      </div>
    </section>

    <section id="projects">
      <div class="container">
        <h2 class="section-title">Projects</h2>

        <div class="projects">

          <div class="project">
            <h3>AI Driven Multi Disease System</h3>
            <p>
              An AI-based project designed to assist in predicting
              multiple diseases using machine learning techniques.
            </p>
          </div>

          <div class="project">
            <h3>Data Analytics Project</h3>
            <p>
              A data analysis project involving data preparation,
              cleaning, transformation and visualization.
            </p>
          </div>

          <div class="project">
            <h3>Developer Portfolio</h3>
            <p>
              A personal portfolio website showcasing my skills,
              projects and contact information.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container contact">
        <h2 class="section-title">Contact Me</h2>

        <p>
          Interested in working together? Feel free to contact me.
        </p>

        <a
          class="btn"
          href="mailto:your-email@example.com"
        >
          Email Me
        </a>
      </div>
    </section>

  </main>

  <footer>
    © 2026 Varshini. All Rights Reserved.
  </footer>
`;
