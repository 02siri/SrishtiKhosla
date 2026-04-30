import React from 'react';
import Image from 'next/image';
import { Project } from '../data/projects';

interface ProjectVisualProps {
  project: Project;
  compact?: boolean;
}

const ProjectVisual = ({ project, compact = false }: ProjectVisualProps) => {
  const heightClass = compact ? 'h-[280px] md:h-[340px]' : 'h-[320px] md:h-[520px]';

  if (project.image) {
    return (
      <div
        className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 ${heightClass}`}
        style={{ boxShadow: `0 24px 80px ${project.accent.glow}` }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={compact ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 60vw, 100vw'}
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.72))`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <h3 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
            {project.tagline}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 ${heightClass}`}
      style={{
        background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`,
        boxShadow: `0 24px 80px ${project.accent.glow}`,
      }}
    >
      <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-black/20 blur-3xl" />
      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        <div className="max-w-xl">
          <h3 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectVisual;
