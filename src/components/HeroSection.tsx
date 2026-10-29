
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Frontend Developer Portfolio
          </p>

          <p className="text-lg font-medium text-slate-300 sm:text-xl">
            Hello, I&apos;m
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Koli Khatun<span className="text-blue-500">.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold leading-snug text-blue-400 sm:text-3xl lg:text-4xl">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I am a Frontend Developer passionate about building modern,
            responsive, and user-friendly web applications. I enjoy turning
            ideas into functional interfaces using React.js, Next.js,
            TypeScript, and Tailwind CSS. I am continuously improving my
            skills and working toward becoming a Full-Stack Developer.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              View My Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="/resume.pdf"
              download="Koli-Khatun-Resume.pdf"
              className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-sm font-bold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800 hover:text-blue-300"
            >
              Download Resume
              <FaDownload className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* Social Profiles */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="mr-1 text-sm font-medium text-slate-400">
              Find me on
            </span>

            <a
              href="https://github.com/KothaKoli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/most-koli-khatun-50b804427/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Professional Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Blue Glow */}
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-blue-400/30 opacity-80 blur-2xl" />

          {/* Photo Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900 p-3 shadow-2xl shadow-blue-950/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-blue-950">
              <Image
                src="/image.png"
                alt="Koli Khatun - Frontend Developer"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />

              {/* Subtle Image Overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </div>

          {/* Photo Caption */}
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-slate-700 bg-slate-900/95 p-4 shadow-xl shadow-black/20 backdrop-blur-xl sm:left-8 sm:right-8 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-lg font-bold text-blue-400">
                K
              </div>

              <div className="min-w-0">
                <p className="font-bold text-white">Koli Khatun</p>
                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  Frontend Developer | Aspiring Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
