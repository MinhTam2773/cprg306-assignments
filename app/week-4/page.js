'use client';

import React, { useState } from 'react';
import IncrementButton from './_component/incrementButton';
import DecrementButton from './_component/decrementButton';

const Page = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    count == 20 ? {} : count += 1;
    setCount(count);
  }
  const decrement = () => {
    count == 0 ? {} : count -= 1;
    setCount(count);
  }
  return (
    <main className='p-3'>
      <div className='w-40 bg-white flex px-2 py-1 rounded-lg justify-between'>
        <p className='text-black'>Count: {count}</p>
        <div className='flex gap-1'>
          <IncrementButton increment={increment} />
          <DecrementButton decrement={decrement} />
        </div>
      </div>
    </main>
  )
}

export default Page