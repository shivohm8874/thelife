import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setupAdvancedMotion } from './advancedMotion'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const officeCards = [
  {
    title: 'General Inquiries',
    value: 'hello@thelife.ai',
    detail: 'Partnerships, press, and company questions',
    href: 'mailto:hello@thelife.ai',
  },
  {
    title: 'Product Demos',
    value: 'demo@thelife.ai',
    detail: 'Enterprise briefings and robot capabilities',
    href: 'mailto:demo@thelife.ai',
  },
  {
    title: 'Careers',
    value: 'careers@thelife.ai',
    detail: 'Engineering, AI, and robotics roles',
    href: 'mailto:careers@thelife.ai',
  },
]

export default function ContactPage() {
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
        duration: 0.58,
        ease: 'power2.out',
      })

      gsap.from('.hero-nav .menu > a', {
        y: -10,
        opacity: 0,
        duration: 0.48,
        stagger: 0.05,
        ease: 'power2.out',
      })

      gsap.from('.ct-hero-inner > *', {
        y: 24,
        opacity: 0,
        duration: 0.74,
        stagger: 0.08,
        ease: 'power2.out',
      })

      gsap.from('.ct-card', {
        y: 22,
        opacity: 0,
        duration: 0.68,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ct-cards',
          start: 'top 84%',
        },
      })

      gsap.from('.ct-form-wrap > *', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ct-form',
          start: 'top 86%',
        },
      })

      gsap.from('.site-footer .reveal-up', {
        y: 18,
        opacity: 0,
        duration: 0.66,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 90%',
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

      <section className="ct-hero">
        <div className="ct-hero-inner">
          <span className="ct-tag">CONTACT</span>
          <h1>Build With The Life</h1>
          <p>
            Reach our team for enterprise demos, strategic partnerships, research collaboration, and careers in
            post-human intelligence.
          </p>
        </div>
      </section>

      <section className="ct-info">
        <div className="ct-info-inner">
          <div className="ct-cards">
            {officeCards.map((card) => (
              <article className="ct-card" key={card.title}>
                <h2>{card.title}</h2>
                <a href={card.href}>{card.value}</a>
                <p>{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ct-form">
        <div className="ct-form-wrap">
          <div className="ct-form-head">
            <h2>Send A Message</h2>
            <p>Tell us your goals and team will respond within one business day.</p>
          </div>

          <form className="ct-form-grid">
            <label>
              Full Name
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label>
              Work Email
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>
            <label>
              Organization
              <input type="text" name="organization" placeholder="Company or institution" />
            </label>
            <label>
              Inquiry Type
              <select name="inquiry" defaultValue="demo">
                <option value="demo">Product Demo</option>
                <option value="partnership">Partnership</option>
                <option value="research">Research</option>
                <option value="careers">Careers</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="ct-full">
              Message
              <textarea name="message" rows={5} placeholder="What are you building and how can we help?" required />
            </label>
            <button type="submit" className="ct-submit">
              SUBMIT
            </button>
          </form>
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
              <h4>HQ</h4>
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


