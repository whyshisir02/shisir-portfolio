import { motion } from 'framer-motion'
import { useMotionPreference } from '../../hooks/useMotionPreference'

function WorkspaceGridBackground({ className = '' }) {
  const { shouldReduceMotion } = useMotionPreference()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`pointer-events-none absolute inset-x-0 top-2 hidden h-[15.5rem] overflow-hidden xl:block ${className}`.trim()}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(242,242,238,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(242,242,238,0.05) 1px, transparent 1px),
            repeating-linear-gradient(
              to bottom,
              rgba(242,242,238,0.035) 0,
              rgba(242,242,238,0.035) 1px,
              transparent 1px,
              transparent 6px
            )
          `,
          backgroundSize: '2.75rem 100%, 100% 2.5rem, 100% 6px',
          backgroundPosition: 'right top, left top, left top',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.82), rgba(0,0,0,0.24))',
        }}
      />

      <span className="absolute left-0 top-0 h-4 w-px bg-[rgba(242,242,238,0.16)]" />
      <span className="absolute left-0 top-0 h-px w-4 bg-[rgba(242,242,238,0.16)]" />
      <span className="absolute right-0 top-0 h-4 w-px bg-[rgba(242,242,238,0.14)]" />
      <span className="absolute right-0 top-0 h-px w-4 -translate-x-full bg-[rgba(242,242,238,0.14)]" />
      <span className="absolute left-0 bottom-0 h-4 w-px bg-[rgba(242,242,238,0.12)]" />
      <span className="absolute left-0 bottom-0 h-px w-4 bg-[rgba(242,242,238,0.12)]" />
      <span className="absolute right-0 bottom-0 h-4 w-px bg-[rgba(242,242,238,0.1)]" />
      <span className="absolute bottom-0 right-0 h-px w-4 -translate-x-full bg-[rgba(242,242,238,0.1)]" />
    </motion.div>
  )
}

export default WorkspaceGridBackground
