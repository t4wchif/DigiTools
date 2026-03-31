import { useState } from 'react';
import { toast } from 'react-toastify';

const tagStyles = {
  popular: 'bg-purple-100 text-purple-700',
  new: 'bg-green-100 text-green-700',
  'best-seller': 'bg-yellow-100 text-yellow-800',
};

const periodLabel = {
  monthly: '/Mo',
  'one-time': '/One-Time',
  yearly: '/Year',
};

const ProductCard = ({ product, cartItems, setCartItems }) => {
  const [added, setAdded] = useState(false);
  const isInCart = cartItems.some(item => item.id === product.id);

  const handleBuyNow = () => {
    if (isInCart) {
      toast.info(`${product.name} is already in cart!`);
      return;
    }
    setCartItems(prev => [...prev, product]);
    setAdded(true);
    toast.success(`${product.name} added to cart!`);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 flex flex-col relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm h-full">
      <span
        className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'}`}
      >
        {product.tag}
      </span>

      <div className="text-3xl sm:text-4xl mb-4 w-12 h-12 sm:w-14 sm:h-14 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
        {product.icon}
      </div>

      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 pr-16 leading-snug">
        {product.name}
      </h3>

      <p className="text-gray-500 text-xs sm:text-sm mb-4 flex-1 leading-relaxed">
        {product.description}
      </p>

      <div className="mb-4">
        <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          ${product.price}
        </span>
        <span className="text-gray-400 text-xs sm:text-sm ml-1">
          {periodLabel[product.period] || ''}
        </span>
      </div>

      <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
        {product.features.map((f, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
          >
            <span className="w-4 h-4 bg-purple-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyNow}
        className={`w-full py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 ${
          added
            ? 'bg-green-500 text-white shadow-lg shadow-green-200'
            : isInCart
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200'
        }`}
      >
        {added ? 'Added to Cart' : isInCart ? 'Already in Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;
