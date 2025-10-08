'use client'

import React, { useState } from 'react';
import QuantityButton from './_component/QuantityButton';

const Page = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <main className='p-3'>
      <QuantityButton 
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </main>
  )
}

export default Page