import React, { useEffect } from 'react';

interface TermsAndConditionProps {
  onClose: () => void;
  onAgree: () => void;
}

const TermsAndCondition: React.FC<TermsAndConditionProps> = ({ onClose, onAgree }) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      tabIndex={-1}
    >
      <div 
        className="bg-white w-[500px] h-[600px] rounded-lg flex flex-col"
        role="dialog"
        aria-modal="true"
        tabIndex={0}
      >
        {/* Fixed Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Terms & Conditions</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Acceptance of Terms</h3>
            <p className="text-gray-600">
              By accessing and using this website, users agree to comply with and be bound by these Terms of Service. Users who do not agree with these terms should discontinue use of the website immediately.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">User Account Responsibilities</h3>
            <p className="text-gray-600">
              Users are responsible for maintaining the confidentiality of their account credentials. Any activities occurring under a user's account are the sole responsibility of the account holder. Users must notify the website administrators immediately of any unauthorized account access.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Content Usage and Restrictions</h3>
            <p className="text-gray-600">
              The website and its original content are protected by intellectual property laws. Users may not reproduce, distribute, modify, create derivative works, or commercially exploit any content without explicit written permission from the website owners.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Limitation of Liability</h3>
            <p className="text-gray-600">
              The website provides content "as is" without any warranties. The website owners shall not be liable for direct, indirect, incidental, consequential, or punitive damages arising from user interactions with the platform.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>
            <p className="text-gray-600">
              Our privacy policy explains how we collect, use, and protect your personal information. By using our services, you agree to our privacy practices.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Modifications to Terms</h3>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Users will be notified of any changes, and continued use of the service constitutes acceptance of modified terms.
            </p>
          </section>
        </div>

        {/* Fixed Footer */}
        <div className="p-4 border-t rounded-lg flex items-center justify-between bg-gray-50">
          <p className="text-sm text-gray-500">Read all terms before accepting.</p>
          <div className="space-x-3">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button 
              onClick={onAgree}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-700"
            >
              I agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;