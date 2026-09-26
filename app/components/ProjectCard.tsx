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
    <div className="group bg-[#1c1917]/90 border-2 border-amber-800/70 rounded-2xl overflow-hidden hover:border-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col h-full relative">
      {/* Corner Ornaments */}
      <div className="absolute top-2 left-2 z-20 text-[10px] text-amber-500/40 pointer-events-none">❖</div>
      <div className="absolute top-2 right-2 z-20 text-[10px] text-amber-500/40 pointer-events-none">❖</div>

      {/* Project Image Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-stone-950 border-b-2 border-amber-800/60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-stone-950/40 to-transparent" />
        
        {/* AoE2 Primary Tech Crest */}
        {technologies[0] && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-amber-950/90 border border-amber-500/70 text-amber-200 text-[11px] font-bold px-3 py-1 rounded-md shadow-lg font-serif tracking-wider uppercase flex items-center gap-1">
              <span>🛡️</span> {technologies[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-gradient-to-b from-stone-900/50 to-stone-950/80">
        <div>
          <h3 className="text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors mb-3 leading-snug font-serif tracking-wide">
            {title}
          </h3>
          <p className="text-stone-300 text-sm leading-relaxed mb-6 line-clamp-3 font-sans">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Badges (AoE2 Resources) */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-black/60 border border-amber-700/40 text-amber-300 text-[11px] font-mono px-2.5 py-1 rounded shadow-inner"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links (AoE2 Unit Commands) */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-amber-800/40">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:to-amber-700 text-amber-950 font-extrabold text-xs py-2.5 px-4 rounded-lg text-center shadow-md transition-all flex items-center justify-center gap-1.5 font-serif border border-amber-300/60 uppercase tracking-wider"
              >
                <span>⚔️ Ver Maravilla</span>
              </a>
            )}

            {hasValidGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-stone-800/80 hover:bg-stone-700/90 border border-amber-700/50 text-amber-200 hover:text-white text-xs font-semibold py-2.5 px-4 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 font-serif"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>📜 Código</span>
              </a>
            )}

            {caseStudyUrl && (
              <Link
                href={caseStudyUrl}
                className="flex-1 bg-amber-950/60 hover:bg-amber-900/80 border border-amber-600/60 text-amber-300 text-xs font-semibold py-2.5 px-4 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 font-serif"
              >
                <span>🏰 Caso de Estudio</span>
              </Link>
            )}

            {hideGithub && !caseStudyUrl && (
              <span className="w-full bg-stone-900/90 border border-amber-800/40 text-amber-400 text-xs font-medium py-2 px-3 rounded-lg text-center flex items-center justify-center gap-1.5 font-serif">
                <span>🔒</span> Muralla Privada / ERP Corporativo
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


