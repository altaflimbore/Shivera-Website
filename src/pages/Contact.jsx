import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 5000)
  }

  const services = [
    "Cybersecurity & ISMS",
    "Data Privacy & DPDP Compliance",
    "ISO Certifications",
    "IT CSV & GxP Compliance",
    "ERPNext Implementation",
    "POSH Compliance",
    "Environmental & Energy Audits",
    "Training Programs",
    "Other",
  ]

  return (
    <div className="pt-20">
      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Get in touch with our experts to discuss your IT, cybersecurity, and
            compliance needs.
          </p>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ================= Contact Info ================= */}
            <div>
              <h2 className="text-3xl font-bold text-primary-navy mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Contact Person */}
                <div className="flex items-start">
                  <div className="bg-primary-teal rounded-lg p-3 mr-4">
                    👤
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-1">
                      Contact Person
                    </h3>
                    <p className="text-gray-700">
                      Aruna Uttamrao Deshmukh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-primary-teal rounded-lg p-3 mr-4">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:80878250238"
                      className="text-gray-700 hover:text-primary-teal block"
                    >
                      80878250238
                    </a>
                    <a
                      href="tel:78878888171"
                      className="text-gray-700 hover:text-primary-teal block"
                    >
                      78878888171
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-primary-teal rounded-lg p-3 mr-4">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@shiverainfotech.com"
                      className="text-gray-700 hover:text-primary-teal"
                    >
                      info@shiverainfotech.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-primary-teal rounded-lg p-3 mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-1">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      B103, Vastunirvana, Baner-Pashan Link Road, Pune
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500 font-medium">
                  Google Map Placeholder
                </p>
              </div>
            </div>

            {/* ================= Contact Form ================= */}
            <div>
              <h2 className="text-3xl font-bold text-primary-navy mb-6">
                Schedule a Consultation
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been received. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal"
                    />
                  </div>

                  {/* ✅ Updated Premium Submit Button */}
                  <button
                    type="submit"
                    className="
                      w-full flex justify-center items-center gap-2
                      px-6 py-3 rounded-full font-semibold text-lg
                      text-green-800 border border-green-800
                      hover:bg-green-800 hover:text-white
                      transition-all duration-300
                      shadow-sm hover:shadow-lg
                    "
                  >
                    📅 Submit & Schedule Consultation
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
