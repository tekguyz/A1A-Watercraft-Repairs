'use client';

import { Facebook, Wrench, Menu, X, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Announcement Bar with Sliver Fix */}
      <div 
        className={`bg-warning-red text-safety-white text-center text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0 border-none' : 'max-h-16 py-2 opacity-100'
        }`}
      >
        <AlertTriangle size={16} aria-hidden="true" />
        <span>Same-Day Availability for Pompano Beach & Surrounding Areas</span>
        <AlertTriangle size={16} aria-hidden="true" />
      </div>

      {/* Main Navbar */}
      <div className="bg-fuel-slate/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Wrench className="text-warning-red" size={32} aria-hidden="true" />
              <Link href="/" className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-safety-white uppercase">
                A1A Watercraft Repairs
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 font-heading uppercase tracking-wide text-sm">
              <Link href="#services" className="hover:text-warning-red transition-colors">Services</Link>
              <Link href="#mobile" className="hover:text-warning-red transition-colors">Dockside</Link>
              <Link href="#reviews" className="hover:text-warning-red transition-colors">Reviews</Link>
              <div className="flex items-center gap-4 border-l border-white/20 pl-6">
                <a href="#" aria-label="Facebook" className="text-chrome-silver hover:text-safety-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
              <Link href="#contact" className="btn-shimmer bg-warning-red text-safety-white px-6 py-2.5 font-bold hover:bg-red-700 transition-colors">
                <span className="relative z-10">561-929-9163</span>
              </Link>
            </nav>

            <button 
              className="md:hidden text-safety-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-fuel-slate border-b border-white/10 px-4 py-6 flex flex-col gap-4 font-heading uppercase tracking-wide">
            <Link href="#services" onClick={() => setIsOpen(false)} className="block py-2 hover:text-warning-red">Services</Link>
            <Link href="#mobile" onClick={() => setIsOpen(false)} className="block py-2 hover:text-warning-red">Dockside</Link>
            <Link href="#reviews" onClick={() => setIsOpen(false)} className="block py-2 hover:text-warning-red">Reviews</Link>
            <div className="flex items-center gap-6 py-4 border-t border-white/10">
              <a href="#" aria-label="Facebook" className="text-chrome-silver hover:text-safety-white">
                <Facebook size={24} />
              </a>
            </div>
            <a href="tel:5619299163" className="btn-shimmer bg-warning-red text-safety-white px-6 py-3 font-bold text-center mt-2">
              <span className="relative z-10">561-929-9163</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
