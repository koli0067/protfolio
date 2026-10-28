"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 lg:px-16 overflow-hidden">
      
      {/* Section Header Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          About <span className="text-blue-600">Me</span>
        </h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          A glimpse into my journey, passion, and what drives me in the world of technology.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Journey & Passion (Smooth Scale & Fade-in) */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="space-y-6 text-gray-700 leading-relaxed bg-white/50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            My Programming Journey & Work
          </h3>
          <p>
            Hi! I'm <strong className="text-gray-900">Koli Khatun</strong>, a passionate Frontend Web Developer with a strong dedication to building modern, responsive, and user-centric web applications. My coding journey started with a deep curiosity about how websites work behind the scenes, which evolved into a professional pursuit of mastering web technologies like React.js, Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p>
            I truly enjoy transforming creative ideas and complex designs into clean, functional, and seamless digital interfaces. Whether it's optimizing user experience, building dynamic components, or expanding into full-stack development, I love solving logic-driven challenges and writing maintainable code.
          </p>
        </motion.div>

        {/* Right Side: Personality, Hobbies & Staggered List Items */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="bg-blue-50/60 backdrop-blur-sm p-8 rounded-3xl border border-blue-100 space-y-6 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Beyond Coding
          </h3>
          <p className="text-gray-700 leading-relaxed">
            When I'm not staring at a code editor or debugging applications, I love exploring creative and refreshing activities to keep my mind active. 
          </p>
          
          <ul className="space-y-3 text-gray-700">
            {[
              { title: "Creative Arts & Design", desc: "Enjoying painting and sketching to nurture visual creativity." },
              { title: "Continuous Learning", desc: "Exploring new tech trends, UI/UX inspirations, and reading articles." },
              { title: "Active Lifestyle", desc: "Spending quality time outdoors and keeping up with sports." }
            ].map((hobby, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center gap-3 cursor-pointer bg-white/80 p-3 rounded-xl border border-blue-100/60 shadow-xs transition-all"
              >
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full shrink-0"></span>
                <span><strong>{hobby.title}:</strong> {hobby.desc}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="pt-2"
          >
            <span className="inline-block text-sm font-semibold text-blue-600 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-blue-100">
              ✨ Always curious, detail-oriented, and eager to build impactful web experiences.
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}