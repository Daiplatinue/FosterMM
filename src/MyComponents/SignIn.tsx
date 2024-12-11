import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface SignInProps {
  onClose: () => void;
  onSignUpClick: () => void;
  onSignInSuccess: (email: string) => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose, onSignUpClick, onSignInSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signin', {
        email,
        password
      });
      
      if (response.status === 201) {
        const { token, user } = response.data;
        if (rememberMe) {
          localStorage.setItem('token', token);
          localStorage.setItem('userEmail', user.email);
        } else {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('userEmail', user.email);
        }
        onSignInSuccess(user.email);
        
        // Check user role and redirect accordingly
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
        
        onClose();
      }
    } catch (error: any) {
      alert(error.response?.data?.message || 'Sign in failed. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      tabIndex={-1}
    >
      <div
        className="bg-white w-[400px] rounded-lg p-8 relative"
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

        <div className="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-2">Welcome back</h2>
        <p className="text-gray-500 text-center mb-6">Enter your credentials to login to your account.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="hi@yourcompany.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
          >
            Sign in
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onSignUpClick}
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;