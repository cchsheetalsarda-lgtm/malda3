"use client";
import { KleapForm } from "@/components/kleap-form";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--brand-dark)] mb-4">
            Start Your Commerce Journey with the Right Guidance
          </h2>
          <p className="text-xl text-gray-600">
            Limited seats available. Enroll today to secure your spot.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - 2/5 */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] rounded-3xl p-8 shadow-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Call / WhatsApp</p>
                    <a href="tel:7866836868" className="text-xl font-semibold hover:text-[var(--accent)] transition-colors">
                      +91 7866836868
                    </a>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/917866836868?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Commerce%20Coaching%20Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Location</p>
                    <p className="text-lg leading-relaxed">
                      South Baluchar, Marwari Patty Lane<br/>
                      Malda, West Bengal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-[var(--accent)] rounded-3xl p-8 shadow-lg animate-fade-in-up delay-200">
              <h4 className="text-2xl font-bold text-[var(--brand-dark)] mb-3">
                Limited Seats Available
              </h4>
              <p className="text-[var(--brand-dark)]/80 mb-4">
                Don't miss out on the opportunity to learn from 25+ years of teaching excellence.
              </p>
              <div className="flex items-center gap-2 text-[var(--brand-dark)] font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                Enroll today to secure your spot
              </div>
            </div>
          </div>

          {/* Contact Form - 3/5 */}
          <div className="lg:col-span-3 animate-fade-in-up delay-100">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <h3 className="text-3xl font-bold text-[var(--brand-dark)] mb-2">
                Inquiry Form
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>
              
              <KleapForm
                formId="enrollment-inquiry"
                title="Enrollment Inquiry"
                fields={[
                  { name: "name", label: "Student Name", type: "text", required: true },
                  { name: "parent_name", label: "Parent Name", type: "text", required: true },
                  { name: "phone", label: "Phone Number", type: "tel", required: true },
                  { name: "email", label: "Email Address", type: "email", required: false },
                  { 
                    name: "class", 
                    label: "Class / Course Interested In", 
                    type: "select", 
                    options: [
                      "Class IX",
                      "Class X",
                      "Class XI Commerce",
                      "Class XII Commerce",
                      "B.Com",
                      "CA Foundation",
                      "CS Foundation"
                    ],
                    required: true 
                  },
                  { 
                    name: "subjects", 
                    label: "Subjects", 
                    type: "text",
                    required: false
                  },
                  { name: "message", label: "Message / Questions", type: "textarea", required: false }
                ]}
                submitText="Submit Inquiry"
                successMessage="Thank you for your inquiry! We'll contact you within 24 hours to discuss enrollment details."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
