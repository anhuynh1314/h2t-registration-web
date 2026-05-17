import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-orange-500">
      <div className="w-full mx-auto px-[60px] h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
           {/* Simple icon or just text as per design */}
          <Link to="/" className="font-oswald font-bold italic text-white text-xl tracking-wider hover:text-orange-400 transition-colors duration-300">
            PLAY2HT.COM
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
            Privacy
          </Link>
          <a href="mailto:contact@2htsurvival.com" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
            Contact us
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white hover:text-purple-400">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;