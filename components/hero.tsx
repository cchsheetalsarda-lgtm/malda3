"use client";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen -mt-24 flex items-center bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand)] to-[var(--brand-dark)]">
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Text Content */}
          <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-6">
            25+ Years of Excellence in Commerce Education
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
            Building Strong Concepts. Delivering Consistent Results.<br/>
            Expert Coaching for IX, X, XI, XII, B.Com & Professional Courses.
          </p>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-white">
            <div className="flex items-center gap-3 animate-fade-in-up delay-100">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--brand-dark)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-lg font-medium">25+ Years of Teaching Experience</span>
            </div>
            
            <div className="flex items-center gap-3 animate-fade-in-up delay-200">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--brand-dark)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Concept-Based Learning</span>
            </div>
            
            <div className="flex items-center gap-3 animate-fade-in-up delay-300">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--brand-dark)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Personal Attention & Small Batches</span>
            </div>
            
            <div className="flex items-center gap-3 animate-fade-in-up delay-400">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--brand-dark)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Proven Track Record of Student Success</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
            <a href="#contact">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-semibold bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--brand-dark)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Enroll Now
              </Button>
            </a>
            <a href="#contact">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[var(--brand)] transition-all duration-300"
              >
                Book a Free Demo Class
              </Button>
            </a>
          </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}
