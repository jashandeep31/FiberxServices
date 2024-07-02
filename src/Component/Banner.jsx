import React from 'react';

function Banner() {
  return (
    <div className="relative bg-blue-600 text-white">
      <img 
        src="https://www.dataentryindia.co.in/wp-content/themes/dataentryindia/images/home_banner.webp" 
        alt="Banner" 
        className="w-full object-cover h-64 md:h-96"
      />
    </div>
  );
}

export default Banner;
