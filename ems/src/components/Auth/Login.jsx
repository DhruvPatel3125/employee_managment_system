import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600  p-20'>
        <form className='flex flex-col items-center justify-center'>
            <input className='text-black bg-transparent outline-none border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-white' type="email" placeholder='Enter your email' />
            <input className='text-black bg-transparent outline-none border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-white mt-4' type="password" placeholder='Enter your password' />
            <button className='mt-5 text-white border-none outline-none bg-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-white mt-4'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
