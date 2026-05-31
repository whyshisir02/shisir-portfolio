import { useState } from 'react'
import { profile, useProfilePhoto } from '../../data/profile'

function MinimalIdentity() {
  const [imageFailed, setImageFailed] = useState(false)
  const showPhoto = useProfilePhoto && !imageFailed

  return (
    <div className="route-line pt-6">
      <div className="flex items-start gap-4 border-b border-[var(--line)] pb-6">
        {showPhoto ? (
          <img
            src={profile.photo.src}
            alt={profile.photo.alt}
            onError={() => setImageFailed(true)}
            className="h-16 w-16 rounded-sm object-cover"
          />
        ) : (
          <div className="mono-detail flex h-16 w-16 shrink-0 items-center justify-center border border-[var(--line)] text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-primary)]">
            SU
          </div>
        )}

        <div className="min-w-0">
          <p className="font-['Space_Grotesk'] text-lg font-medium text-[var(--text-primary)]">
            {profile.name}
          </p>
          <p className="mono-detail mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {profile.title} / Nepal
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">{profile.focus}</p>
        </div>
      </div>
    </div>
  )
}

export default MinimalIdentity
