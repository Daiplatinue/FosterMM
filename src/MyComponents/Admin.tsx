import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface PendingAccount {
  u_id: number;
  u_email: string;
  u_fosterTraining: string;
  u_fosterParent: string;
  u_homeEnvironment: string;
  u_groupAge: string;
  u_supportSystem: string;
  u_status: string;
}

interface Application {
  u_id: number;
  u_email: string;
  u_status: string;
  f_salaryRange?: string;
  f_currentAddress?: string;
  f_age?: string;
  f_language?: string;
  f_religion?: string;
  f_cultural?: string;
  f_familyBack?: string;
  f_aboutYourself?: string;
  f_reasonAdopt?: string;
  f_idType?: string;
  f_frontID?: string;
  f_backID?: string;
  f_signature?: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [pendingAccounts, setPendingAccounts] = useState<PendingAccount[]>([]);
  const [activeAccounts, setActiveAccounts] = useState<Application[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<PendingAccount | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  useEffect(() => {
    fetchPendingAccounts();
    fetchActiveAccounts();
  }, []);

  const fetchPendingAccounts = async () => {
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/auth/pending-accounts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPendingAccounts(response.data);
    } catch (error) {
      console.error('Error fetching pending accounts:', error);
    }
  };

  const fetchActiveAccounts = async () => {
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/auth/active-accounts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActiveAccounts(response.data);
    } catch (error) {
      console.error('Error fetching active accounts:', error);
    }
  };

  const handleUpdateStatus = async (userId: number, status: string) => {
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      await axios.put(`http://localhost:3000/api/auth/update-status/${userId}`, 
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchPendingAccounts();
      await fetchActiveAccounts();
      setSelectedAccount(null);
      setSelectedApplication(null);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f]">
      <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-[#2d2d2f] rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Total Pending</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{pendingAccounts.length}</p>
          </div>
          <div className="bg-white dark:bg-[#2d2d2f] rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Active Applications</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
              {activeAccounts.filter(acc => acc.u_status === 'active').length}
            </p>
          </div>
          <div className="bg-white dark:bg-[#2d2d2f] rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Total Applications</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{activeAccounts.length}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#2d2d2f] rounded-2xl shadow-sm mb-8">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Pending Accounts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#3d3d3f]">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#2d2d2f] divide-y divide-gray-200 dark:divide-gray-700">
                {pendingAccounts.map((account) => (
                  <tr key={account.u_id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{account.u_email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {account.u_status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedAccount(account)}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-[#2d2d2f] rounded-2xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Applications</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#3d3d3f]">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#2d2d2f] divide-y divide-gray-200 dark:divide-gray-700">
                {activeAccounts.map((account) => (
                  <tr key={account.u_id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{account.u_email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        account.u_status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : account.u_status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {account.u_status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedApplication(account)}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
                      >
                        View Application
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedAccount && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-[#2d2d2f] rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Account Details</h3>
                  <button
                    onClick={() => setSelectedAccount(null)}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-6 py-4">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedAccount.u_email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Foster Training</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedAccount.u_fosterTraining}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Foster Parent</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedAccount.u_fosterParent}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Home Environment</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedAccount.u_homeEnvironment}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Age Group Preference</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedAccount.u_groupAge}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Support System</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedAccount.u_supportSystem}</dd>
                  </div>
                </dl>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => handleUpdateStatus(selectedAccount.u_id, 'active')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedAccount.u_id, 'rejected')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedApplication && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-[#2d2d2f] rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Application Details</h3>
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.u_email}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">ID Type</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.f_idType}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Salary Range</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.f_salaryRange}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Address</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.f_currentAddress}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Age</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.f_age}</dd>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Language</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.f_language}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Religion</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.f_religion}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Cultural Background</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.f_cultural}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Family Background</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{selectedApplication.f_familyBack}</dd>
                    </div>
                  </div>
                </div>

                {/* ID Documents */}
                {(selectedApplication.f_frontID || selectedApplication.f_backID) && (
                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">ID Documents</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedApplication.f_frontID && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Front ID</dt>
                          <div className="w-full h-[400px] relative">
                            <img 
                              src={selectedApplication.f_frontID}
                              alt="Front ID"
                              className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-sm"
                            />
                          </div>
                        </div>
                      )}
                      {selectedApplication.f_backID && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Back ID</dt>
                          <div className="w-full h-[400px] relative">
                            <img 
                              src={selectedApplication.f_backID}
                              alt="Back ID"
                              className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-sm"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Signature */}
                {selectedApplication.f_signature && (
                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Signature</h4>
                    <div className="w-full max-w-xl h-[200px] relative bg-white rounded-lg shadow-sm">
                      <img 
                        src={selectedApplication.f_signature}
                        alt="Signature"
                        className="absolute inset-0 w-full h-full object-contain p-4"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-end space-x-3">
                  {selectedApplication.u_status !== 'approved' && (
                    <button
                      onClick={() => handleUpdateStatus(selectedApplication.u_id, 'approved')}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Approve Application
                    </button>
                  )}
                  {selectedApplication.u_status !== 'rejected' && (
                    <button
                      onClick={() => handleUpdateStatus(selectedApplication.u_id, 'rejected')}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                    >
                      Reject Application
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;