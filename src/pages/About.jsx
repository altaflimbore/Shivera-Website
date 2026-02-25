import { Link } from 'react-router-dom'
import approachVisual from '../assets/generated/about-approach-visual.png'

const About = () => {
  const certifications = [
    { name: 'Certified GxP, IT Governance & Computer System Validation (CSV) Auditors', icon: '✅' },
    { name: 'IAPP Certified Data Privacy Professionals (CIPP / CIPM / CIPT)', icon: '🔐' },
    { name: 'ISO Lead Implementers and Lead Auditors (ISO 27001 and related standards)', icon: '📋' },
    { name: 'ISMS and Enterprise Compliance Certifications', icon: '🛡️' },
  ]

  const achievements = [
    'DPDP readiness programs',
    'Enterprise data privacy and governance audits',
    'ISO 27001 and ISO 27701 certification journeys',
    'Compliance awareness and cyber hygiene training',
    'Vendor risk and third-party security assessments',
    'Security awareness workshops for business and IT teams',
    'Enterprise data governance and classification programs',
    'IT policy, SOP, and governance framework development',
  ]

  const expertise = [
    {
      title: 'Pharmaceutical GxP, CSV & Regulatory Audit Compliance',
      description: 'Comprehensive compliance programs designed for regulated industries, including Pharmaceutical GxP alignment, Computer System Validation (CSV), audit preparation, documentation lifecycle management, and regulatory readiness support.'
    },
    {
      title: 'Governance, Risk & Compliance (GRC)',
      description: 'Integrated governance frameworks that align risk management, regulatory obligations, and operational controls. This includes structured compliance monitoring, control design, policy governance, and enterprise risk oversight.'
    },
    {
      title: 'Data Privacy & GDPR / DPDP Compliance',
      description: 'End-to-end data privacy programs aligned with India\'s Digital Personal Data Protection (DPDP) Act and global regulations such as GDPR. Services include gap assessments, privacy-by-design frameworks, data mapping, consent governance, and regulatory compliance implementation.'
    },
    {
      title: 'Cybersecurity Risk Management',
      description: 'Enterprise security risk assessments, control implementation, incident response frameworks, and Information Security Management System (ISMS)-aligned defenses to safeguard critical information assets.'
    },
    {
      title: 'ISO 27001 & ISMS Implementation',
      description: 'Structured implementation of ISO 27001 and related standards, including gap analysis, risk treatment planning, documentation development, control deployment, internal audits, and certification readiness support.'
    },
    {
      title: 'Audit & Regulatory Readiness',
      description: 'Mock audits, evidence preparation, compliance reviews, and ongoing monitoring programs designed to ensure sustainable regulatory alignment and audit preparedness'
    }
  ]

  const trustSignals = [
    { label: 'GxP Aligned', icon: '✓' },
    { label: 'CSV Ready', icon: '💻' },
    { label: 'DPDP Compliant', icon: '🔒' },
  ]

  return (
    <div className="pt-16">
      {/* Premium Hero Section */}
      <section className="hero-gradient text-white section-spacing relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 tech-grid" />
        
        <div className="content-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-6 flex-wrap">
              {trustSignals.map((signal) => (
                <span key={signal.label} className="badge-cyan text-white bg-accent-cyan/20 border-accent-cyan/40">
                  {signal.icon} {signal.label}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Advancing Secure, Innovative, and Sustainable IT and Compliance Solutions Across Regulated Industries
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Expert Pharmaceutical GxP, Computer System Validation (CSV), Data Privacy, and IT Governance solutions for regulated enterprises
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Our Foundation</h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2025, SHIVERA INFOTECH LLP was established to address the growing demand for structured Pharmaceutical GxP, Computer System Validation (CSV), and Data Privacy compliance, alongside cybersecurity and legal regulatory excellence in an increasingly regulated global environment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We specialize in designing and implementing comprehensive governance frameworks that integrate Pharmaceutical GxP standards, validated Computer System controls, Information Security Management Systems (ISMS), Data Privacy programs, and Quality Management Systems (QMS). Our multidisciplinary expertise ensures that compliance is embedded into operational processes, technology infrastructure, and organizational culture — not treated as a standalone documentation exercise.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By combining regulatory insight, technical proficiency, and structured risk management practices, we help organizations achieve audit readiness, strengthen internal controls, and maintain sustainable regulatory alignment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From pharmaceutical and healthcare enterprises to financial services, technology, and manufacturing organizations, we enable secure, compliant, and scalable growth while preserving operational agility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-spacing bg-slate-50">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Who We Are</h2>
            <div className="card-premium p-10">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong className="text-slate-900">SHIVERA INFOTECH LLP</strong> is a specialized Pharmaceutical GxP, Computer System Validation (CSV), Data Privacy, Information Security, and IT Governance consulting firm dedicated to helping organizations achieve secure, compliant, and sustainable growth.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We partner with executive leadership and compliance stakeholders to align regulatory requirements, risk management frameworks, and technology strategy into a unified governance structure. Our approach ensures that compliance initiatives are integrated with business objectives, operational realities, and long-term scalability.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Serving startups, mid-market enterprises, and large organizations across pharmaceuticals, healthcare, BFSI, SaaS, technology, and manufacturing, we design programs that balance regulatory rigor with practical implementation. Our solutions are structured to strengthen internal controls while preserving agility and growth momentum.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every engagement combines regulatory insight, technical depth, and structured execution so that Pharmaceutical GxP controls, validated systems, Data Privacy governance, cybersecurity frameworks, and ISO-aligned management systems become embedded into everyday operations — not treated as isolated or temporary compliance efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Vision & Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-premium p-10 flex flex-col">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  To be a trusted leader in Pharmaceutical GxP, Computer System Validation (CSV), Data Privacy, and integrated governance frameworks—enabling organizations to operate securely, confidently, and audit-ready in an increasingly regulated digital environment.
                </p>
              </div>
              <div className="card-premium p-10 flex flex-col">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  To deliver structured, sustainable, and regulator-aligned compliance solutions across Pharmaceutical GxP, CSV, Data Privacy, IT Governance, and cybersecurity—strengthening risk management, enhancing operational resilience, and supporting long-term enterprise growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="section-spacing bg-slate-50">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Core Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="card-premium p-8 flex flex-col">
                  <div className="text-3xl mb-4 font-bold text-accent-cyan">{index + 1}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Leadership</h2>
            <div className="card-premium p-10">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong className="text-slate-900">SHIVERA INFOTECH LLP</strong> is led by professionals with deep expertise in Pharmaceutical GxP compliance, Computer System Validation (CSV), Information Security, Data Privacy, IT Governance, and Quality Management Systems.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our leadership team brings together over two decades of combined experience across Pharmaceutical Quality & Regulatory Compliance, enterprise IT governance, and risk management. Their multidisciplinary background ensures that regulatory expectations are translated into structured, operationally sustainable compliance programs.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The team includes experienced GxP and IT Governance & Compliance auditors, certified privacy professionals (IAPP), ISO 27001-certified information security specialists, and quality management experts. This integrated expertise enables us to deliver audit-ready, regulator-aligned solutions tailored to complex and highly regulated environments.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With strong alignment to DPDP, GDPR, ISO standards, Pharmaceutical 21 CFR, EU GMP, and other industry-specific regulatory frameworks, our leadership ensures that every engagement is grounded in compliance precision, technical depth, and practical execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-spacing bg-slate-50">
        <div className="content-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Assess Compliance & Risk',
                  description: 'We begin with maturity assessments, risk reviews, and gap analyses across cybersecurity, data privacy, and governance.',
                  icon: '📊',
                },
                {
                  step: '02',
                  title: 'Design Secure Frameworks',
                  description: 'We build policies, SOPs, ISMS controls, and DPDP-aligned privacy frameworks mapped to ISO and regulatory expectations.',
                  icon: '🎨',
                },
                {
                  step: '03',
                  title: 'Implement, Train & Sustain',
                  description: 'We implement controls, run trainings, support audits, and set up continuous monitoring to keep compliance alive.',
                  icon: '✨',
                },
              ].map((item, index) => (
                <div key={index} className="card-premium p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card-premium p-6 flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-3xl flex-shrink-0">🏆</span>
                <span className="text-slate-600 font-medium text-lg">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-spacing bg-slate-50">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">Professional Certifications</h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Our team holds industry-recognized certifications demonstrating expertise across Pharmaceutical GxP, IT Computer System Validation (CSV), Data Privacy, Cybersecurity, and Integrated Compliance domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-navy to-primary-navy-light text-white rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-semibold leading-tight">{cert.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="bg-gradient-to-r from-primary-navy via-slate-800 to-primary-navy-light text-white section-spacing relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 tech-grid" />
        
        <div className="content-container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to work with us?
            </h2>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Let's discuss how we can help strengthen your IT and compliance foundation.
            </p>
            <Link
              to="/meeting"
              className="btn-accent"
            >
              📅 Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
