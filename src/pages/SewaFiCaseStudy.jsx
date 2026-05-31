import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/seo/SEO'
import PageShell from '../components/layout/PageShell'
import PageIntro from '../components/ui/PageIntro'
import EditorialLink from '../components/ui/EditorialLink'
import { useMotionPreference } from '../hooks/useMotionPreference'
import { sewaFiProject } from '../data/projects'

function SewaFiCaseStudy() {
  const { shouldReduceMotion } = useMotionPreference()
  const [brokenImages, setBrokenImages] = useState({})

  if (!sewaFiProject) {
    return null
  }

  const sectionTransition = (index) => ({
    duration: 0.55,
    delay: shouldReduceMotion ? 0 : index * 0.08,
    ease: [0.22, 1, 0.36, 1],
  })

  const sectionLabelClass = 'mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]'
  const bodyClass = 'text-lg leading-8 text-[var(--text-primary)]'

  return (
    <>
      <SEO
        title="SewaFi Case Study | Shisir Uparkoti"
        description="A case study of SewaFi, a home services booking and dispatch system built around customer, provider, and admin workflows using React, Node.js, Express, PostgreSQL, Prisma, and Socket.IO."
        path="/work/sewafi"
      />

      <PageShell className="space-y-14 sm:space-y-18">
        <PageIntro
          eyebrow="work.systems"
          title="sewafi.case"
          description="Developer workspace case study for SewaFi."
          currentLine="booking / dispatch / dashboards / backend APIs"
        />

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(0)}
          className="route-line space-y-8 pt-6"
        >
          <div className="space-y-3">
            <p className="eyebrow text-[11px] font-medium">project.header</p>
            <h2 className="font-['Space_Grotesk'] text-[clamp(2.8rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--text-primary)]">
              {sewaFiProject.name}
            </h2>
            <p className="text-lg leading-8 text-[var(--text-secondary)]">{sewaFiProject.subtitle}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {sewaFiProject.metadata.map((item, index) => (
              <motion.div
                key={item.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-[var(--line)] pb-4"
              >
                <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--text-primary)]">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(1)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>01 / overview</p>
          <p className={bodyClass}>{sewaFiProject.overview}</p>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(2)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>02 / problem</p>
          <p className={bodyClass}>{sewaFiProject.problem}</p>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(3)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>03 / my role</p>
          <div>
            <p className={bodyClass}>{sewaFiProject.role}</p>
            <div className="mt-8 border-l border-[var(--line-strong)] pl-5">
              <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                what i worked on
              </p>
              <div className="mt-4 space-y-3">
                {sewaFiProject.workedOn.map((item, index) => (
                  <motion.p
                    key={item}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.42,
                      delay: shouldReduceMotion ? 0 : index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-base leading-7 text-[var(--text-secondary)]"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="mt-8 border-l border-[var(--line-strong)] pl-5">
              <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                challenges solved
              </p>
              <div className="mt-4 space-y-3">
                {sewaFiProject.challengesSolved.map((item, index) => (
                  <motion.p
                    key={item}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.42,
                      delay: shouldReduceMotion ? 0 : index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-base leading-7 text-[var(--text-secondary)]"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="mt-8 border-l border-[var(--line-strong)] pl-5">
              <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                what i learned
              </p>
              <div className="mt-4 space-y-3">
                {sewaFiProject.learned.map((item, index) => (
                  <motion.p
                    key={item}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.42,
                      delay: shouldReduceMotion ? 0 : index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-base leading-7 text-[var(--text-secondary)]"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(4)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>04 / system flow</p>
          <div className="space-y-0">
            {sewaFiProject.flowSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.42,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col"
              >
                <div className="border-b border-[var(--line)] py-4">
                  <p className="font-['Space_Grotesk'] text-lg font-medium tracking-[-0.03em] text-[var(--text-primary)]">
                    {step}
                  </p>
                </div>
                {index < sewaFiProject.flowSteps.length - 1 ? (
                  <div className="flex h-8 items-center">
                    <span className="ml-2 h-full w-px bg-[var(--line-strong)]" />
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(5)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>05 / screenshots</p>
          <div className="grid gap-6 md:grid-cols-2">
            {sewaFiProject.screenshots.map((shot, index) => {
              const isBroken = brokenImages[shot.src]

              return (
                <motion.figure
                  key={shot.src}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.42,
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="space-y-3"
                >
                  {isBroken ? (
                    <div className="flex aspect-[16/10] items-center justify-center border border-[var(--line)] bg-[rgba(255,255,255,0.01)] px-5 text-center">
                      <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        Screenshot not available yet
                      </p>
                    </div>
                  ) : (
                    <img
                      src={shot.src}
                      alt={`SewaFi ${shot.title} screenshot`}
                      onError={() =>
                        setBrokenImages((current) => ({
                          ...current,
                          [shot.src]: true,
                        }))
                      }
                      className="aspect-[16/10] w-full border border-[var(--line)] object-cover"
                      loading="lazy"
                    />
                  )}
                  <figcaption>
                    <p className="font-['Space_Grotesk'] text-lg font-medium tracking-[-0.03em] text-[var(--text-primary)]">
                      {shot.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      {shot.description}
                    </p>
                  </figcaption>
                </motion.figure>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(6)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>06 / core modules</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {sewaFiProject.coreModules.map((item, index) => (
              <motion.p
                key={item}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.42,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-[var(--line)] pb-3 font-['Space_Grotesk'] text-base font-medium tracking-[-0.02em] text-[var(--text-primary)]"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(7)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>07 / tech stack</p>
          <p className={bodyClass}>{sewaFiProject.techStack.join(' / ')}</p>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(8)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>08 / reports</p>
          <div className="flex flex-col gap-4">
            {sewaFiProject.reports.map((report) => (
              <EditorialLink key={report.label} href={report.href}>
                {report.label}
              </EditorialLink>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition(9)}
          className="route-line grid gap-8 pt-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <p className={sectionLabelClass}>09 / links</p>
          <div className="flex flex-col gap-4">
            <EditorialLink href={sewaFiProject.liveUrl}>Live Demo</EditorialLink>
            <EditorialLink href={sewaFiProject.githubUrl}>GitHub</EditorialLink>
          </div>
        </motion.section>
      </PageShell>
    </>
  )
}

export default SewaFiCaseStudy
