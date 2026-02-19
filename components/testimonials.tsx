"use client";
import { useState } from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Arpita Sarkar",
      review: "She is absolutely the most quixotic teacher I have encountered in my short lifetime. She is like a benediction for every student and makes learning so pragmatic and easy. Finding a guru like her is a pure moment of serendipity for me and I am thankful beyond cliche. Madam's tenacity mixed with alacrity makes learning a cake walk.",
      rating: 5
    },
    {
      name: "Pragya Poddar",
      review: "Absolutely the best commerce coaching centre! The teachings of Sheetal Ma'am are incredibly knowledgeable, supportive, and she is always ready to help. Her teaching methods are practical and focused on concept clarity, which made even the toughest topics like Accounts and Economics feel easy. The notes provided were detailed and extremely useful for exam preparation. Regular tests and personal attention ensured consistent performance. Thanks to her, as her teaching is exceptionally marvellous. Highly recommended for any student who wants to excel in not only in Commerce Department but also in each and every aspect of Professionalism. Thank you Ma'am for providing guidance on Career Opportunities and making us 'The Brightest Students' ever. Thank you Ma'am for your wonderful Support and hardwork.",
      rating: 5
    },
    {
      name: "Uma Ghosh",
      review: "Commerce Coaching Hub by Sheetal Sarda Ma'am is one of the best places to learn commerce with clarity and confidence. Ma'am teaches with genuine care and ensures every student understands each topic thoroughly. The classes are well-structured, and day-to-day tasks help us stay consistent with our studies. One of the best things about this institute is how approachable Ma'am is—any problem we face is solved with patience and support. Her teaching style is simple, practical, and highly effective. Learning here feels both comfortable and motivating.",
      rating: 5
    },
    {
      name: "Mehrin Haque",
      review: "There may be many teachers teaching the same subject, but the one who truly makes learning enjoyable and the subject easy to understand is Sheetal Ma'am, who does it with genuine sincerity. She is the perfect example of how knowledge can be shared through simple gestures, words, and patience. A teacher like her is a true gift for any student.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--brand-dark)] mb-4">
            What Our Students & Parents Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from our student community
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in-up">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center italic">
              "{testimonials[currentIndex].review}"
            </p>

            {/* Name */}
            <p className="text-xl font-bold text-[var(--brand)] text-center">
              — {testimonials[currentIndex].name}
            </p>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:bg-[var(--accent)] text-[var(--brand)] hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:bg-[var(--accent)] text-[var(--brand)] hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[var(--accent)] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
