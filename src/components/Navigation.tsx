import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'services', label: 'Servicios' },
    { id: 'features', label: 'Características' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}image.png`} alt="The INFAMA Creative" className="h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-pink-500'
                    : 'text-gray-300 hover:text-pink-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
              Contáctanos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-pink-500" />
            ) : (
              <Menu className="w-6 h-6 text-pink-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                  activeSection === item.id
                    ? 'text-pink-500 bg-gray-900 rounded-lg'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-6 py-2.5 rounded-lg font-medium">
              Comenzar Gratis
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
