import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/seo/SEO'
import PageShell from '../components/layout/PageShell'
import { profile } from '../data/profile'
import { useMotionPreference } from '../hooks/useMotionPreference'
import { getLogBySlug } from '../data/logs'

function LogDetail() {
  const { shouldReduceMotion } = useMotionPreference()
  const { slug } = useParams()
  const log = getLogBySlug(slug ?? '')

  if (!log) {
    return (
      <>
        <SEO
          title="Log Not Found | Shisir Uparkoti"
          description="Requested developer log could not be found."
          path={`/logs/${slug ?? ''}`}
        />

        <PageShell className="space-y-10 sm:space-y-12">
          <section className="route-line pt-6">
            <p className="eyebrow text-[11px] font-medium">logs.index</p>
            <h1 className="mt-4 font-['Space_Grotesk'] text-[clamp(2.8rem,8vw,5rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--text-primary)]">
              log not found
            </h1>
            <div className="mt-8">
              <Link
                to="/logs"
                className="mono-detail inline-flex text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              >
                &larr; back to logs
              </Link>
            </div>
          </section>
        </PageShell>
      </>
    )
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: log.title,
    description: log.excerpt,
    datePublished: log.date,
    dateModified: log.date,
    url: `${profile.seo.url}/logs/${log.slug}`,
    author: {
      '@type': 'Person',
      name: profile.name,
      url: profile.seo.url,
    },
  }

  return (
    <>
      <SEO
        title={`${log.title} | Shisir Uparkoti`}
        description={log.excerpt}
        path={`/logs/${log.slug}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <PageShell className="space-y-10 sm:space-y-12">
        <article className="mx-auto max-w-[52rem]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <Link
              to="/logs"
              className="mono-detail inline-flex text-[12px] uppercase tracking-[0.16em] text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              &larr; back to logs
            </Link>

            <div className="route-line pt-6">
              <p className="eyebrow text-[11px] font-medium">logs.index</p>
              <h1 className="mt-4 font-['Space_Grotesk'] text-[clamp(2.8rem,7vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--text-primary)]">
                {log.title}
              </h1>
              <p className="mono-detail mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                <span>{log.category}</span>
                <span>{log.status}</span>
                <span>{log.date}</span>
                <span>{log.readTime}</span>
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)] sm:text-[1.12rem]">
                {log.excerpt}
              </p>
            </div>
          </motion.div>

          <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
            {log.sections.map((section, index) => (
              <motion.section
                key={section.heading}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.46,
                  delay: shouldReduceMotion ? 0 : index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="route-line pt-6"
              >
                <h2 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-[2rem]">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list?.length ? (
                  <ul className="mt-6 space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-8 text-[var(--text-primary)] sm:text-lg">
                        <span className="mono-detail text-[var(--text-muted)]">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.section>
            ))}
          </div>
        </article>
      </PageShell>
    </>
  )
}

export default LogDetail
