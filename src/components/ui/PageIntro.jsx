import { motion } from 'framer-motion'
import { useMotionPreference } from '../../hooks/useMotionPreference'

function PageIntro({ title, description, eyebrow, currentLine, className = '' }) {
  const { shouldReduceMotion } = useMotionPreference()

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      className={className}
    >
      {eyebrow ? <p className="eyebrow text-[11px] font-medium">{eyebrow}</p> : null}
      <h1 className="mt-4 font-['Space_Grotesk'] text-[clamp(2.8rem,9vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-balance text-[var(--text-primary)]">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      ) : null}
      {currentLine ? (
        <p className="mono-detail mt-6 text-[12px] uppercase tracking-[0.16em] text-[var(--text-muted)] sm:text-[13px]">
          {currentLine}
        </p>
      ) : null}
    </motion.section>
  )
}

export default PageIntro
