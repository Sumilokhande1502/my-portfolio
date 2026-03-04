/**
 * Experience Component - Professional experience showcase
 *
 * Features:
 * - Clean, simple layout matching deployed version
 * - Professional experience cards with company, role, dates
 * - Technology tags for each position
 * - Responsive design for all screen sizes
 * - Scroll animations for smooth entrance effects
 *
 * Layout matches the deployed portfolio exactly
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FiChevronRight } from "react-icons/fi";
import { TEXT, MONTHS, EXPERIENCE_DATA } from "@shared/constants";
import citiLogo from "@assets/image_1753891620825.png";
import neosoftLogo from "@assets/image_1753891886557.png";
import learningmateLogo from "@assets/image_1753892028905.png";
import aoneLogo from "@assets/image_1753892111185.png";

// Logo mapping (UI-only): map company name to logo JSX
const logoMap: Record<string, React.ReactNode> = {
  Citi: (
    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
      <img src={citiLogo} alt="Citi" className="w-full h-full object-contain" />
    </div>
  ),
  "NeoSoft Technologies Pvt. Ltd.": (
    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
      <img
        src={neosoftLogo}
        alt="NeoSoft Technologies"
        className="w-full h-full object-contain"
      />
    </div>
  ),
  "LearningMate Solutions Pvt. Ltd.": (
    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
      <img
        src={learningmateLogo}
        alt="LearningMate Solutions"
        className="w-full h-full object-contain"
      />
    </div>
  ),
  "A One Salasar Pvt. Ltd.": (
    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
      <img
        src={aoneLogo}
        alt="A One Salasar"
        className="w-full h-full object-contain"
      />
    </div>
  ),
};

// Type for shared experience entries
type SharedExperience = (typeof EXPERIENCE_DATA)[number];

/**
 * Experience data (moved to shared constants). We use EXPERIENCE_DATA from shared/constants.ts
 * and map company names to local logo JSX via logoMap above.
 */

/**
 * Experience section component
 * @returns JSX element containing the experience showcase
 */
export function Experience() {
  // Enable scroll animations for this component
  useScrollAnimation();

  /**
   * Format date string to readable format
   * @param dateString - Date in YYYY-MM format
   * @returns Formatted date string
   */
  const formatDate = (dateString: string): string => {
    const [year, month] = dateString.split("-");
    // Use shared MONTHS (full names) and abbreviate to 3 letters for display
    const idx = Number.parseInt(month) - 1;
    const short = MONTHS[idx]?.slice(0, 3) ?? "";
    return `${short} ${year}`;
  };

  return (
    <section
      id="experience"
      className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 section-transition"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 stagger-child">
          <h2 className="text-3xl sm:text-4xl text-heading-primary mb-4 section-heading-decoration experience">
            {TEXT.experience.heading}
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-lg sm:text-xl text-body-secondary px-4">
            {TEXT.experience.intro}
          </p>
        </div>

        {/* Experience Cards - Simple Layout matching deployed version */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((experience: SharedExperience) => (
            <div
              key={experience.id}
              className="experience-card bg-white dark:bg-slate-800 rounded-lg p-4 sm:p-8 shadow-lg stagger-child"
            >
              {/* Header with Logo and Date */}
              <div className="flex items-start gap-4 mb-6">
                {/* Company Logo (mapped from logoMap) */}
                {logoMap[experience.company] && (
                  <div className="flex-shrink-0">
                    {logoMap[experience.company]}
                  </div>
                )}

                {/* Experience Details */}
                <div className="flex-1 flex justify-between items-start">
                  <div className="w-full sm:w-auto">
                    <h3 className="text-sm sm:text-2xl font-bold text-heading-primary mb-2 leading-tight">
                      {experience.position}
                    </h3>
                    <h4 className="text-xs sm:text-xl font-semibold text-accent-emphasis">
                      {experience.company}
                    </h4>
                    {/* Date on the next line, right-aligned only for mobile */}
                    <div className="block sm:hidden w-full">
                      <span className="block text-body-secondary text-right font-medium text-xs mt-1">
                        {formatDate(experience.startDate)} -{" "}
                        {experience.endDate
                          ? formatDate(experience.endDate)
                          : "Present"}
                      </span>
                    </div>
                  </div>
                  {/* Date on the right for larger screens */}
                  <div className="hidden sm:block text-body-secondary text-right ml-4">
                    <span className="font-medium text-base">
                      {formatDate(experience.startDate)} -{" "}
                      {experience.endDate
                        ? formatDate(experience.endDate)
                        : "Present"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Job description */}
              <div className="mb-6">
                <div className="space-y-3">
                  {experience.description.map((item: string) => (
                    <div
                      key={item}
                      className="text-body-primary flex items-start text-sm sm:text-base"
                    >
                      <span className="text-primary mr-3 mt-0.5 flex-shrink-0">
                        <FiChevronRight className="w-5 h-5" aria-hidden />
                      </span>
                      <span className="leading-relaxed text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies used */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
