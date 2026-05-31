import { MOTION_STORAGE_KEY, useMotionPreference } from '../../hooks/useMotionPreference'

const motionOptions = [
  { value: 'system', label: 'system' },
  { value: 'full', label: 'full' },
  { value: 'reduced', label: 'reduced' },
]

function MotionToggle() {
  const { motionPreference } = useMotionPreference()

  const handleModeChange = (nextMode) => {
    if (typeof window === 'undefined') {
      return
    }

    if (nextMode === 'system') {
      window.localStorage.removeItem(MOTION_STORAGE_KEY)
    } else {
      window.localStorage.setItem(MOTION_STORAGE_KEY, nextMode)
    }

    window.sessionStorage.clear()
    window.location.reload()
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <p className="mono-detail text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
        motion.mode
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {motionOptions.map((option) => {
          const isActive = motionPreference === option.value

          return (
            <button
              key={option.value}
              type="button"
              aria-label={`Set motion preference to ${option.label}`}
              aria-pressed={isActive}
              onClick={() => handleModeChange(option.value)}
              className={`mono-detail border-b px-0 pb-0.5 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                isActive
                  ? 'border-[var(--line-strong)] text-[var(--text-primary)]'
                  : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MotionToggle
