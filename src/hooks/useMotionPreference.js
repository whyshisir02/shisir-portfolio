import { useEffect, useState } from 'react'

export const MOTION_STORAGE_KEY = 'shisir-motion'

function getStoredPreference() {
  if (typeof window === 'undefined') {
    return null
  }

  const value = window.localStorage.getItem(MOTION_STORAGE_KEY)
  return value === 'full' || value === 'reduced' ? value : null
}

function getSystemReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getMotionSnapshot() {
  const storedPreference = getStoredPreference()
  const motionPreference = storedPreference ?? 'full'
  const shouldReduceMotion = motionPreference === 'reduced'
  const systemReducedMotion = getSystemReducedMotion()

  return { shouldReduceMotion, motionPreference, systemReducedMotion }
}

function applyMotionAttributes(snapshot) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.dataset.motionPreference = snapshot.motionPreference
  document.documentElement.dataset.motionState = snapshot.shouldReduceMotion ? 'reduced' : 'full'
}

export function useMotionPreference() {
  const [snapshot, setSnapshot] = useState(() => {
    const initialSnapshot = getMotionSnapshot()
    applyMotionAttributes(initialSnapshot)
    return initialSnapshot
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const handleChange = () => {
      const nextSnapshot = getMotionSnapshot()
      applyMotionAttributes(nextSnapshot)
      setSnapshot(nextSnapshot)
    }

    handleChange()
    window.addEventListener('storage', handleChange)
    const mediaQuery =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null

    mediaQuery?.addEventListener('change', handleChange)

    return () => {
      mediaQuery?.removeEventListener('change', handleChange)
      window.removeEventListener('storage', handleChange)
    }
  }, [])

  return snapshot
}
