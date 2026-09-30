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
    <div className="cyber-panel cyber-panel-hover rounded-2xl overflow-hidden flex flex-col h-full group relative border border-cyan-500/20 bg-slate-950/70">
      {/* Top Accent Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Project Image Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        {/* Primary Tech Badge */}
        {technologies[0] && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow-lg backdrop-blur-md uppercase tracking-wider">
              {technologies[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-slate-950/60">
        <div>
          <h3 className="text-lg font-bold text-gray-100 group-hover:text-cyan-400 transition-colors mb-3 leading-snug font-mono tracking-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-900/90 border border-slate-700/60 text-cyan-300 text-[11px] font-mono px-2.5 py-0.5 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80 font-mono">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs py-2 px-3 rounded-lg text-center shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider"
              >
                <span>[ DEMO LIVE ]</span>
              </a>
            )}

            {hasValidGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-gray-200 hover:text-cyan-300 text-xs font-medium py-2 px-3 rounded-lg text-center transition-all flex items-center justify-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>CÓDIGO</span>
              </a>
            )}

            {caseStudyUrl && (
              <Link
                href={caseStudyUrl}
                className="flex-1 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/40 text-indigo-300 text-xs font-semibold py-2 px-3 rounded-lg text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>CASO DE ESTUDIO</span>
              </Link>
            )}

            {hideGithub && !caseStudyUrl && (
              <span className="w-full bg-slate-900/90 border border-slate-800 text-gray-400 text-xs py-2 px-3 rounded-lg text-center flex items-center justify-center gap-1.5 font-mono">
                🔒 ERP PRIVADO / EMPRESARIAL
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



