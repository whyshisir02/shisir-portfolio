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
  const motionPreference = getStoredPreference() ?? 'system'
  const shouldReduceMotion =
    motionPreference === 'full'
      ? false
      : motionPreference === 'reduced'
        ? true
        : getSystemReducedMotion()

  return { shouldReduceMotion, motionPreference }
}

export function useMotionPreference() {
  const [snapshot, setSnapshot] = useState(getMotionSnapshot)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => {
      setSnapshot(getMotionSnapshot())
    }

    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('storage', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('storage', handleChange)
    }
  }, [])

  return snapshot
}
