import { Link } from 'react-router-dom'
import genCyberIcon from '../assets/generated/icon-cybersecurity-isms.png'
import genDpdpIcon from '../assets/generated/icon-data-privacy-dpdp.png'
import genIsoIcon from '../assets/generated/icon-iso-certifications.png'
import genPoshIcon from '../assets/generated/icon-posh-compliance.png'

const Solutions = () => {
  const solutions = [
    {
      title: 'Cybersecurity & ISMS',
      description: 'Comprehensive information security management systems, risk assessments, and incident readiness.',
      icon: '🛡️',
      image: genCyberIcon,
      slug: 'cybersecurity-isms',
      features: ['ISO 27001 Implementation', 'Risk Assessments', 'Incident Readiness', 'SOC Support'],
    },
    {
      title: 'Data Privacy & Governance',
      description: 'DPDP compliance consulting, data privacy program execution, and data protection audits.',
      icon: '🔒',
      image: genDpdpIcon,
      slug: 'data-privacy-governance',
      features: ['DPDP Compliance', 'Data Privacy Program Execution', 'Data Protection Audits', 'DPO-as-a-Service'],
    },
    {
      title: 'Quality & IT Compliance',
      description: 'Computer system validation, GxP infrastructure qualification, and migration compliance.',
      icon: '💻',
      slug: 'quality-it-compliance',
      features: ['CSV Validation', 'GxP Infrastructure Qualification', 'Migration Compliance'],
    },
    {
      title: 'ERP & Digital Solutions',
      description: 'ERPNext implementation, business process optimization, and integration support.',
      icon: '📊',
      slug: 'erp-digital-solutions',
      features: ['ERPNext Implementation', 'Business Process Optimization', 'Support & Integration'],
    },
    {
      title: 'ISO Certifications',
      description: 'End-to-end ISO certification journeys with audit-ready implementation support.',
      icon: '✅',
      image: genIsoIcon,
      slug: 'iso-certifications',
      features: ['ISO 9001', 'ISO 14001', 'ISO 27001', 'ISO 27701'],
    },
    {
      title: 'POSH & Legal Compliance',
      description: 'Prevention of Sexual Harassment awareness sessions, IC training, and policy drafting.',
      icon: '⚖️',
      image: genPoshIcon,
      slug: 'posh-legal-compliance',
      features: ['Awareness Sessions', 'IC Training', 'Policy Drafting', 'Reporting Support'],
    },
    {
      title: 'Environmental & Energy Audits',
      description: 'Green audits, energy optimization, and regulatory audit support services.',
      icon: '🌱',
      slug: 'environmental-energy-audits',
      features: ['Green Audits', 'Energy Optimization', 'Regulatory Audit Support'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0A1F44] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Comprehensive IT, cybersecurity, data privacy, and compliance services tailored to your enterprise needs
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="mb-4">
                  {solution.image ? (
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-16 h-16 object-contain mx-auto"
                    />
                  ) : (
                    <div className="text-5xl">{solution.icon}</div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-primary-navy mb-3 group-hover:text-primary-teal transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-primary-navy mb-2">Key Services:</div>
                  <ul className="space-y-1">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary-teal mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-primary-teal font-semibold flex items-center mt-4">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{background: 'linear-gradient(135deg, #0A1F44, #1E4E8C)'}}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our experts can tailor solutions to meet your specific compliance and security requirements.
          </p>
          <Link
            to="/contact"
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

