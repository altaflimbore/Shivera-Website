import { Link } from 'react-router-dom'

const Solutions = () => {
  const solutions = [
    {
      icon: '💻',
      title: 'IT CSV & Pharmaceutical GxP Compliance',
      subheading: 'Validated systems and GxP-aligned compliance frameworks for regulated industries.',
      overview: 'Our Pharmaceutical GxP and Computer System Validation (CSV) services ensure that IT systems within regulated environments meet validation requirements and maintain data integrity across the lifecycle.',
      services: [
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
      subheading: 'Strategic data protection advisory aligned with DPDP Act, GDPR, and global privacy regulations.',
      overview: 'We assist organizations in building comprehensive privacy governance programs that protect personal data while meeting regulatory obligations and strengthening stakeholder trust.',
      services: [
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
      subheading: 'Enterprise-grade Information Security Management Systems designed to safeguard critical assets and ensure regulatory alignment.',
      overview: 'Our Cybersecurity & ISMS services enable organizations to establish structured information security frameworks aligned with ISO 27001 and global best practices. We support organizations from initial risk assessment through full implementation and audit readiness.',
      services: [
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
      subheading: 'Business process transformation through structured ERPNext deployment and integration.',
      overview: 'We help organizations implement and optimize ERPNext to enhance operational efficiency, strengthen internal controls, and enable data-driven decision-making.',
      services: [
        'End-to-End ERPNext Implementation',
        'Business Process Mapping & Optimization',
        'System Customization & Integration',
        'Ongoing Support & Performance Monitoring'
      ]
    },
    {
      icon: '✅',
      title: 'ISO Certifications & Audit Support',
      subheading: 'Comprehensive ISO certification journeys with structured governance implementation.',
      overview: 'We guide organizations through ISO certification processes by developing sustainable management systems aligned with international standards.',
      services: [
        'ISO 9001 – Quality Management Systems',
        'ISO 14001 – Environmental Management Systems',
        'ISO 27001 – Information Security Management Systems',
        'ISO 27701 – Privacy Information Management Systems'
      ]
    },
    {
      icon: '⚖️',
      title: 'POSH Compliance & Legal Governance',
      subheading: 'Structured workplace compliance programs aligned with statutory obligations.',
      overview: 'We support organizations in building legally compliant and ethically governed workplaces through structured POSH programs and training.',
      services: [
        'Organization-Wide Awareness Sessions',
        'Internal Committee (IC) Training',
        'POSH Policy Drafting & Governance Structuring',
        'Complaint Handling, Investigation & Litigation Support'
      ]
    },
    {
      icon: '📚',
      title: 'Training & Certifications',
      subheading: 'Professional development programs designed to strengthen regulatory, privacy, and cybersecurity capabilities.',
      overview: 'Our training programs are designed for compliance officers, IT leaders, quality teams, and executive stakeholders seeking structured knowledge in Pharmaceutical GxP, CSV, Data Privacy, ISO standards, and Cybersecurity governance. We provide practical, implementation-oriented sessions that translate regulatory requirements into operational understanding.',
      services: [
        'Pharmaceutical GxP Training',
        'CSV & Data Privacy Programs',
        'ISO Standards Certification Courses',
        'Cybersecurity Governance Workshops'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 tech-grid" />
        <div className="content-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solutions
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-100">
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We deliver integrated regulatory, governance, and technology compliance solutions designed for highly regulated and risk-sensitive industries. Our services combine pharmaceutical-grade validation practices, privacy governance, cybersecurity resilience, and enterprise risk alignment to ensure sustainable compliance and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detail Sections */}
      <section className="py-16 bg-white">
        <div className="content-container">
          <div className="max-w-5xl mx-auto space-y-12">
            {solutions.map((solution, index) => (
              <div key={index} className="border-b border-slate-200 pb-12 last:border-b-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl flex-shrink-0">{solution.icon}</div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-primary-navy mb-2">{solution.title}</h2>
                    <p className="text-lg text-slate-600 font-medium">{solution.subheading}</p>
                  </div>
                </div>

                <div className="ml-20 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Overview</h3>
                    <p className="text-slate-700 leading-relaxed">{solution.overview}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      {solution.title.includes('Certification') || solution.title.includes('ISO Certifications') ? 'Supported Standards' : 'Our Services'}
                    </h3>
                    <ul className="space-y-3">
                      {solution.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent-cyan font-bold flex-shrink-0">✓</span>
                          <span className="text-slate-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{background: 'linear-gradient(135deg, #0A1F44, #1E4E8C)'}}>
        <div className="content-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Our experts can tailor solutions to meet your specific compliance and security requirements.
          </p>
          <Link
            to="/meeting"
            className="
            px-8 py-4 rounded-full font-semibold text-lg text-white
            bg-[#1E4E8C]
            hover:bg-[#2C5FA8]
            transition-all duration-300
            shadow-lg hover:shadow-2xl
            ring-2 ring-[#1E4E8C] ring-opacity-50 hover:ring-opacity-100
            "
          >
            📅 Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Solutions

