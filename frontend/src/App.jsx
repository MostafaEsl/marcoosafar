const highlights = [
  {
    title: "Product strategy",
    description:
      "Align vision, roadmap, and MVP scope so teams can ship with clarity.",
  },
  {
    title: "UX/UI design",
    description:
      "Design intuitive experiences with systems that scale across platforms.",
  },
  {
    title: "Frontend development",
    description:
      "Build performant, accessible interfaces with modern React workflows.",
  },
];

const projectFocus = [
  "Startup launches and redesigns",
  "Design systems and component libraries",
  "Conversion-focused marketing sites",
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <span className="logo">Marco Osafar</span>
          <button className="pill">Book a call</button>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Digital Product Studio</p>
          <h1>Thoughtful experiences that help ambitious teams grow.</h1>
          <p className="lead">
            I partner with founders and product teams to define strategy, design
            interfaces, and build React frontends that feel effortless to use.
          </p>
          <div className="hero-actions">
            <button className="primary">Schedule discovery</button>
            <button className="secondary">View work</button>
          </div>
          <div className="hero-metrics">
            <div>
              <h3>12+ years</h3>
              <p>Product design leadership</p>
            </div>
            <div>
              <h3>35+ launches</h3>
              <p>Across fintech, SaaS, and health</p>
            </div>
            <div>
              <h3>Remote-ready</h3>
              <p>Based in Lisbon, working globally</p>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-header">
          <h2>Services built for momentum</h2>
          <p>
            Every engagement is tailored to your stage, from early discovery to
            scaling a mature design system.
          </p>
        </div>
        <div className="cards">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section highlight">
        <div>
          <h2>Focused on outcomes</h2>
          <p>
            I combine strategy, design, and engineering to ship experiences that
            convert and retain users.
          </p>
          <ul>
            {projectFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="callout">
          <p className="eyebrow">Featured workflow</p>
          <h3>Discovery → Design → Delivery</h3>
          <p>
            A focused six-week sprint to validate your roadmap, align stakeholders,
            and launch a polished MVP.
          </p>
          <button className="secondary">Get the playbook</button>
        </div>
      </section>

      <section className="section contact">
        <div>
          <h2>Ready to build?</h2>
          <p>
            Tell me about your product, your timeline, and where you need the
            most support.
          </p>
        </div>
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h3>hello@marcoosafar.com</h3>
            <p>Remote · Worldwide</p>
          </div>
          <button className="primary">Send a note</button>
        </div>
      </section>
    </div>
  );
}
