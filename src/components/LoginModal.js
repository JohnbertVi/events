"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: ''
  });
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setIsVisible(false), 300);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to dashboard for demonstration
    router.push('/dashboard');
    onClose();
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
      isOpen ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      >
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full animate-ping opacity-60" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#D4AF37] rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Modal */}
      <div className={`relative bg-black border border-zinc-800 w-full max-w-md mx-auto shadow-2xl transition-all duration-500 transform ${
        isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
      }`}>
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#D4AF37]"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#D4AF37]"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 group"
        >
          <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-8 pb-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-2">
              Join EventMaster
            </h2>
            <div className="w-12 h-px bg-[#D4AF37] mx-auto"></div>
            <p className="text-gray-400 text-sm mt-3">
              Create your admin account to start organizing events
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8">
          <div className="space-y-4">
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-[#D4AF37] transition-colors duration-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300 focus:bg-zinc-800"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-[#D4AF37] transition-colors duration-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300 focus:bg-zinc-800"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black py-3 px-4 font-medium hover:bg-white transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-[#D4AF37]/25 group relative overflow-hidden mt-6"
          >
            <span className="relative z-10">
              Get Started
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              By signing up, you agree to our terms and conditions
            </p>
          </div>
        </form>

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-4 right-16 w-16 h-16 border border-[#D4AF37]/10 rotate-45"></div>
          <div className="absolute bottom-16 left-4 w-12 h-12 border border-[#D4AF37]/10 rotate-12"></div>
        </div>
      </div>
    </div>
  );
}
              