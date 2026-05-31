import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import SEO from '../components/seo/SEO'
import PageShell from '../components/layout/PageShell'
import EditorialLink from '../components/ui/EditorialLink'
import SystemMap from '../components/ui/SystemMap'
import WorkspaceGridBackground from '../components/ui/WorkspaceGridBackground'
import { INTRO_DURATION_MS, INTRO_STORAGE_KEY } from '../components/ui/IntroOverlay'
import { useMotionPreference } from '../hooks/useMotionPreference'
import { profile } from '../data/profile'
import { sewaFiProject } from '../data/projects'
import { stackPreview } from '../data/skills'

const heroCommands = [
  { label: 'open /work.systems', to: '/work' },
  { label: 'open /sewafi.case', to: '/work/sewafi' },
  { label: 'open /about.shisir', to: '/about' },
]

const heroStatus = [
  { label: 'status', value: 'building SewaFi' },
  { label: 'focus', value: 'backend fundamentals' },
  { label: 'mode', value: 'internship-ready' },
  { label: 'location', value: 'Nepal' },
]

const featuredFlow = ['customer', 'booking', 'dispatch', 'provider', 'admin']

function Home() {
  const { shouldReduceMotion } = useMotionPreference()
  const heroRef = useRef(null)
  const shisirRef = useRef(null)
  const uparkotiRef = useRef(null)
  const sideLabelRef = useRef(null)
  const sweepLineRef = useRef(null)
  const subtitleRef = useRef(null)
  const paragraphRef = useRef(null)
  const identityLineRef = useRef(null)
  const statusRef = useRef(null)
  const commandRef = useRef(null)
  const scrollHintRef = useRef(null)
  const [heroDelay] = useState(() => {
    if (typeof window === 'undefined') {
      return 0
    }

    return window.sessionStorage.getItem(INTRO_STORAGE_KEY) === 'true'
      ? 0
      : Math.max(INTRO_DURATION_MS - 150, 0)
  })

  useLayoutEffect(() => {
    if (!heroRef.current) {
      return undefined
    }

    const heroElements = [
      heroRef.current,
      shisirRef.current,
      uparkotiRef.current,
      sideLabelRef.current,
      subtitleRef.current,
      paragraphRef.current,
      identityLineRef.current,
      statusRef.current,
      commandRef.current,
      scrollHintRef.current,
      sweepLineRef.current,
    ].filter(Boolean)

    if (shouldReduceMotion) {
      gsap.set(heroElements, {
        clearProps: 'all',
        autoAlpha: 1,
        opacity: 1,
        x: 0,
        y: 0,
        scaleX: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        visibility: 'visible',
      })
      return undefined
    }

    const ctx = gsap.context(() => {
      const titleLines = [shisirRef.current, uparkotiRef.current].filter(Boolean)
      const bodyItems = [
        sideLabelRef.current,
        subtitleRef.current,
        paragraphRef.current,
        identityLineRef.current,
        statusRef.current,
        commandRef.current,
        scrollHintRef.current,
      ].filter(Boolean)

      gsap.set(heroRef.current, { autoAlpha: 1, visibility: 'visible' })
      gsap.set(titleLines, {
        autoAlpha: 1,
        y: 80,
        clipPath: 'inset(100% 0% 0% 0%)',
      })
      gsap.set(bodyItems, { autoAlpha: 0, y: 72 })
      gsap.set(sweepLineRef.current, {
        autoAlpha: 0,
        scaleX: 0,
        transformOrigin: 'left center',
      })

      const timeline = gsap.timeline({
        delay: heroDelay / 1000,
        defaults: { ease: 'power4.out' },
      })

      timeline
        .to(shisirRef.current, {
          autoAlpha: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.72,
        })
        .to(
          uparkotiRef.current,
          {
            autoAlpha: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.72,
          },
          '-=0.46',
        )
        .to(
          sweepLineRef.current,
          {
            autoAlpha: 1,
            scaleX: 1,
            duration: 0.28,
          },
          '-=0.08',
        )
        .to(
          bodyItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.56,
            stagger: 0.08,
          },
          '-=0.06',
        )
    }, heroRef)

    return () => ctx.revert()
  }, [heroDelay, shouldReduceMotion])

  return (
    <>
      <SEO
        title="Shisir Uparkoti | SHISIR.OS"
        description="SHISIR.OS is the personal developer workspace of Shisir Uparkoti, a full-stack developer from Nepal focused on backend-first systems, APIs, dashboards, databases, and practical web products."
        path="/"
      />

      <PageShell className="space-y-18 sm:space-y-24">
        <section
          ref={heroRef}
          className="relative pt-5 sm:pt-8 2xl:pl-[4.5rem]"
          style={shouldReduceMotion ? undefined : { visibility: 'hidden' }}
        >
          <p
            ref={sideLabelRef}
            className="side-label absolute left-0 top-10 hidden text-[10px] font-medium uppercase 2xl:block"
          >
            home.os / nepal / 2026
          </p>

          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.8fr)_minmax(240px,0.62fr)] xl:items-start xl:gap-10 2xl:gap-12">
            <div className="min-w-0">
              <p className="eyebrow text-[11px] font-medium">home.os</p>
              <h1 className="poster-heading mt-6 max-w-full text-[clamp(4rem,7.6vw,8.5rem)] font-bold text-[var(--text-primary)]">
                <span className="hero-line-shell block">
                  <span className="hero-line-mask block">
                    <span ref={shisirRef} className="hero-reveal-line block">
                      SHISIR
                    </span>
                  </span>
                </span>
                <span className="hero-line-shell block">
                  <span className="hero-line-mask block">
                    <span ref={uparkotiRef} className="hero-reveal-line block">
                      UPARKOTI
                    </span>
                  </span>
                </span>
              </h1>

              <div ref={sweepLineRef} className="hero-sweep-line mt-6 sm:mt-7" />

              <p
                ref={subtitleRef}
                className="mt-9 max-w-3xl text-lg leading-8 tracking-[-0.015em] text-[var(--text-primary)] sm:text-[1.55rem] sm:leading-10"
              >
                {profile.tagline}
              </p>
              <p
                ref={paragraphRef}
                className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg"
              >
                {profile.intro}
              </p>
              <p
                ref={identityLineRef}
                className="hero-identity-line mt-6 text-[11px] uppercase text-[var(--text-muted)] sm:text-[12px]"
              >
                {profile.identityLine}
              </p>

              <div ref={scrollHintRef} className="mt-10 flex items-center gap-4 sm:mt-12">
                <span className="mono-detail text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Scroll to explore
                </span>
                <motion.span
                  animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }
                  }
                  className="h-9 w-px bg-[var(--line-strong)]"
                />
              </div>
            </div>

            <div className="relative min-w-0 max-w-[16rem] xl:w-full xl:justify-self-end xl:pt-14">
              <WorkspaceGridBackground className="right-0 max-w-[15rem]" />

              <div ref={statusRef} className="route-line relative z-10 pt-5">
                <p className="eyebrow text-[11px] font-medium">workspace.log</p>
                <div className="mt-5 space-y-3">
                  {heroStatus.map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-5 border-b border-[var(--line)] pb-3">
                      <span className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        {item.label}
                      </span>
                      <span className="text-sm leading-7 text-[var(--text-primary)]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div ref={commandRef} className="route-line relative z-10 mt-7 pt-5">
                <p className="eyebrow text-[11px] font-medium">commands</p>
                <div className="mt-5 flex flex-col gap-3">
                  {heroCommands.map((item) => (
                    <Link key={item.to} to={item.to} className="command-link text-sm uppercase tracking-[0.12em]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="route-line pt-6"
        >
          <div className="grid gap-8 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
            <div className="min-w-0">
              <p className="eyebrow text-[11px] font-medium">featured.system</p>
              <h2 className="mt-4 font-['Space_Grotesk'] text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--text-primary)]">
                {sewaFiProject.name}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-primary)]">
                {sewaFiProject.summary}
              </p>
              <div className="mt-6 space-y-4">
                <p className="mono-detail text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  flow / {featuredFlow.join(' -> ')}
                </p>
                <p className="mono-detail text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  stack / {sewaFiProject.stack.join(' / ')}
                </p>
              </div>
              <div className="mt-6">
                <EditorialLink to={sewaFiProject.caseStudyUrl}>open case</EditorialLink>
              </div>
            </div>

            <SystemMap steps={featuredFlow} bordered={false} className="xl:pt-1" />
          </div>
        </motion.section>

        <section className="route-line pt-6">
          <p className="eyebrow text-[11px] font-medium">stack.preview</p>
          <div className="mt-6 grid gap-y-2 sm:mt-7 lg:grid-cols-2 lg:gap-x-12">
            {stackPreview.map((group, index) => (
              <motion.div
                key={group.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.52,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-[var(--line)] py-3 sm:py-4"
              >
                <div className="flex flex-col gap-2 sm:gap-2.5">
                  <p className="mono-detail text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {group.label}
                  </p>
                  <p className="text-[15px] leading-7 text-[var(--text-primary)] sm:text-base sm:leading-8">
                    {group.items.join(' / ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="route-line pt-10 sm:pt-12"
        >
          <p className="max-w-2xl font-['Space_Grotesk'] text-xl font-medium tracking-[-0.03em] text-[var(--text-primary)] sm:text-[1.7rem]">
            Want to see how I think through a real system?
          </p>
          <div className="mt-5 sm:mt-6">
            <EditorialLink to="/work/sewafi">read the SewaFi case study</EditorialLink>
          </div>
        </motion.section>
      </PageShell>
    </>
  )
}

export default Home
