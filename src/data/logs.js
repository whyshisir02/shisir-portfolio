export const logs = [
  {
    slug: 'building-sewafi',
    title: 'Building SewaFi: What I Learned From Creating a Home Services Booking System',
    date: '2026',
    category: 'project log',
    status: 'draft',
    readTime: '5 min read',
    excerpt:
      'A practical reflection on building a home services booking and dispatch system around customer, provider, and admin workflows.',
    sections: [
      {
        heading: "Why I'm writing this",
        body: [
          'SewaFi became the first project where I had to think beyond screens and components. It pushed me to understand how a real service workflow moves between customer actions, provider actions, admin decisions, and backend data.',
          'I wanted to document it because this project helped me move from building isolated features to thinking about a product as a connected system. That shift matters to me more than simply finishing another student project.',
        ],
      },
      {
        heading: 'What I worked on',
        body: [
          'My work focused on the full-stack structure of the system. That included role-based authentication, customer, provider, and admin dashboards, booking lifecycle updates, service management, API integration, and deployment setup.',
          'The project helped me understand how each role needs a different interface while still depending on the same backend logic and database structure.',
        ],
        list: [
          'Role-based authentication flow',
          'Customer, provider, and admin dashboards',
          'Booking lifecycle and status updates',
          'Provider service and area management',
          'Backend API integration',
          'Deployment setup and debugging',
        ],
      },
      {
        heading: 'Backend and full-stack challenges',
        body: [
          'One of the hardest parts was keeping frontend routes and states aligned with backend API contracts. It forced me to think more carefully about request shapes, response handling, and what each role was allowed to do.',
          'Deployment also taught me a lot. I had to debug issues related to CORS, environment variables, API mismatches, and the differences between local development and production behavior.',
        ],
      },
      {
        heading: 'What I learned',
        body: [
          'SewaFi made backend concepts feel more practical. Instead of learning routes, controllers, and database logic in isolation, I had to connect them to user actions and system states.',
          'It also showed me that building confidence comes from resolving real friction, not just following tutorials. I learned more by debugging broken flows and deployment problems than by building something visually polished too early.',
        ],
        list: [
          'How to structure a fuller React + API workflow',
          'How role-based UI depends on backend rules and data flow',
          'Why booking and dispatch logic needs clearer thinking before coding',
          'Why deployment debugging is part of real full-stack work',
        ],
      },
      {
        heading: 'What I would improve next',
        body: [
          'If I continue working on SewaFi, I want to improve the consistency of API contracts, strengthen error handling, and make the booking and dispatch states easier to track.',
          'I would also like to make the codebase cleaner from the beginning by separating responsibilities more clearly across frontend pages, backend routes, and shared data logic.',
        ],
      },
    ],
  },
  {
    slug: 'backend-confidence',
    title: 'Rebuilding Backend Confidence as a Full-Stack Student',
    date: '2026',
    category: 'learning log',
    status: 'draft',
    readTime: '4 min read',
    excerpt:
      'Notes on strengthening backend fundamentals through APIs, databases, authentication, deployment, and real projects.',
    sections: [
      {
        heading: 'Why backend confidence matters to me',
        body: [
          'I care about backend confidence because I do not want to only make interfaces look clean. I want to understand how requests move, how data is stored, how authentication works, and how a real application behaves after deployment.',
          'For me, backend confidence does not mean pretending to know everything. It means being comfortable enough to design, connect, debug, and improve a practical system step by step.',
        ],
      },
      {
        heading: 'What I already understand',
        body: [
          'I am more comfortable now with the foundations than I was before. I can work with routes, controllers, API requests, role-based logic, and the connection between frontend workflows and backend responses.',
          'Projects like SewaFi helped me make these ideas more real instead of keeping them as small isolated exercises.',
        ],
        list: [
          'Basic API structure with routes and controllers',
          'Authentication flow and protected actions',
          'Connecting frontend forms and pages to backend data',
          'Deployment basics and environment configuration',
        ],
      },
      {
        heading: 'What I still need to improve',
        body: [
          'I still want stronger confidence in validation, error handling, cleaner controller structure, and more consistent database thinking. I also want to improve how I plan API contracts before implementation.',
          'Another important area is debugging production issues more calmly. Local code that works is not enough if I cannot diagnose deployment differences clearly.',
        ],
      },
      {
        heading: "How I'm practicing",
        body: [
          'My practice is project-based because that is where I learn best. I keep returning to APIs, authentication, deployment, and data flow through practical work rather than trying to separate theory from implementation.',
          'That means writing smaller backend exercises, improving existing projects, and documenting what breaks so I understand the reason instead of just patching the symptom.',
        ],
        list: [
          'Building and revisiting full-stack project flows',
          'Practicing routes, controllers, validation, and auth',
          'Reviewing deployment issues and environment setup',
          'Improving project structure instead of only adding features',
        ],
      },
      {
        heading: 'My next focus',
        body: [
          'My next focus is becoming more consistent with backend fundamentals: better route structure, clearer controller logic, stronger validation, and more confidence with databases and deployment.',
          'I want that progress to show through real projects, because that feels more honest and more useful than trying to look advanced too early.',
        ],
      },
    ],
  },
  {
    slug: 'shisir-os-portfolio',
    title: 'Why I Built SHISIR.OS as My Developer Portfolio',
    date: '2026',
    category: 'build log',
    status: 'draft',
    readTime: '4 min read',
    excerpt:
      'How I turned my portfolio into a minimal developer workspace instead of a generic landing page.',
    sections: [
      {
        heading: "Why I didn't want a generic portfolio",
        body: [
          'A lot of developer portfolios feel interchangeable. They often follow the same landing-page structure, the same safe gradients, and the same polished claims that do not say much about how the person actually thinks.',
          'I wanted my portfolio to feel more personal and more honest. It should reflect that I care about systems, structure, and practical growth rather than trying to look like a finished senior engineer.',
        ],
      },
      {
        heading: 'What SHISIR.OS means',
        body: [
          'SHISIR.OS is my way of turning a portfolio into a personal developer workspace. The idea is not to imitate a real operating system too literally, but to give the site a stronger identity that matches how I think about code, projects, and iteration.',
          'The name also helps the portfolio feel less like a marketing landing page and more like a working environment where projects, logs, and case studies live together.',
        ],
      },
      {
        heading: 'Design choices',
        body: [
          'I kept the interface black and white so typography, spacing, and layout would do most of the work. That decision made the site feel calmer and less decorative, which matches the developer workspace idea better.',
          'I also avoided colorful UI tricks, fake stats, and heavy effects because I wanted the portfolio to feel intentional rather than attention-seeking.',
        ],
        list: [
          'Black-and-white theme',
          'Mono labels and editorial spacing',
          'Minimal navigation and file-style naming',
          'Case-study-first project presentation',
        ],
      },
      {
        heading: 'Technical structure',
        body: [
          'The portfolio is built with React and Vite, with React Router for page structure, Framer Motion for transitions and reveal behavior, GSAP for the Home hero sequence, and a simple SEO setup for page metadata and schema.',
          'I also wanted the project structure itself to stay readable, so data files, route pages, and shared UI components are separated in a way that is easy to revisit and improve later.',
        ],
      },
      {
        heading: 'What I want to improve next',
        body: [
          'I want to keep improving the writing quality, project proof, and responsiveness of the site. The more honest and concrete the portfolio becomes, the more useful it is as a representation of my actual growth.',
          'I also want the logs and case studies to become a stronger part of the portfolio so it shows not only what I built, but also how I think through problems and learn from them.',
        ],
      },
    ],
  },
]

export function getLogBySlug(slug) {
  return logs.find((log) => log.slug === slug)
}
