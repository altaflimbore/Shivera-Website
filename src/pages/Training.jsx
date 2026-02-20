import { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"

const Training = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  const programs = [
    {
      title: "Cybersecurity Training",
      description:
        "Comprehensive programs covering ISMS, risk management, incident response, and security best practices.",
      duration: "40 hours",
      mode: "Online/In-Person",
      badge: "Certified",
      icon: "🎓",
      slug: "cybersecurity-training",
    },
    {
      title: "Data Privacy Training",
      description:
        "DPDP, GDPR, and privacy program implementation training for privacy professionals.",
      duration: "32 hours",
      mode: "Online/In-Person",
      badge: "IAPP Aligned",
      icon: "🔐",
      slug: "data-privacy-training",
    },
    {
      title: "Certified DPO Training",
      description:
        "Data Protection Officer certification program covering privacy laws, compliance, and governance.",
      duration: "48 hours",
      mode: "Online/In-Person",
      badge: "Certified DPO",
      icon: "👨‍💼",
      slug: "certified-dpo-training",
    },
    {
      title: "POSH Training",
      description:
        "Prevention of Sexual Harassment awareness and Internal Committee member training programs.",
      duration: "16 hours",
      mode: "In-Person/Online",
      badge: "Legal Compliant",
      icon: "⚖️",
      slug: "posh-training",
    },
    {
      title: "ISO Training Programs",
      description:
        "ISO 27001, ISO 9001, ISO 14001 Lead Implementer and Auditor training programs.",
      duration: "40 hours",
      mode: "Online/In-Person",
      badge: "ISO Certified",
      icon: "✅",
      slug: "iso-training-programs",
    },
    {
      title: "Data Engineering Training",
      description:
        "Data engineering, analytics, and privacy-preserving data processing training.",
      duration: "60 hours",
      mode: "Online",
      badge: "Industry Ready",
      icon: "📊",
      slug: "data-engineering-training",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0A1F44] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Training & Certifications
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Professional development programs to build expertise in cybersecurity,
            data privacy, and compliance
          </p>
        </div>
      </section>

      {/* Training Programs Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                id={program.slug}
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 flex flex-col"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{program.icon}</div>

                {/* Title + Badge */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary-navy">
                    {program.title}
                  </h3>
                  <span className="bg-[#1B3A6B] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {program.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{program.description}</p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-[#1E4E8C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Duration: {program.duration}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-[#1E4E8C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Delivery: {program.mode}
                  </div>
                </div>

                {/* Enroll Button Fixed at Bottom */}
                <Link
                  to="/contact"
                  className="mt-auto block w-full text-white text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  style={{background: 'linear-gradient(135deg, #1E4E8C, #274C8E)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)'}}
                  onMouseEnter={(e) => {e.currentTarget.style.background = 'linear-gradient(135deg, #274C8E, #325FAE)'}}
                  onMouseLeave={(e) => {e.currentTarget.style.background = 'linear-gradient(135deg, #1E4E8C, #274C8E)'}}
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Why Choose Our Training Programs?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Industry-Aligned Curriculum",
                  desc: "Content designed by certified professionals with real-world experience",
                },
                {
                  icon: "📜",
                  title: "Certification Ready",
                  desc: "Programs aligned with industry certifications and standards",
                },
                {
                  icon: "👨‍🏫",
                  title: "Expert Instructors",
                  desc: "Learn from certified privacy, cybersecurity, and compliance experts",
                },
                {
                  icon: "💼",
                  title: "Practical Focus",
                  desc: "Hands-on exercises and case studies from real implementations",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{background: 'linear-gradient(135deg, #0A1F44, #1B3A6B, #274C8E)'}}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Skills?
          </h2>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our training programs and enrollment
            options.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-[#0A1F44] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#E6ECF7] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            ✅ Contact Us for Training
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Training
