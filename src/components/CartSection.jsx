import { toast } from 'react-toastify';
import { Trash2, ShoppingBag } from 'lucide-react';

const CartSection = ({ cartItems, setCartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id, name) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.error(`${name} removed from cart!`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setCartItems([]);
    toast.success('Checkout successful! Cart cleared.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-sm">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBag size={28} className="text-purple-300 sm:hidden" />
          <ShoppingBag size={36} className="text-purple-300 hidden sm:block" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm">
          Browse our products and add something to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
        Your Cart
      </h3>

      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-50 rounded-xl px-3 sm:px-5 py-3 sm:py-4 hover:bg-purple-50 transition-colors gap-3"
          >
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center text-lg sm:text-xl shadow-sm shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 text-xs sm:text-sm truncate">
                  {item.name}
                </p>
                <p className="text-purple-600 text-xs sm:text-sm font-medium">
                  ${item.price}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleRemove(item.id, item.name)}
              className="flex items-center gap-1 text-red-400 hover:text-red-600 text-xs sm:text-sm font-semibold transition-colors shrink-0"
            >
              <Trash2 size={13} />
              <span className="hidden xs:inline sm:inline">Remove</span>
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between py-3 sm:py-4 border-t border-gray-100 mb-4 sm:mb-6">
        <span className="text-gray-500 text-sm sm:text-base font-medium">
          Total:
        </span>
        <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          ${total}
        </span>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full py-3 sm:py-4 rounded-full text-white font-bold text-sm sm:text-base transition-all duration-200 hover:opacity-90 shadow-lg shadow-purple-200"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSection;
