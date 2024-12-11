import React, { useEffect } from 'react';

interface WhoWeAreProps {
  onClose: () => void;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const teamMembers = [
    {
      name: 'Vhasj Galapin',
      role: 'Project Manager',
      image: 'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square.jpg'
    },
    {
      name: 'Vince Mañacap',
      role: 'Back-end Developer',
      image: 'https://www.cnet.com/a/img/resize/7589227193923c006f9a7fd904b77bc898e105ff/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=768'
    },
    {
      name: 'Jerome Lasdoce',
      role: 'Back-end Developer',
      image: 'https://www.businesstoday.com.my/wp-content/uploads/2022/02/monkey-art-NFT.png'
    },
    {
      name: 'Wayne Anave',
      role: 'Front-end Developer',
      image: 'https://legiit-service.s3.amazonaws.com/cd221bcabce7b6c848d2905e3d8f915c/966fae648396abdf17ac7bd161237ca6.jpg'
    },
    {
      name: 'Cornesio Alfred',
      role: 'Front-end Developer',
      image: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27'
    },
    {
      name: 'Leevan Amizola',
      role: 'Analyst',
      image: 'https://static.ffx.io/images/$zoom_0.473%2C$multiply_1.545%2C$ratio_1%2C$width_378%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/d22d363b42bd80403a8a0847e21360116d15edfa'
    }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      tabIndex={-1}
    >
      <div 
        className="bg-white w-[900px] rounded-lg p-8 relative max-h-[90vh] overflow-y-auto"
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

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">We've Got an Amazing Team Dedicated</h2>
          <h3 className="text-2xl font-semibold mb-4 tracking-tight">To Supporting You and Your Journey</h3>
          <p className="text-gray-600 leading-relaxed">Get help 24/7 with our dedicated team of adoption and foster care experts.</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Join Our Team
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;