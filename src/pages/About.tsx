import { motion } from "motion/react";
import { Award, Users, Globe, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1599643478514-4a11018c5000?q=80&w=2000&auto=format&fit=crop"
            alt="Gold Texture"
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
            A Legacy of{" "}
            <span className="text-gold-400 italic font-light">Purity</span> &
            Trust.
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            For over two decades, Madhava Chains & Jewellery has been the silent
            force behind India's most successful retail jewellery showrooms.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-100 transform -skew-y-3 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop"
                alt="Craftsmanship"
                className="relative z-10 w-full h-auto object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to organize the highly fragmented gold
                chain wholesale market, Madhava Chains began as a small
                manufacturing unit in Mumbai. Today, we are a pan-India supplier
                known for our uncompromising quality and transparent business
                practices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We don't just sell gold chains; we partner with retailers to
                optimize their inventory, reduce dead stock, and maximize their
                return on investment through data-driven design selection and
                competitive making charges.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-gold-600 mb-2">
                    25+
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-black">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-gold-600 mb-2">
                    10k+
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-black">
                    Unique Designs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-4">
              Why Retailers Trust Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our business is built on four pillars that ensure your retail
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 shadow-sm border border-gold-100 hover:shadow-md transition-shadow">
              <Shield className="text-gold-500 mb-6" size={40} />
              <h3 className="text-xl font-bold text-brand-black mb-3">
                100% BIS Hallmarked
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every chain undergoes strict quality control and is HUID
                compliant, ensuring zero purity issues for your customers.
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm border border-gold-100 hover:shadow-md transition-shadow">
              <Award className="text-gold-500 mb-6" size={40} />
              <h3 className="text-xl font-bold text-brand-black mb-3">
                Master Craftsmanship
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                State-of-the-art Italian machinery combined with traditional
                Indian karigari for flawless finishing.
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm border border-gold-100 hover:shadow-md transition-shadow">
              <Users className="text-gold-500 mb-6" size={40} />
              <h3 className="text-xl font-bold text-brand-black mb-3">
                B2B Focus
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We only sell to retailers. Our pricing structure is designed to
                give you the maximum possible margin.
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm border border-gold-100 hover:shadow-md transition-shadow">
              <Globe className="text-gold-500 mb-6" size={40} />
              <h3 className="text-xl font-bold text-brand-black mb-3">
                Pan-India Network
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Secure, insured, and fast logistics ensuring your showcases are
                never empty of fast-moving items.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
