'use client'
import React from 'react'

const DecrementButton = ({decrement}) => {
  return (
    <div 
        className='bg-blue-700 hover:bg-blue-600 h-6 w-6 px-2 flex-1 select-none cursor-pointer flex justify-center items-center rounded-sm'
        onClick={decrement}
    >
        <button className='cursor-pointer'>
            -
        </button>
    </div>
  )
}

export default DecrementButton