import { Link } from "react-router-dom"
import whyUsBanner from "../assets/generated/whyus-impact-banner.png"

const Collaboration = () => {
  const partners = [
    {
      name: "IQSYS",
      description:
        "Quality systems and compliance consulting partner specializing in ISO certifications and quality management.",
      icon: "🤝",
    },
    {
      name: "Value Creator",
      description:
        "Strategic business consulting and value creation services for enterprise transformation.",
      icon: "💼",
    },
    {
      name: "Shekhar & Manish Consulting",
      description:
        "Expert consulting services in regulatory compliance and business process optimization.",
      icon: "📋",
    },
    {
      name: "CyberSec Expert Network",
      description:
        "Cybersecurity expertise network providing advanced security solutions and threat intelligence.",
      icon: "🛡️",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0A1F44] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Trusted Compliance, Cybersecurity & Governance Partner for Regulated
            Enterprises
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-10 text-center">
              Why Choose SHIVERA INFOTECH?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "👥",
                  title: "20+ Years Leadership Expertise",
                  desc: "Combined experience across IT, privacy, compliance, and governance domains.",
                },
                {
                  icon: "🏆",
                  title: "Certified Data Privacy & Cybersecurity Experts",
                  desc: "IAPP certified professionals and ISO lead implementers delivering trusted outcomes.",
                },
                {
                  icon: "✅",
                  title: "Audit-Ready Implementation Delivery",
                  desc: "End-to-end support ensuring regulator alignment and enterprise readiness.",
                },
                {
                  icon: "📋",
                  title: "Regulator-Aligned Compliance Solutions",
                  desc: "Programs designed for DPDP, GDPR, ISO standards, and industry regulations.",
                },
                {
                  icon: "🌐",
                  title: "Cross-Industry Consulting Excellence",
                  desc: "Proven track record across pharma, healthcare, corporate, and institutions.",
                },
                {
                  icon: "🤝",
                  title: "Implementation-First Approach",
                  desc: "We don’t just consult — we implement, enable teams, and deliver results.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-enterprise"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pharma Compliance Expertise */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Pharma-Regulated Compliance Expertise
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Pharmaceutical and regulated industries demand the highest levels
              of governance, audit readiness, and quality compliance. We deliver
              frameworks built for precision, trust, and long-term regulatory
              alignment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💊",
                  title: "Pharma-Grade Standards",
                  desc: "Solutions aligned with strict regulatory and quality expectations.",
                },
                {
                  icon: "📑",
                  title: "Documentation & Validation Ready",
                  desc: "Support for compliance evidence, audit trails, and governance reporting.",
                },
                {
                  icon: "🔍",
                  title: "Risk-Controlled Compliance",
                  desc: "Programs designed to reduce regulatory risk and improve enterprise trust.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-enterprise"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <img
              src={whyUsBanner}
              alt=""
              aria-hidden="true"
              className="w-full max-w-5xl mx-auto mb-10 rounded-2xl shadow-lg hidden md:block"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-10">
              Compliance Impact at Scale
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "20+", label: "Years of Expertise" },
                { number: "210+", label: "Software Compliance Reviews" },
                { number: "41", label: "Departments Covered" },
                { number: "100%", label: "Audit-Ready Delivery" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card-enterprise text-center"
                >
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/85 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-10">
              Our Implementation Approach
            </h2>

            <div className="space-y-6 text-left">
              {[
                {
                  step: "01",
                  title: "Assess & Identify Compliance Gaps",
                  desc: "We evaluate maturity, risks, and regulatory gaps across your organization.",
                },
                {
                  step: "02",
                  title: "Design Governance & Control Frameworks",
                  desc: "We build structured privacy, security, and compliance programs.",
                },
                {
                  step: "03",
                  title: "Implement, Enable & Execute",
                  desc: "We deploy controls, workflows, documentation, and training.",
                },
                {
                  step: "04",
                  title: "Audit Support & Continuous Compliance",
                  desc: "We ensure long-term readiness through monitoring and improvement.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-enterprise flex gap-6 items-start"
                >
                  <div className="text-2xl font-bold text-accent-cyan">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/85">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Collaboration Services & Trusted Partners
            </h2>

            <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              We collaborate with expert partners to deliver comprehensive
              compliance, cybersecurity, and transformation services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="card-enterprise"
                >
                  <div className="text-5xl mb-4">{partner.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-white/85 mb-6">{partner.description}</p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
                    style={{background: 'linear-gradient(135deg, #1E4E8C, #274C8E)', color: 'white', boxShadow: '0 10px 25px rgba(10, 31, 68, 0.2)'}}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #274C8E, #325FAE)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #1E4E8C, #274C8E)'}
                  >
                    ➡ Connect With Partner
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white" style={{background: 'linear-gradient(135deg, #0A1F44, #2C5FA8)'}}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a team that combines
            expertise, implementation excellence, and regulatory alignment.
          </p>

          <Link
            to="/meeting"
            className="
            px-8 py-4 rounded-full font-semibold text-lg
            bg-white text-[#0A1F44]
            hover:bg-[#E5ECF7]
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

export default Collaboration
