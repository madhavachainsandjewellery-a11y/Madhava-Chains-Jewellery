import { motion } from "motion/react";
import {
  CheckCircle,
  FileText,
  Truck,
  PhoneCall,
  Handshake,
} from "lucide-react";

export default function Wholesale() {
  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1573408301145-b98c46544405?q=80&w=2000&auto=format&fit=crop"
            alt="Wholesale Process"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            How{" "}
            <span className="text-gold-400 italic font-light">Wholesale</span>{" "}
            Works.
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A streamlined, transparent, and secure process designed exclusively
            for B2B jewelry retailers across India.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-4">
              The Buying Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From inquiry to delivery, we ensure a seamless experience so you
              can focus on selling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gold-200 -z-10 transform -translate-y-1/2"></div>

            {/* Step 1 */}
            <div className="bg-white p-8 text-center relative z-10 border border-gold-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-black text-gold-400 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">
                1. Registration
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Submit your GST certificate and business details to register as
                a verified B2B buyer.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 text-center relative z-10 border border-gold-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-black text-gold-400 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
                <PhoneCall size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">
                2. Consultation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our sales expert will contact you to understand your target
                demographic and suggest fast-moving designs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 text-center relative z-10 border border-gold-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-black text-gold-400 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
                <Handshake size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">
                3. Order & Pricing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Select designs from our live catalog. Pricing is locked based on
                the live MCX gold rate + agreed VA.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 text-center relative z-10 border border-gold-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-black text-gold-400 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">
                4. Insured Delivery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Orders are dispatched via secure logistics partners (BVC/Sequel)
                with 100% transit insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-24 bg-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 md:p-16 shadow-xl border-t-4 border-brand-black">
            <h2 className="text-3xl font-serif font-bold text-brand-black mb-8 text-center">
              Wholesale Terms
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle
                  className="text-gold-600 mt-1 mr-4 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-bold text-brand-black">
                    Minimum Order Quantity (MOQ)
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">
                    Initial order minimum is 500 grams. Subsequent orders
                    require a minimum of 200 grams to maintain wholesale pricing
                    tiers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  className="text-gold-600 mt-1 mr-4 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-bold text-brand-black">
                    Pricing Structure
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">
                    Final price = (Live Gold Rate × Purity %) + Value Addition
                    (VA) + 3% GST. VA varies by design complexity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  className="text-gold-600 mt-1 mr-4 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-bold text-brand-black">
                    Payment Terms
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">
                    100% advance payment via RTGS/NEFT required before dispatch.
                    Metal-to-metal exchange options available for established
                    partners.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  className="text-gold-600 mt-1 mr-4 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-bold text-brand-black">
                    Return & Exchange
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">
                    We offer a 100% buyback policy on the gold value (excluding
                    VA and GST) for unsold inventory within 6 months.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-brand-black text-white font-bold text-sm uppercase tracking-wider hover:bg-gold-600 transition-colors"
              >
                Register as a Buyer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
