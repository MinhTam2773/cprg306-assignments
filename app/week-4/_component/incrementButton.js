'use client'
import React from 'react'

const IncrementButton = ({ increment, quantity }) => {
    return (
        <button
            className='bg-blue-700 hover:bg-blue-600 h-6 w-6 px-2 flex-1 select-none cursor-pointer flex justify-center 
            items-center rounded-sm transition-colors active:bg-blue-700 disabled:bg-gray-500 disabled:cursor-default'
            onClick={increment}
            disabled={quantity == 20}
        >
            +
        </button>
    )
}

export default IncrementButton