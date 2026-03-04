

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FiExternalLink } from "react-icons/fi";
import {
  SOCIAL_LINKS,
  TEXT,
  PROJECT_CATEGORIES,
  PROJECTS_DATA,
  type Project,
} from "@shared/constants";



const categories = PROJECT_CATEGORIES.map((c) => ({
  ...c,
  count:
    c.id === "all"
      ? PROJECTS_DATA.length
      : PROJECTS_DATA.filter((p) => p.category === c.id).length,
}));


export function Projects() {
  
  useScrollAnimation();
  

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 section-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="text-center mb-16 stagger-child">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration projects">
            {TEXT.projects.heading}
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary max-w-3xl mx-auto">
            {TEXT.projects.intro}
          </p>
        </div>

        {}
        <div className="text-center mb-16">
          <div className="project-card bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20 max-w-2xl mx-auto group cursor-pointer">
            <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
              🚧
            </div>
            <h3 className="text-2xl font-bold text-heading-primary mb-4 group-hover:text-primary transition-colors duration-300">
              {TEXT.projects.previewTitle}
            </h3>
            <p className="text-body-secondary leading-relaxed mb-6">
              {TEXT.projects.previewDescription}
            </p>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">{TEXT.projects.previewCTA}</span>
              <FiExternalLink
                className="ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
