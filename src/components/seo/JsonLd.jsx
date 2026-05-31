import { Helmet } from 'react-helmet-async'
import { profile } from '../../data/profile'

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    url: profile.seo.url,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Nepal',
    },
    description:
      'Full-stack developer focused on backend-first systems, APIs, dashboards, databases, and practical web products.',
    knowsAbout: [
      'React',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'REST APIs',
      'Full-Stack Development',
      'Backend Development',
    ],
    sameAs: [profile.contact.github, profile.contact.linkedin],
  }

  if (profile.seo.image) {
    schema.image = profile.seo.image.startsWith('http')
      ? profile.seo.image
      : `${profile.seo.url}${profile.seo.image}`
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default JsonLd
