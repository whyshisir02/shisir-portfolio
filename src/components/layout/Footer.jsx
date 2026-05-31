import { profile } from '../../data/profile'
import MotionToggle from '../ui/MotionToggle'

function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8 sm:py-10">
      <div className="page-shell flex flex-col gap-5 text-sm text-[var(--text-secondary)]">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="mono-detail leading-6">
            Shisir Uparkoti / Full-stack developer / 2026
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={profile.contact.github} className="editorial-link text-sm text-[var(--text-secondary)]">
              GitHub
            </a>
            <a href={profile.contact.linkedin} className="editorial-link text-sm text-[var(--text-secondary)]">
              LinkedIn
            </a>
            <a href={profile.contact.resumeUrl} className="editorial-link text-sm text-[var(--text-secondary)]">
              Resume
            </a>
          </div>
        </div>

        <MotionToggle />
      </div>
    </footer>
  )
}

export default Footer
