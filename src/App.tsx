import { useEffect, useState } from 'react'

const experience = [
  { company: 'Fini', role: 'Senior Software Engineer', period: 'Dec 2023 — Present', focus: 'AI-powered SaaS applications and workflow automation', stack: ['TypeScript', 'React', 'Python', 'FastAPI', 'AWS', 'PostgreSQL', 'LLMs'] },
  { company: 'Stripe', role: 'Staff Software Engineer', period: 'Jan 2020 — Dec 2023', focus: 'Large-scale financial platforms and distributed systems', stack: ['Python', 'TypeScript', 'Distributed systems', 'Kafka', 'Java', 'PostgreSQL'] },
  { company: 'GoCo', role: 'Principal Software Engineer', period: 'Mar 2015 — Dec 2019', focus: 'Enterprise SaaS for employee benefits and business workflows', stack: ['Java', 'Spring Boot', 'React', 'SQL', 'REST APIs'] },
  { company: 'Gene by Gene', role: 'Senior Software Engineer', period: 'Jun 2014 — Feb 2015', focus: 'Data-driven genomics and customer applications', stack: ['Java', 'Spring', 'JavaScript', 'SQL'] },
  { company: 'Simplify Corporation', role: 'Software Engineer', period: 'Sep 2013 — Jun 2014', focus: 'Enterprise business applications', stack: ['Java', 'JavaScript', 'SQL'] },
  { company: 'Lutz.us', role: 'Software Engineer', period: 'Apr 2013 — Sep 2013', focus: 'Business software and web applications', stack: ['Java', 'JavaScript', 'SQL'] },
]

const capabilities = [
  ['Product engineering', 'React, Next.js, Node.js, FastAPI, REST and GraphQL'],
  ['Cloud & systems', 'AWS, microservices, event-driven architecture, Docker and Kubernetes'],
  ['AI engineering', 'LLM integration, generative AI, RAG, document intelligence and automation'],
  ['Technical leadership', 'System design, architecture, production reliability and mentorship'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark])
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  const go = () => setMenuOpen(false)

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="controls">
      <button className="square-control" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? '☼' : '◐'}</button>
      <a className="signature" href="#top" aria-label="Rayn Foster, home">RF<span>Rayn Foster</span></a>
      <button className="square-control menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="menu" aria-label="Toggle menu"><i /><i /></button>
    </header>
    <nav id="menu" className={`menu ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
      <div className="menu-index">INDEX / 2026</div>
      {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item, index) => <a href={`#${item.toLowerCase()}`} onClick={go} key={item}><span>0{index + 1}</span>{item}</a>)}
      <p>Senior software engineer<br />Houston, Texas / Remote</p>
    </nav>
    <main id="main">
      <section className="hero panel" id="top">
        <div className="availability"><span /> Available for the next hard problem</div>
        <div className="hero-copy"><p className="eyebrow">Hello! I’m Rayn Foster.</p><h1>A senior software<br />engineer building</h1><div className="rotating-word"><span>SCALABLE</span></div><p className="intro">I design cloud-native, AI-enabled products from system architecture to the final interaction—focused on clarity, reliability, and real-world impact.</p><a className="pill" href="#contact">Let’s talk <span>↗</span></a></div>
        <div className="scroll-note">Scroll to explore <span>↓</span></div>
      </section>
      <section className="about panel" id="about">
        <div className="section-tag">01 / About</div><div className="about-lead"><p>ENGINEERING DEPTH</p><h2>Product instinct.<br /><em>Production rigor.</em></h2></div>
        <div className="about-body"><p>For more than a decade, I’ve designed and delivered SaaS platforms, enterprise systems, and cloud-native applications across fintech, employee benefits, genomics, and applied AI.</p><p>I pair hands-on delivery with architecture ownership, technical mentorship, and close collaboration across product and business teams.</p><dl><div><dt>Experience</dt><dd>10+ years</dd></div><div><dt>Level</dt><dd>Staff & Principal</dd></div><div><dt>Current focus</dt><dd>AI-enabled SaaS</dd></div></dl></div>
      </section>
      <section className="experience" id="experience">
        <div className="experience-heading panel"><div className="section-tag">02 / Experience</div><h2>Work built for<br /><em>the real world.</em></h2><p>A career spanning product engineering, financial infrastructure, enterprise SaaS, and data-intensive systems.</p></div>
        <div className="roles">{experience.map((item, index) => <article className="role" key={item.company}><span className="role-number">0{index + 1}</span><div><h3>{item.company}</h3><p>{item.role}</p></div><time>{item.period}</time><div className="role-focus"><h4>{item.focus}</h4><p>{item.stack.join('  ·  ')}</p></div></article>)}</div>
      </section>
      <section className="skills panel" id="skills"><div className="section-tag">03 / Capabilities</div><header><p>MY EXPERTISE</p><h2>What I bring<br />to the table.</h2></header><div className="capability-grid">{capabilities.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p><div aria-hidden="true">↗</div></article>)}</div></section>
      <section className="education panel" id="education"><div className="section-tag">04 / Education</div><p>BACHELOR OF SCIENCE</p><h2>Computer Science</h2><div><strong>University of Texas at Tyler</strong><time>2008 — 2012</time></div></section>
      <section className="contact panel" id="contact"><div className="section-tag">05 / Contact</div><p>HAVE A HARD PROBLEM?</p><h2>Let’s build what<br /><em>matters next.</em></h2><a className="contact-link" href="mailto:">Start a conversation <span>↗</span></a><div className="contact-foot"><span>Rayn Foster</span><span>Senior Software Engineer</span><a href="#top">Back to top ↑</a></div></section>
    </main>
  </>
}
export default App
