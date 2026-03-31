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
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl p-16 text-center shadow-sm">
        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBag size={36} className="text-purple-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-400 text-sm">
          Browse our products and add something to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>

      <div className="space-y-3 mb-6">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 hover:bg-purple-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  {item.name}
                </p>
                <p className="text-purple-600 text-sm font-medium">
                  ${item.price}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id, item.name)}
              className="flex items-center gap-1 text-red-400 hover:text-red-600 text-sm font-semibold transition-colors"
            >
              <Trash2 size={14} /> Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between py-4 border-t border-gray-100 mb-6">
        <span className="text-gray-500 font-medium">Total:</span>
        <span className="text-3xl font-extrabold text-gray-900">${total}</span>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full py-4 rounded-full text-white font-bold text-base transition-all duration-200 hover:opacity-90 shadow-lg shadow-purple-200"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSection;
