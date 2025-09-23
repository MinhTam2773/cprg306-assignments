'use client';

import React, { useState } from 'react';
import IncrementButton from './_component/incrementButton';
import DecrementButton from './_component/decrementButton';

const Page = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  }
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity -1);
  }
  return (
    <main className='p-3'>
      <div className='w-40 bg-white flex px-2 py-1 rounded-lg justify-between'>
        <p className='text-black'>Quantity: {quantity}</p>
        <div className='flex gap-1'>
          <IncrementButton increment={increment} quantity={quantity} />
          <DecrementButton decrement={decrement} quantity={quantity}/>
        </div>
      </div>
    </main>
  )
}

export default Page