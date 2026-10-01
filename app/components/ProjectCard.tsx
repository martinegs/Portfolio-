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
  const cardImage = image && image !== "/window.svg" ? image : "/images/cyberpunk_project_hud.jpg";

  return (
    <div className="cyber-panel cyber-panel-yellow cyber-cut-corner flex flex-col h-full group relative border border-[#00f0ff]/30 bg-[#0d0e15]/90 hover:border-[#fcee09]/60 transition-all duration-300">
      {/* Accent yellow HUD header bar */}
      <div className="h-1.5 w-full bg-[#fcee09] shadow-[0_0_10px_rgba(252,238,9,0.8)] flex justify-between items-center px-2 text-[9px] font-mono text-[#07080c] font-black uppercase tracking-wider">
        <span>// SISTEMA WEB EN PRODUCCIÓN</span>
        <span>[ VERIFICADO ]</span>
      </div>

      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[#07080c] border-b border-[#00f0ff]/20">
        <Image
          src={cardImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e15] via-[#0d0e15]/40 to-transparent" />
        
        {/* Main Tech Badge */}
        {technologies[0] && (
          <div className="absolute top-3 right-3 z-10">
            <span className="cyber-tag">
              {technologies[0]}
            </span>
          </div>
        )}

        <div className="absolute bottom-2 left-3 z-10 text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase">
          // PROYECTO :: {title.slice(0, 24)}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-[#0d0e15]/80 font-sans">
        <div>
          <h3 className="text-lg font-bold text-gray-100 group-hover:text-[#fcee09] transition-colors mb-2.5 font-mono tracking-wide leading-snug">
            {title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 font-sans">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[10px]">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[#07080c] border border-[#00f0ff]/40 text-[#00f0ff] font-bold px-2.5 py-1 rounded-none uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-[#1e2436] font-mono text-xs">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 cyber-btn-yellow py-2 px-3 text-center flex items-center justify-center gap-1.5"
              >
                <span>VER DEMO LIVE ↗</span>
              </a>
            )}

            {hasValidGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 cyber-btn-cyan py-2 px-3 text-center flex items-center justify-center gap-1.5"
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
                className="flex-1 bg-[#07080c] border border-[#ff0055]/50 text-[#ff0055] font-bold py-2 px-3 text-center hover:bg-[#ff0055] hover:text-[#07080c] transition-all flex items-center justify-center gap-1.5"
              >
                <span>CASO DE ESTUDIO</span>
              </Link>
            )}

            {hideGithub && !caseStudyUrl && (
              <span className="w-full bg-[#07080c] border border-[#1e2436] text-gray-400 text-[11px] py-2 px-3 text-center flex items-center justify-center gap-1.5 font-mono">
                🔒 SISTEMA CORPORATIVO PRIVADO
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
