import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
      <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
        <h1 className='text-3xl block text-center '>Login</h1>
        <hr className='mt-3'/>

        <div className='mt-3'>
            <label for="uesrname" className='block text-base mb-2'>User Name</label>
            <input type='text' id='uesrName' className='border w-full text-base px-2 py-1 focus:outline-none focus:border-gray-600' placeholder='Enter User Name'></input>
        </div>

        <div className='mt-3'>
            <label for="passwords" className='block text-base mb-2'>Passwords</label>
            <input type='text' id='passwrods' className='border w-full text-base px-2 py-1 focus:outline-none focus:border-gray-600' placeholder='Enter Passwords'></input>
        </div>

        <div className='mt-3 flex justify-between items-center'>
            <div>
            <input type='checkbox'></input>
            <label htmlFor=""> Remmeber Me</label>
            </div>
            <div>
                <a href="">Forgot Password</a>
            </div>
        </div>

        <div className='mt-5'>
            <button className='border-2 border-indigo-700 rounded-md  w-full hover:bg-transparent hover:text-red-700 hover:bg-indigo-700 font-semibold '>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
