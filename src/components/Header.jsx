import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"

import logoIcon from "../assets/logo-icon.png"
import logoText from "../assets/logo-text.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const location = useLocation()
  const dropdownRef = useRef(null)
  const closeTimeoutRef = useRef(null)

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ Close Dropdown Outside Click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const openDropdown = (name) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveDropdown(name)
  }

  const closeDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const isActive = (path) => location.pathname === path

  // Dropdown Items
  const solutionsItems = [
    { name: "Cybersecurity & ISMS", slug: "cybersecurity-isms" },
    { name: "Data Privacy & Governance", slug: "data-privacy-governance" },
    { name: "Quality & IT Compliance", slug: "quality-it-compliance" },
    { name: "ERP & Digital Solutions", slug: "erp-digital-solutions" },
    { name: "ISO Certifications", slug: "iso-certifications" },
    { name: "POSH & Legal Compliance", slug: "posh-legal-compliance" },
    { name: "Environmental & Energy Audits", slug: "environmental-energy-audits" },
  ]

  const trainingItems = [
    { name: "Cybersecurity Training", slug: "cybersecurity-training" },
    { name: "Data Privacy Training", slug: "data-privacy-training" },
    { name: "Certified DPO Training", slug: "certified-dpo-training" },
    { name: "POSH Training", slug: "posh-training" },
    { name: "ISO Training Programs", slug: "iso-training-programs" },
    { name: "Data Engineering Training", slug: "data-engineering-training" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white bg-opacity-95 backdrop-blur-sm"
      }`}
    >
      {/* ✅ Top Info Bar */}
      <div className="bg-primary-navy text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="hidden md:flex items-center justify-between">
            <span>📧 info@shiverainfotech.com</span>
            <span>📞 8087250238 | 7887888171</span>
            <span>📍 Baner-Pashan Link Road, Pune</span>
          </div>

          <div className="md:hidden flex flex-col items-center gap-1 text-center">
            <span>📧 info@shiverainfotech.com</span>
            <span>📞 8087250238 | 7887888171</span>
            <span>📍 Baner-Pashan Link Road, Pune</span>
          </div>
        </div>
      </div>

      {/* ✅ Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">

          {/* ✅ Logo Section */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logoIcon}
              alt="Shivera Logo"
              className="h-12 w-auto"
            />
            <img
              src={logoText}
              alt="Shivera Infotech"
              className="h-7 w-auto hidden sm:block"
            />
          </Link>

          {/* ✅ Desktop Navigation */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-6 text-sm font-medium whitespace-nowrap"
          >
            {/* Links */}
            <Link
              to="/"
              className={`whitespace-nowrap ${
                isActive("/") ? "text-[#1E4E8C] font-semibold" : "text-gray-700"
              } hover:text-[#1E4E8C] transition-colors duration-300`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`whitespace-nowrap ${
                isActive("/about")
                  ? "text-[#1E4E8C] font-semibold"
                  : "text-gray-700"
              } hover:text-[#1E4E8C] transition-colors duration-300`}
            >
              About Us
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative whitespace-nowrap"
              onMouseEnter={() => openDropdown("solutions")}
              onMouseLeave={closeDropdown}
            >
              <button className="hover:text-[#1E4E8C] text-gray-700 transition-colors duration-300">
                Solutions ▾
              </button>

              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border py-2">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/solutions/${item.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-[#1E4E8C] hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Training Dropdown */}
            <div
              className="relative whitespace-nowrap"
              onMouseEnter={() => openDropdown("training")}
              onMouseLeave={closeDropdown}
            >
              <button className="hover:text-[#1E4E8C] text-gray-700 transition-colors duration-300">
                Training ▾
              </button>

              {activeDropdown === "training" && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border py-2">
                  {trainingItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/training#${item.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-[#1E4E8C] hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/testimonials" className="hover:text-[#1E4E8C] text-gray-700 whitespace-nowrap transition-colors duration-300">
              Testimonials
            </Link>

            <Link to="/careers" className="hover:text-[#1E4E8C] text-gray-700 whitespace-nowrap transition-colors duration-300">
              Careers
            </Link>

            <Link to="/collaboration" className="hover:text-[#1E4E8C] text-gray-700 whitespace-nowrap transition-colors duration-300">
              Why Us
            </Link>

            <Link to="/contact" className="hover:text-[#1E4E8C] text-gray-700 whitespace-nowrap transition-colors duration-300">
              Contact
            </Link>

            {/* ✅ CTA Button */}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 rounded-lg font-semibold
border border-[#0A1F44] text-[#0A1F44]
hover:bg-[#0A1F44] hover:text-white
transition-all duration-300 ease-in-out
flex items-center gap-2 whitespace-nowrap
shadow-sm hover:shadow-lg
hover:-translate-y-[2px]"
            >
              📅 Schedule Consultation
            </Link>
          </nav>

          {/* ✅ Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
