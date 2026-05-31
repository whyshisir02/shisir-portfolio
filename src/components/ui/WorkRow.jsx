import { motion } from 'framer-motion'
import { useMotionPreference } from '../../hooks/useMotionPreference'
import EditorialLink from './EditorialLink'

function WorkRow({ project, primaryLink, secondaryLinks = [], index }) {
  const { shouldReduceMotion } = useMotionPreference()

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { x: 4, y: -1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="route-line group grid gap-5 py-6 transition-colors duration-200 hover:border-[var(--line-strong)] sm:py-7 md:grid-cols-[88px_1.15fr_0.95fr] md:gap-8"
    >
      <p className="mono-detail text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-primary)]">
        {project.id}
      </p>

      <div>
        <p className="mono-detail text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          {project.osLabel ?? project.slug}
        </p>
        <h2 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--text-primary)] sm:text-3xl">
          {project.subtitle}
        </h2>
        {project.detailLine ? (
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:mt-4">
            {project.detailLine}
          </p>
        ) : null}
        {project.purpose ? (
          <p className="mono-detail mt-4 max-w-2xl text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
            proof / {project.purpose}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-['Space_Grotesk'] text-lg font-medium tracking-[-0.03em] text-[var(--text-primary)]">
          {project.name}
        </p>
        {project.summary ? <p className="text-sm leading-7 text-[var(--text-secondary)]">{project.summary}</p> : null}
        <p className="mono-detail text-[12px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
          stack / {project.stack.join(' / ')}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {primaryLink ? (
            <EditorialLink to={primaryLink.to} href={primaryLink.href}>
              {primaryLink.label}
            </EditorialLink>
          ) : null}
          {secondaryLinks.map((link) => (
            <EditorialLink key={link.label} to={link.to} href={link.href}>
              {link.label}
            </EditorialLink>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default WorkRow
