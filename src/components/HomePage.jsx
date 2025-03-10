import React, { useState } from 'react';

function HomePage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (email === 'abdi@hospital.com' && password === 'password123') ||
      (email === 'amos@hospital.com' && password === 'password123') ||
      (email === 'mark@hospital.com' && password === 'password123') ||
      (email === 'cliff@hospital.com' && password === 'password123')
    ) {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Royal Imperial Hospital</h1>
      <p className="text-sm text-gray-600 mb-6">P.O BOX 456-70100 Eastleigh, Nairobi</p>
      <h2 className="text-xl font-semibold mb-4">Welcome to Hospital Management System</h2>
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Copyright Section */}
      <footer className="mt-10 text-center">
        <p className="text-gray-500">
          Made with ❤️ by{' '}
          <a
            href="https://www.instagram.com/abdikhafar_issack/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Abdikhafar Issack
          </a>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
