import Image from "next/image";
import CopyEmail from "@/components/CopyEmail";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="ambient" aria-hidden="true">
        <div className="orb one"></div>
        <div className="orb two"></div>
        <div className="orb three"></div>
      </div>
      <div className="shell">
        <header className="glass nav">
          <a className="brand" href="#home" aria-label="Wai Phyo Aung home">
            Urfavch9fwp
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#journey">Journey</a>
          </nav>
          <a className="nav-contact" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </header>
        <main id="main">
          <section className="hero" id="home" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="dot"></span> A LITTLE CURIOSITY. A LOT TO
                LEARN.
              </p>
              <h1 id="hero-title">
                Hi, I’m Wai.
                <br />
                <span>Learning.</span>
                <br />
                Building. Growing.
              </h1>
              <p className="intro">
                Computer Science student in Thailand.
                <br />
                Exploring code, connections, and what comes next.
              </p>
              <div className="actions">
                <a className="button primary" href="#about">
                  Get to know me <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="button secondary"
                  href="/assets/Wai_Phyo_Aung_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="hero-note">
                <span>03 / JUNIOR YEAR</span>
                <span>BASED IN THAILAND</span>
              </div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-back glass" aria-hidden="true"></div>
              <figure className="portrait glass">
                <div className="portrait-top">
                  <span className="dot"></span>
                  <span>THE PERSON BEHIND THE CODE</span>
                  <span aria-hidden="true">✳</span>
                </div>
                <Image
                  src="/assets/wai-portrait.png"
                  alt="Wai Phyo Aung wearing a navy polo shirt"
                  width={2048}
                  height={1365}
                  sizes="(max-width: 680px) 320px, 400px"
                  priority
                />
                <figcaption>
                  <div>
                    <strong>Wai Phyo Aung</strong>
                    <span>Computer Science Student</span>
                  </div>
                  <span className="portrait-arrow" aria-hidden="true">
                    ↗
                  </span>
                </figcaption>
              </figure>
              <div className="floating glass">
                <span aria-hidden="true">&lt;/&gt;</span>
                <div>
                  <strong>Always curious.</strong>
                </div>
              </div>
            </div>
          </section>
          <section className="about-section" id="about">
            <div className="section-heading">
              <p className="eyebrow">01 / ABOUT ME</p>
              <h2>
                A work in progress.
                <br />
                <span>And that’s the exciting part.</span>
              </h2>
            </div>
            <div className="about-grid">
              <article className="glass about-card">
                <span className="small-label">MY STORY</span>
                <p>
                  I am a third-year Computer Science student at Asia Pacific
                  International University in Thailand. I have knowledge of
                  computing and networking, and I am learning web development
                  and blockchain.
                </p>
                <p className="muted">
                  I enjoy turning ideas into something I can explore and learn
                  from. Outside of studying, I like anime, manga, and sketching
                  UI designs.
                </p>
              </article>
              <div className="about-side">
                <article className="glass fact">
                  <span className="fact-icon" aria-hidden="true">
                    ↗
                  </span>
                  <span className="small-label">RIGHT NOW</span>
                  <h3>Learning by doing.</h3>
                  <p>
                    Taking the first steps into blockchain, Web3, and Solidity.
                  </p>
                </article>
                <article className="glass mini-fact">
                  <span className="dot"></span>
                  <p>
                    Studying in <strong>Thailand</strong>
                  </p>
                  <span aria-hidden="true">✳</span>
                </article>
              </div>
            </div>
          </section>
          <section id="skills">
            <div className="section-heading row">
              <div>
                <p className="eyebrow">02 / MY TOOLBOX</p>
                <h2>What I’m working with.</h2>
              </div>
              <p className="muted">A foundation to keep building on.</p>
            </div>
            <div className="skill-grid">
              <article className="glass skill-card">
                <span className="card-icon" aria-hidden="true">
                  {"{ }"}
                </span>
                <h3>Programming</h3>
                <p>Languages I’m learning and using.</p>
                <div className="tags">
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Java</span>
                  <span>PHP</span>
                </div>
              </article>
              <article className="glass skill-card">
                <span className="card-icon" aria-hidden="true">
                  ⌘
                </span>
                <h3>Tools &amp; systems</h3>
                <p>My tools for exploring and building.</p>
                <div className="tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Linux</span>
                </div>
              </article>
              <article className="glass skill-card">
                <span className="card-icon" aria-hidden="true">
                  ⌁
                </span>
                <h3>Networking</h3>
                <p>Understanding how things connect.</p>
                <div className="tags">
                  <span>TCP/IP</span>
                  <span>Routing &amp; switching</span>
                  <span>Troubleshooting</span>
                </div>
              </article>
            </div>
          </section>
          <section id="journey">
            <div className="section-heading">
              <p className="eyebrow">03 / THE JOURNEY SO FAR</p>
              <h2>Every step teaches something.</h2>
            </div>
            <div className="glass timeline">
              <article>
                <div className="time">
                  2024 — PRESENT<span className="current">IN PROGRESS</span>
                </div>
                <div>
                  <span className="small-label">EDUCATION</span>
                  <h3>Computer Science</h3>
                  <p className="institution">
                    Asia Pacific International University · Thailand
                  </p>
                  <p>
                    Third year (Junior). Studying data structures, algorithms,
                    databases, web development, and software engineering
                    fundamentals.
                  </p>
                </div>
              </article>
              <article>
                <div className="time">
                  2025<span>HACKATHON</span>
                </div>
                <div>
                  <span className="small-label">HANDS-ON LEARNING</span>
                  <h3>Monad Blitz Hackathon</h3>
                  <p className="institution">Participant / Developer</p>
                  <p>
                    Collaborated with a small team to explore blockchain and
                    Web3. Studied Monad’s parallel EVM architecture and gained
                    exposure to smart contract environments.
                  </p>
                </div>
              </article>
              <article>
                <div className="time">
                  2020 — 2022<span>DIPLOMA</span>
                </div>
                <div>
                  <span className="small-label">EDUCATION</span>
                  <h3>Computing &amp; Networking</h3>
                  <p className="institution">
                    Y-Max Private University · Myanmar
                  </p>
                  <p>
                    Higher National Diploma, certified by SQA. Studied network
                    infrastructure, systems administration, and protocol
                    management.
                  </p>
                </div>
              </article>
            </div>
          </section>
          <section className="glass github-card">
            <div>
              <p className="eyebrow">FOLLOW THE LEARNING PROCESS</p>
              <h2>More of my code lives here.</h2>
              <p className="muted">Explore my repositories on GitHub.</p>
            </div>
            <a
              className="button secondary"
              href="https://github.com/waiphyoaung-969"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub <span aria-hidden="true">↗</span>
            </a>
          </section>
          <section id="contact" className="contact">
            <p className="eyebrow">04 / SAY HELLO</p>
            <h2>
              Good things start
              <br />
              with a <em>conversation.</em>
            </h2>
            <p className="muted">
              Have an idea, a question, or something to share? I’d love to hear
              it.
            </p>
            <a className="email" href="mailto:waiphyo5901969@gmail.com">
              waiphyo5901969@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <div className="socials">
              <a
                href="https://github.com/waiphyoaung-969"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/wai-phyo-aung-rain"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <CopyEmail />
            </div>
          </section>
        </main>
        <footer>
          <a className="brand" href="#home">
            Urfavch9fwp
          </a>
          <span>
            © <span id="year">{new Date().getFullYear()}</span> Wai Phyo Aung
          </span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </>
  );
}

