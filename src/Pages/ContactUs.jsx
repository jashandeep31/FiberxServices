import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <div className="container mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
        Contact Us
      </h1>
      <p className="mb-6 text-center text-gray-600">
        If you have any questions or need assistance, feel free to reach out to
        us.
      </p>
      <div className="space-y-6">
        <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-2xl text-blue-500 mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-600">Email</h2>
            <p className="text-gray-700">customer.care@fiberxott.com</p>
          </div>
        </div>
        <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-2xl text-blue-500 mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-600">Phone</h2>
            <p className="text-gray-700">+91 8619875291</p>
          </div>
        </div>
        <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-2xl text-blue-500 mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-600">Address</h2>
            <p className="text-gray-700">123 Fiberx Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
