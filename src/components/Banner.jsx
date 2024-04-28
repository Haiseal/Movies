import React from 'react'
import Image from "./Banner.png"
import "./banner.css"

function Banner() {
  return (
    <div>
      <img className='w-full' src={Image} alt="" />
      <div className='bg-gray-900 text-white text-xl banner-header op w-fit bg-opacity-70'>Ám Kịch
      </div>
    </div>
  )
}

export default Banner
