import { motion } from "framer-motion";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { restaurant } from "../data/restaurant";

export function WhatsAppSticky() {
  return (
    <motion.a
      href={restaurant.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-shadow duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </motion.a>
  );
}
