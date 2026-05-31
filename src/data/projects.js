export const projects = [
  {
    id: '01',
    slug: 'sewafi',
    osLabel: 'sewafi.system',
    name: 'SewaFi',
    subtitle: 'Home Services Booking & Dispatch System',
    detailLine: 'role-based dashboards, booking flow, provider dispatch',
    summary:
      'A home-service booking and dispatch system designed around customer, provider, and admin workflows.',
    purpose:
      'This project exists to prove that I can think beyond single pages and work through a full product flow: customer booking, provider dispatch, role-based dashboards, and admin-side control.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Socket.IO'],
    liveUrl: 'https://sewafi.vercel.app',
    githubUrl: 'https://github.com/whyshisir02/SewaFI-Home-Service-and-Dispatch-System',
    caseStudyUrl: '/work/sewafi',
    overview:
      'SewaFi is a practical full-stack project built around customer, provider, and admin workflows for home service booking.',
    problem:
      'Local home-service booking is often unorganized and lacks structured provider dispatch, booking tracking, and admin control.',
    role:
      'I worked on the full-stack structure of SewaFi, including role-based authentication, customer/provider/admin dashboards, booking flow, provider service management, backend API integration, and deployment setup.',
    workedOn: [
      'Role-based authentication flow',
      'Customer, provider, and admin dashboards',
      'Booking lifecycle and status updates',
      'Provider service and area management',
      'Backend API integration',
      'Deployment setup and debugging',
    ],
    challengesSolved: [
      'Keeping frontend routes aligned with backend API contracts',
      'Handling customer/provider/admin role-based workflows',
      'Managing deployment environment variables',
      'Debugging production issues like CORS, API errors, and environment mismatch',
      'Thinking through booking and dispatch flow more clearly',
    ],
    metadata: [
      { label: 'role', value: 'full-stack development' },
      { label: 'type', value: 'academic / real-world product project' },
      { label: 'focus', value: 'booking, dispatch, dashboards, backend APIs' },
      { label: 'status', value: 'deployed / improving' },
    ],
    flowSteps: [
      'customer',
      'booking request',
      'dispatch logic',
      'provider response',
      'status update',
      'admin monitor',
    ],
    screenshots: [
      {
        title: 'Admin Dashboard',
        description: 'Overview of bookings, providers, and platform management.',
        src: '/projects/sewafi/admin-dashboard.png',
      },
      {
        title: 'Customer Booking Flow',
        description: 'Customer-side service booking and request flow.',
        src: '/projects/sewafi/customer-booking.png',
      },
      {
        title: 'Provider Dashboard',
        description: 'Provider-side job visibility and service workflow.',
        src: '/projects/sewafi/provider-dashboard.png',
      },
      {
        title: 'Service Management',
        description: 'Admin-side service/category management interface.',
        src: '/projects/sewafi/services-management.png',
      },
    ],
    coreModules: [
      'auth.module',
      'customer.dashboard',
      'provider.dashboard',
      'admin.dashboard',
      'booking.lifecycle',
      'dispatch.logic',
      'notification.system',
      'report.assets',
    ],
    highlights: [
      'Customer, Provider, and Admin roles',
      'OTP-based authentication flow',
      'Booking lifecycle management',
      'Provider service and area management',
      'Real-time notifications',
      'Admin dashboard and management modules',
      'Deployment-ready frontend/backend setup',
    ],
    techStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Socket.IO',
      'Redis',
      'Railway',
      'Vercel',
      'Supabase',
    ],
    learned: [
      'Structuring full-stack projects in a way that kept frontend pages, backend routes, and shared data flow easier to reason about',
      'Designing backend API contracts so the frontend could depend on clearer request and response patterns',
      'Connecting frontend workflows with backend data instead of treating the UI and API as separate pieces',
      'Debugging deployment and environment issues across local and production setups',
      'Understanding real-world service flow logic more clearly through booking, dispatch, and role-based actions',
    ],
    reports: [
      { label: 'Proposal Report', href: '/reports/sewafi-proposal.pdf' },
      { label: 'Final Report', href: '/reports/sewafi-final-report.pdf' },
    ],
  },
  {
    id: '02',
    slug: 'portfolio-website',
    osLabel: 'portfolio.os',
    name: 'Portfolio Website',
    subtitle:
      'Personal branding website focused on minimal typography, case-study storytelling, and clean frontend structure.',
    detailLine: 'typography, routing, SEO, motion, case-study structure',
    summary:
      'Personal branding website built with React, Vite, Tailwind, and Framer Motion.',
    purpose:
      'This project proves that I can shape a frontend with strong structure, clearer storytelling, and a visual identity that feels personal instead of template-driven.',
    stack: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://shisiruparkoti.com.np',
    githubUrl: '',
  },
  {
    id: '03',
    slug: 'backend-api-practice',
    osLabel: 'api.practice',
    name: 'Backend API Practice',
    subtitle:
      'Small backend-focused APIs built to strengthen routing, controllers, validation, auth, and database fundamentals.',
    detailLine: 'routing, controllers, validation, auth, database fundamentals',
    summary:
      'Small backend-focused APIs built to strengthen routing, controllers, validation, auth, and database fundamentals.',
    purpose:
      'This practice work exists to sharpen the backend basics that matter most to me: routing, controller structure, validation, auth flow, and cleaner project organization.',
    stack: ['Node.js', 'Express', 'PostgreSQL/MongoDB basics'],
    liveUrl: '',
    githubUrl: '',
  },
]

export const selectedWork = projects.slice(0, 2)

export const sewaFiProject = projects.find((project) => project.slug === 'sewafi')
