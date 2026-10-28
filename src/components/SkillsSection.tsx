
"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaServer,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    subtitle: "Building modern user interfaces",
    icon: FaCode,
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "DaisyUI / HeroUI", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Database",
    subtitle: "Working with servers and data",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Mongoose", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Better Auth", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    subtitle: "Tools for everyday development",
    icon: FaTools,
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vercel / Netlify", level: "Intermediate" },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="scroll-mt-24 relative overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <div
          className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <FaCode size={13} />
            What I Work With
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            My <span className="text-blue-600">Skills</span> & Expertise
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Technologies and tools I use to build modern, responsive,
            and user-friendly web applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                style={{
                  transitionDelay: isVisible ? `${index * 160}ms` : "0ms",
                }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100" />

                {/* Category Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                      {category.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-100" />

                {/* Skill List */}
                <div className="flex flex-wrap content-start gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={`${skill.name} — ${skill.level}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <FaCheckCircle
                        size={11}
                        className="shrink-0 text-blue-500"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="mt-auto pt-7">
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Technologies
                    </span>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {category.skills.length} Skills
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div
          style={{
            transitionDelay: isVisible ? "450ms" : "0ms",
          }}
          className={`mt-10 text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            Always learning, building, and improving one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
