"use client"

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCode,
} from "react-icons/fa";

export default function ContactSection() {
  const contactInfo = [
    {
      title: "Email Address",
      value: "kothakoli0067@gmail.com",
      href: "mailto:kothakoli0067@gmail.com",
      icon: FaEnvelope,
    },
    {
      title: "Phone Number",
      value: "Add your phone number",
      href: "tel:+8801XXXXXXXXX",
      icon: FaPhone,
    },
    {
      title: "Location",
      value: "Rangpur Division, Bangladesh",
      href: undefined,
      icon: FaMapMarkerAlt,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            <FaCode />
            Get In Touch
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s Work{" "}
            <span className="text-blue-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Have a project idea, a job opportunity, or want to connect?
            Feel free to contact me. I&apos;d love to hear from you.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-500" />
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Contact Information
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-slate-400">
              I&apos;m always interested in discussing web development,
              collaborating on projects, and exploring new opportunities.
              You can reach me using the details below.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-900 sm:p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 break-words text-sm text-slate-400 transition-colors sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.12 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        aria-label={`${item.title}: ${item.value}`}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Availability Card */}
            <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
                </span>

                <h4 className="font-semibold text-white">
                  Open to Opportunities
                </h4>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Interested in junior frontend developer roles,
                internships, and opportunities to grow as a developer.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-blue-950/10 sm:p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Fill out the form below to get in touch with me.
            </p>

            <form
              action="mailto:kothakoli0067@gmail.com"
              method="POST"
              encType="text/plain"
              className="mt-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="Subject"
                  type="text"
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Send Message
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Submitting this form opens your email application. A
                configured form service or backend is needed to send
                messages directly from the website.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            Thank you for visiting my portfolio. I look forward to
            connecting with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
