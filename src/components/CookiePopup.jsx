import { useState } from 'react'

const CookiePopup = ({ onAccept, onReject }) => {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 md:p-8 animate-fadeIn">
        {!showPrivacy ? (
          <>
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-bold text-primary-navy mb-2">
                  Cookie & Data Privacy Compliance
                </h3>
                <p className="text-gray-700 mb-4">
                  This website uses cookies and follows data privacy compliance standards to enhance your browsing experience and ensure data protection. By continuing, you agree to our data privacy practices aligned with DPDP and GDPR standards.
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  Please accept to continue browsing our website.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onAccept}
                className="flex-1 bg-primary-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                ✅ Accept All
              </button>
              <button
                onClick={onReject}
                className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                ❌ Reject Non-Essential
              </button>
              <button
                onClick={() => setShowPrivacy(true)}
                className="flex-1 border-2 border-primary-teal text-primary-teal px-6 py-3 rounded-lg font-semibold hover:bg-primary-teal hover:text-white transition-all"
              >
                📄 View Privacy Policy
              </button>
            </div>
          </>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-primary-navy">Data Privacy Policy</h3>
              <button
                onClick={() => setShowPrivacy(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto text-gray-700 space-y-4 mb-6">
              <p>
                <strong>SHIVERA INFOTECH LLP Data Privacy Policy</strong>
              </p>
              <p>
                We are committed to protecting your data privacy and ensuring compliance with data protection regulations including the Digital Personal Data Protection Act (DPDP) and GDPR.
              </p>
              <p>
                <strong>Data Collection:</strong> We collect information you provide through contact forms, consultation requests, and website interactions.
              </p>
              <p>
                <strong>Data Usage:</strong> Your data is used to respond to inquiries, provide services, and improve our website experience.
              </p>
              <p>
                <strong>Data Protection:</strong> We implement industry-standard security measures to protect your personal information.
              </p>
              <p>
                <strong>Your Rights:</strong> You have the right to access, correct, or delete your personal data. Contact us at info@shiverainfotech.com for data requests.
              </p>
              <p>
                <strong>Cookies:</strong> We use essential cookies for website functionality. Non-essential cookies are optional.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onAccept}
                className="flex-1 bg-primary-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                ✅ Accept All
              </button>
              <button
                onClick={onReject}
                className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                ❌ Reject Non-Essential
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CookiePopup

