
"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaTools,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiDaisyui,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  level: "Advanced" | "Intermediate";
  icon: IconType;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive user interfaces.",
    icon: FaCode,
    skills: [
      { name: "HTML5", level: "Advanced", icon: FaHtml5 },
      { name: "CSS3", level: "Advanced", icon: FaCss3Alt },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: FaJs },
      { name: "React.js", level: "Intermediate", icon: FaReact },
      { name: "Next.js", level: "Intermediate", icon: SiNextdotjs },
      { name: "TypeScript", level: "Intermediate", icon: SiTypescript },
      { name: "Tailwind CSS", level: "Advanced", icon: SiTailwindcss },
      { name: "DaisyUI / HeroUI", level: "Intermediate", icon: SiDaisyui },
    ],
  },
  {
    title: "Backend & Database",
    description:
      "Exploring server-side development, APIs, databases, and authentication.",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: "Intermediate", icon: FaNodeJs },
      { name: "Express.js", level: "Intermediate", icon: SiExpress },
      { name: "MongoDB", level: "Intermediate", icon: SiMongodb },
      { name: "Mongoose", level: "Intermediate", icon: FaServer },
      { name: "REST APIs", level: "Intermediate", icon: FaCode },
      { name: "Better Auth", level: "Intermediate", icon: FaCode },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Using development tools to manage code and deploy web applications.",
    icon: FaTools,
    skills: [
      { name: "Git", level: "Advanced", icon: FaGitAlt },
      { name: "GitHub", level: "Advanced", icon: FaGithub },
      { name: "VS Code", level: "Advanced", icon: VscCode },
      { name: "Vercel", level: "Intermediate", icon: SiVercel },
      { name: "Netlify", level: "Intermediate", icon: SiNetlify },
    ],
  },
];

// Visual indicators only, not measured skill scores.
const levelValues: Record<Skill["level"], number> = {
  Advanced: 85,
  Intermediate: 65,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-300 sm:text-base">
            My Expertise
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="text-blue-500">Technologies</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Technologies and tools I work with while building projects,
            strengthening my technical foundation, and growing as a developer.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: categoryIndex * 0.12,
                }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/30 sm:p-7"
              >
                {/* Category Header */}
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-400 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <CategoryIcon />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Graphical Skills */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    const progress = levelValues[skill.level];

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: categoryIndex * 0.1 + skillIndex * 0.04,
                        }}
                      >
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2.5">
                            <SkillIcon className="shrink-0 text-lg text-blue-400" />

                            <span className="truncate text-sm font-semibold text-slate-200 sm:text-base">
                              {skill.name}
                            </span>
                          </div>

                          <span className="shrink-0 text-xs font-semibold text-slate-400 sm:text-sm">
                            {skill.level}
                          </span>
                        </div>

                        <div
                          className="h-2.5 overflow-hidden rounded-full bg-slate-800"
                          role="progressbar"
                          aria-label={`${skill.name}: ${skill.level}`}
                          aria-valuenow={progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              delay: 0.15 + skillIndex * 0.04,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-slate-900 to-indigo-500/10 px-6 py-8 text-center sm:mt-16 sm:px-10 sm:py-10"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
            <FaCode size={23} />
          </div>

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Always Learning, Always Building
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I continue to strengthen my skills through practical projects,
            problem-solving, and exploring new concepts as I work toward
            becoming a Full-Stack Developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
