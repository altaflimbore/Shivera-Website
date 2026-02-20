import { Link } from 'react-router-dom'
import approachVisual from '../assets/generated/about-approach-visual.png'

const About = () => {
  const certifications = [
    { name: 'IAPP Certified Data Privacy Professionals', icon: '🔐' },
    { name: 'Certified Data Privacy Assessors', icon: '✅' },
    { name: 'ISO Lead Implementers & Auditors', icon: '📋' },
    { name: 'ISMS & Compliance Certifications', icon: '🛡️' },
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0A1F44] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Delivering implementation-first IT and compliance solutions across industries
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section id="story" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2025, <strong>SHIVERA INFOTECH LLP</strong> was established to address the growing need for IT, cybersecurity, and compliance excellence in an increasingly regulated business environment.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialize in helping organizations navigate complex regulatory landscapes while building robust information security, data privacy, and quality management systems. Our team combines deep technical expertise with practical implementation experience to deliver solutions that are both compliant and operationally effective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From startups to enterprise organizations, we work across industries including pharmaceuticals, healthcare, financial services, technology, and manufacturing to ensure they meet regulatory requirements while maintaining business agility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Who We Are
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>SHIVERA INFOTECH LLP</strong> is a trusted IT governance, cybersecurity, and
                data privacy consulting firm helping organizations achieve secure and compliant growth.
                We partner with leadership teams to align technology strategy, risk, and regulatory
                expectations.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We work with startups, mid-market enterprises, and large organizations across healthcare,
                BFSI, SaaS, pharmaceuticals, and manufacturing. Our programs are designed to be
                business-friendly, balancing control requirements with operational realities and
                growth objectives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every engagement combines technical expertise, regulatory knowledge, and practical
                implementation support so that cybersecurity, DPDP Act compliance, and ISO-aligned
                controls become part of everyday operations—not just a one-time project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To be a trusted leader in cybersecurity, data privacy, and compliance—helping organizations operate securely, confidently, and audit-ready in a rapidly evolving digital world.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To deliver practical, implementation-first compliance solutions that strengthen security, reduce risk, and enable sustainable, regulator-aligned growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Our Core Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Data Privacy & DPDP Compliance',
                  description:
                    'End-to-end data privacy programs, DPDP Act readiness, and privacy by design governance.',
                  icon: '🔒',
                },
                {
                  title: 'Cybersecurity Risk Management',
                  description:
                    'Risk assessments, security controls, and ISMS-aligned defenses for critical information assets.',
                  icon: '🛡️',
                },
                {
                  title: 'ISO 27001 & ISMS Implementation',
                  description:
                    'Gap analysis, policy frameworks, and implementation support for ISO 27001 and related standards.',
                  icon: '📋',
                },
                {
                  title: 'Audit & Regulatory Readiness',
                  description:
                    'Mock audits, evidence preparation, and ongoing compliance monitoring for regulators and certifiers.',
                  icon: '✅',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-md flex flex-col items-start"
                >
                  <div className="flex items-center mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-teal bg-opacity-10 mr-3">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-navy">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 text-center">Leadership</h2>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>SHIVERA INFOTECH LLP</strong> is led by experts across IT, privacy, cybersecurity, regulatory compliance, and quality systems. Our leadership team brings together:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>20+ years</strong> of combined experience in enterprise IT and compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>Certified professionals</strong> in privacy (IAPP), cybersecurity (ISO 27001), and quality management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>Cross-industry expertise</strong> spanning pharmaceuticals, healthcare, finance, and technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>Implementation-first mindset</strong> focused on delivering audit-ready, regulator-aligned solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>Regulatory alignment</strong> with DPDP, GDPR, ISO standards, and industry-specific requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Our Approach
            </h2>
            <img
              src={approachVisual}
              alt=""
              aria-hidden="true"
              className="w-full max-w-5xl mx-auto mb-10 rounded-2xl shadow-lg hidden md:block"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Assess Compliance & Risk',
                  description:
                    'We begin with maturity assessments, risk reviews, and gap analyses across cybersecurity, data privacy, and governance.',
                },
                {
                  step: '02',
                  title: 'Design Secure Frameworks',
                  description:
                    'We build policies, SOPs, ISMS controls, and DPDP-aligned privacy frameworks mapped to ISO and regulatory expectations.',
                },
                {
                  step: '03',
                  title: 'Implement, Train & Sustain',
                  description:
                    'We implement controls, run trainings, support audits, and set up continuous monitoring to keep compliance alive.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md flex flex-col items-start"
                >
                  <div className="flex items-center mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-teal bg-opacity-10 mr-3">
                      <span className="text-primary-teal font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-navy">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 text-center">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md flex items-center">
                  <div className="text-3xl mr-4">🏆</div>
                  <div className="text-lg font-semibold text-primary-navy">{achievement}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 text-center">Certifications</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Our team holds industry-recognized certifications ensuring expertise in privacy, cybersecurity, and compliance domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #112B5C, #1E4E8C)'}}>
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <div className="text-xl font-semibold">{cert.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{background: 'linear-gradient(135deg, #0A1F44, #1E4E8C)'}}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help strengthen your IT and compliance foundation.
          </p>
          <Link
            to="/contact"
            className="
            px-8 py-4 rounded-full font-semibold text-lg
            bg-white text-[#0A1F44]
            hover:bg-[#E6ECF7]
            transition-all duration-300
            shadow-lg hover:shadow-2xl
            transform hover:-translate-y-0.5
            "
          >
            📅 Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

