const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "DaisyUI / HeroUI", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Mongoose", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Better Auth", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vercel / Netlify", level: "Intermediate" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            My <span className="text-blue-600">Skills</span> & Expertise
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring web ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 px-3.5 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-lg transition-colors group cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}