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

  // ✅ Scroll Effect (disabled on Home page)
  useEffect(() => {
    if (location.pathname === "/") {
      setIsScrolled(false)
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    // run once to set initial state
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-white shadow-sm border-white/10" : "bg-white border-white/10"
      }`}
    >
      {/* Top Contact Bar — slim */}
      <div className="bg-primary-navy text-white text-xs sm:text-sm font-medium">
        <div className="content-container py-1">
          <div className="hidden md:flex items-center justify-between">
            <span className="flex items-center gap-2">✉️ info@shiverainfotech.com</span>
            <span className="flex items-center gap-2">📞 8087250238 | 7887888171</span>
            <span className="flex items-center gap-2">📍 Baner-Pashan Link Road, Pune 411021</span>
          </div>

          <div className="md:hidden flex flex-col items-center gap-1 text-center text-white">
            <span>✉️ info@shiverainfotech.com</span>
            <span>📞 8087250238 | 7887888171</span>
            <span>📍 Baner-Pashan Link Road, Pune 411021</span>
          </div>
        </div>
      </div>

      {/* Primary Navbar — compact & structured */}
      <nav className="content-container">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-12" : "h-14"
        }`}>

          <Link to="/" className="flex items-center gap-3 transition-opacity duration-200">
            <img
              src="/src/assets/logo-icon.png"
              alt="Shivera Infotech Logo"
              className={`transition-all duration-200 ${
                isScrolled ? "h-7 w-auto" : "h-9 w-auto"
              }`}
            />
            <span className={`font-semibold tracking-wide text-slate-900 transition-all duration-200 ${
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
                className={`transition-colors duration-150 tracking-wide ${
                  isActive("/") ? "text-primary-navy font-semibold" : "text-slate-900 hover:text-primary-navy"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`transition-colors duration-150 tracking-wide ${
                  isActive("/about")
                    ? "text-primary-navy font-semibold"
                    : "text-slate-900 hover:text-primary-navy"
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
                <button className="text-slate-900 hover:text-primary-navy transition-colors duration-150 font-medium flex items-center gap-1">
                  Solutions <span className="text-xs">▾</span>
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-3 w-64 card-enterprise py-2">
                    {solutionsItems.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/solutions/${item.slug}`}
                        className={`block px-4 py-2 text-sm text-white/85 transition-all duration-150 hover:bg-white/5 hover:text-white ${
                          isActive(`/solutions/${item.slug}`) ? 'font-semibold text-white' : ''
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
                <button className="text-slate-900 hover:text-primary-navy transition-colors duration-150 font-medium flex items-center gap-1">
                  Training <span className="text-xs">▾</span>
                </button>

                {activeDropdown === "training" && (
                  <div className="absolute top-full left-0 mt-3 w-64 card-enterprise py-2">
                    {trainingItems.map((item, index) => (
                      <Link
                        key={index}
                        to={`/training#${item.slug}`}
                        className={`block px-4 py-2 text-sm text-white/85 transition-all duration-150 hover:bg-white/5 hover:text-white ${
                          location.pathname === "/training" && location.hash === `#${item.slug}` ? 'font-semibold text-white' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/testimonials" className="text-slate-900 hover:text-primary-navy transition-colors duration-150 font-medium whitespace-nowrap">Testimonials</Link>

              <Link to="/careers" className="text-slate-900 hover:text-primary-navy transition-colors duration-150 font-medium whitespace-nowrap">Careers</Link>

              <Link to="/collaboration" className="text-slate-900 hover:text-primary-navy transition-colors duration-150 font-medium whitespace-nowrap">Why Us</Link>

              <Link to="/contact" className="text-slate-900 hover:text-primary-navy transition-colors duration-150 font-medium whitespace-nowrap">Contact</Link>

              {/* Compact CTA */}
              <Link
                to="/meeting"
                className="ml-4 whitespace-nowrap px-3 py-1.5 rounded-md bg-primary-navy text-white font-semibold shadow-sm hover:opacity-95 transition duration-150"
              >
                📅 Schedule
              </Link>
            </div>

            {/* ✅ Mobile Button */}
            <button
              className="lg:hidden text-2xl text-primary-navy hover:text-primary-navy/80 transition-colors duration-150"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
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
