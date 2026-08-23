import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'For Students', href: '#students' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-xl leading-none">
              S
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">{siteConfig.name}</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/20"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center mt-2 px-5 py-3 text-base font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700"
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  );
}
