"use client";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image Column - 2/5 */}
          <div className="md:col-span-2 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent)] to-[var(--brand-light)] rounded-3xl opacity-20"></div>
              <img 
                src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/7813/images/1771308735669-WhatsApp_Image_2026-02-12_at_1.24.18_PM__1_.jpeg"
                alt="Sheetal Sarda - Commerce Educator"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
          
          {/* Content Column - 3/5 */}
          <div className="md:col-span-3 animate-fade-in-up delay-200">
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--brand-dark)] mb-6 leading-tight">
              Meet Sheetal Sarda –<br/>A Mentor with 25+ Years of Experience
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                With over <strong className="text-[var(--brand)]">25 years of dedicated teaching experience</strong> in Commerce education, Sheetal Sarda has become a trusted name among students and parents in Malda.
              </p>
              
              <p>
                Her expertise spans <strong className="text-[var(--brand)]">Accountancy, Business Studies, Economics, and related subjects</strong>, making her uniquely qualified to guide students from Class IX through professional courses like CA and CS Foundation.
              </p>
              
              <p>
                Known for <strong className="text-[var(--brand)]">simplifying complex concepts</strong> and delivering them with clarity, she focuses on building strong fundamentals that last a lifetime.
              </p>
              
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Conceptual clarity</strong> focused approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Mentorship-driven</strong> teaching approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Hundreds of successful students</strong> over decades</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Trusted by parents</strong> and recommended by alumni</span>
                </li>
              </ul>
            </div>
            
            {/* Quote */}
            <div className="mt-8 p-6 border-l-4 border-[var(--accent)] bg-white rounded-r-2xl shadow-lg">
              <p className="text-2xl font-serif italic text-[var(--brand)]">
                "Strong concepts build strong careers."
              </p>
              <p className="text-sm text-gray-600 mt-2">— Sheetal Sarda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
