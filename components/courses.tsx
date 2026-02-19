"use client";

export function Courses() {
  const courses = [
    {
      icon: "📚",
      title: "Class IX & X",
      subtitle: "Commercial Application",
      description: "Strong foundation in commercial applications for ICSE/CBSE students",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "📘",
      title: "Class XI Commerce",
      subjects: ["Accountancy", "Business Studies", "Economics"],
      description: "Comprehensive coaching for Class 11 commerce stream with concept clarity",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "📗",
      title: "Class XII Commerce",
      subjects: ["Accountancy", "Business Studies", "Economics"],
      description: "Board exam focused preparation with regular mock tests and performance tracking",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🎓",
      title: "B.Com Coaching",
      subjects: ["Financial Accounting", "Cost Accounting", "Economics"],
      description: "University-level commerce subjects with practical applications",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: "🏆",
      title: "Foundation Courses",
      subjects: ["CA Foundation", "CS Foundation"],
      description: "Professional course preparation with exam-oriented approach",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="courses" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--brand-dark)] mb-4">
            Courses & Subjects We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Concept-based coaching with exam-oriented preparation for every level
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${course.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-white animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              {course.subtitle && (
                <p className="text-white/90 font-medium mb-3">{course.subtitle}</p>
              )}
              {course.subjects && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.subjects.map((subject, i) => (
                    <span key={i} className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-white/90 leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mode of Teaching Section */}
        <div className="bg-[var(--surface)] rounded-3xl p-8 md:p-12 shadow-lg animate-fade-in-up delay-500">
          <h3 className="text-3xl font-bold text-[var(--brand-dark)] mb-8 text-center">
            Mode of Teaching
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-[var(--accent)] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--brand)]">Online & Offline</h4>
              <p className="text-gray-600">Flexible learning options to suit your needs</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-[var(--accent)] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--brand)]">Regular & Crash Courses</h4>
              <p className="text-gray-600">Choose your preferred pace of learning</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-[var(--accent)] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--brand)]">Mock Tests for Board Exam</h4>
              <p className="text-gray-600">Regular assessments to track progress</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up delay-600">
          <a href="#contact" className="inline-block">
            <button className="px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--brand-dark)] rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Check Batch Timings
            </button>
          </a>
          <a href="#contact" className="inline-block">
            <button className="px-8 py-4 bg-[var(--brand)] hover:bg-[var(--brand-light)] text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Reserve Your Seat
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
