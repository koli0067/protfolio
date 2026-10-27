
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative max-w-7xl m-auto overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Subtle Background Decorations */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">

        {/* Left Side: Introduction */}
        <div className="w-full min-w-0 lg:pr-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Frontend Developer Portfolio
            </span>
          </div>

          <p className="text-lg font-medium text-slate-500">
            Hello, I'm
          </p>

          <h1 className="mt-2 text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl">
            Koli
            <span className="mt-1 block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Khatun.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-bold leading-snug text-slate-800 sm:text-2xl">
            Frontend Developer
          </h2>

          <p className="mt-2 text-base font-medium text-slate-500 sm:text-lg">
            Aspiring Full-Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I am passionate about building modern, responsive, and
            user-friendly web applications. I enjoy turning ideas into
            functional interfaces using React.js, Next.js, TypeScript,
            and Tailwind CSS while continuously improving my skills.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              View My Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="/resume.pdf"
              download="Koli-Khatun-Resume.pdf"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Download Resume
              <FaDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Side: Professional Photo */}
        <div className="relative mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-0">
          {/* Decorative Corners */}
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl border-2 border-blue-200 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

          <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-2xl bg-blue-100 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32" />

          {/* Image Frame */}
          <div className="relative z-10 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/70">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="/image.png"
                alt="Koli Khatun - Frontend Developer"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 440px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Photo Caption */}
          <div className="absolute -bottom-7 left-5 right-5 z-20 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-lg sm:left-8 sm:right-8">
            <p className="font-bold text-slate-900">
              Koli Khatun
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Building modern web experiences
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
