
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "BazarDor",
    subtitle: "Market Price Tracker",
    description:
      "A market price tracking web application where users can explore commodity prices, review price changes, and filter items by category.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
    ],
    liveLink: "https://bazar-dor-app-ten.vercel.app/",
    githubLink: "https://github.com/koli/bazardor",
    number: "01",
  },
  {
    title: "BookVibe",
    subtitle: "Book Catalog & Wishlist",
    description:
      "A book discovery application for exploring books, organizing reading lists, and managing wishlist items through a simple interface.",
    techStack: [
      "Next.js",
      "TypeScript",
      "DaisyUI",
      "React Toastify",
    ],
    liveLink: "https://book-vibe-five.vercel.app/",
    githubLink: "https://github.com/koli/book-vibe",
    number: "02",
  },
  {
    title: "FitLog",
    subtitle: "Fitness Tracker",
    description:
      "A fitness tracking application designed to organize workout routines, monitor daily activity, and help users keep track of their fitness goals.",
    techStack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveLink: "https://fit-logo-app.vercel.app/",
    githubLink: "https://github.com/koli/fitlog",
    number: "03",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            My Work
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="text-blue-500">Projects</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A collection of projects where I put my development
            knowledge into practice, explore new ideas, and improve
            my problem-solving skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              whileHover={{ y: -7 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/30"
            >
              {/* Project Visual Header */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-slate-800 bg-gradient-to-br from-blue-500/10 via-slate-900 to-indigo-500/10">
                <div className="absolute inset-0 bg-blue-500/0 transition-colors duration-500 group-hover:bg-blue-500/5" />

                <div className="relative flex flex-col items-center gap-3 transition-transform duration-500 group-hover:scale-105">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-slate-950/80 text-blue-400 shadow-lg shadow-black/20">
                    <FaCode size={28} />
                  </div>

                  <h3 className="text-2xl font-bold tracking-wide text-white">
                    {project.title}
                  </h3>

                  <span className="text-sm text-slate-400">
                    {project.subtitle}
                  </span>
                </div>

                <span className="absolute right-5 top-4 font-mono text-sm font-semibold text-blue-400/70">
                  {project.number}
                </span>
              </div>

              {/* Project Details */}
              <div className="flex flex-grow flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {project.subtitle}
                </h3>

                <p className="mt-3 flex-grow text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-blue-400/15 bg-blue-500/5 px-2.5 py-1.5 text-xs font-medium text-blue-200 transition-colors duration-300 hover:border-blue-400/40 hover:bg-blue-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-800 pt-5">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500"
                  >
                    Live Demo
                    <FaExternalLinkAlt size={12} />
                  </Link>

                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-400/50 hover:text-white"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-slate-900 to-indigo-500/10 px-6 py-8 text-center sm:mt-16 sm:px-10 sm:py-10"
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Every Project Is a Learning Experience
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Each project helps me practice new concepts, learn from
            challenges, and take another step toward becoming a
            Full-Stack Developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
