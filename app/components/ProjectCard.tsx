import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  hideGithub?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  demoUrl,
  githubUrl,
  caseStudyUrl,
  hideGithub,
}: ProjectCardProps) {
  const hasValidGithub = !hideGithub && Boolean(githubUrl);

  return (
    <div className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col h-full group relative border border-white/10 bg-slate-950/70">
      {/* Accent gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        
        {/* Main Tech Chip */}
        {technologies[0] && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono font-bold px-3 py-1 rounded-xl shadow-lg backdrop-blur-md">
              {technologies[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-slate-950/60">
        <div>
          <h3 className="text-lg font-bold text-gray-100 group-hover:text-cyan-400 transition-colors mb-2.5 font-sans leading-snug">
            {title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 font-sans">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-900/90 border border-slate-800 text-cyan-300 text-[11px] font-mono px-2.5 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800 font-sans text-xs">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-1.5 uppercase font-mono tracking-wider"
              >
                <span>Ver Demo Live ↗</span>
              </a>
            )}

            {hasValidGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-gray-200 hover:text-cyan-300 font-medium py-2.5 px-3 rounded-xl text-center transition-all flex items-center justify-center gap-1.5 font-mono"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Código</span>
              </a>
            )}

            {caseStudyUrl && (
              <Link
                href={caseStudyUrl}
                className="flex-1 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 text-purple-300 font-semibold py-2.5 px-3 rounded-xl text-center transition-all flex items-center justify-center gap-1.5 font-mono"
              >
                <span>Caso de Estudio</span>
              </Link>
            )}

            {hideGithub && !caseStudyUrl && (
              <span className="w-full bg-slate-900/90 border border-slate-800 text-gray-400 text-xs py-2 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 font-mono">
                🔒 Repositorio Privado / ERP
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}




