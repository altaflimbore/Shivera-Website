import { Link } from "react-router-dom"
import heroBanner from "../assets/generated/shivera-hero-banner.png"
import cybersecurityBg from "../assets/cybersecurity-hero-bg.svg"

const Home = () => {
  const solutions = [
    {
      title: "IT CSV & Pharmaceutical GxP Compliance",
      description:
        "Validated systems and GxP-aligned compliance frameworks for regulated industries.",
      icon: "💻",
      slug: "quality-it-compliance",
    },
    {
      title: "Data Privacy & DPDP / GDPR Compliance",
      description:
        "Strategic data protection advisory aligned with DPDP Act, GDPR, and global privacy regulations.",
      icon: "🔒",
      slug: "data-privacy-governance",
    },
    {
      title: "Cybersecurity & ISMS Implementation",
      description:
        "Enterprise-grade Information Security Management Systems designed to safeguard critical assets.",
      icon: "🛡️",
      slug: "cybersecurity-isms",
    },
    {
      title: "ERPNext Implementation & Process Optimization",
      description:
        "Business process transformation through structured ERPNext deployment and integration.",
      icon: "📊",
      slug: "erp-digital-solutions",
    },
    {
      title: "ISO Certifications & Audit Support",
      description:
        "Comprehensive ISO certification journeys with structured governance implementation.",
      icon: "✅",
      slug: "iso-certifications",
    },
    {
      title: "POSH Compliance & Legal Governance",
      description:
        "Structured workplace compliance programs aligned with statutory obligations.",
      icon: "⚖️",
      slug: "posh-legal-compliance",
    },
    {
      title: "Training & Certifications",
      description:
        "Professional development programs in CSV, Data Privacy, ISO standards, and Cybersecurity governance.",
      icon: "🎓",
      slug: "training-certifications",
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
    <div className="pt-16">
      {/* Premium Hero Section */}
      <section className="hero-gradient text-white overflow-hidden section-spacing relative">
        {/* Premium cybersecurity SVG background with animated network */}
        <div className="absolute inset-0 z-0">
          <img 
            src={cybersecurityBg} 
            alt="Cybersecurity network backdrop" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Enhanced overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/60 via-primary-navy/50 to-primary-navy/70 z-1" />

        {/* Premium trust signals */}
        <div className="absolute top-8 right-8 flex gap-2 opacity-90 z-20">
          <span className="badge-cyan text-white bg-accent-cyan/20 border-accent-cyan/40">🛡️ ISO 27001</span>
          <span className="badge-cyan text-white bg-accent-cyan/20 border-accent-cyan/40">🔒 GDPR Aligned</span>
          <span className="badge-cyan text-white bg-accent-cyan/20 border-accent-cyan/40">✓ DPDP Ready</span>
        </div>

        <div className="content-container relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white">
                🏆 Enterprise Trusted • 20+ Years Expertise
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center max-w-4xl mx-auto mb-6 text-balance">
              Empowering Organizations with Trusted IT, Data Privacy, and Compliance Solutions
            </h1>

            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-slate-200 mb-10 leading-relaxed">
              We empower enterprises to operate securely and confidently through expert-led pharmaceutical regulatory compliance, IT governance, cybersecurity, data privacy, and legal compliance programs designed for long-term sustainability.
            </p>

            {/* Enhanced Premium CTA Buttons - Multi-action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap">
              {/* Primary CTA: Schedule Consultation */}
              <Link
                to="/meeting"
                className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block text-center border-2 border-accent-cyan text-white bg-gradient-to-r from-accent-cyan/20 to-accent-cyan/10 hover:from-accent-cyan/30 hover:to-accent-cyan/20"
              >
                📅 Schedule a Consultation
              </Link>

              {/* Secondary CTA: DPDP Act Info */}
              <a
                href="https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block text-center border-2 border-accent-cyan text-white bg-gradient-to-r from-accent-cyan/20 to-accent-cyan/10 hover:from-accent-cyan/30 hover:to-accent-cyan/20"
              >
                📋 Learn More About DPDP Act
              </a>

              {/* Tertiary CTA: Gap Assessment */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSckn3ntQ7YASnyQnRQbzrTroaosDIo5P19ZCAaepyQYYvcV4g/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block text-center border-2 border-accent-cyan text-white bg-gradient-to-r from-accent-cyan/20 to-accent-cyan/10 hover:from-accent-cyan/30 hover:to-accent-cyan/20"
              >
                🎯 Assess Compliance Gap Score
              </a>
            </div>

            <p className="text-base md:text-lg text-center max-w-2xl mx-auto text-slate-300 mb-8 leading-relaxed font-medium">
              
            </p>

            {/* Premium Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: "🛡️", text: "Audit Ready", desc: "Systems" },
                { icon: "⚖️", text: "Regulator", desc: "Aligned" },
                { icon: "🏢", text: "Enterprise", desc: "Trusted" },
                { icon: "🏆", text: "20+ Years", desc: "Expertise" }
              ].map(
                ({ icon, text, desc }, i) => (
                  <div
                    key={i}
                    className="card-enterprise p-4 animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="text-3xl mb-2">{icon}</div>
                    <div className="text-sm font-semibold text-white">{text}</div>
                    <div className="text-xs text-white/85">{desc}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Solutions Section */}
      <section className="section-spacing bg-slate-50">
        <div className="content-container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Enterprise-grade compliance and technology services trusted by leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={`/solutions/${solution.slug}`}
                className="group card-enterprise animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-cyan/10 mr-4 group-hover:bg-accent-cyan/20 transition-colors duration-300 group-hover:scale-110">
                    <span className="text-3xl">{solution.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-4 text-accent-cyan font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Final CTA Section */}
      <section className="bg-gradient-to-r from-accent-indigo to-accent-indigo-dark text-white section-spacing relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 tech-grid" />
        
        <div className="content-container text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
           Schedule a consultation to evaluate your pharmaceutical GxP and CSV compliance, data privacy governance, legal regulatory obligations, and cybersecurity posture.
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let our experts assess your IT and compliance readiness. Schedule a consultation today.
          </p>

          <Link
            to="/meeting"
            className="btn-outline text-center inline-block border-white text-white hover:bg-white hover:text-accent-indigo"
          >
            📅 Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
