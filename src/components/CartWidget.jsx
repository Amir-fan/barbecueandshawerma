import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartWidget() {
  const { totalItems, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-ember text-white rounded-full shadow-[0_4px_14px_0_rgba(255,87,34,0.39)] hover:shadow-[0_6px_20px_rgba(255,87,34,0.23)] transition-shadow duration-300"
      aria-label="Open Cart"
    >
      <ShoppingCart size={24} />
      <span className="absolute -top-1 -right-1 bg-white text-ember text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
        {totalItems}
      </span>
    </motion.button>
  );
}
