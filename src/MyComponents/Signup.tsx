import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface SignUpProps {
  onClose: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fosterTraining: '',
    fosterParent: '',
    homeEnvironment: '',
    groupAge: '',
    supportSystem: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', formData);
      if (response.status === 201) {
        alert('Registration successful!');
        onClose();
      }
    } catch (error: any) {
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      tabIndex={-1}
    >
      <div 
        className="bg-white w-[500px] rounded-lg p-8 relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        tabIndex={0}
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-semibold text-center mb-6 tracking-tight">Fill Up Form</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Have you taken foster care training classes?
            </label>
            <input
              type="text"
              name="fosterTraining"
              value={formData.fosterTraining}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Yes/No/Currently in progress"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Are you or have you ever been a foster parent?
            </label>
            <input
              type="text"
              name="fosterParent"
              value={formData.fosterParent}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Yes/No"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How would you describe your home environment?
            </label>
            <input
              type="text"
              name="homeEnvironment"
              value={formData.homeEnvironment}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Urban/Suburban/Rural"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What age group of children are you interested in fostering?
            </label>
            <input
              type="text"
              name="groupAge"
              value={formData.groupAge}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter preferred age group"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe your support system
            </label>
            <input
              type="text"
              name="supportSystem"
              value={formData.supportSystem}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Describe your support system"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;