import Image from "next/image"; // Next.js Image কম্পোনেন্ট ইমপোর্ট করা হলো

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ছবির জন্য ২ কলাম, টেক্সটের জন্য ৬ কলাম এবং কার্ডের জন্য ৪ কলামে গ্রিড ভাগ করা হলো */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
          
          {/* ১. প্রোফাইল ছবি সেকশন (২ কলাম) */}
          <div className="md:col-span-2 lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-blue-50 shadow-lg group-hover:border-blue-100 transition-all duration-300">
                <Image
                  src="/image.png" // public ফোল্ডার থেকে ছবির পাথ
                  alt="Koli Khatun - Frontend Web Developer" // ছবির বিকল্প টেক্সট
                  width={160} // ছবির চওড়া
                  height={160} // ছবির উচ্চতা
                  className="object-cover w-full h-full"
                  priority // ছবিটি দ্রুত লোড হওয়ার জন্য
                />
              </div>
              {/* ছবির পিছনে একটি ছোট গ্রেডিয়েন্ট এফেক্ট */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-md group-hover:opacity-80 -z-10 transition-opacity"></div>
            </div>
          </div>

          {/* ২. আমি কে: টাইটেল এবং ডেসক্রিপশন (৬ কলাম) */}
          <div className="md:col-span-1 lg:col-span-6 space-y-6 text-gray-700">
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

          {/* ৩. হাইলাইট কার্ড সেকশন (৪ কলাম) */}
          <div className="md:col-span-1 lg:col-span-4 space-y-4">
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