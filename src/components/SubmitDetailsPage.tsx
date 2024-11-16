import React, { useState } from 'react';

const SubmitDetailsPage: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [projectDetails, setProjectDetails] = useState<string>('');
  const [amount, setAmount] = useState<number | ''>('');
  const [paymentMessage, setPaymentMessage] = useState<string>('');

  const handlePay = () => {
    if (companyName && projectDetails && amount) {
      setPaymentMessage('Paid successfully!');
    } else {
      setPaymentMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="w-full max-w-lg bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Submit Project Details
      </h1>
      <div className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Project Details
          </label>
          <textarea
            className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            placeholder="Enter project details"
          ></textarea>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
          />
        </div>
        <button
          onClick={handlePay}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Pay
        </button>
        {paymentMessage && (
          <p className="mt-4 text-lg font-semibold text-green-600">
            {paymentMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubmitDetailsPage;
