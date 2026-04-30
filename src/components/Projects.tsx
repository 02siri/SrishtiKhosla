import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectVisual from './ProjectVisual';
import { projects } from '../data/projects';

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Projects
          </h2>
          
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_120px_rgba(15,23,42,0.28)] backdrop-blur-sm md:p-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Link
              href={`/projects/${currentProject.slug}`}
              className="block cursor-pointer"
            >
              <ProjectVisual project={currentProject} compact />
            </Link>

            <div className="px-1 md:px-2">
              <Link
                href={`/projects/${currentProject.slug}`}
                className="group block cursor-pointer"
              >
                <h3 className="text-3xl font-semibold text-white transition group-hover:text-cyan-100 md:text-4xl">
                  {currentProject.title}
                </h3>
                <p className="mt-3 text-lg leading-8 text-slate-200">
                  {currentProject.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  {currentProject.description}
                </p>
              </Link>

              <div className="mt-6 flex flex-wrap gap-2">
                {currentProject.tech.slice(0, 7).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${currentProject.slug}`}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:scale-[1.02] hover:border-cyan-200/50 hover:bg-cyan-300/15"
                >
                  View Project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <button 
            onClick={prevProject}
            className="absolute left-3 top-[36%] cursor-pointer rounded-full border border-white/10 bg-slate-950/75 p-3 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-900 md:left-5"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-3 top-[36%] cursor-pointer rounded-full border border-white/10 bg-slate-950/75 p-3 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-900 md:right-5"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.slug}
                onClick={() => setCurrentProjectIndex(index)}
                aria-label={`Go to ${project.title}`}
                className={`h-3 w-3 cursor-pointer rounded-full transition ${
                  index === currentProjectIndex
                    ? 'bg-cyan-200'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
