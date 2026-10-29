
"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaGithub,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

const highlights = [
  {
    icon: FaCode,
    title: "Problem Solving",
    description:
      "I enjoy understanding coding problems, breaking them into smaller steps, and finding practical solutions.",
  },
  {
    icon: FaLaptopCode,
    title: "Building Web Interfaces",
    description:
      "I enjoy creating responsive layouts, reusable React components, and user-friendly web experiences.",
  },
  {
    icon: FaLightbulb,
    title: "Continuous Learning",
    description:
      "I improve my skills through hands-on practice, personal projects, and learning new development concepts.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Get to Know Me
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            My journey in web development, my passion for coding,
            and my vision for the future.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              My Journey
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Turning Ideas Into
              <span className="mt-2 block text-blue-500">
                Digital Experiences.
              </span>
            </h3>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                Hi, I&apos;m{" "}
                <strong className="font-semibold text-white">
                  Koli Khatun
                </strong>
                , a Frontend Developer passionate about building
                modern, responsive, and user-friendly web applications.
              </p>

              <p>
                My web development journey started with HTML, CSS,
                and JavaScript. As I continued learning, I explored
                React.js and Next.js to build interactive interfaces
                and create practical web projects.
              </p>

              <p>
                I enjoy turning ideas into functional interfaces,
                writing reusable code, improving user experiences,
                and solving problems through hands-on development.
              </p>

              <p>
                Currently, I am expanding my knowledge of backend
                development with Node.js, Express.js, and MongoDB.
                My goal is to become a Full-Stack Developer, contribute
                to a professional development team, and build useful
                web applications that create real value.
              </p>
            </div>

           

            {/* Action Buttons */}
            <div className="mt-6"> 

               <a
                href="#projects"
                className="inline-flex items-center bg-blue-600 gap-2 rounded-xl border border-slate-700 px-6 py-3 text-[14px] font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-blue-500"
              >
                <FaRocket size={16} />
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Right: Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-black/20 sm:p-7">
              {/* Profile Header */}
              <div className="flex items-center gap-3 border-b border-slate-800 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <FaLaptopCode size={23} />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Koli Khatun
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Frontend Developer
                  </p>
                </div>

                <span
                  className="ml-auto h-2.5 w-2.5 rounded-full bg-emerald-400"
                  title="Developer profile"
                />
              </div>

              {/* Code Window */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-6">
                <div className="mb-6 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="space-y-3 overflow-x-auto font-mono text-xs leading-6 sm:text-sm">
                  <p className="whitespace-nowrap text-purple-400">
                    const{" "}
                    <span className="text-blue-300">developer</span> = {"{"}
                  </p>

                  <p className="whitespace-nowrap pl-4 text-slate-300">
                    name:{" "}
                    <span className="text-emerald-300">
                      &quot;Koli Khatun&quot;
                    </span>
                    ,
                  </p>

                  <p className="whitespace-nowrap pl-4 text-slate-300">
                    role:{" "}
                    <span className="text-emerald-300">
                      &quot;Frontend Developer&quot;
                    </span>
                    ,
                  </p>

                  <p className="whitespace-nowrap pl-4 text-slate-300">
                    passion:{" "}
                    <span className="text-emerald-300">
                      &quot;Building for the web&quot;
                    </span>
                    ,
                  </p>

                  <p className="whitespace-nowrap pl-4 text-slate-300">
                    goal:{" "}
                    <span className="text-emerald-300">
                      &quot;Full-Stack Developer&quot;
                    </span>
                  </p>

                  <p className="text-purple-400">{"};"}</p>
                </div>
              </div>

              {/* Technology Icons - Visual Decoration Only */}
              <div className="mt-5 grid grid-cols-4 gap-3">
                {[
                  {
                    name: "React",
                    icon: SiReact,
                    color: "text-cyan-400",
                  },
                  {
                    name: "Next.js",
                    icon: SiNextdotjs,
                    color: "text-white",
                  },
                  {
                    name: "TypeScript",
                    icon: SiTypescript,
                    color: "text-blue-400",
                  },
                  {
                    name: "Node.js",
                    icon: SiNodedotjs,
                    color: "text-green-400",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-2 py-4 transition duration-300 hover:-translate-y-1 hover:border-slate-600"
                    >
                      <Icon className={item.color} size={25} />
                      <span className="text-xs text-slate-400">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Career Goal */}
              <div className="mt-5 rounded-xl border border-blue-400/15 bg-blue-500/5 p-4">
                <div className="flex items-center gap-3">
                  <FaLightbulb
                    className="shrink-0 text-blue-400"
                    size={21}
                  />
                  <h4 className="font-semibold text-white">
                    My Career Goal
                  </h4>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Growing as a developer, learning backend technologies,
                  and building complete web applications through
                  practical experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-20">
          <div className="mb-9 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Beyond the Code
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              What Drives Me
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
              The values that shape my approach to web development
              and continuous improvement.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors duration-300 hover:border-blue-500/40 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <Icon size={22} />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-blue-500" />

          <p className="mx-auto max-w-3xl text-base italic leading-8 text-slate-300 sm:text-xl">
            &quot;Every project is an opportunity to learn, solve
            problems, and build something meaningful.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
