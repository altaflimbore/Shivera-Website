import { useState } from 'react'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      company: 'Encube',
      feedback: 'SHIVERA INFOTECH provided exceptional cybersecurity consulting services. Their expertise in ISO 27001 implementation helped us achieve certification and strengthen our security posture significantly.',
      rating: 5,
      author: 'IT Director',
    },
    {
      company: 'HTPL',
      feedback: 'Professional and thorough implementation support. The team guided us through our DPDP compliance journey with clear roadmaps and practical solutions. Highly recommended!',
      rating: 5,
      author: 'Compliance Manager',
    },
    {
      company: 'IIK',
      feedback: 'Outstanding cybersecurity consulting services. Their risk assessment approach identified critical vulnerabilities we hadn\'t considered. The implementation was smooth and audit-ready.',
      rating: 5,
      author: 'Security Lead',
    },
    {
      company: 'IQSYS',
      feedback: 'Excellent collaboration on our ISO certification journey. The team\'s attention to detail and implementation-first approach ensured we were fully prepared for our audit.',
      rating: 5,
      author: 'Quality Manager',
    },
    {
      company: 'HERBAYU WELLNESS',
      feedback:
        'The data privacy training program was comprehensive and practical. Our team gained valuable insights into DPDP compliance and data privacy program management.',
      rating: 5,
      author: 'Data Privacy Officer',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            What our clients say about working with SHIVERA INFOTECH LLP
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 md:p-12 shadow-xl relative">
              <div className="text-center mb-6">
                <div className="flex justify-center items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentIndex].feedback}"
                </p>
                <div className="text-2xl font-bold text-primary-navy mb-2">
                  {testimonials[currentIndex].company}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].author}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevTestimonial}
                  className="bg-primary-teal text-white p-3 rounded-full hover:bg-opacity-90 transition-all shadow-md"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex ? 'bg-primary-teal' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="bg-primary-teal text-white p-3 rounded-full hover:bg-opacity-90 transition-all shadow-md"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
            All Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
                <div className="font-semibold text-primary-navy">{testimonial.company}</div>
                <div className="text-sm text-gray-600">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-primary-teal text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how we can help your organization achieve compliance and security excellence.
          </p>
          <Link
            to="/contact"
            className="
px-8 py-4 rounded-full font-semibold text-lg
bg-primary-teal text-white
hover:bg-teal-600
transition-all duration-300
shadow-lg hover:shadow-2xl
"

          >
            📅 Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

