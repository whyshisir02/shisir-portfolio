const baseUrl = 'https://shisiruparkoti.com.np'

export const useProfilePhoto = false

export const profile = {
  name: 'Shisir Uparkoti',
  shortName: 'SHISIR.OS',
  title: 'Full-Stack Developer',
  tagline: 'Full-stack developer building backend-first systems.',
  location: 'BIT student from Nepal',
  intro:
    "BIT student from Nepal focused on APIs, authentication, dashboards, databases, and practical products that connect real workflows.",
  currentLine: 'status: building SewaFi | focus: backend fundamentals',
  identityLine: 'I build practical systems, not just pages.',
  focus:
    'I care about understanding how systems work, not only making the UI look good.',
  about:
    "I'm a BIT student from Nepal focused on becoming a confident full-stack developer with backend-first thinking. I'm currently building and improving practical systems like SewaFi while strengthening my fundamentals in APIs, databases, authentication, and project architecture.",
  focusAreas: [
    '[01] backend fundamentals',
    '[02] real project architecture',
    '[03] GitHub + LinkedIn presence',
    '[04] internship readiness',
  ],
  stackPreview: [
    { label: 'frontend', items: ['React', 'Vite', 'Tailwind'] },
    { label: 'backend', items: ['Node.js', 'Express', 'REST APIs'] },
    { label: 'database', items: ['PostgreSQL', 'Prisma'] },
    { label: 'workflow', items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Railway'] },
  ],
  photo: {
    src: '/profile/profile.jpg',
    alt: 'Portrait of Shisir Uparkoti',
  },
  contact: {
    intro: 'open to internship opportunities, collaboration, and practical web projects.',
    email: 'ccrpc64@gmail.com',
    github: 'https://github.com/whyshisir02',
    linkedin: 'https://www.linkedin.com/in/shisirupk061',
    resumeUrl: '/resume/Shisir-Uparkoti-Resume.pdf',
  },
  seo: {
    image: '',
    url: baseUrl,
    keywords: [
      'Shisir Uparkoti',
      'Full Stack Developer Nepal',
      'Backend Developer Nepal',
      'React Developer',
      'Node.js Developer',
      'BIT Student',
      'Portfolio',
    ],
  },
  navLinks: [
    { label: 'home.os', to: '/' },
    { label: 'about.shisir', to: '/about' },
    { label: 'work.systems', to: '/work' },
    { label: 'logs.index', to: '/logs' },
    { label: 'contact.link', to: '/contact' },
  ],
}
