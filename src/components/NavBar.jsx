import React from 'react'
import Logo from "../download.png"
function NavBar() {
  return (
    <div className="border
      flex items-center
      justify-between
      pl-3 py-4 pr-3
       ">
      {/*-------------------------- cần sửa nhiều------------------------------------------- */}
      <div className='flex items-center
      space-x-8'>
        <img src={Logo} alt="" className='w-[50px]' />
        <h3 className='text-blue-600 font-bold'>Movies</h3>
        <h3 className='text-blue-600 font-bold'>Favourites</h3>
      </div>
      <div className='flex 
                    justify-items-center
                    w-1/3
                    ma
      space-x-8'>
        <input type='text' name='search' className='border w-full '></input>
      </div>
      <div className='flex items-center
      space-x-8 '>
        <button className='border'>Sign in</button>
        <button>Sign up</button>
      </div>

    </div>
  )
}

export default NavBar
