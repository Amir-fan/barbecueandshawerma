import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/Button";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { restaurant } from "../data/restaurant";
import { translations } from "../locales/translations";

export function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { t, currentLanguage } = useLanguage();

  const formatPrice = (price) => {
    return new Intl.NumberFormat(currentLanguage === 'ar' ? 'ar-SY' : 'en-US').format(price) + ' ' + t('common.currency');
  };

  const handleCheckout = () => {
    // Force message to be in Arabic as requested by client
    const ar = translations.ar.cart;
    
    let message = `${ar.checkoutMessage}\n`;
    cartItems.forEach(item => {
      // Get item name in Arabic from translations
      const itemNameAr = translations.ar.menuItems[item.id]?.name || item.name;
      message += `- ${item.quantity}x ${itemNameAr} (${item.price * item.quantity} ${translations.ar.common.currency})\n`;
    });
    message += `\n${ar.totalLabel} ${cartTotal} ${translations.ar.common.currency}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${restaurant.whatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: currentLanguage === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: currentLanguage === 'ar' ? '-100%' : '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 bottom-0 ${currentLanguage === 'ar' ? 'left-0' : 'right-0'} w-full md:w-[400px] bg-[#111] z-[101] shadow-2xl flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-display text-offwhite">{t('cart.title')}</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-white/50 space-y-4">
                  <ShoppingCart size={48} className="opacity-20" />
                  <p>{t('cart.empty')}</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-offwhite font-display text-lg">
                        {t(`menuItems.${item.id}.name`)}
                      </h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-ember font-bold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <div className="flex items-center gap-3 bg-black/50 rounded-lg px-2 py-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-white/70 hover:text-white">
                          <Minus size={16} />
                        </button>
                        <span className="text-offwhite w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-white/70 hover:text-white">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/70 text-lg">{t('cart.total')}</span>
                  <span className="text-2xl font-display text-offwhite">{formatPrice(cartTotal)}</span>
                </div>
                <Button onClick={handleCheckout} className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white border-none py-4 text-lg">
                  <WhatsAppIcon size={20} />
                  {t('cart.checkout')}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
