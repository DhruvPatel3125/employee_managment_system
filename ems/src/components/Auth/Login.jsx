import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='bg-transparent outline-none border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
            aria-label='Email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='bg-transparent outline-none border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400 mt-5'
            type='password'
            placeholder='Enter your password'
            aria-label='Password'
          />
          <button
            type='submit'
            className='mt-5 border-none outline-none bg-emerald-600 py-3 text-xl px-5 rounded-full text-white'
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
