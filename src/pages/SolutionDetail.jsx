import { useParams, Link } from 'react-router-dom'
import privacyIllustration from '../images/2.png'

const SolutionDetail = () => {
  const { slug } = useParams()

  const solutions = {
    'cybersecurity-isms': {
      title: 'Cybersecurity & ISMS Implementation',
      icon: '🛡️',
      description: 'Comprehensive information security management systems designed to protect your organization\'s critical assets and ensure regulatory compliance.',
      overview: 'Our Cybersecurity & ISMS services help organizations build robust information security frameworks aligned with ISO 27001 standards. We provide end-to-end implementation support from risk assessment to audit readiness.',
      services: [
        {
          title: 'ISO 27001 Implementation',
          description: 'Complete ISMS implementation following ISO 27001 standards, including gap analysis, risk assessment, and documentation.',
        },
        {
          title: 'Risk Assessments',
          description: 'Comprehensive security risk assessments identifying vulnerabilities and recommending mitigation strategies.',
        },
        {
          title: 'Incident Readiness',
          description: 'Incident response planning, tabletop exercises, and security incident management framework development.',
        },
        {
          title: 'SOC Support',
          description: 'Security Operations Center setup, monitoring, and ongoing support services.',
        },
      ],
    },
    'data-privacy-governance': {
      title: 'Data Privacy & DPDP Compliance Consulting',
      icon: '🔒',
      description: 'Expert guidance on data protection regulations including DPDP, GDPR, and data privacy program execution.',
      overview: 'We help organizations navigate complex data privacy regulations and build comprehensive data privacy programs that protect both data subjects and business interests.',
      services: [
        {
          title: 'DPDP Compliance Consulting',
          description: 'Complete Digital Personal Data Protection Act compliance programs including gap analysis and implementation roadmaps.',
        },
        {
          title: 'Data Privacy Program Execution',
          description: 'End-to-end data privacy program development including policies, procedures, and governance frameworks.',
        },
        {
          title: 'Data Protection Audits',
          description: 'Comprehensive privacy audits assessing data handling practices and compliance with regulatory requirements.',
        },
        {
          title: 'DPO-as-a-Service',
          description: 'Data Protection Officer services including ongoing compliance monitoring and regulatory liaison.',
        },
      ],
    },
    'quality-it-compliance': {
      title: 'IT CSV & GxP Compliance',
      icon: '💻',
      description: 'Computer system validation and GxP infrastructure qualification services for regulated industries.',
      overview: 'Our IT compliance services ensure that computer systems in regulated environments meet validation requirements and maintain data integrity throughout their lifecycle.',
      services: [
        {
          title: 'CSV Validation',
          description: 'Computer System Validation following GAMP 5 guidelines and regulatory requirements.',
        },
        {
          title: 'GxP Infrastructure Qualification',
          description: 'IT infrastructure qualification for GxP environments including servers, networks, and cloud systems.',
        },
        {
          title: 'Migration Compliance',
          description: 'Compliance support for system migrations, upgrades, and decommissioning activities.',
        },
      ],
    },
    'erp-digital-solutions': {
      title: 'ERPNext Implementation & Support',
      icon: '📊',
      description: 'Business process optimization and ERP integration services using ERPNext platform.',
      overview: 'We help organizations implement and optimize ERPNext to streamline business processes, improve efficiency, and enable data-driven decision making.',
      services: [
        {
          title: 'ERPNext Implementation',
          description: 'Complete ERPNext implementation including requirements analysis, configuration, and deployment.',
        },
        {
          title: 'Business Process Optimization',
          description: 'Process mapping, optimization, and automation using ERPNext capabilities.',
        },
        {
          title: 'Support & Integration',
          description: 'Ongoing support, maintenance, and integration with third-party systems.',
        },
      ],
    },
    'iso-certifications': {
      title: 'ISO Certifications & Audit Support',
      icon: '✅',
      description: 'End-to-end ISO certification journeys with audit-ready implementation support.',
      overview: 'We guide organizations through ISO certification processes, ensuring they meet standards while building sustainable management systems.',
      services: [
        {
          title: 'ISO 9001 (Quality Management)',
          description: 'Quality Management System implementation and certification support.',
        },
        {
          title: 'ISO 14001 (Environmental Management)',
          description: 'Environmental Management System development and certification.',
        },
        {
          title: 'ISO 27001 (Information Security)',
          description: 'Information Security Management System implementation and certification.',
        },
        {
          title: 'ISO 27701 (Privacy Management)',
          description: 'Privacy Information Management System aligned with ISO 27001.',
        },
      ],
    },
    'posh-legal-compliance': {
      title: 'POSH Compliance & Legal Training',
      icon: '⚖️',
      description: 'Prevention of Sexual Harassment awareness sessions, IC training, and policy drafting.',
      overview: 'We help organizations create safe, respectful workplaces through comprehensive POSH compliance programs and training.',
      services: [
        {
          title: 'Awareness Sessions',
          description: 'Organization-wide awareness sessions on prevention of sexual harassment at workplace.',
        },
        {
          title: 'IC Training',
          description: 'Training for Internal Committee members on POSH Act compliance and investigation procedures.',
        },
        {
          title: 'Policy Drafting',
          description: 'POSH policy development aligned with legal requirements and organizational culture.',
        },
        {
          title: 'Reporting Support',
          description: 'Support for complaint handling, investigation, and reporting processes.',
        },
      ],
    },
    'environmental-energy-audits': {
      title: 'Environmental & Energy Audits',
      icon: '🌱',
      description: 'Green audits, energy optimization, and regulatory audit support services.',
      overview: 'We help organizations improve their environmental performance and energy efficiency through comprehensive audits and optimization programs.',
      services: [
        {
          title: 'Green Audits',
          description: 'Environmental impact assessments and sustainability audits.',
        },
        {
          title: 'Energy Optimization',
          description: 'Energy audits and optimization programs to reduce consumption and costs.',
        },
        {
          title: 'Regulatory Audit Support',
          description: 'Support for environmental regulatory compliance and audit readiness.',
        },
      ],
    },
  }

  const solution = solutions[slug] || solutions['cybersecurity-isms']

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="text-white py-16" style={{background: 'linear-gradient(135deg, #0A1F44, #1B3A6B, #274C8E)'}}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center mb-4">
            <Link to="/solutions" className="text-gray-200 hover:text-white mr-4">
              ← Back to Solutions
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="text-6xl mb-4 md:mb-0">{solution.icon}</div>
            {slug === 'data-privacy-governance' && (
              <img
                src={privacyIllustration}
                alt={solution.title}
                className="w-24 h-24 object-contain mb-4 md:mb-0"
              />
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{solution.title}</h1>
              <p className="text-xl text-gray-200 max-w-3xl">{solution.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{solution.overview}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how we can help with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="
mt-6 px-6 py-3 rounded-lg font-semibold
bg-gradient-to-r from-[#0F2A5C] to-[#1E3A8A]
text-white
transition-all duration-300 ease-in-out
inline-flex items-center gap-2
shadow-md hover:shadow-xl
hover:-translate-y-[2px]
hover:from-[#1E3A8A] hover:to-[#1D4ED8]
"
          >
            📅 Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SolutionDetail

