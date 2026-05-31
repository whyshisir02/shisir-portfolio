# SHISIR.OS — Personal Developer Portfolio

A black-and-white developer workspace portfolio built for **Shisir Uparkoti**.

SHISIR.OS is not designed like a normal portfolio landing page. It is built as a minimal personal operating-system style website to present my identity, projects, case studies, developer logs, and contact links in a clean and focused way.

## Live Website

https://shisiruparkoti.com.np

## About

I am a BIT student from Nepal focused on becoming a confident full-stack developer with backend-first thinking. My current focus is building practical systems, improving backend fundamentals, and creating projects that involve APIs, authentication, dashboards, databases, deployment, and real-world workflows.

This portfolio is part of that journey.

## Website Concept

The portfolio follows a **SHISIR.OS** concept:

* Minimal black-and-white interface
* Developer operating-system inspired layout
* File/log style navigation
* Project case-study presentation
* Developer logs for learning and project reflections
* Subtle animation and interactive workspace feel

The goal is to make the site feel personal, technical, and different from generic portfolio templates.

## Main Pages

```txt
/                 home.os
/about            about.shisir
/work             work.systems
/work/sewafi      sewafi.case
/logs             logs.index
/contact          contact.link
```

## Featured Project

### SewaFi — Home Services Booking & Dispatch System

SewaFi is a full-stack home services booking and dispatch system designed around customer, provider, and admin workflows.

The case study includes:

* Project overview
* Problem statement
* My role
* System flow
* Core modules
* Tech stack
* Reports and project links

## Features

* Multi-page React portfolio
* SHISIR.OS black-and-white design system
* Responsive layout
* Animated page transitions
* GSAP/Framer Motion based hero interactions
* Developer logs section
* SEO metadata
* JSON-LD structured data
* Sitemap and robots.txt
* Vercel deployment support
* Resume and project report downloads

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion
* GSAP
* React Router

### SEO / Metadata

* React Helmet Async
* JSON-LD
* Sitemap
* Robots.txt
* Web Manifest

### Deployment

* Vercel

## Folder Structure

```txt
shisir-portfolio/
  public/
    reports/
    resume/
    favicon.svg
    robots.txt
    sitemap.xml
    site.webmanifest

  src/
    components/
      layout/
      seo/
      ui/

    data/
      profile.js
      projects.js
      logs.js
      skills.js
      journey.js

    hooks/
      useMotionPreference.js

    pages/
      Home.jsx
      About.jsx
      Work.jsx
      SewaFiCaseStudy.jsx
      Logs.jsx
      Contact.jsx

    App.jsx
    main.jsx
    index.css

  vercel.json
  vite.config.js
  package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/whyshisir02/YOUR-PORTFOLIO-REPO.git
```

### 2. Move into the project

```bash
cd YOUR-PORTFOLIO-REPO
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run locally

```bash
npm run dev
```

The project will usually run at:

```txt
http://localhost:5173
```

## Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Scripts

```bash
npm run dev       # start development server
npm run build     # create production build
npm run preview   # preview production build
npm run lint      # run lint checks
```

## Motion Testing

To force animations while testing on localhost or the deployed site:

```js
localStorage.setItem("shisir-motion", "full")
sessionStorage.clear()
location.reload()
```

To force reduced motion:

```js
localStorage.setItem("shisir-motion", "reduced")
sessionStorage.clear()
location.reload()
```

To return to system preference:

```js
localStorage.removeItem("shisir-motion")
sessionStorage.clear()
location.reload()
```

## Deployment Notes

This project uses React Router, so `vercel.json` is included to support direct page refresh on routes such as:

```txt
/about
/work
/work/sewafi
/logs
/contact
```

The rewrite rule sends all routes back to `index.html`.

## Assets

Important public assets:

```txt
public/resume/Shisir-Uparkoti-Resume.pdf
public/reports/sewafi-proposal.pdf
public/reports/sewafi-final-report.pdf
public/favicon.svg
```

Optional future assets:

```txt
public/og/shisir-og-image.png
public/profile/profile.jpg
public/reports/sewafi-presentation.pdf
```

## SEO

The portfolio includes:

* Page-specific titles and descriptions
* Canonical URLs
* Open Graph metadata
* Twitter metadata
* JSON-LD Person schema
* Sitemap
* Robots.txt

Final domain used:

```txt
https://shisiruparkoti.com.np
```

## Current Status

The portfolio is actively being improved.

Current priorities:

* Add final project screenshots
* Improve SewaFi case study content
* Add more developer logs
* Add Open Graph preview image
* Improve GitHub project documentation
* Keep the design minimal, technical, and personal

## Contact

```txt
Email: ccrpc64@gmail.com
GitHub: https://github.com/whyshisir02
LinkedIn: https://www.linkedin.com/in/shisirupk061
Website: https://shisiruparkoti.com.np
```

## Note

This portfolio represents my current learning and building journey. I am not trying to look like a senior developer. I am trying to become a reliable one by building real systems, understanding fundamentals, and improving step by step.
