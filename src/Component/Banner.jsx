import React from 'react';

function Banner() {
  return (
    <div className="relative bg-blue-600 text-white">
      <img 
        src="https://www.dataentryindia.co.in/wp-content/themes/dataentryindia/images/home_banner.webp" 
        alt="Banner" 
        className="w-full object-cover"
      />
    </div>
  );
}

export default Banner;
