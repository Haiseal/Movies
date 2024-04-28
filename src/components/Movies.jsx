import React from 'react'
import Image from "./Banner.png"

function Movies() {
  return (
    <div className='mt-12'>
        <div className='mb-8 font-bold text-2xl text-center'> Trending Movies</div>
        
        <div className='flex'>
          {/* fex-wrap  */}
          {/* hover:scale */}
           <img className='h-[30hv] w-[160px] m-4' src={Image} alt="" />
           <img className='h-[30hv] w-[150px] m-4' src={Image} alt="" /> 
           <img className='h-[30hv] w-[150px] m-4' src={Image} alt="" />
           <img className='h-[30hv] w-[150px] m-4' src={Image} alt="" />
        </div>
    </div>
  )
}

export default Movies
