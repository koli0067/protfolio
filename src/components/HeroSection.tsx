
import Image from "next/image";
import Link from "next/link";
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
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[75vh] lg:grid-cols-2 lg:gap-16">
        {/* Introduction */}
        <div className="motion-safe:animate-[fadeInUp_0.8s_ease-out_both]">
          <p className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Frontend Developer Portfolio
          </p>

          <p className="text-lg font-medium text-slate-600">
            Hello, I'm
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Koli Khatun
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-blue-600 sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I am a Frontend Developer passionate about building modern,
            responsive, and user-friendly web applications. I enjoy turning
            ideas into functional interfaces using React.js, Next.js,
            TypeScript, and Tailwind CSS. I am continuously improving my
            skills and working toward becoming a Full-Stack Developer.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              View My Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="/resume.pdf"
              download="Koli-Khatun-Resume.pdf"
              className="group inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
            >
              Download Resume
              <FaDownload className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* Social Profiles */}
          <div className="mt-9 flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500">
              Find me on
            </span>

            <a
              href="https://github.com/koli0067"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-xl border border-slate-200 p-3 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/most-koli-khatun-50b804427/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-xl border border-slate-200 p-3 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600"
            >
              <FaLinkedinIn size={21} />
            </a>
          </div>
        </div>

        {/* Professional Photo */}
        <div className="relative mx-auto w-full max-w-md motion-safe:animate-[fadeInUp_1s_ease-out_both]">
          <div className="absolute inset-0 scale-95 rounded-[2rem] bg-gradient-to-br from-blue-200 to-indigo-100 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-xl shadow-slate-200/60">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-50 to-indigo-100">
              <Image
                src="/image.png"
                alt="Koli Khatun - Frontend Developer"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Photo Caption */}
          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-lg backdrop-blur sm:left-8 sm:right-8">
            <p className="font-semibold text-slate-900">
              Koli Khatun
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Frontend Developer | Aspiring Full-Stack Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
