import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setupAdvancedMotion } from './advancedMotion'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const robotPortfolio = [
  {
    id: '01',
    category: 'HEALTHCARE SURGERY ROBOT',
    title: 'Medisurge-X',
    subtitle: 'Autonomous Precision Surgery',
    description:
      'AI-assisted surgical platform designed for high precision procedures and reduced error rates across critical operations.',
    market: '$50-100B+ surgical robotics market',
    needs: ['Surgeon shortage', 'Aging populations', 'High medical errors', 'Long wait periods'],
    image:
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '02',
    category: 'ELDER & ASSISTANCE ROBOT',
    title: 'ElderCare-One',
    subtitle: '24/7 Caregiving Solution',
    description:
      'Companion care robot delivering daily assistance, health alerts, and mobility support for older adults.',
    market: '$1T+ global elder care industry',
    needs: ['Aging populations globally', 'Caregiver shortage', 'Rising living costs', 'Need adaptive personal aid'],
    image:
      'https://images.unsplash.com/photo-1681414352058-7d65efc19b7d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '03',
    category: 'CONSTRUCTION AUTOMATION ROBOT',
    title: 'BuildTitan',
    subtitle: 'Industrial Construction Power',
    description:
      'Heavy-duty construction robot for brick laying, concrete pour, and structural assembly in hazardous zones.',
    market: '$12T+ construction industry',
    needs: ['Labor shortages', 'Slow productivity', 'Workplace accidents', 'Expensive project delays'],
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '04',
    category: 'AGRICULTURAL AUTONOMOUS ROBOT',
    title: 'AgriMind',
    subtitle: 'Precision Agriculture Intelligence',
    description:
      'Autonomous field robot for precision planting, harvesting, and crop health prediction under climate uncertainty.',
    market: '$5T+ global agriculture',
    needs: ['Rural labor shortage', 'Climate variability', 'Resource optimization', 'Demand for scalable yield'],
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '05',
    category: 'AUTONOMOUS LOGISTICS ROBOT',
    title: 'LogiFleet-X',
    subtitle: 'Next-Gen Supply Chain',
    description:
      'Autonomous logistics platform for warehouse handling, last-mile delivery, and freight optimization.',
    market: '$5T+ global logistics',
    needs: ['Last-mile delays', 'Labor instability', 'High logistics costs', '24/7 route optimization'],
    image:
      'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '06',
    category: 'MINING & RESOURCE EXTRACTION',
    title: 'MineCore',
    subtitle: 'Autonomous Resource Mining',
    description:
      'Autonomous drilling and mining systems for deep-earth and remote extraction with lower safety risk.',
    market: '$2T+ mining industry',
    needs: ['Dangerous environments', 'Resource scarcity', 'Harsh conditions', 'Operational downtime'],
    image:
      'https://images.unsplash.com/photo-1681414352058-7d65efc19b7d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '07',
    category: 'SECURITY & SURVEILLANCE ROBOT',
    title: 'SecureSentinel',
    subtitle: 'Intelligent Security Systems',
    description:
      'Autonomous patrol and threat detection robot with real-time analytics for critical infrastructure defense.',
    market: '$2T+ defense and security',
    needs: ['Border safety needs', 'Threat detection speed', 'Monitoring at scale', 'High-risk field support'],
    image:
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '08',
    category: 'DOMESTIC GENERAL-PURPOSE ROBOT',
    title: 'HomeGenie-AI',
    subtitle: 'Your Personal Home Assistant',
    description:
      'Household assistance robot for daily support, smart coordination, and adaptive in-home automation.',
    market: 'Trillion-scale potential (5% adoption)',
    needs: ['Busy home schedules', 'Elderly support at home', 'Daily routine support', 'Personalized assistance'],
    image:
      'https://images.unsplash.com/photo-1681414352058-7d65efc19b7d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '09',
    category: 'INFRASTRUCTURE MAINTENANCE ROBOT',
    title: 'InfraFix',
    subtitle: 'Critical Infrastructure Repair',
    description:
      'Robotic maintenance platform for bridges, tunnels, grids, and pipelines with predictive diagnostics.',
    market: 'Multi-trillion infrastructure maintenance',
    needs: ['Aging infrastructure', 'Public safety risks', 'Rapid repair cycles', 'Cost efficiency'],
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '10',
    category: 'EXTREME ENVIRONMENT ROBOT',
    title: 'TerraForm-X',
    subtitle: 'Beyond Earth Operations',
    description:
      'Robotics systems for lunar construction, orbital maintenance, and deep-space process automation.',
    market: 'Multi-trillion space economy',
    needs: ['Space operations', 'Hazardous missions', 'Zero downtime', 'Autonomous AI crews'],
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80',
  },
]

