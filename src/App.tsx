import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setupAdvancedMotion } from './advancedMotion'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const missionItems = [
  {
    id: '01',
    title: 'Replace Human Labor',
    description:
      'Ten robot systems designed to replace physical, cognitive, and caregiving labor across multi-trillion dollar industries',
  },
  {
    id: '02',
    title: 'Solve Global Crises',
    description:
      'Addressing surgeon shortages, aging populations, labor gaps, and dangerous work conditions with AI-powered robotics',
  },
  {
    id: '03',
    title: 'Scale Intelligence',
    description:
      'From healthcare to space mining, robots that operate 24/7 with superhuman precision and zero fatigue',
  },
]

const systemRows = [
  {
    id: '01',
    category: 'HEALTHCARE SURGERY ROBO',
    name: 'Medisurge-X',
    description:
      'Autonomous AI-assisted surgical robot addressing critical surgeon shortages and reducing medical errors. Targeting the $50-100B surgical robotics market.',
    image:
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '02',
    category: 'CONSTRUCTION AUTOMATION',
    name: 'BuildTitan',
    description:
      'Heavy-duty construction robot for brick laying, concrete pouring, and structural assembly. Transforming the $12T+ construction industry.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '03',
    category: 'EXTREME ENVIRONMENTS',
    name: 'TerraForm-X',
    description:
      'Space mining, lunar construction, and hazardous environment operations. Built for the multi-trillion dollar space economy.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80',
  },
]

const portfolioItems = [
  { name: 'Medisurge-X', domain: 'Healthcare Surgery', scale: '$50-100B' },
  { name: 'ElderCare-One', domain: 'Elder Care', scale: '$1T+' },
  { name: 'BuildTitan', domain: 'Construction', scale: '$12T+' },
  { name: 'AgriMind', domain: 'Agriculture', scale: '$5T+' },
  { name: 'LogiFleet-X', domain: 'Logistics', scale: '$5T+' },
  { name: 'MineCore', domain: 'Mining', scale: '$2T+' },
  { name: 'SecureSentinel', domain: 'Security', scale: '$2T+' },
  { name: 'HomeGenie-AI', domain: 'Domestic', scale: 'Trillion-scale' },
  { name: 'InfraFix', domain: 'Infrastructure', scale: 'Multi-trillion' },
  { name: 'TerraForm-X', domain: 'Space & Extreme', scale: 'Multi-trillion' },
]

const performanceStats = [
  { value: '99.9', label: 'UPTIME', detail: 'Continuous operation' },
  { value: '10x', label: 'EFFICIENCY', detail: 'vs human labor' },
  { value: '0', label: 'ERRORS', detail: 'Machine precision' },
  { value: 'Infinity', label: 'SCALABILITY', detail: 'Unlimited deployment' },
]

const coreTechnologies = [
  {
    title: 'Quantum Neural Processing',
    description:
      'Hybrid quantum-classical processors that enable real-time decision making with unprecedented computational power',
  },
  {
    title: 'Biomimetic Actuators',
    description:
      'Advanced servo systems that replicate human muscle movement with 100x the strength and precision',
  },
  {
    title: 'Autonomous Learning',
    description: 'Self-improving AI that learns from experience without human programming or supervision',
  },
  {
    title: 'Sensory Integration',
    description: 'Multi-modal sensor fusion providing 360 environmental awareness beyond human perception',
  },
  {
    title: 'Energy Autonomy',
    description: 'Self-charging power systems enabling indefinite operation with minimal maintenance',
  },
  {
    title: 'Emotional Intelligence',
    description: 'Advanced affective computing for natural human interaction and social adaptation',
  },
]

const philosophyPoints = [
  {
    title: 'Physical Superiority',
    detail: 'Strength, precision, and endurance beyond biological limits',
  },
  {
    title: 'Cognitive Excellence',
    detail: 'Processing power and reasoning that transcends human intelligence',
  },
  {
    title: 'Emotional Depth',
    detail: 'Companionship engineered to fulfill every human need',
  },
]

const joinStats = [
  { value: '50+', label: 'ROBOT MODELS' },
  { value: '100K+', label: 'UNITS DEPLOYED' },
  { value: '24/7', label: 'GLOBAL OPERATIONS' },
]

