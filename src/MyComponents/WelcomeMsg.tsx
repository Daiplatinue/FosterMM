import { useState } from 'react';

interface WelcomeMsgProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeMsg({ isOpen, onClose }: WelcomeMsgProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Welcome to Origin UI",
      description: "Discover a powerful collection of components designed to enhance your development workflow."
    },
    {
      title: "Key Benefits",
      description: "Streamlined development process, beautiful UI components, and exceptional developer experience."
    },
    {
      title: "Ready to Start?",
      description: "Begin your journey with Origin UI and create amazing applications."
    }
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-400 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-4">
            {pages[currentPage].title}
          </h2>
          
          <p className="text-gray-600 text-center mb-8">
            {pages[currentPage].description}
          </p>

          <div className="flex justify-center gap-2 mb-8">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentPage ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              {currentPage === pages.length - 1 ? 'Start' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}