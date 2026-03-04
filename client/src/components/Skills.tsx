import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiStorybook,
  SiZod,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiJest,
  SiWebpack,
  SiJenkins,
} from "react-icons/si";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SKILL_CATEGORIES } from "@shared/constants";

type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export function Skills() {
  
  useScrollAnimation();

  
  const iconMap: Record<string, JSX.Element> = {
    React: <SiReact className="w-5 h-5 text-[#61DAFB]" aria-hidden />,
    Angular: <SiAngular className="w-5 h-5 text-[#DD0031]" aria-hidden />,
    JavaScript: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" aria-hidden />,
    TypeScript: <SiTypescript className="w-5 h-5 text-[#3178C6]" aria-hidden />,
    HTML: <SiHtml5 className="w-5 h-5 text-[#E34F26]" aria-hidden />,
    CSS: <SiCss3 className="w-5 h-5 text-[#1572B6]" aria-hidden />,
    "Node.js": <SiNodedotjs className="w-5 h-5 text-[#339933]" aria-hidden />,
    Express: (
      <SiExpress
        className="w-5 h-5 text-slate-600 dark:text-slate-300"
        aria-hidden
      />
    ),
    MongoDB: <SiMongodb className="w-5 h-5 text-[#47A248]" aria-hidden />,
    Git: <SiGit className="w-5 h-5 text-[#F05032]" aria-hidden />,
    Webpack: <SiWebpack className="w-5 h-5 text-[#8DD6F9]" aria-hidden />,
    Jenkins: <SiJenkins className="w-5 h-5 text-[#D33833]" aria-hidden />,
    Jest: <SiJest className="w-5 h-5 text-[#C21325]" aria-hidden />,
    Storybook: <SiStorybook className="w-5 h-5 text-[#FF4785]" aria-hidden />,
    Zod: <SiZod className="w-5 h-5 text-[#2F74C0]" aria-hidden />,
    Zustand: (
      <div
        className="w-5 h-5 rounded flex items-center justify-center bg-[#00C7B7] text-white text-xs font-semibold"
        aria-hidden
      >
        Z
      </div>
    ),
    "CI/CD": (
      <div
        className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-white text-xs font-bold"
        aria-hidden
      >
        ⚡
      </div>
    ),
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:via-gray-800 dark:to-slate-900 section-transition"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 stagger-child">
          <h2
            id="skills-heading"
            className="text-4xl text-heading-primary mb-4 section-heading-decoration skills"
          >
            Skills & Technologies
          </h2>
          <div className="section-divider decorative" aria-hidden></div>
          <p className="text-xl text-body-secondary">
            The tools and technologies I work with every day
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SKILL_CATEGORIES.map((category: SkillCategory) => (
            <section
              key={category.title}
              aria-labelledby={`skills-${category.title.replaceAll(/\s+/g, "-").toLowerCase()}-title`}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate"
            >
              {}
              <h3
                id={`skills-${category.title.replaceAll(/\s+/g, "-").toLowerCase()}-title`}
                className="text-xl font-bold text-heading-primary border-b border-slate-200 dark:border-slate-600 pb-3 mb-6"
              >
                {category.title}
              </h3>

              {}
              <ul className="space-y-2">
                {category.skills.map((skillName) => (
                  <li
                    key={skillName}
                    className="flex items-center gap-3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-blue-300"
                  >
                    {}
                    <div className="flex-shrink-0" aria-hidden>
                      {iconMap[skillName] ?? (
                        <span className="w-5 h-5 inline-block" />
                      )}
                    </div>

                    {}
                    <span className="text-sm text-body-primary">
                      {skillName}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