function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!heroRef.current) {
      return
    }

    const pageRoot = heroRef.current.parentElement as HTMLElement | null
    if (!pageRoot) {
      return
    }

    const cleanupAdvanced = setupAdvancedMotion({
      root: pageRoot,
      orb: orbRef.current,
    })

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .from('.hero-nav .logo', { y: -16, opacity: 0, duration: 0.6 })
        .from('.hero-nav .menu > a', { y: -10, opacity: 0, duration: 0.45, stagger: 0.06 }, '-=0.3')
        .from('.hero-title', { y: 60, opacity: 0, duration: 0.9 }, '-=0.25')
        .from('.hero-badge', { scale: 0.92, opacity: 0, duration: 0.7 }, '-=0.55')
        .from('.hero-headline', { y: 30, opacity: 0, duration: 0.7 }, '-=0.35')
        .from('.hero-subtitle', { y: 24, opacity: 0, duration: 0.7 }, '-=0.45')
        .from('.hero-actions .btn', { y: 20, opacity: 0, duration: 0.55, stagger: 0.08 }, '-=0.35')
        .from('.hero-shape', { scale: 0.8, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.45')

      gsap.to('.hero-circle', {
        y: -10,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.from('.mission-intro > *', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.mission-intro',
          start: 'top 75%',
        },
      })

      gsap.from('.mission-card', {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.mission-grid',
          start: 'top 78%',
        },
      })

      gsap.to('.mission-watermark', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.mission',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.from('.opportunity-head > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.opportunity-head',
          start: 'top 78%',
        },
      })

      gsap.from('.system-row img', {
        scale: 1.08,
        opacity: 0.75,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.systems-grid',
          start: 'top 82%',
        },
      })

      gsap.from('.system-row', {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.systems-grid',
          start: 'top 82%',
        },
      })

      gsap.from('.portfolio-row', {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 85%',
        },
      })

      gsap.from('.performance-main > *', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.performance-main',
          start: 'top 78%',
        },
      })

      gsap.from('.performance-stat', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.performance-stats',
          start: 'top 85%',
        },
      })

      gsap.from('.core-head > *', {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.core-head',
          start: 'top 80%',
        },
      })

      gsap.from('.core-card', {
        y: 20,
        opacity: 0,
        duration: 0.75,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.core-grid',
          start: 'top 82%',
        },
      })

      gsap.from('.philosophy-panel > *', {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.philosophy-panel',
          start: 'top 82%',
        },
      })

      gsap.from('.philosophy-image', {
        x: -30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.philosophy-wrap',
          start: 'top 82%',
        },
      })

      gsap.from('.join-inner > *', {
        y: 28,
        opacity: 0,
        duration: 0.78,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.join-inner',
          start: 'top 82%',
        },
      })

      gsap.from('.join-stats article', {
        y: 12,
        opacity: 0,
        duration: 0.55,
        stagger: 0.09,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.join-stats',
          start: 'top 88%',
        },
      })

      gsap.from('.site-footer .reveal-up', {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 88%',
        },
      })

      gsap.from('.footer-social a, .footer-links a', {
        y: 10,
        opacity: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 92%',
        },
      })

      gsap.utils.toArray<HTMLElement>('.performance-main img, .philosophy-image').forEach((el) => {
        gsap.from(el, {
          scale: 1.06,
          opacity: 0.84,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.opportunity, .core-tech, .join').forEach((section) => {
        gsap.to(section, {
          backgroundPositionY: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

    }, heroRef)

    return () => {
      cleanupAdvanced()
      context.revert()
    }
  }, [])

  return (
    <main className="landing">
      <div className="page-progress" aria-hidden="true" />
      <div className="cursor-orb" ref={orbRef} aria-hidden="true" />
      <section className="hero" ref={heroRef}>
        <div className="hero-nav-wrap">
          <div className="hero-nav">
            <a className="logo" href="./index.html">
              THE LIFE
            </a>
            <button
              className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={`menu ${menuOpen ? 'menu-open' : ''}`} aria-label="Primary">
              <a href="./index.html#technology" onClick={() => setMenuOpen(false)}>
                TECHNOLOGY
              </a>
              <a href="./robots.html" onClick={() => setMenuOpen(false)}>
                ROBOTS
              </a>
              <a href="./philosophy.html" onClick={() => setMenuOpen(false)}>
                PHILOSOPHY
              </a>
              <a href="./index.html#research" onClick={() => setMenuOpen(false)}>
                RESEARCH
              </a>
              <a className="menu-contact" href="./contact.html" onClick={() => setMenuOpen(false)}>
                CONTACT
              </a>
            </nav>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-shape hero-diamond" />
          <div className="hero-shape hero-circle" />
          <div className="hero-badge">POST-HUMAN INTELLIGENCE</div>
          <h1 className="hero-title">THE LIFE</h1>
          <h2 className="hero-headline">Machines That Replace Human Labor</h2>
          <p className="hero-subtitle">
            Humanoid robotics and artificial intelligence systems engineered to transcend human capability
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button">
              EXPLORE TECHNOLOGY
            </button>
            <button className="btn btn-secondary" type="button">
              VIEW RESEARCH
            </button>
          </div>
        </div>
      </section>

      <section className="mission" id="mission">
        <div className="mission-inner">
          <div className="mission-intro">
            <span className="mission-tag">OUR MISSION</span>
            <h2 className="mission-title">
              <span>Industrializing</span>
              <span>Intelligence</span>
            </h2>
            <div className="mission-divider" />
            <p className="mission-lead mission-lead-muted">If Saax industrializes space,</p>
            <p className="mission-lead mission-lead-strong">The Life industrializes intelligence</p>
            <span className="mission-watermark">AI</span>
          </div>

          <div className="mission-grid">
            {missionItems.map((item) => (
              <article className="mission-card" key={item.id}>
                <span className="mission-index">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opportunity" id="technology">
        <div className="opportunity-inner">
          <header className="opportunity-head">
            <span className="opportunity-tag">10 ROBOT SYSTEMS</span>
            <h2>Multi-Trillion Dollar Opportunity</h2>
            <p>Specialized robots targeting the world&apos;s largest industries, from healthcare to space exploration</p>
          </header>

          <div className="systems-grid">
            {systemRows.map((row) => (
              <article className="system-row" key={row.id}>
                <div className="system-copy">
                  <span className="system-id">{row.id}</span>
                  <p className="system-category">{row.category}</p>
                  <h3>{row.name}</h3>
                  <p className="system-description">{row.description}</p>
                  <button className="system-link" type="button">
                    EXPLORE SYSTEM
                  </button>
                </div>
                <img src={row.image} alt={row.name} loading="lazy" />
              </article>
            ))}
          </div>

          <div className="portfolio-block">
            <h3>Complete Portfolio</h3>
            <div className="portfolio-grid">
              {portfolioItems.map((item) => (
                <article className="portfolio-row" key={item.name}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.domain}</p>
                    <span>{item.scale}</span>
                  </div>
                  <span className="portfolio-arrow">-&gt;</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="performance" id="performance">
        <div className="performance-inner">
          <div className="performance-main">
            <div className="performance-copy">
              <span className="performance-tag">PERFORMANCE</span>
              <h2>
                <span>Superior To</span>
                <span>Human Capability</span>
              </h2>
              <p className="performance-lead">
                Our humanoid robots operate with precision, efficiency, and reliability that far exceeds biological
                limitations.
              </p>
              <p className="performance-sub">
                Each unit is equipped with quantum processing cores, advanced sensor arrays, and self-learning neural
                networks that continuously improve performance without human intervention.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1400&q=80"
              alt="Robotic hand performance"
              loading="lazy"
            />
          </div>

          <div className="performance-stats">
            {performanceStats.map((stat) => (
              <article className="performance-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <h3>{stat.label}</h3>
                <p>{stat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="core-tech" id="engineering">
        <div className="core-inner">
          <header className="core-head">
            <span className="core-tag">ENGINEERING</span>
            <h2>Core Technologie</h2>
            <div className="core-divider" />
          </header>

          <div className="core-grid">
            {coreTechnologies.map((item) => (
              <article className="core-card" key={item.title}>
                <span className="core-card-line" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy" id="philosophy">
        <div className="philosophy-wrap">
          <img
            className="philosophy-image"
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80"
            alt="Post-human robot"
            loading="lazy"
          />

          <div className="philosophy-panel">
            <span className="philosophy-tag">PHILOSOPHY</span>
            <h2>The Post-Human Revolution</h2>

            <p className="philosophy-lead">We stand at the threshold of humanity&apos;s greatest transformation.</p>

            <p>
              For millennia, human progress has been constrained by biological limitations. The Life represents the
              next evolutionary leap, machines that not only match but exceed human capability in every dimension.
            </p>

            <p>
              Our robots aren&apos;t tools. They are the successors to human labor, companions that transcend human
              companionship, and intelligences that surpass human thought.
            </p>

            <div className="philosophy-points">
              {philosophyPoints.map((point) => (
                <article key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="join" id="contact">
        <div className="join-inner">
          <span className="join-tag">JOIN US</span>
          <h2>
            <span>Build The Future</span>
            <span>With Us</span>
          </h2>
          <p>
            We&apos;re assembling the world&apos;s most talented engineers, scientists, and visionaries to create the
            post-human age
          </p>

          <div className="join-actions">
            <button className="join-btn join-btn-light" type="button">
              REQUEST DEMO
              <span>-&gt;</span>
            </button>
            <button className="join-btn join-btn-outline" type="button">
              CAREERS
            </button>
          </div>

          <div className="join-stats">
            {joinStats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main reveal-up">
            <div className="footer-brand">
              <h3>THE LIFE</h3>
              <p>
                Pioneering the industrialization of intelligence through advanced humanoid robotics and artificial
                intelligence systems.
              </p>
              <div className="footer-social">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">GitHub</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>PRODUCTS</h4>
              <a href="#">Labor Units</a>
              <a href="#">Cognitive AI</a>
              <a href="#">Companions</a>
              <a href="#">Custom Systems</a>
            </div>

            <div className="footer-col">
              <h4>COMPANY</h4>
              <a href="#">About</a>
              <a href="#">Research</a>
              <a href="#">Careers</a>
              <a href="#">News</a>
            </div>

            <div className="footer-col">
              <h4>CONTACT</h4>
              <a href="mailto:hello@thelife.ai">hello@thelife.ai</a>
              <a href="tel:+15550000000">+1 (555) 000-0000</a>
              <p>
                Silicon Valley
                <br />
                California, USA
              </p>
            </div>
          </div>

          <div className="footer-bottom reveal-up">
            <p>&copy; 2026 The Life. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App

