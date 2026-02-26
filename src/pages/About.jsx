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
    'Pharmaceuticals GxP Audits',
    'IT Infrastructure Qualification',
    'Equipment Qualification',
    'IT CSV of GxP Applications',
    'DPDP readiness programs',
    'Enterprise Data Privacy and governance audits',
    'ISO 27001 and ISO 27701 certification journeys',
    'Compliance awareness and cyber hygiene training',
    'Security awareness workshops for business and IT teams',
    'IT policy, SOP, and GRC framework development',
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

  const services = [
    {
      icon: '💻',
      title: 'IT CSV & Pharmaceutical GxP Compliance',
      description: 'Validated systems and GxP-aligned compliance frameworks for regulated industries.',
      overview: 'Our Pharmaceutical GxP and Computer System Validation (CSV) services ensure that IT systems within regulated environments meet validation requirements and maintain data integrity across the lifecycle.',
      items: [
        'Computer System Validation (GAMP 5 aligned)',
        'IT Infrastructure Qualification (Servers, Networks, Cloud)',
        'GxP / IT Governance & Compliance Audits',
        'Migration & System Upgrade Compliance Support',
        'Documentation Lifecycle & Audit Preparation'
      ]
    },
    {
      icon: '🔒',
      title: 'Data Privacy & DPDP / GDPR Compliance Consulting',
      description: 'Strategic data protection advisory aligned with DPDP Act, GDPR, and global privacy regulations.',
      overview: 'We assist organizations in building comprehensive privacy governance programs that protect personal data while meeting regulatory obligations and strengthening stakeholder trust.',
      items: [
        'DPDP / GDPR Awareness Training',
        'DPDP / GDPR Gap Assessments',
        'Data Privacy Program Implementation',
        'Privacy-by-Design Governance Frameworks',
        'Data Protection Audits',
        'DPO-as-a-Service (Ongoing compliance monitoring and regulatory liaison)'
      ]
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity & ISMS Implementation',
      description: 'Enterprise-grade Information Security Management Systems designed to safeguard critical assets and ensure regulatory alignment.',
      overview: 'Our Cybersecurity & ISMS services enable organizations to establish structured information security frameworks aligned with ISO 27001 and global best practices. We support organizations from initial risk assessment through full implementation and audit readiness.',
      items: [
        'ISO 27001 Implementation (Gap analysis, risk assessment, documentation, control deployment)',
        'Enterprise Risk Assessments',
        'Incident Response Framework & Tabletop Exercises',
        'Security Operations Center (SOC) Setup & Advisory',
        'ISMS Policy Development & Governance'
      ]
    },
    {
      icon: '📊',
      title: 'ERPNext Implementation & Enterprise Process Optimization',
      description: 'Business process transformation through structured ERPNext deployment and integration.',
      overview: 'We help organizations implement and optimize ERPNext to enhance operational efficiency, strengthen internal controls, and enable data-driven decision-making.',
      items: [
        'End-to-End ERPNext Implementation',
        'Business Process Mapping & Optimization',
        'System Customization & Integration',
        'Ongoing Support & Performance Monitoring'
      ]
    },
    {
      icon: '✅',
      title: 'ISO Certifications & Audit Support',
      description: 'Comprehensive ISO certification journeys with structured governance implementation.',
      overview: 'We guide organizations through ISO certification processes by developing sustainable management systems aligned with international standards.',
      items: [
        'ISO 9001 – Quality Management Systems',
        'ISO 14001 – Environmental Management Systems',
        'ISO 27001 – Information Security Management Systems',
        'ISO 27701 – Privacy Information Management Systems'
      ]
    },
    {
      icon: '⚖️',
      title: 'POSH Compliance & Legal Governance',
      description: 'Structured workplace compliance programs aligned with statutory obligations.',
      overview: 'We support organizations in building legally compliant and ethically governed workplaces through structured POSH programs and training.',
      items: [
        'Organization-Wide Awareness Sessions',
        'Internal Committee (IC) Training',
        'POSH Policy Drafting & Governance Structuring',
        'Complaint Handling, Investigation & Litigation Support'
      ]
    },
    {
      icon: '📚',
      title: 'Training & Certifications',
      description: 'Professional development programs designed to strengthen regulatory, privacy, and cybersecurity capabilities.',
      overview: 'Our training programs are designed for compliance officers, IT leaders, quality teams, and executive stakeholders seeking structured knowledge in Pharmaceutical GxP, CSV, Data Privacy, ISO standards, and Cybersecurity governance. We provide practical, implementation-oriented sessions that translate regulatory requirements into operational understanding.',
      items: [
        'Pharmaceutical GxP Training',
        'CSV & Data Privacy Programs',
        'ISO Standards Certification Courses',
        'Cybersecurity Governance Workshops'
      ]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Advancing Secure, Innovative, and Sustainable IT and Compliance Solutions Across Regulated Industries
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Our Foundation</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 text-left">
              <p>
                Founded in 2025, SHIVERA INFOTECH LLP was established to address the growing demand for structured Pharmaceutical GxP, Computer System Validation (CSV), and Data Privacy compliance, alongside cybersecurity and legal regulatory excellence in an increasingly regulated global environment.
              </p>
              <p>
                We specialize in designing and implementing comprehensive governance frameworks that integrate Pharmaceutical GxP standards, validated Computer System controls, Information Security Management Systems (ISMS), Data Privacy programs, and Quality Management Systems (QMS). Our multidisciplinary expertise ensures that compliance is embedded into operational processes, technology infrastructure, and organizational culture not treated as a standalone documentation exercise.
              </p>
              <p>
                By combining regulatory insight, technical proficiency, and structured risk management practices, we help organizations achieve audit readiness, strengthen internal controls, and maintain sustainable regulatory alignment.
              </p>
              <p>
                From pharmaceutical and healthcare enterprises to financial services, technology, and manufacturing organizations, we enable secure, compliant, and scalable growth while preserving operational agility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Who We Are</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 text-left">
              <p>
                <strong className="text-slate-900">SHIVERA INFOTECH LLP</strong> is a specialized Pharmaceutical GxP, Computer System Validation (CSV), Data Privacy, Information Security, and IT Governance consulting firm dedicated to helping organizations achieve secure, compliant, and sustainable growth.
              </p>
              <p>
                We partner with executive leadership and compliance stakeholders to align regulatory requirements, risk management frameworks, and technology strategy into a unified governance structure. Our approach ensures that compliance initiatives are integrated with business objectives, operational realities, and long-term scalability.
              </p>
              <p>
                Serving startups, mid-market enterprises, and large organizations across pharmaceuticals, healthcare, BFSI, SaaS, technology, and manufacturing, we design programs that balance regulatory rigor with practical implementation. Our solutions are structured to strengthen internal controls while preserving agility and growth momentum.
              </p>
              <p>
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
              <div className="card-enterprise flex flex-col">
                <div className="text-5xl mb-6"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <p className="text-white/85 text-lg leading-relaxed flex-grow">
                  To be a trusted leader in Pharmaceutical GxP, Computer System Validation (CSV), Data Privacy, and integrated governance frameworks enabling organizations to operate securely, confidently, and audit-ready in an increasingly regulated digital environment.
                </p>
              </div>
              <div className="card-enterprise flex flex-col">
                <div className="text-5xl mb-6"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                <p className="text-white/85 text-lg leading-relaxed flex-grow">
                  To deliver structured, sustainable, and regulator-aligned compliance solutions across Pharmaceutical GxP, CSV, Data Privacy, IT Governance, and cybersecurity strengthening risk management, enhancing operational resilience, and supporting long-term enterprise growth.
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
                <div key={index} className="card-enterprise flex flex-col">
                  <div className="text-3xl mb-4 font-bold text-accent-cyan">{}</div>
                  <h3 className="text-lg font-semibold text-white mb-4 leading-tight">{item.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed flex-grow">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Card Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0B1E3C] to-[#1E3A5F] rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{svc.icon}</div>
                  <h3 className="text-xl font-bold text-white">{svc.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{svc.description}</p>
                <hr className="border-white/20 mb-4" />
                <p className="text-white/80 mb-4">{svc.overview}</p>
                <ul className="space-y-2 text-white/85">
                  {svc.items.map((item, i2) => (
                    <li key={i2} className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Leadership</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 text-left">
              <p>
                <strong className="text-slate-900">SHIVERA INFOTECH LLP</strong> is led by professionals with deep expertise in Pharmaceutical GxP compliance, Computer System Validation (CSV), Information Security, Data Privacy, IT Governance, and Quality Management Systems.
              </p>
              <p>
                Our leadership team brings together over two decades of combined experience across Pharmaceutical Quality & Regulatory Compliance, enterprise IT governance, and risk management. Their multidisciplinary background ensures that regulatory expectations are translated into structured, operationally sustainable compliance programs.
              </p>
              <p>
                The team includes experienced GxP and IT Governance & Compliance auditors, certified privacy professionals (IAPP), ISO 27001-certified information security specialists, and quality management experts. This integrated expertise enables us to deliver audit-ready, regulator-aligned solutions tailored to complex and highly regulated environments.
              </p>
              <p>
                With strong alignment to DPDP, GDPR, ISO standards, Pharmaceutical 21 CFR, EU GMP, and other industry-specific regulatory frameworks, our leadership ensures that every engagement is grounded in compliance precision, technical depth, and practical execution.
              </p>
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
                  className="card-enterprise flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-3xl flex-shrink-0">🏆</span>
                <span className="text-white/85 font-medium text-lg">{achievement}</span>
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
                  className="card-enterprise"
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
