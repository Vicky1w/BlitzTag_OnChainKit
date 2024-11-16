import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate('/submit-details');
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div className="w-full max-w-md bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Login
      </h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
