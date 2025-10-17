'use client';

import React from 'react'
import ItemList from './_component/item-list'

const page = () => {
  return (
    <main className='p-3'>
      <h1 className='font-mono text-3xl font-semibold'>Shopping List</h1>

      <ItemList/>
    </main>
  )
}

export default page