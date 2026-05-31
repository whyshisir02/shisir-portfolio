import { Fragment, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useMotionPreference } from '../../hooks/useMotionPreference'

const defaultSteps = ['customer', 'booking', 'dispatch', 'provider', 'admin']

function SystemMap({ steps = defaultSteps, className = '', bordered = true }) {
  const { shouldReduceMotion } = useMotionPreference()
  const shellRef = useRef(null)
  const frameRef = useRef(0)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isFinePointer, setIsFinePointer] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(pointer: fine)')
    const updatePointer = () => {
      setIsFinePointer(mediaQuery.matches)
    }

    updatePointer()
    mediaQuery.addEventListener('change', updatePointer)

    return () => {
      mediaQuery.removeEventListener('change', updatePointer)
    }
  }, [])

  useEffect(() => {
    const element = shellRef.current

    if (!element || shouldReduceMotion || !isFinePointer) {
      setOffset({ x: 0, y: 0 })
      return undefined
    }

    const handlePointerMove = (event) => {
      const bounds = element.getBoundingClientRect()
      const nextX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
      const nextY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = window.requestAnimationFrame(() => {
        element.style.setProperty('--map-x', `${event.clientX - bounds.left}px`)
        element.style.setProperty('--map-y', `${event.clientY - bounds.top}px`)
        setOffset({ x: nextX, y: nextY })
      })
    }

    const handlePointerLeave = () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = window.requestAnimationFrame(() => {
        element.style.setProperty('--map-x', '50%')
        element.style.setProperty('--map-y', '50%')
        setOffset({ x: 0, y: 0 })
      })
    }

    element.addEventListener('pointermove', handlePointerMove, { passive: true })
    element.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      element.removeEventListener('pointermove', handlePointerMove)
      element.removeEventListener('pointerleave', handlePointerLeave)
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isFinePointer, shouldReduceMotion])

  return (
    <motion.div
      ref={shellRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`system-map-shell rounded-sm pt-6 ${bordered ? 'route-line' : ''} ${className}`.trim()}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-[11px] font-medium">system.map</p>
        <p className="mono-detail text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
          {steps.join(' -> ')}
        </p>
      </div>

      <div className="mt-7 flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
        {steps.map((step, index) => {
          const xShift = shouldReduceMotion || !isFinePointer ? 0 : offset.x * (index - (steps.length - 1) / 2) * 4
          const yShift = shouldReduceMotion || !isFinePointer ? 0 : offset.y * (index % 2 === 0 ? -3 : 3)

          return (
            <Fragment key={step}>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.42,
                  delay: shouldReduceMotion ? 0 : index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="md:min-w-0 md:flex-1"
              >
                <div
                  className="system-map-node flex min-h-[4.25rem] items-center gap-3 px-4 py-3 md:min-h-[8rem] md:flex-col md:items-start md:justify-between md:px-5 md:py-5"
                  style={{
                    transform: `translate3d(${xShift}px, ${yShift}px, 0)`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--text-primary)]" />
                    <span className="mono-detail text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="font-['Space_Grotesk'] text-base font-medium tracking-[-0.02em] text-[var(--text-primary)] sm:text-lg">
                    {step}
                  </p>
                </div>
              </motion.div>

              {index < steps.length - 1 ? (
                <motion.span
                  initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.3, scaleY: 0.3 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, scaleX: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.36,
                    delay: shouldReduceMotion ? 0 : index * 0.09 + 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="system-map-connector ml-5 h-6 w-px shrink-0 md:ml-0 md:h-px md:flex-1 md:w-auto"
                />
              ) : null}
            </Fragment>
          )
        })}
      </div>
    </motion.div>
  )
}

export default SystemMap
