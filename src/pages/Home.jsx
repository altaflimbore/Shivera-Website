import { Link } from "react-router-dom"

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
      <section className="relative bg-gradient-to-br from-primary-navy via-primary-navy to-primary-teal text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-sm font-semibold">
                  Enterprise Trusted
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Organizations with Trusted IT, Data Privacy, and
              Compliance Solutions
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              We help enterprises achieve secure, compliant, and sustainable
              growth through expert-led cybersecurity, data privacy, and
              regulatory compliance services.
            </p>

            {/* ✅ Updated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="
                px-8 py-4 rounded-full font-semibold text-lg
                bg-primary-teal text-white
                hover:bg-teal-600
                transition-all duration-300
                shadow-lg hover:shadow-2xl
                "
                
              >
                📅 Schedule a Consultation
              </Link>

              <Link
                to="/solutions"
                className="
                  px-8 py-4 rounded-full font-semibold text-lg
                  text-white border border-white
                  hover:bg-white hover:text-primary-navy
                  transition-all duration-300
                  shadow-sm hover:shadow-lg
                  flex items-center justify-center gap-2
                "
              >
                Explore Our Solutions →
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {["Audit Ready", "Regulator Aligned", "Enterprise Trusted", "20+ Years Expertise"].map(
                (text, i) => (
                  <div
                    key={i}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="text-2xl mb-2">✔</div>
                    <div className="text-sm font-semibold">{text}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-teal text-white">
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
            to="/contact"
            className="
px-8 py-4 rounded-full font-semibold text-lg
bg-primary-teal text-white
hover:bg-teal-600
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
