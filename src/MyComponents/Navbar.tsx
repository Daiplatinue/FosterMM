import React, { useState, useEffect, useRef } from 'react';
import TermsAndCondition from './TermsAndCondition';
import SignIn from './SignIn';
import SignUp from './Signup';
import WhoWeAre from './WhoWeAre';
import Why from './Why';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);  
  const [showSignUp, setShowSignUp] = useState(false);
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

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

  const handleLoginClick = () => {
    setIsDropdownOpen(false);
    setShowTerms(true);
  };

  const handleTermsAgree = () => {
    setShowTerms(false);
    setShowSignIn(true);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const handleSignInSuccess = (email: string) => {
    setUserEmail(email);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userEmail');
    setUserEmail(null);
    setIsDropdownOpen(false);
  };

  const handleWhoWeAreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhoWeAre(true);
  };

  const handleWhyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhy(true);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black'}`}>
        <div className="max-w-[980px] mx-auto">
          <div className="flex items-center justify-between h-[44px] px-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
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
                    onClick={
                      item === 'Who We Are'
                        ? handleWhoWeAreClick
                        : item === 'Why Planet of Enyawa'
                          ? handleWhyClick
                          : undefined
                    }
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </button>
            </div>
          </div>
        </div>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 w-full bg-black shadow-lg animate-dropdown"
          >
            <div className="max-w-[980px] mx-auto px-4 py-8">
              <div className="grid grid-cols-3 gap-12">
                <div>
                  <p className="text-sm text-neutral-200 font-semibold mb-4">
                    Welcome, {userEmail || 'User'}
                  </p>
                  <div className="space-y-3">
                    {!userEmail ? (
                      <button onClick={handleLoginClick} className="block text-sm text-neutral-200 hover:text-blue-600">
                        Login Account
                      </button>
                    ) : (
                      <>
                        <a href="/" className="block text-sm text-neutral-200 hover:text-blue-600">Change Password</a>
                        <button onClick={handleLogout} className="block text-sm text-neutral-200 hover:text-blue-600">
                          Logout
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-neutral-200 font-semibold mb-4">Quick Links</p>
                  <div className="space-y-3 text-neutral-200">
                    <a href="https://adoptuskids.org/" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-blue-600">Adopt Us Kids</a>
                    <a href="https://www.nacc.gov.ph/accd-foster-parent/" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-blue-600">ACCD - Foster Parent</a>
                    <a href="https://www.dswd.gov.ph/programs/adoption-and-foster-care/" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-blue-600">Department of Social Welfare and Development</a>
                    <a href="https://www.theprojectzero.org/" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-blue-600">Project Zero</a>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-neutral-200 font-semibold mb-4">Supporters</p>
                  <div className="space-y-3">
                    <a href="https://www.dmciholdings.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-200 hover:text-blue-600">DMCI Holdings</a>
                    <a href="https://www.allianceglobalinc.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-200 hover:text-blue-600">Alliance Global</a>
                    <a href="https://acenres.com/?gad_source=1" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-200 hover:text-blue-600">ACEN Corporation</a>
                    <a href="https://www.aboitizeconomicestates.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-200 hover:text-blue-600">Abiotiz Equity Ventures</a>
                    <a href="https://aboitizpower.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-200 hover:text-blue-600">Abiotiz Power</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {showTerms && (
        <TermsAndCondition
          onClose={() => setShowTerms(false)}
          onAgree={handleTermsAgree}
        />
      )}

      {showSignIn && (
        <SignIn
          onClose={() => setShowSignIn(false)}
          onSignUpClick={handleSignUpClick}
          onSignInSuccess={handleSignInSuccess}
        />
      )}

      {showSignUp && (
        <SignUp
          onClose={() => setShowSignUp(false)}
        />
      )}

      {showWhoWeAre && (
        <WhoWeAre
          onClose={() => setShowWhoWeAre(false)}
        />
      )}

      {showWhy && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowWhy(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Why />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;