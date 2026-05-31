import SEO from '../components/seo/SEO'
import PageShell from '../components/layout/PageShell'
import PageIntro from '../components/ui/PageIntro'
import WorkRow from '../components/ui/WorkRow'
import { projects } from '../data/projects'

function Work() {
  return (
    <>
      <SEO
        title="Work Systems | Shisir Uparkoti"
        description="Explore full-stack and backend-focused projects by Shisir Uparkoti, including SewaFi, portfolio systems, and API practice projects."
        path="/work"
      />

      <PageShell className="space-y-12 sm:space-y-14">
        <PageIntro
          eyebrow="home.os"
          title="work.systems"
          description="Selected builds, practice systems, and backend-focused work shaping how I think through products."
          currentLine="workspace.index / case study / api practice"
        />

        <section className="route-line pt-3 sm:pt-4">
          {projects.map((project, index) => (
            <WorkRow
              key={project.slug}
              index={index}
              project={project}
              primaryLink={
                project.caseStudyUrl
                  ? { label: 'open case', to: project.caseStudyUrl }
                  : project.githubUrl
                    ? { label: 'open repo', href: project.githubUrl }
                    : null
              }
              secondaryLinks={[
                ...(project.liveUrl ? [{ label: 'open project', href: project.liveUrl }] : []),
                ...(project.githubUrl && project.caseStudyUrl
                  ? [{ label: 'open repo', href: project.githubUrl }]
                  : []),
              ]}
            />
          ))}
        </section>
      </PageShell>
    </>
  )
}

export default Work
