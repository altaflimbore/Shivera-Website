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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-card backdrop-blur-md"
          : "bg-white/98 backdrop-blur-md"
      }`}
    >
      {/* ✅ Premium Top Info Bar */}
      <div className="bg-primary-navy text-white text-xs sm:text-sm font-medium">
        <div className="content-container py-2.5">
          <div className="hidden md:flex items-center justify-between">
            <span className="flex items-center gap-2">✉️ info@shiverainfotech.com</span>
            <span className="flex items-center gap-2">📞 8087250238 | 7887888171</span>
            <span className="flex items-center gap-2">📍 Baner-Pashan Link Road, Pune 411021</span>
          </div>

          <div className="md:hidden flex flex-col items-center gap-2 text-center text-white">
            <span>✉️ info@shiverainfotech.com</span>
            <span>📞 8087250238 | 7887888171</span>
            <span>📍 Baner-Pashan Link Road, Pune 411021</span>
          </div>
        </div>
      </div>

      {/* ✅ Premium Navbar */}
      <nav className="content-container">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-14" : "h-16"
        }`}>

          <Link to="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity duration-300">
            <img
              src="/src/assets/logo-icon.png"
              alt="Shivera Infotech Logo"
              className={`transition-all duration-500 ${
                isScrolled ? "h-8 w-auto" : "h-10 w-auto"
              }`}
            />
            <span className={`font-bold tracking-wider text-slate-900 transition-all duration-500 ${
              isScrolled ? "text-sm" : "text-base"
            }`}>
              SHIVERA INFOTECH
            </span>
          </Link>

          <div className="flex-1 flex items-center justify-end">
            {/* Desktop Menu */}
            <div
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-6 text-sm font-medium whitespace-nowrap"
            >
              {/* Links */}
              <Link
                to="/"
                className={`transition-all duration-300 ${
                  isActive("/") ? "text-primary-navy font-bold" : "text-slate-700 hover:text-accent-cyan"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`transition-all duration-300 ${
                  isActive("/about")
                    ? "text-primary-navy font-bold"
                    : "text-slate-700 hover:text-accent-cyan"
                }`}
              >
                About Us
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative whitespace-nowrap"
                onMouseEnter={() => openDropdown("solutions")}
                onMouseLeave={closeDropdown}
              >
                <button className="text-slate-700 hover:text-accent-cyan transition-colors duration-300 font-medium flex items-center gap-1">
                  Solutions <span className="text-xs">▾</span>
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-card border border-slate-200 py-2 animate-fade-in">
                    {solutionsItems.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/solutions/${item.slug}`}
                        className={`block px-4 py-2 text-sm transition-all duration-200 ${
                          isActive(`/solutions/${item.slug}`)
                            ? "text-accent-cyan bg-accent-cyan/10 font-medium"
                            : "text-slate-700 hover:bg-slate-50 hover:text-accent-cyan"
                        }`}
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
                <button className="text-slate-700 hover:text-accent-cyan transition-colors duration-300 font-medium flex items-center gap-1">
                  Training <span className="text-xs">▾</span>
                </button>

                {activeDropdown === "training" && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-card border border-slate-200 py-2 animate-fade-in">
                    {trainingItems.map((item, index) => (
                      <Link
                        key={index}
                        to={`/training#${item.slug}`}
                        className={`block px-4 py-2 text-sm transition-all duration-200 ${
                          location.pathname === "/training" && location.hash === `#${item.slug}`
                            ? "text-accent-cyan bg-accent-cyan/10 font-medium"
                            : "text-slate-700 hover:bg-slate-50 hover:text-accent-cyan"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/testimonials" className="text-slate-700 hover:text-accent-cyan transition-colors duration-300 font-medium whitespace-nowrap">Testimonials</Link>

              <Link to="/careers" className="text-slate-700 hover:text-accent-cyan transition-colors duration-300 font-medium whitespace-nowrap">Careers</Link>

              <Link to="/collaboration" className="text-slate-700 hover:text-accent-cyan transition-colors duration-300 font-medium whitespace-nowrap">Why Us</Link>

              <Link to="/contact" className="text-slate-700 hover:text-accent-cyan transition-colors duration-300 font-medium whitespace-nowrap">Contact</Link>

              {/* ✅ Premium CTA Button */}
              <Link
                to="/meeting"
                className="btn-accent ml-4 whitespace-nowrap"
              >
                📅 Schedule Consultation
              </Link>
            </div>

            {/* ✅ Mobile Button */}
            <button
              className="lg:hidden text-3xl text-primary-navy hover:text-accent-cyan transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
