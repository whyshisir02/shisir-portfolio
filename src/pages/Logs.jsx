import { motion } from 'framer-motion'
import EditorialLink from '../components/ui/EditorialLink'
import SEO from '../components/seo/SEO'
import PageShell from '../components/layout/PageShell'
import PageIntro from '../components/ui/PageIntro'
import { useMotionPreference } from '../hooks/useMotionPreference'
import { logs } from '../data/logs'

function Logs() {
  const { shouldReduceMotion } = useMotionPreference()

  return (
    <>
      <SEO
        title="Developer Logs | Shisir Uparkoti"
        description="Developer logs and learning notes by Shisir Uparkoti on backend confidence, practical full-stack development, project architecture, and building SHISIR.OS."
        path="/logs"
      />

      <PageShell className="space-y-12 sm:space-y-14">
        <PageIntro
          eyebrow="home.os"
          title="logs.index"
          description="Developer logs, project notes, and learning reflections from my full-stack journey."
          currentLine="project log / learning log / build log"
        />

        <section className="route-line pt-3 sm:pt-4">
          {logs.map((log, index) => (
            <motion.article
              key={log.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="route-line grid gap-5 py-6 sm:py-7 md:grid-cols-[92px_1.2fr_0.9fr] md:gap-8"
            >
              <p className="mono-detail text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                {String(index + 1).padStart(2, '0')}
              </p>

              <div className="min-w-0">
                <p className="mono-detail text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {log.slug}
                </p>
                <h2 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl">
                  {log.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  {log.excerpt}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="mono-detail text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {log.category} / {log.status} / {log.date}
                </p>
                <EditorialLink to={`/logs/${log.slug}`} className="mono-detail text-[12px] uppercase tracking-[0.16em]">
                  open log
                </EditorialLink>
              </div>
            </motion.article>
          ))}
        </section>
      </PageShell>
    </>
  )
}

export default Logs
