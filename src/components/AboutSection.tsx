export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Grid Layout without Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: About Me Title and Description (Takes more space now) */}
          <div className="lg:col-span-8 space-y-6 text-gray-700">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                About <span className="text-blue-600">Me</span>
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mt-3"></div>
            </div>
            
            <p className="leading-relaxed text-base sm:text-lg text-gray-600">
              I am a passionate <span className="font-semibold text-gray-900">Frontend Web Developer</span> specializing in building clean, modern, and high-performance web applications using <span className="font-semibold text-gray-900">React.js</span> and <span className="font-semibold text-gray-900">Next.js</span>. My focus is on turning design concepts into seamless, user-centric interfaces with great attention to detail.
            </p>

            <p className="leading-relaxed text-base text-gray-600">
              Beyond frontend development, I am actively expanding my skill set into full-stack technologies like Node.js and MongoDB to build complete, end-to-end digital solutions. I love exploring new tools, optimizing code, and solving complex problems efficiently.
            </p>
          </div>

          {/* Right Side: Highlight Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-1">Specialization</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                React.js, Next.js, TypeScript, Tailwind CSS, DaisyUI.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-1">Technical Interests</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Full-Stack Development, UI/UX, Performance Optimization.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}