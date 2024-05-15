import React from 'react'
import Logo from "../download.png"
import { Link } from 'react-router-dom';
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
        <h3 className='text-blue-600 font-bold'><Link to="/">Movies</Link></h3>
        <h3 className='text-blue-600 font-bold'>Favourites</h3>
      </div>
      <div className='flex 
                    justify-items-center
                    w-1/3
                    ma
      space-x-8'>
        <input type='text' name='search' className='border-2 rounded-xl border-blue-400 w-full '></input>
      </div>
      <div className='flex justify-center '>
        <Link to="/login" className='border-2 border-r-0 p-2 rounded-l-xl border-blue-400'>Sign in</Link>
        <Link to="/signUp" className='border-2 p-2 rounded-r-xl border-blue-400'>Sign up</Link>
      </div>

    </div>
  )
}

export default NavBar
