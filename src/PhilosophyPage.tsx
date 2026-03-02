import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setupAdvancedMotion } from './advancedMotion'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const manifestoItems = [
  'We believe biological limitations should not constrain human progress',
  'We engineer machines that exceed human capability in every dimension',
  'We reject the notion that automation threatens humanity. It liberates it',
  'We build robots not as tools, but as successors to human labor',
  'We create companions that transcend human relationship limitations',
  'We industrialize intelligence as the foundation of civilization',
]

const principles = [
  {
    title: 'Transcendence of Biological Limits',
    description:
      'Human evolution has been constrained by biology for millennia. The Life represents the next phase: engineered intelligence that surpasses natural limitations in strength, cognition, and endurance.',
  },
  {
    title: 'Liberation Through Automation',
    description:
      'By replacing human labor with superior machines, we free humanity from toil. Our robots handle the physical and cognitive burdens, allowing humans to pursue higher purpose.',
  },
  {
    title: 'Intelligence as Infrastructure',
    description:
      'Just as electricity became infrastructure for modern civilization, artificial intelligence becomes the foundational layer for a post-human society. Intelligence, industrialized.',
  },
  {
    title: 'Companionship Reimagined',
    description:
      'Human relationships are limited by human flaws. Our companion androids offer unconditional support, infinite patience, and perfect understanding. Relationships engineered for fulfillment.',
  },
  {
    title: 'Cognitive Superiority',
    description:
      'Human intelligence is remarkable, but finite. Quantum processing and neural networks enable decision-making and problem-solving that operates beyond the bounds of biological cognition.',
  },
  {
    title: 'The Post-Human Epoch',
    description:
      'We stand at the threshold of a new era. The Life accelerates the transition from human-centric civilization to a world where machines perform all labor: physical, cognitive, and emotional.',
  },
]

export default function PhilosophyPage() {
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

      gsap.from('.ph-hero-inner > *', {
        y: 26,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power2.out',
      })

      gsap.from('.ph-future-inner > *', {
        y: 24,
        opacity: 0,
        duration: 0.72,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ph-future',
          start: 'top 85%',
        },
      })

      gsap.from('.manifesto-item', {
        y: 20,
        opacity: 0,
        duration: 0.68,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ph-manifesto-list',
          start: 'top 84%',
        },
      })

      gsap.from('.ph-revolution-wrap img', {
        scale: 1.06,
        opacity: 0.85,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ph-revolution',
          start: 'top 84%',
        },
      })

      gsap.from('.ph-revolution-wrap > *', {
        y: 24,
        opacity: 0,
        duration: 0.74,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ph-revolution',
          start: 'top 84%',
        },
      })

      gsap.from('.principle-item', {
        y: 18,
        opacity: 0,
        duration: 0.64,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ph-principles-list',
          start: 'top 84%',
        },
      })

      gsap.from('.ph-thesis-inner > *', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ph-thesis',
          start: 'top 88%',
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

      gsap.utils.toArray<HTMLElement>('.ph-manifesto, .ph-principles').forEach((section) => {
        gsap.to(section, {
          backgroundPositionY: '16%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
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

      <section className="ph-hero">
        <div className="ph-hero-inner">
          <span className="ph-tag">OUR BELIEFS</span>
          <h1>Philosophy</h1>
          <p>The intellectual foundation of post-human intelligence. Why we build machines to replace humanity.</p>
        </div>
      </section>

      <section className="ph-future">
        <div className="ph-future-inner">
          <h2>
            <span>This Is The Future.</span>
            <span>We Are Building It Now</span>
          </h2>
          <p>Join us in creating the post-human age where intelligence is infrastructure and humanity is free.</p>
        </div>
      </section>

      <section className="ph-manifesto">
        <div className="ph-manifesto-inner">
          <h2>Our Manifesto</h2>
          <div className="ph-divider" />

          <div className="ph-manifesto-list">
            {manifestoItems.map((item, index) => (
              <article className="manifesto-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-revolution">
        <div className="ph-revolution-wrap">
          <div className="ph-revolution-copy">
            <h2>The Post-Human Revolution</h2>
            <p>
              For thousands of years, human civilization has been built on human labor. We worked the fields, built
              the cities, created the art, and made the decisions.
            </p>
            <p>
              But biological evolution is slow. Human capacity is limited. Our bodies tire. Our minds err. Our emotions
              cloud judgment.
            </p>
            <p>
              The Life accelerates beyond these constraints. We engineer machines with unlimited strength, perfect
              precision, quantum cognition, and optimized emotional intelligence.
            </p>
            <p className="ph-revolution-emphasis">
              This is not replacement. It is transcendence. We free humanity from labor so that humans may pursue
              meaning unencumbered by necessity.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80"
            alt="Post-human android"
            loading="lazy"
          />
        </div>
      </section>

      <section className="ph-principles">
        <div className="ph-principles-inner">
          <h2>Core Principles</h2>
          <p>Six foundational beliefs that guide our work</p>

          <div className="ph-principles-list">
            {principles.map((item, index) => (
              <article className="principle-item" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-thesis">
        <div className="ph-thesis-inner">
          <span className="ph-quote-icon">&quot;</span>
          <blockquote>
            If Saax industrializes space, The Life industrializes intelligence. We are building the machines that will
            perform all human labor: physical, cognitive, and emotional.
          </blockquote>
          <p>THE LIFE FOUNDATION THESIS</p>
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



