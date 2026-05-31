import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMotionPreference } from '../../hooks/useMotionPreference'

export const INTRO_STORAGE_KEY = 'shisir-intro-seen'
export const INTRO_DURATION_MS = 1750

function IntroOverlay() {
  const { shouldReduceMotion } = useMotionPreference()
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.sessionStorage.getItem(INTRO_STORAGE_KEY) !== 'true'
  })

  useEffect(() => {
    if (shouldReduceMotion || !visible) {
      return undefined
    }
    window.sessionStorage.setItem(INTRO_STORAGE_KEY, 'true')

    const timeoutId = window.setTimeout(() => {
      setVisible(false)
    }, INTRO_DURATION_MS)

    return () => window.clearTimeout(timeoutId)
  }, [shouldReduceMotion, visible])

  return (
    <AnimatePresence>
      {!shouldReduceMotion && visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(5,7,12,0.98)] px-6"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="mono-detail text-[clamp(1.4rem,3vw,2rem)] font-medium uppercase tracking-[0.12em] text-[var(--text-primary)]">
              SHISIR.OS initializing...
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-sm">
              developer workspace / backend-first systems
            </p>
            {/* Test again in DevTools:
                For deployed animation testing:
                localStorage.setItem('shisir-motion', 'full')
                sessionStorage.clear()
                location.reload()

                localStorage.setItem('shisir-motion', 'reduced')
                sessionStorage.clear()
                location.reload()

                localStorage.removeItem('shisir-motion')
                sessionStorage.clear()
                location.reload()

                sessionStorage.clear()
                location.reload()
            */}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default IntroOverlay
