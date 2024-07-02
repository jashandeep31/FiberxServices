import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faDollarSign, faLock, faGlobe, faBolt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const commitments = [
  {
    title: 'PRECISE',
    icon: faBullseye,
    description: 'Accurate and exact in performance, done with great care.',
  },
  {
    title: 'LOW COST',
    icon: faDollarSign,
    description: 'Affordable and economical, offering great value for money.',
  },
  {
    title: 'SECURE',
    icon: faLock,
    description: 'Protected and safe, providing peace of mind.',
  },
  {
    title: 'GLOBAL',
    icon: faGlobe,
    description: 'Worldwide coverage, serving clients globally.',
  },
  {
    title: 'FAST',
    icon: faBolt,
    description: 'Quick and prompt, ensuring timely delivery.',
  },
  {
    title: 'RELIABLE',
    icon: faCheckCircle,
    description: 'Dependable and trustworthy, maintaining high standards.',
  },
];

function HeroSection() {
  return (
    <>
    <div className="bg-blue-900 text-white p-20">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">Our Commitment</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="  p-6 flex flex-col md:flex-row items-center text-center md:text-left">
              <FontAwesomeIcon icon={commitment.icon} className="text-3xl md:text-4xl text-blue-500 mb-4 md:mr-4" />
              <div className="md:ml-4">
                <h2 className="text-lg md:text-xl font-bold">{commitment.title}</h2>
                <p className="text-sm text-gray-300">{commitment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
    
    </>
  );
}

export default HeroSection;
