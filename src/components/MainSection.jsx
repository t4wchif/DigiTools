import { useState } from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';
import CartSection from './CartSection';

const MainSection = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white border border-gray-200 rounded-full p-1 flex gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeTab === 'products'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeTab === 'cart'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>
        ) : (
          <CartSection cartItems={cartItems} setCartItems={setCartItems} />
        )}
      </div>
    </section>
  );
};

export default MainSection;
