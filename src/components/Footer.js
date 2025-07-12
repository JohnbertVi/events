import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37]">EventMaster</h3>
            <div className="w-12 h-px bg-[#D4AF37] mt-2"></div>
          </div>
          <p className="text-gray-400">Creating unforgettable experiences for every occasion with elegance and sophistication.</p>
          <div className="flex gap-6 mt-2">
            <Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.235.585 1.796 1.145.596.596.935 1.174 1.194 1.84.247.637.415 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.05 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.196 1.797c-.596.596-1.174.935-1.84 1.194-.637.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.05-1.791-.218-2.427-.465a4.902 4.902 0 01-1.797-1.196 4.902 4.902 0 01-1.195-1.84c-.248-.637-.415-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.145-1.796c.596-.596 1.174-.935 1.84-1.194.637-.247 1.363-.415 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <div className="w-4 h-px bg-[#D4AF37]"></div>
            Our Services
          </h3>
          <ul className="space-y-4">
            <li><Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Weddings</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Corporate Events</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Birthday Parties</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Private Events</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <div className="w-4 h-px bg-[#D4AF37]"></div>
            Company
          </h3>
          <ul className="space-y-4">
            <li><Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">About Us</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Our Team</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Testimonials</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Blog</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <div className="w-4 h-px bg-[#D4AF37]"></div>
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Event Street, Party City, PC 12345</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>hello@eventmaster.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} EventMaster. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="text-gray-500 hover:text-[#D4AF37] transition">Privacy Policy</Link>
          <Link href="#" className="text-gray-500 hover:text-[#D4AF37] transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
