import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CookiePopup from './components/CookiePopup'
import BackgroundGraphics from './components/BackgroundGraphics'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import SolutionDetail from './pages/SolutionDetail'
import Training from './pages/Training'
import Testimonials from './pages/Testimonials'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Collaboration from './pages/Collaboration'
import Meeting from './pages/Meeting'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return null
}

function App() {
  const [showCookiePopup, setShowCookiePopup] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowCookiePopup(true)
    }
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowCookiePopup(false)
  }

  const handleCookieReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setShowCookiePopup(false)
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col scroll-smooth relative">
        <BackgroundGraphics />
        <ScrollToHash />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />
            <Route path="/training" element={<Training />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/meeting" element={<Meeting />} />
          </Routes>
        </main>
        <Footer />
        {showCookiePopup && (
          <CookiePopup
            onAccept={handleCookieAccept}
            onReject={handleCookieReject}
          />
        )}
      </div>
    </Router>
  )
}

export default App

