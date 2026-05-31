import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMotionPreference } from '../../hooks/useMotionPreference'

function EditorialLink({ to, href, children, className = '' }) {
  const { shouldReduceMotion } = useMotionPreference()
  const classes = `editorial-link text-sm font-medium sm:text-base ${className}`.trim()
  if (to) {
    return (
      <motion.div whileHover={shouldReduceMotion ? undefined : 'hover'} className="inline-flex">
        <Link to={to} className={classes}>
          <span>{children}</span>
          <motion.span
            className="editorial-link-arrow inline-flex"
            variants={{ hover: { x: 4, y: -4, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <ArrowUpRight size={15} />
          </motion.span>
        </Link>
      </motion.div>
    )
  }

  const external = href?.startsWith('http')

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={classes}
      whileHover={shouldReduceMotion ? undefined : { color: 'var(--accent)' }}
    >
      <span>{children}</span>
      <motion.span
        className="editorial-link-arrow inline-flex"
        initial={shouldReduceMotion ? undefined : { x: 0, y: 0 }}
        whileHover={shouldReduceMotion ? undefined : { x: 4, y: -4 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowUpRight size={15} />
      </motion.span>
    </motion.a>
  )
}

export default EditorialLink
