import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/seo/SEO'
import PageShell from '../components/layout/PageShell'
import PageIntro from '../components/ui/PageIntro'
import MinimalIdentity from '../components/ui/MinimalIdentity'
import { useMotionPreference } from '../hooks/useMotionPreference'
import { profile, useProfilePhoto } from '../data/profile'
import { currentFocus, journeyItems } from '../data/journey'

function About() {
  const { shouldReduceMotion } = useMotionPreference()
  const [brokenImages, setBrokenImages] = useState({})
  const workspaceImages = profile.workspaceImages ?? []

  return (
    <>
      <SEO
        title="About Shisir Uparkoti | SHISIR.OS"
        description="Learn about Shisir Uparkoti, a BIT student from Nepal focused on full-stack development, backend fundamentals, APIs, databases, authentication, and project architecture."
        path="/about"
      />

      <PageShell className="space-y-14 sm:space-y-18">
        <section className="grid gap-10 sm:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-30 lg:self-start lg:h-fit">
            <PageIntro
              eyebrow="home.os"
              title="about.shisir"
              description={profile.about}
              currentLine="profile.log / focus.list / journey.log"
            />
            <MinimalIdentity />
          </div>

          <div className="space-y-10 sm:space-y-12">
            <section className="route-line grid gap-6 pt-6 md:grid-cols-[0.78fr_1.22fr] md:gap-8">
              <p className="eyebrow text-[11px] font-medium">profile.log</p>
              <div>
                <p className="max-w-3xl text-lg leading-8 text-[var(--text-primary)] sm:text-[1.28rem] sm:leading-9">
                  {profile.profileLog}
                </p>
              </div>
            </section>

            <section className="route-line grid gap-6 pt-6 md:grid-cols-[0.78fr_1.22fr] md:gap-8">
              <p className="eyebrow text-[11px] font-medium">location.record</p>
              <div className="space-y-4">
                <div className="border-b border-[var(--line)] pb-4">
                  <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    base
                  </p>
                  <p className="mt-2 text-base leading-8 text-[var(--text-primary)] sm:text-lg">Morang, Nepal</p>
                </div>
                <div className="border-b border-[var(--line)] pb-4">
                  <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    current
                  </p>
                  <p className="mt-2 text-base leading-8 text-[var(--text-primary)] sm:text-lg">Dharan, Nepal</p>
                </div>
                <div className="border-b border-[var(--line)] pb-4">
                  <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    mode
                  </p>
                  <p className="mt-2 text-base leading-8 text-[var(--text-primary)] sm:text-lg">
                    Remote / Hybrid opportunities
                  </p>
                </div>
              </div>
            </section>

            <section className="route-line grid gap-6 pt-6 md:grid-cols-[0.78fr_1.22fr] md:gap-8">
              <p className="eyebrow text-[11px] font-medium">education.record</p>
              <div className="space-y-3">
                <p className="font-['Space_Grotesk'] text-xl font-medium tracking-[-0.03em] text-[var(--text-primary)] sm:text-[1.45rem]">
                  Bachelor in Information Technology
                </p>
                <div className="space-y-1.5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                  <p>Central Campus of Technology, Dharan</p>
                  <p>Expected completion: 2026</p>
                </div>
                <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  Focused on web development, backend systems, databases, and practical full-stack project building.
                </p>
              </div>
            </section>

            <section className="route-line grid gap-6 pt-6 md:grid-cols-[0.78fr_1.22fr] md:gap-8">
              <p className="eyebrow text-[11px] font-medium">focus.list</p>
              <div className="space-y-4">
                {currentFocus.map((item, index) => (
                  <motion.p
                    key={item}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-[var(--line)] pb-4 font-['Space_Grotesk'] text-lg font-medium tracking-[-0.03em] text-[var(--text-primary)]"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </section>

            <section className="route-line grid gap-6 pt-6 md:grid-cols-[0.78fr_1.22fr] md:gap-8">
              <p className="eyebrow text-[11px] font-medium">journey.log</p>
              <div className="space-y-6 sm:space-y-8">
                {journeyItems.map((item, index) => (
                  <motion.article
                    key={item.year}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-[var(--line)] pb-6"
                  >
                    <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      {item.year} // {item.title}
                    </p>
                    <p className="mt-3 text-base leading-8 text-[var(--text-primary)] sm:text-lg">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="route-line grid gap-6 pt-6 md:grid-cols-[0.78fr_1.22fr] md:gap-8">
              <p className="eyebrow text-[11px] font-medium">workspace.frames</p>
              <div className="grid gap-6 lg:grid-cols-2">
                {workspaceImages.map((image, index) => {
                  const shouldHidePhoto = image.src === profile.photo.src && !useProfilePhoto
                  const isBroken = shouldHidePhoto || brokenImages[image.src]

                  return (
                    <motion.figure
                      key={image.src}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.45,
                        delay: shouldReduceMotion ? 0 : index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="space-y-3"
                    >
                      {isBroken ? (
                        <div className="flex aspect-[4/5] items-center justify-center border border-[var(--line)] bg-[rgba(255,255,255,0.01)] px-5 text-center">
                          <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                            workspace frame unavailable
                          </p>
                        </div>
                      ) : (
                        <img
                          src={image.src}
                          alt={image.title}
                          loading="lazy"
                          onError={() =>
                            setBrokenImages((current) => ({
                              ...current,
                              [image.src]: true,
                            }))
                          }
                          className="aspect-[4/5] w-full border border-[var(--line)] object-cover"
                        />
                      )}
                      <figcaption className="border-t border-[var(--line)] pt-3">
                        <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                          {image.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{image.caption}</p>
                      </figcaption>
                    </motion.figure>
                  )
                })}
              </div>
            </section>
          </div>
        </section>
      </PageShell>
    </>
  )
}

export default About
