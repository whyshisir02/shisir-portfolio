const baseUrl = 'https://shisiruparkoti.com.np'

export const useProfilePhoto = true

export const profile = {
  name: 'Shisir Uparkoti',
  shortName: 'SHISIR.OS',
  title: 'Full-Stack Developer',
  tagline: 'Full-stack developer building backend-first systems.',
  location: 'BIT student from Nepal',
  intro:
    'Shisir Uparkoti is a full-stack developer from Nepal focused on APIs, authentication, dashboards, databases, and practical web products.',
  currentLine: 'status: building backend-first systems | focus: architecture fundamentals',
  identityLine: 'I build practical systems, not just pages.',
  focus: 'Backend-first systems and practical full-stack projects.',
  about:
    "I'm a BIT student from Nepal focused on becoming a confident full-stack developer with backend-first thinking. I care about APIs, authentication, databases, dashboards, deployment, and clean project structure.",
  profileLog:
    'I learn best by building practical systems and understanding how each part connects: frontend flows, backend APIs, database models, deployment, and debugging. My goal is to become reliable enough to build useful web products with clear structure and better thinking.',
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
    src: '/profile/profile.png',
    alt: 'Portrait of Shisir Uparkoti',
  },
  workspaceImages: [
    {
      src: '/profile/profile.png',
      title: 'focus mode',
      caption: 'Working through backend structure, APIs, and full-stack project flow.',
    },
    {
      src: '/profile/workspace.png',
      title: 'build mode',
      caption: 'Small notes, code decisions, and improvements that compound over time.',
    },
  ],
  contact: {
    intro: 'open to backend/full-stack internship opportunities, collaboration, and practical web projects.',
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
