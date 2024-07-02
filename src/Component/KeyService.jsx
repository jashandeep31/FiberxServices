import React from 'react';

// Array of service objects
const services = [
  {
    title: 'Data Entry Services',
    description: 'The data entry services we offer are divided into seven distinct sub services. These seven sub-services are Business Data Entry, Image Data Entry, and more.',
  },
  {
    title: 'Data Processing Services',
    description: 'We have several years of experience in delivering high-quality data processing services to entities across various industries.',
  },
  {
    title: 'Data Conversion Services',
    description: 'Data conversion services entail converting data from one format to another to allow compatibility with a wide variety of applications.',
  },
  {
    title: 'Form Processing',
    description: 'We all know how laborious and expensive form processing can be. Forms are usually visages of bureaucratic systems that we have come to abhor.',
  },
  {
    title: 'Web Research',
    description: 'Web Research Services is one of the top internet marketers globally. fiberx Service offers premium web research services in a variety of subjects.',
  },
  {
    title: 'Shopify Products Data Entry',
    description: 'We specialize in Shopify data entry to help store owners have more...',
  },
  
];

function KeyService() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center text-white text-lg font-bold">
                {index + 1}
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyService;
