import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface AdoptProcessProps {
  onClose: () => void;
}

const AdoptProcess: React.FC<AdoptProcessProps> = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    salaryRange: '',
    currentAddress: '',
    age: '',
    language: '',
    religion: '',
    race: '',
    familyBackground: '',
    aboutYourself: '',
    medicationsTaken: '',
    idType: '',
    frontIdImage: null as File | null,
    backIdImage: null as File | null,
  });
  
  const [frontPreview, setFrontPreview] = useState<string>('');
  const [backPreview, setBackPreview] = useState<string>('');
  const signatureRef = useRef<SignatureCanvas>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [side === 'front' ? 'frontIdImage' : 'backIdImage']: file
      });

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          if (side === 'front') {
            setFrontPreview(reader.result);
          } else {
            setBackPreview(reader.result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (signatureRef.current) {
      const signatureData = signatureRef.current.toDataURL();
      console.log('Form submitted:', { ...formData, signature: signatureData });
    }
    onClose();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200">Salary Range</label>
              <input
                type="text"
                name="salaryRange"
                value={formData.salaryRange}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Current Address</label>
              <input
                type="text"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
              >
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="filipino">Filipino</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Religion</label>
              <select
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
              >
                <option value="">Select Religion</option>
                <option value="catholic">Catholic</option>
                <option value="protestant">Protestant</option>
                <option value="islam">Islam</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Race</label>
              <input
                type="text"
                name="race"
                value={formData.race}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200">Family Background</label>
              <textarea
                name="familyBackground"
                value={formData.familyBackground}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">About Yourself</label>
              <textarea
                name="aboutYourself"
                value={formData.aboutYourself}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Medications Taken</label>
              <textarea
                name="medicationsTaken"
                value={formData.medicationsTaken}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
                rows={4}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">ID Type</label>
              <select
                name="idType"
                value={formData.idType}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2"
              >
                <option value="">Select ID Type</option>
                <option value="passport">Passport</option>
                <option value="drivers_license">Driver's License</option>
                <option value="national_id">National ID</option>
                <option value="sss">SSS ID</option>
                <option value="postal">Postal ID</option>
                <option value="voters">Voter's ID</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Front of ID</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                  {frontPreview ? (
                    <div className="relative">
                      <img
                        src={frontPreview}
                        alt="ID Front"
                        className="max-h-48 mx-auto object-contain rounded"
                      />
                      <button
                        onClick={() => {
                          setFrontPreview('');
                          setFormData(prev => ({ ...prev, frontIdImage: null }));
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'front')}
                        className="hidden"
                        accept="image/*"
                        id="front-id"
                      />
                      <label
                        htmlFor="front-id"
                        className="cursor-pointer text-blue-500 hover:text-blue-600"
                      >
                        Upload front of ID
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Back of ID</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                  {backPreview ? (
                    <div className="relative">
                      <img
                        src={backPreview}
                        alt="ID Back"
                        className="max-h-48 mx-auto object-contain rounded"
                      />
                      <button
                        onClick={() => {
                          setBackPreview('');
                          setFormData(prev => ({ ...prev, backIdImage: null }));
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'back')}
                        className="hidden"
                        accept="image/*"
                        id="back-id"
                      />
                      <label
                        htmlFor="back-id"
                        className="cursor-pointer text-blue-500 hover:text-blue-600"
                      >
                        Upload back of ID
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-200">Signature</label>
            <div className="border border-gray-600 rounded-md bg-white">
              <SignatureCanvas
                ref={signatureRef}
                canvasProps={{
                  className: 'w-full h-48'
                }}
              />
            </div>
            <button
              onClick={() => signatureRef.current?.clear()}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Clear Signature
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900/90 border border-gray-700 rounded-xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-medium text-neutral-200">Adoption Application</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-1/4 h-2 rounded-full mx-1 ${
                    step <= currentPage ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-400 text-center">
              Step {currentPage} of 4
            </div>
          </div>

          <form className="space-y-6">
            {renderPage()}

            <div className="flex justify-between pt-4">
              {currentPage > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white"
                >
                  Previous
                </button>
              )}
              {currentPage < 4 ? (
                <button
                  type="button"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdoptProcess;