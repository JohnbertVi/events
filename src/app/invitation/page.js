"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InvitationAccess() {
  const [invitationCode, setInvitationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate code verification
    setTimeout(() => {
      // In a real app, you'd verify the code against your database
      if (invitationCode.length === 6) {
        // Redirect to event details page with the code
        router.push(`/event/${invitationCode}`);
      } else {
        setError('Invalid invitation code. Please check and try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#D4AF37]/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#D4AF37]/10 rotate-12"></div>
        <div className="absolute top-3/4 left-3/4 w-16 h-16 bg-[#D4AF37]/5 rounded-full blur-xl"></div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-8 w-full max-w-md relative z-10">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#D4AF37]"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#D4AF37]"></div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#D4AF37] mb-2">Event Access</h1>
          <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-3"></div>
          <p className="text-gray-400">Enter your invitation code to access the event</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Invitation Code
            </label>
            <input
              type="text"
              value={invitationCode}
              onChange={(e) => setInvitationCode(e.target.value.toUpperCase())}
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-center text-lg font-mono tracking-widest focus:border-[#D4AF37] focus:outline-none transition-all duration-300"
              placeholder="XXXXXX"
              maxLength={6}
              required
            />
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-800 text-red-400 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || invitationCode.length !== 6}
            className="w-full bg-[#D4AF37] text-black py-3 px-4 font-medium hover:bg-white transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group relative overflow-hidden"
          >
            <span className="relative z-10">
              {isLoading ? 'Verifying...' : 'Access Event'}
            </span>
            {!isLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            )}
          </button>
        </form>

        <div className="text-center mt-6 pt-6 border-t border-zinc-800">
          <p className="text-gray-500 text-sm">
            Don't have an invitation code?{' '}
            <span className="text-[#D4AF37]">Contact the event organizer</span>
          </p>
        </div>
      </div>
    </div>
  );
}
