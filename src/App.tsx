import { useEffect, useState } from 'react'

const roles = [
  {
    company: 'Fini', title: 'Senior Software Engineer', dates: 'Dec 2023 — Present', place: 'Remote',
    lead: 'AI-powered SaaS applications and workflow automation',
    bullets: [
      'Design and deliver cloud-native product capabilities across TypeScript interfaces, Python services, APIs, and AWS infrastructure.',
      'Build AI-enabled workflow automation for business operations, integrating intelligent processing pipelines and decision-support capabilities.',
      'Architect secure REST APIs and third-party integrations with an emphasis on reliability, maintainability, and production readiness.',
      'Improve engineering efficiency through automated testing, CI/CD, monitoring, and pragmatic development standards.',
      'Partner with product and business teams to translate complex operational needs into scalable software.',
    ],
    tech: ['TypeScript', 'React', 'Python', 'FastAPI', 'AWS', 'PostgreSQL', 'LLM integration', 'Docker'],
  },
  {
    company: 'Stripe', title: 'Staff Software Engineer', dates: 'Jan 2020 — Dec 2023', place: 'Remote',
    lead: 'Large-scale financial platforms and distributed systems',
    bullets: [
      'Designed scalable software systems supporting Stripe’s global financial technology ecosystem and mission-critical operations.',
      'Built backend services and API-driven platform capabilities focused on security, availability, and developer experience.',
      'Contributed to platform capabilities supporting millions of financial transactions and high-volume API traffic.',
      'Guided architecture reviews and cross-team technical decisions for complex, high-volume distributed systems.',
      'Improved platform reliability and engineering velocity through observability, performance optimization, automation, and tooling.',
      'Mentored engineers through code reviews, system design collaboration, and production engineering practices.',
    ],
    tech: ['Python', 'TypeScript', 'Distributed systems', 'REST APIs', 'PostgreSQL', 'Kafka', 'Java', 'Spring Boot'],
  },
  {
    company: 'GoCo', title: 'Principal Software Engineer', dates: 'Mar 2015 — Dec 2019', place: 'Houston, TX',
    lead: 'Enterprise SaaS for employee benefits and business workflows',
    bullets: [
      'Led architecture and development of enterprise SaaS capabilities supporting employee benefits and business workflows.',
      'Owned technical decisions spanning service architecture, data design, performance, reliability, and platform scalability.',
      'Modernized application patterns and reusable components to reduce complexity and improve engineering productivity.',
      'Partnered with product leadership on technical strategy and mentored engineers through architecture and code reviews.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'JavaScript', 'SQL', 'REST APIs', 'Enterprise SaaS'],
  },
  {
    company: 'Gene by Gene', title: 'Senior Software Engineer', dates: 'Jun 2014 — Feb 2015', place: 'Houston, TX',
    lead: 'Data-driven genomics and customer applications',
    bullets: [
      'Developed software supporting genomics data processing and customer-facing experiences.',
      'Built backend services and database-driven applications with a focus on data integrity, reliability, and maintainability.',
      'Improved application workflows through backend optimization, testing, and production-focused engineering.',
    ],
    tech: ['Java', 'Spring Framework', 'JavaScript', 'SQL', 'REST APIs'],
  },
  {
    company: 'Simplify Corporation', title: 'Software Engineer', dates: 'Sep 2013 — Jun 2014', place: '',
    lead: 'Enterprise business applications',
    bullets: [
      'Developed business applications, backend services, and database-driven features supporting operational workflows.',
      'Contributed across design, implementation, debugging, and production support.',
    ],
    tech: ['Java', 'JavaScript', 'SQL', 'Web technologies'],
  },
  {
    company: 'Lutz.us', title: 'Software Engineer', dates: 'Apr 2013 — Sep 2013', place: '',
    lead: 'Business software and web applications',
    bullets: [
      'Developed and maintained software supporting internal and customer-facing workflows.',
      'Delivered application enhancements and supported testing, debugging, and maintenance.',
    ],
    tech: ['Java', 'JavaScript', 'SQL', 'Web applications'],
  },
]

const skillGroups = [
  { number: '01', title: 'Core stack', items: ['TypeScript', 'Python', 'AWS', 'AI-enabled applications'] },
  { number: '02', title: 'Product engineering', items: ['React', 'Next.js', 'Node.js', 'FastAPI', 'REST APIs', 'GraphQL'] },
  { number: '03', title: 'Cloud & data', items: ['Lambda', 'EC2', 'ECS', 'S3', 'RDS', 'PostgreSQL', 'Redis', 'Kafka'] },
  { number: '04', title: 'Systems', items: ['Distributed systems', 'Microservices', 'Event-driven architecture', 'Docker', 'Kubernetes', 'CI/CD'] },
  { number: '05', title: 'AI engineering', items: ['LLM integration', 'Generative AI', 'RAG', 'Document intelligence', 'Workflow automation'] },
  { number: '06', title: 'Enterprise depth', items: ['Java', 'Spring Boot', 'SQL', 'System design', 'Technical leadership'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const nav = ['about', 'experience', 'skills', 'education', 'contact']
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Rayn Foster, home"><span>RF</span> Rayn Foster</a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span><span /><span />
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          {nav.map((item) => <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>)}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-kicker"><span className="pulse" /> Available for the next hard problem</div>
          <h1 id="hero-title">I build software<br />that earns its <em>scale.</em></h1>
          <div className="hero-bottom">
            <p>Senior software engineer shaping cloud-native, AI-enabled products from system architecture to the final interaction.</p>
            <a className="primary-link" href="#experience">Explore my work <span aria-hidden="true">↘</span></a>
          </div>
          <div className="stack-orbit" aria-hidden="true"><span>TypeScript</span><span>Python</span><span>AWS</span><span>AI</span></div>
        </section>

        <section className="about section" id="about" aria-labelledby="about-title">
          <div className="section-label">01 / About</div>
          <div className="about-copy">
            <h2 id="about-title">Engineering depth.<br /><span>Product instinct.</span></h2>
            <p className="lede">For more than a decade, I’ve designed and delivered SaaS platforms, enterprise systems, and cloud-native applications across fintech, employee benefits, and genomics.</p>
            <div className="about-columns">
              <p>My recent work centers on TypeScript, Python, AWS, and applied AI—building useful automation into real product workflows, not technology for its own sake.</p>
              <p>I’ve led at Staff and Principal level, pairing hands-on delivery with architecture ownership, production reliability, technical mentorship, and cross-functional collaboration.</p>
            </div>
          </div>
          <aside className="signal-card" aria-label="Professional profile summary">
            <span>Current focus</span><strong>AI-enabled SaaS</strong>
            <span>Experience</span><strong>10+ years</strong>
            <span>Leadership</span><strong>Staff & Principal</strong>
          </aside>
        </section>

        <section className="experience section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div className="section-label">02 / Experience</div>
            <h2 id="experience-title">Systems built<br />for the real world.</h2>
          </div>
          <div className="timeline">
            {roles.map((role, index) => (
              <article className="role" key={`${role.company}-${role.dates}`}>
                <div className="role-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="role-meta"><h3>{role.company}</h3><p>{role.title}</p><time>{role.dates}</time>{role.place && <span>{role.place}</span>}</div>
                <div className="role-content"><h4>{role.lead}</h4><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="tech-list" aria-label={`Technologies used at ${role.company}`}>{role.tech.map((item) => <span key={item}>{item}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section" id="skills" aria-labelledby="skills-title">
          <div className="section-label">03 / Capabilities</div>
          <div className="skills-intro"><h2 id="skills-title">A modern stack.<br /><span>Enterprise rigor.</span></h2><p>Tools change. The standard does not: clear systems, resilient production behavior, and software that serves the business behind it.</p></div>
          <div className="skill-grid">{skillGroups.map((group) => <article className="skill-card" key={group.title}><span>{group.number}</span><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></article>)}</div>
        </section>

        <section className="education section" id="education" aria-labelledby="education-title">
          <div className="section-label">04 / Education</div>
          <div><h2 id="education-title">University of Texas<br />at Tyler</h2><p>Bachelor of Science in Computer Science</p></div>
          <time>2008 — 2012</time>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <div className="contact-mark" aria-hidden="true">↗</div>
          <div className="section-label">05 / Contact</div>
          <h2 id="contact-title">Let’s build what<br /><em>matters next.</em></h2>
          <p>Interested in discussing senior engineering, architecture, or AI-enabled product work? Reach out through the contact channel where you found this portfolio.</p>
        </section>
      </main>

      <footer><a className="wordmark" href="#top"><span>RF</span> Rayn Foster</a><p>Senior Software Engineer</p><a href="#top">Back to top ↑</a></footer>
    </>
  )
}

export default App
