import { Link } from "react-router-dom"

import logoIcon from "../assets/logo-icon.png"
import logoText from "../assets/logo-text.png"

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ✅ Company Info */}
          <div>
            <div className="flex items-center mb-4 space-x-3">
              {/* Shield Logo */}
              <img
                src={logoIcon}
                alt="Shivera Shield Logo"
                className="w-12 h-12 object-contain"
              />

              {/* Text Logo */}
              <img
                src={logoText}
                alt="Shivera Infotech Logo"
                className="h-8 object-contain"
              />
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Trusted IT, Data Privacy & Compliance Consulting Partner helping
              enterprises achieve audit-ready and regulator-aligned growth.
            </p>
          </div>

          {/* ✅ Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
                    className="text-gray-300 hover:text-primary-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
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
                    className="text-gray-300 hover:text-primary-teal transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">

              {/* Phone */}
              <li className="flex items-start gap-2">
                <span className="text-primary-teal">📞</span>
                <div>
                  <a
                    href="tel:8087250238"
                    className="text-gray-300 hover:text-primary-teal transition block"
                  >
                    8087250238
                  </a>
                  <a
                    href="tel:7887888171"
                    className="text-gray-300 hover:text-primary-teal transition block"
                  >
                    7887888171
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-2">
                <span className="text-primary-teal">✉️</span>
                <a
                  href="mailto:info@shiverainfotech.com"
                  className="text-gray-300 hover:text-primary-teal transition"
                >
                  info@shiverainfotech.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2">
                <span className="text-primary-teal">📍</span>
                <span className="text-gray-300">
                  B103, Vastunirvana, Baner-Pashan Link Road, Pune
                </span>
              </li>

              {/* ✅ Updated CTA Button (Dark Green Outline Style) */}
              <li className="pt-4">
                <Link
                  to="/contact"
                  className="
         ml-3 px-5 py-2 rounded-lg font-semibold
bg-gradient-to-r from-[#0F2A5C] to-[#1E3A8A]
text-white border-none
transition-all duration-300 ease-in-out
flex items-center gap-2 whitespace-nowrap
shadow-md hover:shadow-xl
hover:-translate-y-[2px]
hover:from-[#1E3A8A] hover:to-[#1D4ED8]
                  "
                  
                >
                  📅 Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SHIVERA INFOTECH LLP. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
