'use client'

import React, { useState } from 'react'
import IncrementButton from './incrementButton'
import DecrementButton from './decrementButton'

const QuantityButton = ({ quantity, setQuantity }) => {

    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    }
    const decrement = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    }
    return (
        <div className='bg-white flex py-2 w-full space-x-5 rounded-lg justify-between items-center'>
            <p className='font-semibold text-gray-700 text-lg'>Quantity: {quantity}</p>
            <div className='flex gap-1'>
                <IncrementButton increment={increment} quantity={quantity} />
                <DecrementButton decrement={decrement} quantity={quantity} />
            </div>
        </div>
    )
}

export default QuantityButton