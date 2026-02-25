const BackgroundGraphics = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Dark navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-navy-dark to-primary-navy opacity-5"></div>

      {/* Subtle radial gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-teal opacity-3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue opacity-3 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-navy-light opacity-2 rounded-full blur-2xl"></div>

      {/* Shield patterns */}
      <div className="absolute top-20 left-10 opacity-10 animate-float">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 5 L60 20 L60 50 Q60 60 50 65 L40 70 L30 65 Q20 60 20 50 L20 20 Z" fill="url(#shield-gradient)" stroke="#0A1F44" strokeWidth="1"/>
          <defs>
            <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A1F44"/>
              <stop offset="100%" stopColor="#1E4E8C"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Data grid lines */}
      <div className="absolute top-40 right-20 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0A1F44" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
      </div>

      {/* Network connection nodes */}
      <div className="absolute bottom-40 left-20 opacity-8">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="4" fill="#2AD190" opacity="0.6"/>
          <circle cx="120" cy="50" r="4" fill="#4682B4" opacity="0.6"/>
          <circle cx="80" cy="120" r="4" fill="#0A1F44" opacity="0.6"/>
          <line x1="30" y1="30" x2="120" y2="50" stroke="#2AD190" strokeWidth="1" opacity="0.4"/>
          <line x1="120" y1="50" x2="80" y2="120" stroke="#4682B4" strokeWidth="1" opacity="0.4"/>
          <line x1="80" y1="120" x2="30" y2="30" stroke="#0A1F44" strokeWidth="1" opacity="0.4"/>
        </svg>
      </div>

      {/* Compliance document icons */}
      <div className="absolute top-60 left-1/4 opacity-6 animate-float" style={{animationDelay: '1s'}}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="40" height="50" rx="2" fill="none" stroke="#0A1F44" strokeWidth="1"/>
          <line x1="15" y1="15" x2="45" y2="15" stroke="#0A1F44" strokeWidth="1"/>
          <line x1="15" y1="22" x2="35" y2="22" stroke="#0A1F44" strokeWidth="1"/>
          <line x1="15" y1="29" x2="40" y2="29" stroke="#0A1F44" strokeWidth="1"/>
          <line x1="15" y1="36" x2="30" y2="36" stroke="#0A1F44" strokeWidth="1"/>
          <circle cx="45" cy="45" r="8" fill="#2AD190" opacity="0.8"/>
          <path d="M42 45 L44 47 L48 43" stroke="white" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Validation flow diagram */}
      <div className="absolute bottom-20 right-1/4 opacity-5">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="30" height="15" rx="2" fill="#0A1F44" opacity="0.7"/>
          <text x="25" y="30" textAnchor="middle" fill="white" fontSize="8">Risk</text>
          <rect x="75" y="20" width="30" height="15" rx="2" fill="#4682B4" opacity="0.7"/>
          <text x="90" y="30" textAnchor="middle" fill="white" fontSize="8">Assess</text>
          <rect x="140" y="20" width="30" height="15" rx="2" fill="#2AD190" opacity="0.7"/>
          <text x="155" y="30" textAnchor="middle" fill="white" fontSize="8">Validate</text>
          <path d="M40 27.5 L70 27.5" stroke="#0A1F44" strokeWidth="2" markerEnd="url(#arrow)"/>
          <path d="M105 27.5 L135 27.5" stroke="#4682B4" strokeWidth="2" markerEnd="url(#arrow)"/>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#0A1F44"/>
            </marker>
          </defs>
        </svg>
      </div>

      {/* Subtle governance symbols */}
      <div className="absolute top-1/3 right-10 opacity-4 animate-float" style={{animationDelay: '2s'}}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#0A1F44" strokeWidth="1"/>
          <circle cx="25" cy="25" r="15" fill="none" stroke="#2AD190" strokeWidth="1"/>
          <circle cx="25" cy="25" r="10" fill="none" stroke="#4682B4" strokeWidth="1"/>
          <circle cx="25" cy="25" r="5" fill="#0A1F44"/>
        </svg>
      </div>
    </div>
  )
}

export default BackgroundGraphics


