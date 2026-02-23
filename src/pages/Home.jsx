import { Link } from "react-router-dom"
import heroBanner from "../assets/generated/shivera-hero-banner.png"

const Home = () => {
  const solutions = [
    {
      title: "Cybersecurity & ISMS Implementation",
      description:
        "Comprehensive information security management systems and risk assessments.",
      icon: "🛡️",
      slug: "cybersecurity-isms",
    },
    {
      title: "Data Privacy & DPDP Compliance Consulting",
      description:
        "Expert guidance on data protection regulations and privacy program execution.",
      icon: "🔒",
      slug: "data-privacy-governance",
    },
    {
      title: "ISO Certifications & Audit Support",
      description:
        "End-to-end ISO certification journeys with audit-ready implementation.",
      icon: "✅",
      slug: "iso-certifications",
    },
    {
      title: "IT CSV & GxP Compliance",
      description:
        "Computer system validation and GxP infrastructure qualification services.",
      icon: "💻",
      slug: "quality-it-compliance",
    },
    {
      title: "ERPNext Implementation & Support",
      description:
        "Business process optimization and ERP integration services.",
      icon: "📊",
      slug: "erp-digital-solutions",
    },
    {
      title: "POSH Compliance & Legal Training",
      description:
        "Prevention of Sexual Harassment awareness and compliance programs.",
      icon: "⚖️",
      slug: "posh-legal-compliance",
    },
    {
      title: "Environmental & Energy Audits",
      description:
        "Green audits, energy optimization, and regulatory compliance support.",
      icon: "🌱",
      slug: "environmental-energy-audits",
    },
  ]

  const testimonials = [
    {
      company: "Encube",
      feedback:
        "Excellent service and expertise in compliance across our regulated operations.",
      rating: 5,
    },
    {
      company: "HTPL",
      feedback:
        "Professional and thorough implementation support with clear, audit-ready deliverables.",
      rating: 5,
    },
    {
      company: "IIK",
      feedback:
        "Outstanding cybersecurity and ISMS consulting services for our enterprise environment.",
      rating: 5,
    },
    {
      company: "IQSYS",
      feedback:
        "Trusted partner for ISO and quality system journeys with strong implementation focus.",
      rating: 5,
    },
    {
      company: "HERBAYU WELLNESS",
      feedback:
        "Engaging privacy and compliance training that resonated with our teams.",
      rating: 5,
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#0A1F44] text-white pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#1E4E8C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#112B5C] rounded-full blur-3xl"></div>
        </div>

        {/* Premium hero visual (non-intrusive, no layout shift) */}
        {/* Background image for desktop */}
        <div className="hidden lg:block absolute inset-0" style={{backgroundImage: `linear-gradient(rgba(10,31,68,0.85), rgba(10,31,68,0.85)), url(${heroBanner})`, backgroundPosition: 'right center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>

        {/* Background image for mobile */}
        <div className="block lg:hidden absolute inset-0" style={{backgroundImage: `linear-gradient(rgba(10,31,68,0.85), rgba(10,31,68,0.85)), url(${heroBanner})`, backgroundPosition: 'center top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>

        {/* Subtle cybersecurity illustration */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20 L150 50 L150 120 Q150 140 130 150 L100 160 L70 150 Q50 140 50 120 L50 50 Z" fill="#1E4E8C" stroke="#0A1F44" strokeWidth="2"/>
            <circle cx="100" cy="100" r="20" fill="#0A1F44"/>
            <rect x="90" y="85" width="20" height="30" fill="#1E4E8C"/>
            <circle cx="100" cy="125" r="5" fill="#0A1F44"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <div className="inline-block mb-8">
              <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-sm font-semibold">
                  Enterprise Trusted
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center max-w-4xl mx-auto mb-6">
              Empowering Organizations with Trusted IT, Data Privacy, and
              Compliance Solutions
            </h1>

            <p className="mt-6 text-base md:text-lg text-center max-w-3xl mx-auto text-gray-200">
              We help enterprises achieve secure, compliant, and sustainable
              growth through expert-led cybersecurity, data privacy, and
              regulatory compliance services.
            </p>

            {/* ✅ Updated Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 mb-12">
              <Link
                to="/meeting"
                className="
                px-8 py-4 rounded-full font-semibold text-lg text-white
                bg-gradient-to-r from-[#1E4E8C] to-[#0A1F44]
                hover:from-[#2E5E9C] hover:to-[#1A2F54]
                transition-all duration-300
                shadow-lg hover:shadow-2xl
                "
                
              >
                📅 Schedule a Consultation
              </Link>

              <a
                href="https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-8 py-4 rounded-full font-semibold text-lg
                  text-white border-2 border-[#0A1F44]
                  bg-transparent
                  hover:bg-[#0A1F44] hover:text-white
                  transition-all duration-300
                  shadow-sm hover:shadow-lg
                "
              >
                Learn More About DPDP Act
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSckn3ntQ7YASnyQnRQbzrTroaosDIo5P19ZCAaepyQYYvcV4g/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-8 py-4 rounded-full font-semibold text-lg text-white
                  bg-gradient-to-r from-[#0A1F44] to-[#4682B4]
                  hover:from-[#1A2F54] hover:to-[#5682C4]
                  transition-all duration-300
                  shadow-lg hover:shadow-2xl
                  ring-2 ring-[#0A1F44] ring-opacity-50 hover:ring-opacity-100
                "
              >
                Assess Your Compliance Gap Score
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: "🛡️", text: "Audit Ready" },
                { icon: "⚖️", text: "Regulator Aligned" },
                { icon: "🏢", text: "Enterprise Trusted" },
                { icon: "🏆", text: "20+ Years Expertise" }
              ].map(
                ({ icon, text }, i) => (
                  <div
                    key={i}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{icon}</div>
                    <div className="text-sm font-semibold">{text}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0A1F44] text-white">
        <div className="content-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to strengthen your IT and compliance foundation?
          </h2>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss your
            cybersecurity, data privacy, and compliance needs.
          </p>

          {/* ✅ Updated CTA Button */}
          <Link
            to="/meeting"
            className="
            px-8 py-4 rounded-full font-semibold text-lg text-white
            bg-gradient-to-r from-[#1E4E8C] to-[#0A1F44]
            hover:from-[#2E5E9C] hover:to-[#1A2F54]
            transition-all duration-300
            shadow-lg hover:shadow-2xl
            "
          >
            📅 Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
