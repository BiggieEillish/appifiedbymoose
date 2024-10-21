import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setMessage('Thank you for subscribing!');
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div className="subscribe-area py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full sm:w-2/3 lg:w-1/2">
            <div className="subscribe-form text-center">
              <h3 className="text-2xl font-bold text-blue-600">Subscribe for More Features</h3>
              <div className="my-5"></div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center">
                <input
                  type="email"
                  className="w-full sm:w-auto flex-grow px-4 py-2 mb-4 sm:mb-0 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="ml-0 sm:ml-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 flex items-center"
                >
                  <span className="lnr lnr-location mr-2"></span> Subscribe
                </button>
              </form>
              {message && <p className="mt-4 text-green-600">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
