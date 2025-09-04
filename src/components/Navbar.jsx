import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Left Section (Logo) */}
          <Link to="/" className="flex items-center">
            <img
              src="https://dev.yatrasaathi.in/LOGO/1.svg"
              alt="YatraSaathi Logo"
              className="h-40 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-black text-lg font-medium">
            <Link
              to="/pricing"
              className="hover:text-[#d29f54] transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/about-us"
              className="hover:text-[#d29f54] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/learn"
              className="hover:text-[#d29f54] transition-colors"
            >
              Learn
            </Link>
            <button
              className="ml-4 px-6 py-2 rounded-md text-white font-semibold transition duration-300 hover:opacity-90"
              style={{ backgroundColor: "#d29f54" }}
            >
              Get Started
            </button>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              className="text-3xl text-black"
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full p-6 space-y-4 text-lg font-medium">
            <Link
              to="/pricing"
              className="block hover:text-[#d29f54] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about-us"
              className="block hover:text-[#d29f54] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/learn"
              className="block hover:text-[#d29f54] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Learn
            </Link>
            <button
              className="w-full px-6 py-3 rounded-md text-white font-semibold transition duration-300 hover:opacity-90"
              style={{ backgroundColor: "#d29f54" }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
