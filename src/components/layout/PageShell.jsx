import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import JsonLd from '../seo/JsonLd'
import { useMotionPreference } from '../../hooks/useMotionPreference'

function PageShell({ children, className = '' }) {
  const { shouldReduceMotion } = useMotionPreference()
  const location = useLocation()

  return (
    <>
      <JsonLd />
      <motion.main
        key={location.pathname}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`page-shell pb-20 pt-10 sm:pb-24 sm:pt-14 ${className}`.trim()}
      >
        {children}
      </motion.main>
    </>
  )
}

export default PageShell
