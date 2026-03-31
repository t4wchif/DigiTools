import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = id => {
    if (id === 'testimonials') {
      toast.info('🙏 Please pray for us — coming soon!', {
        position: 'top-center',
        autoClose: 3000,
        style: {
          background: '#7c3aed',
          color: 'white',
          fontWeight: '600',
          borderRadius: '12px',
        },
      });
      setMenuOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Products', id: 'products' },
    { label: 'Features', id: 'steps' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'footer' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-purple-600 tracking-tight cursor-pointer">
          DigiTools
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.id)}
              className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors duration-200 bg-transparent cursor-pointer"
            >
              {link.label}
            </button>
          ))}
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
            className="text-gray-600 p-1"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.id)}
              className="text-left text-gray-600 hover:text-purple-600 text-sm font-medium py-2.5 border-b border-gray-50 bg-transparent cursor-pointer w-full transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              Login
            </a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
