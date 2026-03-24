import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl font-bold tracking-wider uppercase text-gold-400 mb-1">
                Madhava
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
                Chains & Jewellery
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's premier B2B wholesale partner for premium gold chains.
              Delivering exceptional craftsmanship, purity, and competitive
              pricing to retailers nationwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Our Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/wholesale"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Wholesale Process
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Download Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/collections#machine"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Machine Made Chains
                </Link>
              </li>
              <li>
                <Link
                  to="/collections#handmade"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Handmade Chains
                </Link>
              </li>
              <li>
                <Link
                  to="/collections#italian"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Italian Designs
                </Link>
              </li>
              <li>
                <Link
                  to="/collections#lightweight"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Lightweight Series
                </Link>
              </li>
              <li>
                <Link
                  to="/collections#exclusive"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Exclusive Bridal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="text-gold-400 mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-400 text-sm leading-relaxed">
                  123 Gold Souk Building,
                  <br />
                  Zaveri Bazaar, Mumbai,
                  <br />
                  Maharashtra 400002, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold-400 mr-3 flex-shrink-0" size={18} />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold-400 mr-3 flex-shrink-0" size={18} />
                <a
                  href="mailto:wholesale@madhavachains.com"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  wholesale@madhavachains.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Madhava Chains & Jewellery. All
            rights reserved. B2B Wholesale Only.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Terms of Trade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
