import { useEffect, useState } from 'react'

const skills = [
  ['TS', 'TypeScript', 'Expert', 'Type-safe product development across modern web applications and APIs.', '8+ years'],
  ['PY', 'Python', 'Expert', 'Backend services, workflow automation, AI integration, and data processing.', '8+ years'],
  ['⚛', 'React', 'Expert', 'Accessible, component-based interfaces for complex SaaS products.', '8+ years'],
  ['AWS', 'Cloud', 'Advanced', 'Production systems using Lambda, ECS, EC2, S3, RDS, and observability.', '7+ years'],
  ['AI', 'AI / LLM', 'Advanced', 'RAG, document intelligence, generative AI, and intelligent workflows.', '3+ years'],
  ['API', 'System Design', 'Expert', 'Distributed systems, microservices, REST, GraphQL, and event-driven design.', '10+ years'],
  ['☕', 'Java', 'Expert', 'Enterprise platforms and resilient Spring Boot backend services.', '10+ years'],
  ['DB', 'Data', 'Advanced', 'PostgreSQL, SQL, Redis, Kafka, and production data architecture.', '10+ years'],
]

const jobs = [
  ['Fini', 'Senior Software Engineer', 'Remote', 'Dec 2023 — Present'],
  ['Stripe', 'Staff Software Engineer', 'Remote', 'Jan 2020 — Dec 2023'],
  ['GoCo', 'Principal Software Engineer', 'Houston, TX', 'Mar 2015 — Dec 2019'],
  ['Gene by Gene', 'Senior Software Engineer', 'Houston, TX', 'Jun 2014 — Feb 2015'],
  ['Simplify Corporation', 'Software Engineer', 'Houston, TX', 'Sep 2013 — Jun 2014'],
  ['Lutz.us', 'Software Engineer', 'Houston, TX', 'Apr 2013 — Sep 2013'],
]

function App() {
  const [dark, setDark] = useState(false)
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark])

  return <>
    <header className="topbar">
      <a className="mark" href="#home" aria-label="Rayn Foster home"><i /><i /></a>
      <nav aria-label="Primary navigation"><a href="#experience">Experience</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? '☀' : '◔'}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy"><h1>Hi, I’m Rayn!</h1><h2>Senior Software Engineer & <span>AI Product Builder</span></h2><p>Experienced engineer crafting cloud-native applications, distributed platforms, and AI-driven systems that solve real business challenges. I turn complex requirements into reliable, scalable software built for production.</p><div className="hero-actions"><a className="button primary" href="#experience">Experience</a><a className="button" href="#contact">Contact</a></div></div>
        <div className="hero-art" aria-hidden="true"><div className="code-card"><span>rayn@portfolio</span><b>build systems<br />that scale_</b><i /></div><div className="orb one" /><div className="orb two" /></div>
      </section>

      <section className="section" id="experience">
        <a className="section-title" href="#experience"><span>◷</span><h2>Experience</h2></a>
        <p className="section-intro">Technical depth across the tools and disciplines I use to ship resilient products.</p>
        <div className="skill-grid">{skills.map(([icon, title, level, text, years]) => <article className="skill" key={title}><div className="skill-head"><span className="skill-icon">{icon}</span><h3>{title}</h3></div><b>{level}</b><p>{text}</p><small>{years} • production experience</small></article>)}</div>
      </section>

      <section className="section split" id="work">
        <div><div className="mini-heading"><a className="section-title" href="#work"><span>▥</span><h2>Work</h2></a><small>Career positions</small></div><div className="timeline">{jobs.map(([company, role, place, dates]) => <article key={company}><h3>{company}</h3><p>{role}</p><hr /><span>{place}</span><small>{dates}</small></article>)}</div></div>
        <div id="education"><a className="section-title" href="#education"><span>♢</span><h2>Education</h2></a><div className="timeline education"><article><h3>University of Texas at Tyler</h3><p>Bachelor of Science in Computer Science</p><hr /><span>Tyler, Texas</span><small>2008 — 2012</small></article></div></div>
      </section>

      <section className="section" id="about">
        <a className="section-title" href="#about"><span>♙</span><h2>About</h2></a>
        <div className="about-panel"><div className="portrait" aria-hidden="true"><span>RF</span></div><div><p>I’m Rayn Foster, a senior software engineer with more than a decade of experience building SaaS platforms, enterprise systems, and cloud-native applications across fintech, employee benefits, genomics, and applied AI.</p><p>My recent work centers on TypeScript, Python, AWS, and intelligent automation. I combine hands-on product delivery with system architecture, production reliability, technical mentorship, and pragmatic leadership.</p><div className="facts"><span><b>10+</b> Years</span><span><b>Staff</b> Leadership</span><span><b>Remote</b> Ready</span></div></div></div>
      </section>

      <section className="section" id="contact">
        <a className="section-title" href="#contact"><span>🤝</span><h2>Collaborate</h2></a>
        <p className="section-intro">Interested in senior engineering, architecture, or AI-enabled product work? Let’s connect.</p>
        <div className="contact-table"><div className="table-head"><span>Platform</span><span>Purpose</span><span>Contact</span></div><div><span>✉ Mail</span><b>Professional inquiries and opportunities.</b><em>Email address available on request</em></div><div><span>in LinkedIn</span><b>Professional connections and partnerships.</b><em>Connect through this portfolio’s source</em></div><div><span>⌁ Location</span><b>Available for remote and regional opportunities.</b><em>Victoria, TX / Remote</em></div></div>
      </section>
    </main>
    <footer><a className="mark" href="#home"><i /><i /></a><p>© 2026 Rayn Foster. Built with React + TypeScript.</p><a href="#home">Back to top ↑</a></footer>
  </>
}

export default App
