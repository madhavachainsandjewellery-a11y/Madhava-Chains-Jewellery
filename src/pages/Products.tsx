import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Filter, Download } from "lucide-react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Machine Made",
    "Handmade",
    "Italian",
    "Lightweight",
  ];

  const products = [
    {
      id: 1,
      name: "Classic Rope Chain",
      category: "Machine Made",
      weight: "15g - 50g",
      purity: "22K",
      image:
        "https://images.unsplash.com/photo-1599643478514-4a11018c5000?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Hollow Cuban Link",
      category: "Italian",
      weight: "20g - 100g",
      purity: "18K / 22K",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Traditional Dokiya",
      category: "Handmade",
      weight: "30g - 80g",
      purity: "22K",
      image:
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Singapore Chain",
      category: "Machine Made",
      weight: "5g - 20g",
      purity: "22K",
      image:
        "https://images.unsplash.com/photo-1573408301145-b98c46544405?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Daily Wear Box Chain",
      category: "Lightweight",
      weight: "3g - 10g",
      purity: "18K / 22K",
      image:
        "https://images.unsplash.com/photo-1599643478514-4a11018c5000?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Fancy Nawabi Chain",
      category: "Handmade",
      weight: "40g - 150g",
      purity: "22K",
      image:
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
            Wholesale{" "}
            <span className="text-gold-400 italic font-light">Collections</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Explore our extensive catalog of high-turnover gold chains designed
            specifically for retail success.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-brand-black font-semibold text-sm uppercase tracking-wider hover:bg-gold-400 transition-colors"
          >
            <Download size={18} className="mr-2" /> Download Full PDF Catalog
          </a>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-200 pb-6">
          <div className="flex items-center text-brand-black font-semibold uppercase tracking-wider text-sm mb-4 md:mb-0">
            <Filter size={18} className="mr-2" /> Categories
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-black text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-brand-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white group cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-brand-black mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 mb-6 border-t border-gray-100 pt-4 mt-4">
                  <span className="font-medium">
                    Weight:{" "}
                    <span className="text-brand-black">{product.weight}</span>
                  </span>
                  <span className="font-medium">
                    Purity:{" "}
                    <span className="text-gold-600">{product.purity}</span>
                  </span>
                </div>
                <a
                  href={`https://wa.me/919876543210?text=I%20want%20to%20inquire%20about%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center px-4 py-3 bg-brand-black text-white text-xs font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-brand-black transition-colors"
                >
                  Inquire Wholesale Rate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
