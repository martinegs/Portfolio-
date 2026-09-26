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
    <div className="group bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col h-full">
      {/* Project Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-900/80">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
        
        {/* Main Category / Primary Tech Badge */}
        {technologies[0] && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-purple-600/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-purple-400/30">
              {technologies[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3 leading-snug">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white/5 border border-white/10 text-purple-200 text-xs font-medium px-2.5 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Ver Demo</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {hasValidGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white text-xs font-semibold py-2.5 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Código</span>
              </a>
            )}

            {caseStudyUrl && (
              <Link
                href={caseStudyUrl}
                className="flex-1 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold py-2.5 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>Caso de Estudio</span>
                <span>→</span>
              </Link>
            )}

            {hideGithub && !caseStudyUrl && (
              <span className="w-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium py-2 px-3 rounded-xl text-center flex items-center justify-center gap-1.5">
                <span>🔒</span> Proyecto Privado / Corporativo
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

