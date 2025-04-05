import React, { useState } from 'react';
import axios from 'axios';
import titleLogo from '@/assets/closy-h1.svg';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    identity: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('/api/login', formData);
      // Handle successful login here
      console.log('Login successful:', response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="flex justify-center">
          <img
            className="h-24 w-auto"
            src={titleLogo}
            alt="Logo"
          />
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Ingresar a tu cuenta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="identity" className="sr-only">
                Identity
              </label>
              <input
                id="identity"
                name="identity"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Usuario o Email"
                value={formData.identity}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
