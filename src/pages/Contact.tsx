import { motion } from "motion/react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full pt-28 pb-20 bg-gray-50">
      {/* Header */}
      <section className="bg-brand-black text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Partner{" "}
            <span className="text-gold-400 italic font-light">With Us</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Get in touch to request our wholesale catalog, discuss bulk pricing,
            or schedule a showroom visit.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-black mb-8">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              We supply exclusively to B2B clients, including jewelry retailers,
              wholesalers, and distributors across India.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-brand-black mb-2">
                    Head Office & Showroom
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    123 Gold Souk Building,
                    <br />
                    Zaveri Bazaar, Kalbadevi,
                    <br />
                    Mumbai, Maharashtra 400002
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-brand-black mb-2">
                    Sales & Inquiries
                  </h4>
                  <p className="text-gray-600 mb-1">
                    Wholesale: +91 98765 43210
                  </p>
                  <p className="text-gray-600">Support: +91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={24} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-brand-black mb-2">
                    Email
                  </h4>
                  <p className="text-gray-600 mb-1">
                    wholesale@madhavachains.com
                  </p>
                  <p className="text-gray-600">info@madhavachains.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-brand-black text-white rounded-lg shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <MessageCircle className="text-[#25D366] mr-3" size={28} />
                Instant WhatsApp Support
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                Need immediate assistance or live rates? Chat directly with our
                wholesale experts.
              </p>
              <a
                href="https://wa.me/919876543210?text=I%20want%20to%20know%20wholesale%20rates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider transition-colors rounded"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-10 shadow-xl border-t-4 border-gold-500">
            <h3 className="text-2xl font-serif font-bold text-brand-black mb-6">
              Wholesale Inquiry Form
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Please fill out the form below. Our B2B team will contact you
              within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company / Shop Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="gst"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    GST Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="gst"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Interest *
                </label>
                <select
                  id="interest"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="machine">Machine Made Chains</option>
                  <option value="handmade">Handmade Chains</option>
                  <option value="italian">Italian Designs</option>
                  <option value="lightweight">Lightweight Series</option>
                  <option value="multiple">Multiple Categories</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message / Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-brand-black text-white font-bold text-sm uppercase tracking-wider hover:bg-gold-600 transition-colors"
              >
                Submit Inquiry <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
