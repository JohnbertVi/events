"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxGuests: '',
    image: null
  });

  // Demo stats
  const stats = [
    { label: 'Total Events', value: events.length, icon: 'calendar', change: '+2 this month' },
    { label: 'Active Invitations', value: events.length * 5, icon: 'ticket', change: '+12 this week' },
    { label: 'Total Guests', value: events.length * 25, icon: 'users', change: '+8% from last event' },
    { label: 'Response Rate', value: '87%', icon: 'chart', change: '+3% this month' },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  const generateInvitationCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setEventForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      ...eventForm,
      invitationCode: generateInvitationCode(),
      createdAt: new Date().toISOString(),
      guestCount: 0,
      status: 'Active'
    };
    
    setEvents(prev => [...prev, newEvent]);
    setEventForm({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      maxGuests: '',
      image: null
    });
    setIsCreating(false);
  };

  const copyInvitationCode = (code) => {
    navigator.clipboard.writeText(code);
    // Flash animation on copy
    const element = document.getElementById(`code-${code}`);
    if (element) {
      element.classList.add('bg-[#D4AF37]/20');
      setTimeout(() => {
        element.classList.remove('bg-[#D4AF37]/20');
      }, 300);
    }
  };

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-zinc-900 border-r border-zinc-800 transition-all duration-300 z-30 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="p-6 flex items-center justify-between border-b border-zinc-800">
          <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center w-full'}`}>
            <div className="w-8 h-8 border-2 border-[#D4AF37] flex items-center justify-center">
              <div className="w-3 h-3 bg-[#D4AF37]"></div>
            </div>
            <span className={`text-xl font-bold text-[#D4AF37] transition-opacity duration-300 ${
              !sidebarOpen ? 'opacity-0 w-0 hidden' : 'opacity-100'
            }`}>EventMaster</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`text-gray-400 hover:text-white transition-colors duration-300 ${
              !sidebarOpen && 'hidden'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: 'home' },
              { id: 'events', label: 'My Events', icon: 'calendar' },
              { id: 'guests', label: 'Guest List', icon: 'users' },
              { id: 'analytics', label: 'Analytics', icon: 'chart' },
              { id: 'settings', label: 'Settings', icon: 'settings' },
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 w-full p-3 rounded transition-all duration-300 ${
                    activeTab === item.id 
                      ? 'bg-[#D4AF37]/10 text-[#D4AF37] border-l-2 border-[#D4AF37]' 
                      : 'hover:bg-zinc-800 text-gray-400 hover:text-white'
                  } ${!sidebarOpen && 'justify-center'}`}
                >
                  <span className="text-lg">
                    {item.icon === 'home' && <i className="fas fa-home"></i>}
                    {item.icon === 'calendar' && <i className="fas fa-calendar"></i>}
                    {item.icon === 'users' && <i className="fas fa-users"></i>}
                    {item.icon === 'chart' && <i className="fas fa-chart-line"></i>}
                    {item.icon === 'settings' && <i className="fas fa-cog"></i>}
                  </span>
                  <span className={`transition-opacity duration-300 ${
                    !sidebarOpen ? 'opacity-0 w-0 hidden' : 'opacity-100'
                  }`}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-800 ${
          !sidebarOpen && 'flex justify-center'
        }`}>
          <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
            <div className="w-8 h-8 bg-zinc-800 rounded-full overflow-hidden">
              <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className={`transition-opacity duration-300 ${
              !sidebarOpen ? 'opacity-0 w-0 hidden' : 'opacity-100'
            }`}>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${
        sidebarOpen ? 'ml-64' : 'ml-20'
      }`}>
        {/* Header */}
        <header className="bg-zinc-900 border-b border-zinc-800 p-6 sticky top-0 z-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {!sidebarOpen && (
                <button 
                  onClick={() => setSidebarOpen(true)} 
                  className="mr-4 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 text-white pl-10 pr-4 py-2 rounded focus:border-[#D4AF37] focus:outline-none transition-all duration-300 w-64"
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsCreating(true)}
                className="bg-[#D4AF37] text-black px-5 py-2 font-medium hover:bg-white transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-[#D4AF37]/25 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create New Event
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Page Title */}
          <div className={`mb-8 opacity-0 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
            <h1 className="text-3xl font-bold mb-2">Welcome to your Dashboard</h1>
            <p className="text-gray-400">Manage your events and monitor your performance.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`bg-zinc-900 border border-zinc-800 p-6 opacity-0 transition-all duration-500 hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/5 group`}
                style={{ transitionDelay: `${index * 100}ms`, opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">{stat.value}</h3>
                    <p className="text-xs text-[#D4AF37] mt-2 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] rounded">
                    {stat.icon === 'calendar' && <i className="fas fa-calendar text-xl"></i>}
                    {stat.icon === 'ticket' && <i className="fas fa-ticket-alt text-xl"></i>}
                    {stat.icon === 'users' && <i className="fas fa-users text-xl"></i>}
                    {stat.icon === 'chart' && <i className="fas fa-chart-line text-xl"></i>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Events Section */}
          <div className={`mb-8 opacity-0 transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Events</h2>
              <button className="text-[#D4AF37] hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                View All 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {events.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Event</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Date & Time</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Location</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Guests</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Invitation Code</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEvents.map((event) => (
                      <tr key={event.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors duration-200">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-zinc-800 rounded overflow-hidden">
                              {event.image ? (
                                <Image
                                  src={URL.createObjectURL(event.image)}
                                  alt={event.title}
                                  width={40}
                                  height={40}
                                  className="object-cover w-full h-full"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-white">{event.title}</p>
                              <p className="text-xs text-gray-400 truncate max-w-[200px]">{event.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-300">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {event.date} at {event.time}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-300">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {event.location}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-300">
                          {event.guestCount}/{event.maxGuests}
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/20 text-green-400 border border-green-900/50">
                            {event.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div 
                            id={`code-${event.invitationCode}`}
                            className="font-mono text-[#D4AF37] bg-[#D4AF37]/5 px-3 py-1 rounded transition-colors duration-300 border border-[#D4AF37]/20 text-sm"
                          >
                            {event.invitationCode}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button 
                              onClick={() => copyInvitationCode(event.invitationCode)}
                              className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37]/10 rounded"
                              title="Copy Invitation Code"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </button>
                            <button 
                              className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37]/10 rounded"
                              title="Edit Event"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button 
                              className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300 hover:bg-red-500/10 rounded"
                              title="Delete Event"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-zinc-900 border border-zinc-800 p-12 text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No events created yet</h3>
                <p className="text-gray-400 mb-6">Start organizing your first event now!</p>
                <button
                  onClick={() => setIsCreating(true)}
                  className="bg-[#D4AF37] text-black px-6 py-2 font-medium hover:bg-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create Your First Event
                </button>
              </div>
            )}
          </div>

          {/* Quick Links/Help Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
            {[
              {
                title: 'Invitation Link',
                description: 'Share this link with guests who have invitation codes',
                icon: 'link',
                link: '/invitation',
                linkText: 'Copy Link'
              },
              {
                title: 'Help Center',
                description: 'Get assistance with creating and managing events',
                icon: 'question',
                link: '#',
                linkText: 'Visit Help Center'
              },
              {
                title: 'Premium Features',
                description: 'Upgrade for advanced analytics and features',
                icon: 'star',
                link: '#',
                linkText: 'Upgrade Now'
              }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 p-6 hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] rounded">
                    {item.icon === 'link' && <i className="fas fa-link text-xl"></i>}
                    {item.icon === 'question' && <i className="fas fa-question text-xl"></i>}
                    {item.icon === 'star' && <i className="fas fa-star text-xl"></i>}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <Link 
                      href={item.link} 
                      className="text-[#D4AF37] hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.linkText}
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Create Event Modal */}
      {isCreating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-in-up shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#D4AF37]">Create New Event</h2>
                <button
                  onClick={() => setIsCreating(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:rotate-90 transform"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateEvent} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Event Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={eventForm.title}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300"
                    placeholder="Enter event title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={eventForm.location}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300"
                    placeholder="Enter event location"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={eventForm.date}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={eventForm.time}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Max Guests
                  </label>
                  <input
                    type="number"
                    name="maxGuests"
                    value={eventForm.maxGuests}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300"
                    placeholder="Maximum number of guests"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Event Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleInputChange}
                    accept="image/*"
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-[#D4AF37] file:text-black file:cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={eventForm.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Describe your event..."
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#D4AF37] text-black py-3 px-6 font-medium hover:bg-white transition-all duration-300 hover:scale-105 transform"
                >
                  Create Event & Generate Code
                </button>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="flex-1 border border-zinc-700 text-white py-3 px-6 font-medium hover:border-[#D4AF37] transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
