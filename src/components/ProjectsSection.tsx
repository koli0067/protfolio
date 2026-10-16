import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "BazarDor — Market Price Tracker",
    description:
      "A real-time market price tracking web application where users can view daily commodity prices, track price fluctuations, and filter by categories.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    liveLink: "https://bazardor.vercel.app", // আপনার লাইভ লিঙ্ক
    githubLink: "https://github.com/koli/bazardor", // আপনার গিটহাব লিঙ্ক
    image: "/images/bazardor.png", // public/images/ ফোল্ডারে ছবিটি রাখবেন
  },
  {
    title: "Bangla News 24",
    description:
      "A modern news portal platform featuring category-wise filtering, user authentication, interactive news feeds, and marquee breaking news tickers.",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "DaisyUI", "REST API"],
    liveLink: "#",
    githubLink: "#",
    image: "/images/banglanews.png",
  },
  {
    title: "FitLog — Fitness Tracker",
    description:
      "An interactive exercise and daily fitness habit tracking application designed to monitor workout routines and track fitness goals.",
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    image: "/images/fitlog.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            A selection of web development projects I have built recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Project Image Placeholder / Real Image */}
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                {/* ইমেজ ফাইল না থাকলে একটি ডামি কাভার দেখাবে */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-blue-600 font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                  {project.title.split(" — ")[0]}
                </div>
                {/* যদি আসল ছবি থাকে, তবে নিচের কোডটি আনকমেন্ট করতে পারেন:
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                */}
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-md border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center space-x-1"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>

                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
                  >
                    <span>GitHub</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}