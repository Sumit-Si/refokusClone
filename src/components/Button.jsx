import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Button({title = "Start a Project"}) {
  return (
    <button className='bg-white rounded-full py-2 text-sm w-36 px-4 text-black flex items-center justify-between'><span className='font-medium'>{title}</span><FaArrowRightLong/></button>
  )
}

export default Button