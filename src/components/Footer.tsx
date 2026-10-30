"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:py-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="text-4xl font-extrabold tracking-tight"
            >
              Koli<span className="text-blue-500">.</span>
            </a>

            <p className="mt-5 max-w-sm text-base leading-8 text-slate-400">
              Hi, I'm Koli Khatun, a Frontend Developer passionate
              about creating modern, responsive, and user-friendly web
              applications. My goal is to grow as a Full-Stack Developer
              and build meaningful digital experiences.
            </p>

            <div className="mt-7 flex gap-4">
              <a
                href="https://github.com/KothaKoli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/most-koli-khatun-50b804427/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#contact"
                aria-label="Contact"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold sm:text-2xl">
              Quick Links
            </h3>

            <div className="mt-4 h-1 w-14 rounded-full bg-blue-500" />

            <ul className="mt-7 space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-3 text-base text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-blue-400"
                  >
                    <span className="text-blue-500">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold sm:text-2xl">
              Let's Work Together
            </h3>

            <div className="mt-4 h-1 w-14 rounded-full bg-blue-500" />

            <p className="mt-7 text-base leading-8 text-slate-400">
              I'm always interested in learning, collaborating, and
              exploring new opportunities in web development.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <FaEnvelope />
              Contact Me
            </a>

            <p className="mt-5 text-sm text-slate-500">
              Have an idea? Let's build something great.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm leading-6 text-slate-400">
            © {currentYear}{" "}
            <span className="font-semibold text-white">Koli Khatun</span>.
            All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400">
            Made with <FaHeart className="text-red-500" /> using{" "}
            <span className="font-semibold text-blue-400">
              Next.js & Tailwind CSS
            </span>
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}