'use client'
import React, { useState } from 'react'
import itemList from './items.json'
import ItemForm from './_components/itemForm'
import ItemList from './_components/itemList'

const Page = () => {
  const [items, setItems] = useState(itemList)

  return (
    <main className='p-5'>
      <ItemForm items={items} setItems={setItems}/>

      <ItemList items={items} setItems={setItems}/>
    </main>
  )
}

export default Page