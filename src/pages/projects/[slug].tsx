import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ArrowLeft, ExternalLink, Github, PlayCircle } from 'lucide-react';
import ProjectVisual from '../../components/ProjectVisual';
import { getProjectBySlug, projects, Project } from '../../data/projects';

interface ProjectPageProps {
  project: Project;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const project = getProjectBySlug(slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <>
      <Head>
        <title>{`${project.title} | Srishti Khosla`}</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_24%),linear-gradient(180deg,#0f172a_0%,#111827_52%,#020617_100%)]">
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-8%] top-40 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <section className="relative px-4 pb-20 pt-10 md:px-6 md:pt-14">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm">
                <Link
                  href="/#projects"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  <ArrowLeft size={16} />
                  Back to projects
                </Link>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:scale-[1.02] hover:border-cyan-200/50 hover:bg-cyan-300/15"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
                    >
                      <ExternalLink size={18} />
                      Live App
                    </a>
                  )}
                  {project.walkthrough && (
                    <a
                      href={project.walkthrough}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
                    >
                      <PlayCircle size={18} />
                      Walkthrough
                    </a>
                  )}
                </div>
              </div>

              <div className="mx-auto mt-8 max-w-5xl space-y-8">
                <ProjectVisual project={project} />

                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
                    {project.title}
                  </h1>
                  <p className="max-w-4xl text-lg leading-relaxed text-slate-200">
                    {project.tagline}
                  </p>
                  <p className="max-w-5xl text-base leading-8 text-slate-300">
                    {project.overview}
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/55 p-7 min-h-full">
                    <h2 className="text-2xl font-semibold text-white">Tech stack</h2>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-cyan-400/15 bg-cyan-400/8 px-3 py-2 text-sm text-cyan-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/55 p-7 min-h-full">
                    <h2 className="text-2xl font-semibold text-white">Key features</h2>
                    <div className="mt-5 space-y-4">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                          <p className="text-slate-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/55 p-7">
                  <h2 className="text-2xl font-semibold text-white">Challenges and solutions</h2>
                  <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
                    {project.challenge}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
