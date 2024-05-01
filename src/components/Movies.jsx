import React from 'react'
// import Image from "./Banner.png"

function Movies() {
  return (
    <div className="mt-12">
      <div className="mb-8 font-bold text-2xl text-center">
        {" "}
        Trending Movies
      </div>

      <div className="flex flex-wrap">
        <div
          className="bg-[url(https://image.lag.vn/upload/news/18/08/08/bg_01_nie60646_PIGU.jpg)]
                          h-[240px] w-[160px] m-4
                          rounded-xl hover:scale-110
                          duration-300 bg-center
                          bg-cover flex items-end">
          <div className='text-xl text-white 
                         bg-gray-900 p-4
                          bg-opacity-60 
                          text-center w-full font-bold'>
            Ám kịch
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Movies