const tamSectors = [
  { value: '$10T+', sector: 'HEALTHCARE' },
  { value: '$12T+', sector: 'CONSTRUCTION' },
  { value: '$9T+', sector: 'LOGISTICS' },
  { value: '$5T+', sector: 'AGRICULTURE' },
  { value: '$2T+', sector: 'DEFENSE' },
  { value: '$3T+', sector: 'ELDER CARE' },
  { value: '$4T+', sector: 'DOMESTIC AI' },
  { value: '$7T+', sector: 'INFRASTRUCTURE' },
  { value: '$6T+', sector: 'SECURITY' },
  { value: '$11T+', sector: 'SPACE ECONOMY' },
]

export default function RobotsPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!pageRef.current) {
      return
    }

    const cleanupAdvanced = setupAdvancedMotion({
      root: pageRef.current,
      orb: orbRef.current,
    })

    const context = gsap.context(() => {
      gsap.from('.hero-nav .logo', {
        y: -14,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })

      gsap.from('.hero-nav .menu > a', {
        y: -10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
      })

      gsap.from('.robots-intro-inner > *', {
        y: 24,
        opacity: 0,
        duration: 0.72,
        stagger: 0.08,
        ease: 'power2.out',
      })

      gsap.from('.robot-card', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.robots-grid',
          start: 'top 84%',
        },
      })

      gsap.from('.robot-card-media img', {
        scale: 1.06,
        opacity: 0.82,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.robots-grid',
          start: 'top 85%',
        },
      })

      gsap.from('.tam-head > *', {
        y: 24,
        opacity: 0,
        duration: 0.72,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.tam-head',
          start: 'top 84%',
        },
      })

      gsap.from('.tam-card', {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.tam-grid',
          start: 'top 86%',
        },
      })

      gsap.from('.site-footer .reveal-up', {
        y: 16,
        opacity: 0,
        duration: 0.65,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 90%',
        },
      })

      gsap.from('.robot-card-body > *', {
        y: 10,
        opacity: 0,
        duration: 0.45,
        stagger: 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.robots-grid',
          start: 'top 84%',
        },
      })

      gsap.from('.footer-social a, .footer-links a', {
        y: 8,
        opacity: 0,
        duration: 0.42,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 92%',
        },
      })
    }, pageRef)

    return () => {
      cleanupAdvanced()
      context.revert()
    }
  }, [])

  return (
    <main className="landing" ref={pageRef}>
      <div className="page-progress" aria-hidden="true" />
      <div className="cursor-orb" ref={orbRef} aria-hidden="true" />
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

      <section className="robots-intro" id="robots">
        <div className="robots-intro-inner">
          <span className="robots-intro-tag">PRODUCT PORTFOLIO</span>
          <h2>Our Robot</h2>
          <p>Ten specialized robot systems targeting multi-trillion dollar industries</p>
          <p>From healthcare to space exploration.</p>
        </div>
      </section>

      <section className="robots-portfolio">
        <div className="robots-grid">
          {robotPortfolio.map((robot) => (
            <article className="robot-card" key={robot.id}>
              <div className="robot-card-media">
                <img src={robot.image} alt={robot.title} loading="lazy" />
                <span className="robot-card-index">{robot.id}</span>
              </div>
              <div className="robot-card-body">
                <p className="robot-card-category">{robot.category}</p>
                <h3>{robot.title}</h3>
                <p className="robot-card-subtitle">{robot.subtitle}</p>
                <p className="robot-card-description">{robot.description}</p>
                <div className="robot-card-market">
                  <span>MARKET SIZE</span>
                  <p>{robot.market}</p>
                </div>
                <div className="robot-card-needs">
                  <span>WHY NEEDED</span>
                  <ul>
                    {robot.needs.map((need) => (
                      <li key={need}>{need}</li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="robot-card-link">
                  LEARN MORE -&gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tam">
        <div className="tam-inner">
          <header className="tam-head">
            <h2>Total Addressable Market</h2>
            <p>Combined multi-trillion dollar opportunity across 10 sectors</p>
          </header>

          <div className="tam-grid">
            {tamSectors.map((item) => (
              <article className="tam-card" key={item.sector}>
                <strong>{item.value}</strong>
                <span>{item.sector}</span>
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
            <p>© 2026 The Life. All rights reserved.</p>
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




