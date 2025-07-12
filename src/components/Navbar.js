"use client";
import Link from 'next/link';
import { useState } from 'react';
import LoginModal from './LoginModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 bg-black/90 backdrop-blur-md fixed top-0 z-50 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border-2 border-[#D4AF37] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
            <div className="w-3 h-3 bg-[#D4AF37]"></div>
          </div>
          <span className="text-xl font-bold text-[#D4AF37] group-hover:text-white transition-colors duration-300">EventMaster</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="#services" className="text-white hover:text-[#D4AF37] transition-all duration-300 relative group">
            Services
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link href="#portfolio" className="text-white hover:text-[#D4AF37] transition-all duration-300 relative group">
            Portfolio
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link href="#testimonials" className="text-white hover:text-[#D4AF37] transition-all duration-300 relative group">
            Testimonials
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link href="#contact" className="text-white hover:text-[#D4AF37] transition-all duration-300 relative group">
            Contact
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></div>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-[#D4AF37] transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setIsLoginModalOpen(true)}
            className="text-white hover:text-[#D4AF37] transition-all duration-300 font-medium relative group"
          >
            Get Started
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></div>
          </button>
          <Link href="/invitation" className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 text-sm font-medium hover:bg-[#D4AF37]/10 hover:scale-105 transform transition-all duration-300 group relative overflow-hidden">
            <span className="relative z-10">Join Event</span>
            <div className="absolute inset-0 bg-[#D4AF37]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-zinc-800 py-4 px-6 md:hidden">
            <div className="flex flex-col gap-4">
              <Link 
                href="#services" 
                className="text-white hover:text-[#D4AF37] transition-all duration-300 py-2 border-b border-zinc-800/50 group flex justify-between items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="#portfolio" 
                className="text-white hover:text-[#D4AF37] transition-all duration-300 py-2 border-b border-zinc-800/50 group flex justify-between items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="#testimonials" 
                className="text-white hover:text-[#D4AF37] transition-all duration-300 py-2 border-b border-zinc-800/50 group flex justify-between items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="#contact" 
                className="text-white hover:text-[#D4AF37] transition-all duration-300 py-2 border-b border-zinc-800/50 group flex justify-between items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-zinc-800/50">
                <button 
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="text-[#D4AF37] hover:text-white transition-all duration-300 py-2 text-left font-medium"
                >
                  Get Started
                </button>
                <Link href="/invitation" className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 text-sm font-medium hover:bg-[#D4AF37]/10 transition-all duration-300 text-center">
                  Join Event
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}
