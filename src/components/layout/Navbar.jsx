import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useMotionPreference } from '../../hooks/useMotionPreference'
import { profile } from '../../data/profile'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { shouldReduceMotion } = useMotionPreference()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(6,6,6,0.92)] backdrop-blur-sm">
      <nav className="page-shell flex min-h-18 items-center justify-between gap-6 py-4" aria-label="Primary navigation">
        <NavLink
          to="/"
          className="mono-detail text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-primary)] transition hover:text-[var(--text-primary)]"
        >
          SHISIR.OS
        </NavLink>

        <div className="hidden items-center gap-7 md:flex">
          {profile.navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link text-sm ${isActive ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--text-primary)] transition hover:border-[var(--line-strong)] md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -14 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="page-shell border-t border-[var(--line)] py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {profile.navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `nav-link text-base ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
