import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Collections", path: "/collections" },
    { name: "Wholesale", path: "/wholesale" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-brand-black/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span
              className={`font-serif text-2xl font-bold tracking-wider uppercase ${isScrolled ? "text-brand-black" : "text-gold-400"}`}
            >
              Madhava
            </span>
            <span
              className={`text-[10px] tracking-[0.2em] uppercase ${isScrolled ? "text-brand-gray" : "text-white/80"}`}
            >
              Chains & Jewellery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold-500 ${
                  isScrolled ? "text-brand-gray" : "text-white/90"
                } ${location.pathname === link.path ? "!text-gold-500" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider border transition-all ${
                isScrolled
                  ? "border-brand-black text-brand-black hover:bg-brand-black hover:text-white"
                  : "border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-brand-black"
              }`}
            >
              Inquire Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={isScrolled ? "text-brand-black" : "text-white"}
                size={24}
              />
            ) : (
              <Menu
                className={isScrolled ? "text-brand-black" : "text-white"}
                size={24}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium uppercase tracking-wider py-2 border-b border-gray-50 ${
                    location.pathname === link.path
                      ? "text-gold-600"
                      : "text-brand-gray"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center text-brand-gray"
                >
                  <Phone size={18} className="mr-2 text-gold-500" />
                  +91 98765 43210
                </a>
                <a
                  href="mailto:wholesale@madhavachains.com"
                  className="flex items-center text-brand-gray"
                >
                  <Mail size={18} className="mr-2 text-gold-500" />
                  wholesale@madhavachains.com
                </a>
                <Link
                  to="/contact"
                  className="mt-4 text-center px-6 py-3 bg-brand-black text-white text-sm font-semibold uppercase tracking-wider"
                >
                  Request Wholesale Catalog
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
