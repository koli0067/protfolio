
"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export default function EducationSection() {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Fulchari Government Degree College",
      duration: "2025",
      result: "Passed",
      details: [
        "Group: Arts",
        "Developed communication, critical thinking, and analytical skills.",
        "Completed higher secondary education in 2025.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-28 top-10 -z-10 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 sm:text-base">
            My Academic Background
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Educational{" "}
            <span className="text-blue-500">Qualification</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            My formal education and academic journey.
          </p>
        </motion.div>

        {/* Education Card */}
        <div className="mx-auto max-w-4xl">
          {educationData.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10 transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-950/20 sm:p-8 lg:p-10"
            >
              {/* Card Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400" />

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Education Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <FaGraduationCap size={30} />
                </div>

                {/* Education Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-3 text-base font-medium leading-7 text-slate-300 sm:text-lg">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:flex-col md:items-start">
                      <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm font-semibold text-blue-300">
                        <FaCalendarAlt size={13} />
                        Passing Year: {item.duration}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-300">
                        <FaCheckCircle size={13} />
                        {item.result}
                      </span>
                    </div>
                  </div>

                  {/* Academic Details */}
                  <ul className="mt-6 space-y-4">
                    {item.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base leading-7 text-slate-300"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
