"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 lg:px-16 overflow-hidden">
      
      {/* Section Header with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-600 text-lg">
          A glimpse into my journey, passion, and what drives me in the world of technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Journey & Passion (Slide from Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-gray-700 leading-relaxed"
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

        {/* Right Side: Personality, Hobbies & Interests (Slide from Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 space-y-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Beyond Coding
          </h3>
          <p className="text-gray-700 leading-relaxed">
            When I'm not staring at a code editor or debugging applications, I love exploring creative and refreshing activities to keep my mind active. 
          </p>
          <ul className="space-y-3 text-gray-700">
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span><strong>Creative Arts & Design:</strong> Enjoying painting and sketching to nurture visual creativity.</span>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span><strong>Continuous Learning:</strong> Exploring new tech trends, UI/UX inspirations, and reading articles.</span>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span><strong>Active Lifestyle:</strong> Spending quality time outdoors and keeping up with sports.</span>
            </motion.li>
          </ul>
          <div className="pt-2">
            <span className="inline-block text-sm font-semibold text-blue-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-blue-100">
              ✨ Always curious, detail-oriented, and eager to build impactful web experiences.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}