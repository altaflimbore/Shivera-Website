import { Link } from 'react-router-dom'

const Careers = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="text-white py-16" style={{background: 'linear-gradient(135deg, #0A1F44 0%, #1E3A6D 50%, #274C8E 100%)', boxShadow: 'inset 0 -10px 30px rgba(0,0,0,0.15)'}}>
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Join our team of experts in IT, cybersecurity, and compliance consulting
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Openings Coming Soon
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're growing and will be posting exciting career opportunities soon. Stay connected with us to be the first to know about new openings in:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                'Cybersecurity Consulting',
                'Data Privacy & Compliance',
                'ISO Implementation',
                'IT Compliance & CSV',
                'Training & Development',
                'Business Development',
              ].map((role, index) => (
                <div key={index} className="bg-[#F4F7FC] rounded-lg p-4 border border-[#D8E2F0] hover:border-[#1E4E8C] hover:bg-[#E6ECF7] transition-all duration-300 cursor-pointer shadow-sm">
                  <div className="text-[#0A1F44] font-semibold hover:text-[#1E4E8C]">{role}</div>
                </div>
              ))}
            </div>
            <div style={{background: 'linear-gradient(135deg, #0A1F44 0%, #1E3A6D 50%, #274C8E 100%)', boxShadow: '0 10px 40px rgba(10, 31, 68, 0.15)'}} className="text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Connected With Us</h3>
              <p className="text-gray-100 mb-6">
                Send us your resume and we'll keep you informed about upcoming opportunities that match your profile.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-[#0A1F44] px-8 py-3 rounded-lg font-semibold hover:bg-[#E6ECF7] transition-all shadow-md hover:shadow-lg"
              >
                📧 Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Current Openings
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary-navy mb-1">
                    SAP FICO Consultant
                  </h3>
                  <p className="text-sm text-gray-500">
                    Experience: 6+ Years · Job Type: Full-Time · Location: India / Hybrid
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#1B3A6B] text-white shadow-sm">
                  Open Position
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                We are seeking an experienced SAP FICO Consultant with strong expertise in SAP Financial
                Accounting (FI) and Controlling (CO) to support our enterprise clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-navy mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>SAP FICO implementation, configuration, and ongoing support</li>
                    <li>Requirement gathering and mapping of finance processes</li>
                    <li>Configure FI modules: GL, AP, AR, Asset Accounting, Banking</li>
                    <li>Configure CO modules: Cost Centers, Profit Centers, Internal Orders</li>
                    <li>Support integration with MM and SD modules</li>
                    <li>Prepare documentation, conduct training, and resolve issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-navy mb-2">Skills Required</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Minimum 6+ years of hands-on SAP FICO experience</li>
                    <li>Strong understanding of finance and controlling processes</li>
                    <li>Experience with SAP S/4HANA Finance is an added advantage</li>
                    <li>Proven client interaction and stakeholder management skills</li>
                    <li>Excellent communication and problem-solving abilities</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
                  style={{background: 'linear-gradient(135deg, #1E4E8C, #274C8E)', color: 'white', boxShadow: '0 10px 25px rgba(10, 31, 68, 0.2)'}}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #274C8E, #325FAE)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #1E4E8C, #274C8E)'}
                >
                  📧 Apply / Share Your Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🎓', title: 'Continuous Learning', desc: 'Work with industry experts and stay updated with latest regulations and technologies' },
                { icon: '🌐', title: 'Diverse Projects', desc: 'Engage with clients across industries including pharma, healthcare, finance, and technology' },
                { icon: '🤝', title: 'Collaborative Culture', desc: 'Work in a supportive environment that values teamwork and knowledge sharing' },
                { icon: '📈', title: 'Career Growth', desc: 'Clear growth paths and opportunities to develop expertise in multiple domains' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers

