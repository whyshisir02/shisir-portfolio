import { useEffect, useRef } from 'react'
import { useMotionPreference } from '../../hooks/useMotionPreference'

function InteractiveBackdrop() {
  const { shouldReduceMotion } = useMotionPreference()
  const backdropRef = useRef(null)
  const isFinePointer =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

  useEffect(() => {
    if (shouldReduceMotion || !isFinePointer) {
      return undefined
    }

    const element = backdropRef.current
    if (!element) {
      return undefined
    }

    let frameId = 0
    let x = window.innerWidth * 0.55
    let y = window.innerHeight * 0.22

    const updatePosition = () => {
      frameId = 0
      element.style.setProperty('--mouse-x', `${x}px`)
      element.style.setProperty('--mouse-y', `${y}px`)
    }

    const handlePointerMove = (event) => {
      x = event.clientX
      y = event.clientY

      if (!frameId) {
        frameId = window.requestAnimationFrame(updatePosition)
      }
    }

    updatePosition()
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [isFinePointer, shouldReduceMotion])

  if (shouldReduceMotion || !isFinePointer) {
    return null
  }

  return (
    <div
      ref={backdropRef}
      className="pointer-events-none fixed inset-0 z-0 block"
      style={{
        '--mouse-x': '55vw',
        '--mouse-y': '22vh',
        background:
          'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.08), transparent 30rem)',
      }}
      aria-hidden="true"
    />
  )
}

export default InteractiveBackdrop
