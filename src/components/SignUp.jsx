import React from 'react'

function SignUp() {
  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
      <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
        <h1 className='text-3xl block text-center '>Sign Up</h1>
        <hr className='mt-3'/>

        <div className='mt-3'>
            <label for="uesrname" className='block text-base mb-2'>User Name</label>
            <input type='text' id='uesrName' className='border w-full text-base px-2 py-1 focus:outline-none focus:border-gray-600' placeholder='Enter User Name'></input>
        </div>

        <div className='mt-3'>
            <label for="passwords" className='block text-base mb-2'>Passwords</label>
            <input type='text' id='passwrods' className='border w-full text-base px-2 py-1 focus:outline-none focus:border-gray-600' placeholder='Enter Passwords'></input>
        </div>

        <div className='mt-3'>
            <label for="email" className='block text-base mb-2'>Email</label>
            <input type='text' id='email' className='border w-full text-base px-2 py-1 focus:outline-none focus:border-gray-600' placeholder='Enter Email'></input>
        </div>

        <div className='mt-3'>
            <label for="phone" className='block text-base mb-2'>Phone</label>
            <input type='text' id='phone' className='border w-full text-base px-2 py-1 focus:outline-none focus:border-gray-600' placeholder='Enter Phone number'></input>
        </div>

        <div className='mt-3 flex justify-between items-center'>
            <div>
            <input type='checkbox'></input>
            <label htmlFor=""> I accept the privacy policy</label>
            </div>
            
        </div>

        <div className='mt-5'>
            <button className='border-2 border-indigo-700 rounded-md  w-full hover:bg-transparent hover:text-red-700 hover:bg-indigo-700 font-semibold '>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
