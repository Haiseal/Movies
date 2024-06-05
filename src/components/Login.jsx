import React, { useState } from 'react';
import axios from 'axios'; // Import axios here

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    // Configure base URL for Axios
    axios.defaults.baseURL = 'http://localhost:5000'; // Assuming your backend server is running on port 5000

    try {
      const response = await axios.post('/login', { username, password });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error logging in:', error); // Handle error
    }
  };
  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
      <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
        <h1 className='text-3xl block text-center'>Login</h1>
        <hr className='mt-3' />

        <div className='mt-3'>
          <label htmlFor="username" className='block text-base mb-2'>Username</label>
          <input
            type='text'
            id='username'
            className='border w-full text-base px-2 py-1 focus:outline-none focus:border-gray-600'
            placeholder='Enter Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='mt-3'>
          <label htmlFor="password" className='block text-base mb-2'>Password</label>
          <input
            type='password'
            id='password'
            className='border w-full text-base px-2 py-1 focus:outline-none focus:border-gray-600'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='mt-5'>
          <button
            className='border-2 border-indigo-700 rounded-md w-full hover:bg-transparent hover:text-red-700 hover:bg-indigo-700 font-semibold'
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
