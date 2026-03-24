import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ShieldCheck,
  TrendingUp,
  Gem,
  Truck,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Gold Chains Wholesale"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-3 py-1 border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm text-gold-400 text-xs font-semibold tracking-widest uppercase mb-6">
              <ShieldCheck size={14} className="mr-2" />
              India's Trusted B2B Partner
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Premium Gold Chains at{" "}
              <span className="text-gold-400 italic font-light">Wholesale</span>{" "}
              Prices.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
              Elevate your retail inventory with our masterfully crafted 22K &
              18K gold chains. Direct from manufacturer to your showroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/collections"
                className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-brand-black font-semibold text-sm uppercase tracking-wider transition-all text-center flex items-center justify-center"
              >
                View Wholesale Catalog <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href="https://wa.me/919876543210?text=I%20want%20to%20know%20wholesale%20rates"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 hover:border-white text-white font-semibold text-sm uppercase tracking-wider transition-all text-center backdrop-blur-sm"
              >
                Get Today's Rates
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-brand-black border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-gray-800">
            <div className="px-4">
              <p className="text-gold-400 font-serif text-2xl md:text-3xl font-bold">
                25+
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                Years Legacy
              </p>
            </div>
            <div className="px-4">
              <p className="text-gold-400 font-serif text-2xl md:text-3xl font-bold">
                500+
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                Retail Partners
              </p>
            </div>
            <div className="px-4">
              <p className="text-gold-400 font-serif text-2xl md:text-3xl font-bold">
                100%
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                BIS Hallmarked
              </p>
            </div>
            <div className="px-4">
              <p className="text-gold-400 font-serif text-2xl md:text-3xl font-bold">
                Pan India
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                Insured Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-4">
              Masterpiece Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated designs that guarantee high turnover for your retail
              store. From daily wear lightweight chains to heavy bridal pieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <Link
              to="/collections#machine"
              className="group relative h-[400px] overflow-hidden bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1599643478514-4a11018c5000?q=80&w=1000&auto=format&fit=crop"
                alt="Machine Made Chains"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Machine Made
                </h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Precision crafted, durable, and perfect for daily wear. High
                  volume sellers.
                </p>
                <span className="text-gold-400 text-xs font-bold uppercase tracking-widest flex items-center">
                  Explore <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </Link>

            {/* Category 2 */}
            <Link
              to="/collections#handmade"
              className="group relative h-[400px] overflow-hidden bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop"
                alt="Handmade Chains"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Handmade Classics
                </h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Traditional artistry meets modern appeal. Premium margins for
                  retailers.
                </p>
                <span className="text-gold-400 text-xs font-bold uppercase tracking-widest flex items-center">
                  Explore <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </Link>

            {/* Category 3 */}
            <Link
              to="/collections#italian"
              className="group relative h-[400px] overflow-hidden bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
                alt="Italian Designs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Italian Designs
                </h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Sleek, modern, and lightweight. Target the urban demographic
                  effectively.
                </p>
                <span className="text-gold-400 text-xs font-bold uppercase tracking-widest flex items-center">
                  Explore <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/collections"
              className="inline-block border-b-2 border-brand-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-gold-600 hover:border-gold-600 transition-colors"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (B2B FOCUS) */}
      <section className="py-24 bg-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-6">
                The Wholesale Advantage
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We understand the retail jewellery business. Our operations are
                designed to maximize your margins while ensuring you never run
                out of fast-moving stock.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <TrendingUp className="text-gold-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-brand-black">
                      Transparent Making Charges
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      Highly competitive VA (Value Addition) rates ensuring
                      better profitability for your showroom.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Gem className="text-gold-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-brand-black">
                      Guaranteed Purity
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      Every piece is strictly HUID compliant and BIS hallmarked.
                      Zero compromise on quality.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Truck className="text-gold-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-brand-black">
                      Secure & Fast Logistics
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      Fully insured, pan-India delivery. Get your stock
                      replenished within 48-72 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/wholesale"
                  className="px-8 py-4 bg-brand-black text-white font-semibold text-sm uppercase tracking-wider hover:bg-gold-600 transition-colors inline-block"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gold-200 transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1573408301145-b98c46544405?q=80&w=1000&auto=format&fit=crop"
                alt="Gold Chain Manufacturing"
                className="relative z-10 w-full h-auto object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 shadow-xl border-t-4 border-gold-500 max-w-[200px]">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold-500 fill-gold-500"
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-brand-black">
                  "Best wholesale partner for our 3 showrooms."
                </p>
                <p className="text-xs text-gray-500 mt-2">- R.K. Jewellers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-900/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to upgrade your inventory?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join 500+ successful jewellery retailers across India. Request our
            latest wholesale catalog and pricing sheet today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gold-500 text-brand-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
            >
              Request Catalog & Pricing
            </Link>
            <a
              href="tel:+919876543210"
              className="px-8 py-4 border border-gray-600 text-white font-bold text-sm uppercase tracking-wider hover:border-gold-500 hover:text-gold-400 transition-colors"
            >
              Call Sales Team
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              <CheckCircle2 size={16} className="text-gold-500 mr-2" /> Low MOQ
            </span>
            <span className="flex items-center">
              <CheckCircle2 size={16} className="text-gold-500 mr-2" /> Fast
              Shipping
            </span>
            <span className="flex items-center">
              <CheckCircle2 size={16} className="text-gold-500 mr-2" /> 100%
              Return Policy
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
