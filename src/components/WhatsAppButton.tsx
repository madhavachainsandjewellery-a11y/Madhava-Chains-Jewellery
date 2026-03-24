import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210";
  const message =
    "Hello Madhava Chains, I am interested in your wholesale gold chain catalog.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-brand-black text-white text-xs font-medium px-3 py-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Wholesale Inquiry
      </span>
    </a>
  );
}
