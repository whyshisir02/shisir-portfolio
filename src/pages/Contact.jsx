import { motion } from 'framer-motion'
import SEO from '../components/seo/SEO'
import PageShell from '../components/layout/PageShell'
import PageIntro from '../components/ui/PageIntro'
import EditorialLink from '../components/ui/EditorialLink'
import { useMotionPreference } from '../hooks/useMotionPreference'
import { profile } from '../data/profile'

function Contact() {
  const { shouldReduceMotion } = useMotionPreference()
  const contactItems = [
    { label: 'email', value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { label: 'github', value: profile.contact.github, href: profile.contact.github },
    { label: 'linkedin', value: profile.contact.linkedin, href: profile.contact.linkedin },
    { label: 'resume', value: profile.contact.resumeUrl, href: profile.contact.resumeUrl },
  ]

  return (
    <>
      <SEO
        title="Contact Shisir Uparkoti | SHISIR.OS"
        description="Contact Shisir Uparkoti for internship opportunities, collaboration, and practical full-stack web projects."
        path="/contact"
      />

      <PageShell className="space-y-10 sm:space-y-12">
        <PageIntro
          eyebrow="home.os"
          title="contact.link"
          description={profile.contact.intro}
          currentLine="email / github / linkedin / resume"
        />

        <section className="route-line grid gap-6 pt-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow text-[11px] font-medium">open.channel</p>
          <div className="max-w-2xl space-y-5 sm:space-y-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid gap-2 border-b border-[var(--line)] pb-4 sm:grid-cols-[88px_1fr] sm:items-start"
              >
                <p className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {item.label}
                </p>
                <EditorialLink href={item.href}>{item.value}</EditorialLink>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="route-line pt-8 sm:pt-10"
        >
          <p className="max-w-2xl font-['Space_Grotesk'] text-xl font-medium tracking-[-0.03em] text-[var(--text-primary)] sm:text-[1.7rem]">
            I&apos;m not trying to look like a senior developer.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            I&apos;m trying to become a reliable one by building real systems.
          </p>
        </motion.section>
      </PageShell>
    </>
  )
}

export default Contact
