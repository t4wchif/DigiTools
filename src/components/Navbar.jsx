import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-purple-600 tracking-tight">
          DigiTools
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(
            link => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ),
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative cursor-pointer">
            <ShoppingCart
              size={22}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
          >
            Login
          </a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200">
            Get Started
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} className="text-gray-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(
            link => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-purple-600 text-sm font-medium"
              >
                {link}
              </a>
            ),
          )}
          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <a href="#" className="text-sm font-medium text-gray-600">
              Login
            </a>
            <button className="bg-purple-600 text-white text-sm font-semibold px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
