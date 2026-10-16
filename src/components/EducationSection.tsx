export default function EducationSection() {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Fulchari Government College",
      duration: "2025",
      result: "Passed (2025)",
      details: [
        "Group: Arts",
        "Built a strong foundation in humanities, communication, and critical thinking.",
        "Completed higher secondary education with dedication and consistency.",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Educational <span className="text-blue-600">Qualification</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            A detail of my educational background and academic journey.
          </p>
        </div>

        {/* Education Timeline/List */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-2 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.degree}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium">
                    {item.institution}
                  </p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-gray-500 font-medium space-y-1">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-semibold">
                    Passing Year: {item.duration}
                  </span>
                  <span className="text-blue-600 font-semibold">{item.result}</span>
                </div>
              </div>

              <div className="space-y-4">
                <ul className="list-disc list-outside pl-5 text-base text-gray-600 space-y-2.5">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}