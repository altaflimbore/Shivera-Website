import { Link } from "react-router-dom"

import logoIcon from "../assets/logo-icon.png"
import logoText from "../assets/logo-text.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-navy via-slate-900 to-primary-navy-dark text-white mt-16">
      {/* Premium Trust Signals Bar */}
      <div className="border-b border-slate-700/30 bg-primary-navy-dark/50">
        <div className="content-container py-5">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium opacity-95">
            <div className="flex items-center gap-2 bg-accent-cyan/10 px-4 py-2 rounded-full border border-accent-cyan/30">
              <span className="text-lg">🛡️</span>
              <span className="text-white">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-accent-cyan/10 px-4 py-2 rounded-full border border-accent-cyan/30">
              <span className="text-lg">🔒</span>
              <span className="text-white">DPDP Act Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-accent-cyan/10 px-4 py-2 rounded-full border border-accent-cyan/30">
              <span className="text-lg">📋</span>
              <span className="text-white">GDPR Aligned</span>
            </div>
            <div className="flex items-center gap-2 bg-accent-indigo/10 px-4 py-2 rounded-full border border-accent-indigo/30">
              <span className="text-lg">🏆</span>
              <span className="text-white">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ✅ Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-5 space-x-3">
              <img
                src={logoIcon}
                alt="Shivera Shield Logo"
                className="w-12 h-12 object-contain"
              />
              <img
                src={logoText}
                alt="Shivera Infotech Logo"
                className="h-8 object-contain"
              />
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Premium IT, Data Privacy & Compliance Consulting Partner helping enterprises achieve audit-ready and regulator-aligned growth with confidence.
            </p>

            {/* Premium Compliance Badges */}
            <div className="flex gap-3 mt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-cyan/20 border border-accent-cyan/40 text-lg hover:scale-110 transition">✓</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-indigo/20 border border-accent-indigo/40 text-lg hover:scale-110 transition">🛡️</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-cyan/20 border border-accent-cyan/40 text-lg hover:scale-110 transition">📋</div>
            </div>
          </div>

          {/* ✅ Quick Links */}
          <div className="animate-fade-in">
            <h3 className="font-bold mb-6 text-accent-cyan text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Solutions", path: "/solutions" },
                { name: "Training", path: "/training" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Careers", path: "/careers" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-accent-cyan transition-colors duration-300 font-medium"
                  >
                    → {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Services */}
          <div className="animate-fade-in">
            <h3 className="font-bold mb-6 text-accent-cyan text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                {
                  name: "Cybersecurity & ISMS",
                  path: "/solutions/cybersecurity-isms",
                },
                {
                  name: "Data Privacy & DPDP",
                  path: "/solutions/data-privacy-governance",
                },
                {
                  name: "ISO Certifications",
                  path: "/solutions/iso-certifications",
                },
                {
                  name: "IT CSV & GxP",
                  path: "/solutions/quality-it-compliance",
                },
                {
                  name: "ERPNext Implementation",
                  path: "/solutions/erp-digital-solutions",
                },
                {
                  name: "POSH Compliance",
                  path: "/solutions/posh-legal-compliance",
                },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-slate-300 hover:text-accent-cyan transition-colors duration-300 font-medium"
                  >
                    → {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Contact */}
          <div className="animate-fade-in">
            <h3 className="font-bold mb-6 text-accent-indigo text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">

              {/* Phone */}
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan text-lg flex-shrink-0">📞</span>
                <div className="pt-0.5">
                  <a
                    href="tel:8087250238"
                    className="text-slate-300 hover:text-accent-cyan transition block font-medium"
                  >
                    8087250238
                  </a>
                  <a
                    href="tel:7887888171"
                    className="text-slate-300 hover:text-accent-cyan transition block font-medium"
                  >
                    7887888171
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <span className="text-accent-cyan text-lg">✉️</span>
                <a
                  href="mailto:info@shiverainfotech.com"
                  className="text-slate-300 hover:text-accent-cyan transition font-medium"
                >
                  info@shiverainfotech.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan text-lg flex-shrink-0">📍</span>
                <span className="text-slate-300 pt-0.5">
                  B103, Vastu Nirvana, Baner-Pashan Link Road, Pune 411021
                </span>
              </li>

              {/* ✅ Premium CTA Button */}
              <li className="pt-4">
                <Link
                  to="/meeting"
                  className="btn-accent inline-block text-sm"
                >
                  📅 Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-12 pt-8 text-center text-sm text-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-medium">
              &copy; {new Date().getFullYear()} SHIVERA INFOTECH LLP. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="hover:text-accent-cyan transition">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-accent-cyan transition">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-accent-cyan transition">Compliance Statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
