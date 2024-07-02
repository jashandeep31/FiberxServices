import React from 'react';

function ContactUs() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or need assistance, feel free to reach out to us.
      </p>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-700">support@fiberxservices.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="text-gray-700">+1 (123) 456-7890</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Address</h2>
          <p className="text-gray-700">123 Fiberx Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
