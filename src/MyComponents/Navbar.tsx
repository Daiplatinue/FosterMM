import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black'
    }`}>
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-center justify-between h-[44px] px-4">
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
          </a>

          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-9">
              {[
                'Home',
                'Who We Are',
                'Why Planet of Enyawa',
                'FAQs',
                'How to Help',
                'About'
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 text-xs font-normal transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <button
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </button>
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 w-full bg-white shadow-lg animate-dropdown"
        >
          <div className="max-w-[980px] mx-auto px-4 py-8">
            <div className="grid grid-cols-3 gap-12">
              <div>
                <p className="text-sm text-gray-500 mb-4">Welcome, User</p>
                <div className="space-y-3">
                  <a href="/" className="block text-sm text-gray-900 hover:text-blue-600">Login</a>
                  <a href="/" className="block text-sm text-gray-900 hover:text-blue-600">View Account</a>
                  <a href="/" className="block text-sm text-gray-900 hover:text-blue-600">Change Password</a>
                  <a href="/" className="block text-sm text-gray-900 hover:text-blue-600">Set Up Two Step Verification</a>
                  <a href="/" className="block text-sm text-gray-900 hover:text-blue-600">Logout</a>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-4">Quick Links</p>
                <div className="space-y-3">
                  <a href="https://adoptuskids.org/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">Adopt Us Kids</a>
                  <a href="https://www.nacc.gov.ph/accd-foster-parent/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">ACCD - Foster Parent</a>
                  <a href="https://www.dswd.gov.ph/programs/adoption-and-foster-care/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">Department of Social Welfare and Development</a>
                  <a href="https://www.theprojectzero.org/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">Project Zero</a>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-4">Supporters</p>
                <div className="space-y-3">
                  <a href="https://www.dmciholdings.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">DMCI Holdings</a>
                  <a href="https://www.allianceglobalinc.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">Alliance Global</a>
                  <a href="https://acenres.com/?gad_source=1" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">ACEN Corporation</a>
                  <a href="https://www.aboitizeconomicestates.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">Abiotiz Equity Ventures</a>
                  <a href="https://aboitizpower.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-900 hover:text-blue-600">Abiotiz Power</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;