"use client";

export function Stats() {
  const stats = [
    {
      number: "25+",
      label: "Years of Experience",
      description: "Dedicated to commerce education"
    },
    {
      number: "1500+",
      label: "Students Mentored",
      description: "Successful teaching journey"
    },
    {
      number: "100%",
      label: "Pass Percentage",
      description: "Consistent academic results"
    },
    {
      number: "80%",
      label: "Distinction Rate",
      description: "Students scoring above 75%"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--brand-dark)] mb-4">
            Consistent Academic Results
          </h2>
          <p className="text-xl text-gray-600">
            Numbers that reflect our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-[var(--surface)] to-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-7xl font-bold text-[var(--accent)] mb-3">
                {stat.number}
              </div>
              <div className="text-xl md:text-2xl font-bold text-[var(--brand)] mb-2">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up delay-400">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proud Achievements
              </h3>
              <ul className="space-y-4 text-white/90 text-lg">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>25 years of successful teaching batches</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>ICSE & CBSE Class 12 district toppers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Trusted name in Malda for commerce coaching</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--accent)] rounded-full blur-3xl opacity-30"></div>
                <img 
                  src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/7813/images/1771308099399-commerce-education-materials.jpg"
                  alt="Commerce education materials"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
