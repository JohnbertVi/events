"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Refs for sections to observe
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);

    // Intersection Observer for consistent animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, sectionId]));
        } else {
          // Remove from visible sections when out of view
          setVisibleSections(prev => {
            const newSet = new Set(prev);
            newSet.delete(sectionId);
            return newSet;
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = [heroRef, servicesRef, portfolioRef, testimonialsRef, ctaRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Helper function to check if section is visible
  const isSectionVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="hero"
        ref={heroRef}
        className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 bg-black relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div 
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent transition-all duration-1000 ${
              isSectionVisible('hero') ? 'opacity-30' : 'opacity-0'
            }`}
          ></div>
          <div 
            className={`absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all duration-2000 ${
              isSectionVisible('hero') ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ 
              transform: `translateY(${scrollY * 0.5}px) scale(${isSectionVisible('hero') ? 1 : 0.5})`
            }}
          ></div>
          <div 
            className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-[#D4AF37]/20 transition-all duration-1500 ${
              isSectionVisible('hero') ? 'opacity-100 animate-pulse' : 'opacity-0'
            }`}
            style={{ 
              transform: `rotate(${scrollY * 0.1}deg)`
            }}
          ></div>
          <div 
            className={`absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full border border-[#D4AF37]/10 transition-all duration-2000 ${
              isSectionVisible('hero') ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              transform: `rotate(${-scrollY * 0.2}deg) scale(${Math.sin(scrollY * 0.01) * 0.2 + 1})`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`flex flex-col gap-6 transition-all duration-1000 ${
            isSectionVisible('hero') ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="flex items-center gap-2 mb-2 group">
              <div 
                className={`h-px bg-[#D4AF37] transition-all duration-1000 ${
                  isSectionVisible('hero') ? 'w-12' : 'w-0'
                } group-hover:w-16`}
              ></div>
              <span className={`text-[#D4AF37] uppercase text-sm tracking-widest transition-all duration-700 ${
                isSectionVisible('hero') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>Premium Event Planning</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className={`inline-block transition-all duration-700 ${
                isSectionVisible('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>Creating</span>{' '}
              <span className={`text-[#D4AF37] inline-block transition-all duration-700 hover:scale-105 transform cursor-default ${
                isSectionVisible('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>Unforgettable</span>{' '}
              <span className={`inline-block transition-all duration-700 ${
                isSectionVisible('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>Experiences</span>
            </h1>
            <p className={`text-lg text-gray-300 transition-all duration-700 ${
              isSectionVisible('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              We transform your vision into spectacular events that create lasting memories. From intimate gatherings to grand celebrations.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 mt-4 transition-all duration-700 ${
              isSectionVisible('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '1000ms' }}>
              <button className="bg-[#D4AF37] text-black px-8 py-3 text-lg font-medium transition-all duration-300 group relative overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/25 hover:scale-105 transform">
                <span className="relative z-10 transition-colors duration-300">Plan Your Event</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 text-lg font-medium transition-all duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-105 transform group">
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 border border-[#D4AF37] scale-0 group-hover:scale-100 transition-transform duration-500 rounded"></div>
              </button>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 ${
            isSectionVisible('hero') ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="relative h-[450px] overflow-hidden shadow-2xl border border-[#D4AF37]/20 group hover:border-[#D4AF37]/50 transition-all duration-500">
              <Image 
                src="/event.jpg" 
                alt="Elegant event setup"
                fill
                style={{objectFit: "cover"}}
                priority
                className="opacity-90 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 p-4 md:p-6 bg-black/60 backdrop-blur-sm border-l border-t border-[#D4AF37]/20 transition-all duration-500 group-hover:bg-black/80">
                <p className="text-[#D4AF37] font-light italic animate-pulse">Elegance in every detail</p>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section 
        id="services" 
        ref={servicesRef}
        className="py-16 md:py-24 px-6 md:px-12 bg-zinc-900 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div 
            className={`absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent transition-all duration-1000 ${
              isSectionVisible('services') ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div 
            className={`absolute bottom-1/4 right-0 w-1 h-48 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent transition-all duration-1000 ${
              isSectionVisible('services') ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 relative">
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#D4AF37]/10 blur-xl transition-all duration-1000 ${
              isSectionVisible('services') ? 'opacity-100 animate-pulse' : 'opacity-0'
            }`}></div>
            <span className={`text-[#D4AF37] uppercase text-sm tracking-widest transition-all duration-700 ${
              isSectionVisible('services') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>Our Expertise</span>
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 mt-2 relative transition-all duration-700 ${
              isSectionVisible('services') ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              Our <span className="text-[#D4AF37] relative">
                Services
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] origin-left transition-all duration-800 ${
                  isSectionVisible('services') ? 'scale-x-100' : 'scale-x-0'
                }`} style={{ transitionDelay: '600ms' }}></div>
              </span>
            </h2>
            <div className={`w-20 h-px bg-[#D4AF37] mx-auto my-4 origin-center transition-all duration-600 ${
              isSectionVisible('services') ? 'scale-x-100' : 'scale-x-0'
            }`} style={{ transitionDelay: '400ms' }}></div>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto relative transition-all duration-700 ${
              isSectionVisible('services') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              We offer comprehensive event planning services, tailored to your unique vision and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Weddings",
                icon: "💍",
                description: "Create your dream wedding with our expert planning and coordination services."
              },
              {
                title: "Corporate Events",
                icon: "🏢",
                description: "Impressive corporate functions that align with your company's goals and culture."
              },
              {
                title: "Birthday Parties",
                icon: "🎉",
                description: "From milestone birthdays to children's parties, we make every celebration special."
              },
              {
                title: "Themed Events",
                icon: "🎭",
                description: "Transform any space with our creative themed event design and execution."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`bg-black border border-zinc-800 p-8 transition-all duration-700 hover:border-[#D4AF37]/50 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/10 ${
                  isSectionVisible('services') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-300 group-hover:rotate-12 transform">
                  <span className="text-[#D4AF37] text-3xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{service.description}</p>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center">
                  <span className="text-[#D4AF37] text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">Learn more</span>
                  <div className="w-6 h-6 border border-[#D4AF37]/30 rotate-45 group-hover:rotate-180 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section 
        id="portfolio" 
        ref={portfolioRef}
        className="py-16 md:py-24 px-6 md:px-12 bg-black relative overflow-hidden"
      >
        {/* Enhanced background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
          <div 
            className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent transition-all duration-1000 ${
              isSectionVisible('portfolio') ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div 
            className={`absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent transition-all duration-1000 ${
              isSectionVisible('portfolio') ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className={`text-[#D4AF37] uppercase text-sm tracking-widest transition-all duration-700 ${
              isSectionVisible('portfolio') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>Our Work</span>
            <h2 className={`text-3xl md:text-4xl font-bold mt-2 mb-4 transition-all duration-700 ${
              isSectionVisible('portfolio') ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>Portfolio</h2>
            <div className={`w-20 h-px bg-[#D4AF37] mx-auto my-4 origin-center transition-all duration-600 ${
              isSectionVisible('portfolio') ? 'scale-x-100' : 'scale-x-0'
            }`} style={{ transitionDelay: '400ms' }}></div>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-700 ${
              isSectionVisible('portfolio') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              Take a look at some of our most memorable events that we've had the pleasure to organize.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Wedding",
                image: "/wed.jpg",
                category: "Wedding"
              },
              {
                title: "Tech Conference 2023",
                image: "/co.jpg",
                category: "Corporate"
              },
              {
                title: "Summer Garden Party",
                image: "/deb.jpg",
                category: "Social"
              },
            ].map((event, index) => (
              <div 
                key={index} 
                className={`group overflow-hidden relative border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#D4AF37]/20 ${
                  isSectionVisible('portfolio') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-125 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium bg-[#D4AF37] text-black px-3 py-1 inline-block mb-3 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">{event.category}</span>
                  <h3 className="text-xl font-semibold text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">{event.title}</h3>
                  <div className="w-8 h-px bg-[#D4AF37] mt-3 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-300"></div>
                  <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-400">
                    Crafted with precision and passion
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-16 transition-all duration-700 ${
            isSectionVisible('portfolio') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '1100ms' }}>
            <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 uppercase tracking-wider text-sm hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105 transform group relative overflow-hidden">
              <span className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-[#D4AF37]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={testimonialsRef}
        className="py-20 px-6 md:px-12 bg-zinc-900 relative overflow-hidden"
      >
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl transition-all duration-1000 ${
          isSectionVisible('testimonials') ? 'opacity-100 animate-pulse' : 'opacity-0'
        }`} style={{ animationDuration: '4s' }}></div>
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-3xl transition-all duration-1000 ${
          isSectionVisible('testimonials') ? 'opacity-100 animate-pulse' : 'opacity-0'
        }`} style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className={`text-[#D4AF37] uppercase text-sm tracking-widest transition-all duration-700 ${
              isSectionVisible('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>Testimonials</span>
            <h2 className={`text-3xl md:text-4xl font-bold mt-2 mb-4 transition-all duration-700 ${
              isSectionVisible('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>What Our Clients Say</h2>
            <div className={`w-20 h-px bg-[#D4AF37] mx-auto my-4 origin-center transition-all duration-600 ${
              isSectionVisible('testimonials') ? 'scale-x-100' : 'scale-x-0'
            }`} style={{ transitionDelay: '400ms' }}></div>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-700 ${
              isSectionVisible('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              We take pride in exceeding our clients' expectations for every event we organize.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Bride",
                testimonial: "EventMaster made our wedding day absolutely perfect. Every detail was handled with such care and professionalism.",
                avatar: "/p1.jpg"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                testimonial: "Our company gala was a huge success thanks to the EventMaster team. They understood our vision and executed it flawlessly.",
                avatar: "/p2.jpg"
              },
              {
                name: "Jessica Martinez",
                role: "Birthday Celebrant",
                testimonial: "I wanted my 30th birthday to be special, and EventMaster delivered beyond my expectations. The themed decorations were amazing!",
                avatar: "/p3.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-black border border-zinc-800 p-8 hover:border-[#D4AF37]/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4AF37]/10 group ${
                  isSectionVisible('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v6a6 6 0 01-6 6H2v2c0 3.314 2.686 6 6 6h2c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6zm20 0v6a6 6 0 01-6 6h-2v2c0 3.314 2.686 6 6 6h2c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6z" opacity="0.2" />
                    <path d="M0 8v6a6 6 0 006 6h2v-2H6a4 4 0 01-4-4V8a4 4 0 014-4h4V2H6a6 6 0 00-6 6zm20 0v6a6 6 0 006 6h2v-2h-2a4 4 0 01-4-4V8a4 4 0 014-4h4V2h-4a6 6 0 00-6 6z" />
                  </svg>
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">{testimonial.testimonial}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors duration-300">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-[#D4AF37] transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-[#D4AF37] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        id="cta" 
        ref={ctaRef}
        className="py-20 px-6 md:px-12 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent transition-all duration-1000 ${
            isSectionVisible('cta') ? 'opacity-20' : 'opacity-0'
          }`}></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div 
            className={`absolute top-1/2 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full transition-all duration-1000 ${
              isSectionVisible('cta') ? 'opacity-100 animate-ping' : 'opacity-0'
            }`}
            style={{ animationDelay: '1s', animationDuration: '3s' }}
          ></div>
          <div 
            className={`absolute top-1/3 right-1/4 w-1 h-1 bg-[#D4AF37] rounded-full transition-all duration-1000 ${
              isSectionVisible('cta') ? 'opacity-100 animate-ping' : 'opacity-0'
            }`}
            style={{ animationDelay: '2s', animationDuration: '4s' }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className={`text-[#D4AF37] uppercase text-sm tracking-widest transition-all duration-700 ${
            isSectionVisible('cta') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>Get Started</span>
          <h2 className={`text-3xl md:text-4xl font-bold mt-3 mb-6 transition-all duration-700 ${
            isSectionVisible('cta') ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>Ready to Create Your Perfect Event?</h2>
          <p className={`text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
            isSectionVisible('cta') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            Let's bring your vision to life. Contact us today for a personalized consultation.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            isSectionVisible('cta') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            <button className="bg-[#D4AF37] text-black px-8 py-4 font-medium text-lg hover:bg-white transition-all duration-300 hover:scale-105 transform hover:shadow-2xl hover:shadow-[#D4AF37]/30 group relative overflow-hidden">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 font-medium text-lg hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-[#D4AF37]/20 group relative overflow-hidden">
              <span className="relative z-10">View Pricing</span>
              <div className="absolute inset-0 bg-[#D4AF37]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
