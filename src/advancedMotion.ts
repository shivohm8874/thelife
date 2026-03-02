import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type MotionOptions = {
  root: HTMLElement
  orb?: HTMLElement | null
  magneticSelector?: string
  tiltSelector?: string
}

export function setupAdvancedMotion({
  root,
  orb,
  magneticSelector = 'button, .menu-contact, .system-link, .robot-card-link, .ct-submit, .footer-social a, .footer-links a',
  tiltSelector = '.mission-card, .system-row, .performance-stat, .core-card, .portfolio-row, .join-stats article, .robot-card, .manifesto-item, .principle-item, .ct-card',
}: MotionOptions) {
  const cleanups: Array<() => void> = []

  const progressEl = root.querySelector<HTMLElement>('.page-progress')
  let progressTween: gsap.core.Tween | null = null

  if (progressEl) {
    progressTween = gsap.fromTo(
      progressEl,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      },
    )
  }

  const finePointer = window.matchMedia('(pointer: fine)').matches
  if (!finePointer) {
    return () => {
      progressTween?.scrollTrigger?.kill()
      progressTween?.kill()
    }
  }

  const magneticItems = Array.from(root.querySelectorAll<HTMLElement>(magneticSelector))
  magneticItems.forEach((el) => {
    const move = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14
      gsap.to(el, { x, y, duration: 0.28, ease: 'power2.out' })
    }

    const leave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.35, ease: 'power3.out' })
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)

    cleanups.push(() => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    })
  })

  const tiltItems = Array.from(root.querySelectorAll<HTMLElement>(tiltSelector))
  tiltItems.forEach((el) => {
    const move = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width
      const py = (event.clientY - rect.top) / rect.height
      const rotateY = (px - 0.5) * 6
      const rotateX = (0.5 - py) * 5

      gsap.to(el, {
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformOrigin: 'center',
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const leave = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.35, ease: 'power3.out' })
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)

    cleanups.push(() => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    })
  })

  if (orb) {
    gsap.set(orb, { xPercent: -50, yPercent: -50 })
    const moveX = gsap.quickTo(orb, 'x', { duration: 0.25, ease: 'power3.out' })
    const moveY = gsap.quickTo(orb, 'y', { duration: 0.25, ease: 'power3.out' })

    const move = (event: MouseEvent) => {
      moveX(event.clientX)
      moveY(event.clientY)
    }

    const boost = () => gsap.to(orb, { scale: 1.6, opacity: 0.55, duration: 0.2 })
    const normalize = () => gsap.to(orb, { scale: 1, opacity: 0.35, duration: 0.25 })

    window.addEventListener('mousemove', move)
    root.addEventListener('mouseleave', normalize)

    magneticItems.forEach((el) => {
      el.addEventListener('mouseenter', boost)
      el.addEventListener('mouseleave', normalize)
      cleanups.push(() => {
        el.removeEventListener('mouseenter', boost)
        el.removeEventListener('mouseleave', normalize)
      })
    })

    cleanups.push(() => {
      window.removeEventListener('mousemove', move)
      root.removeEventListener('mouseleave', normalize)
    })
  }

  return () => {
    cleanups.forEach((cleanup) => cleanup())
    progressTween?.scrollTrigger?.kill()
    progressTween?.kill()
  }
}
