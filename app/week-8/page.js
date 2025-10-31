'use server'
import React from 'react'
import ItemForm from './_components/itemForm'
import ItemList from './_components/itemList'
import MealIdeas from './_components/mealIdeasList'

const Page = async () => {
  return (
    <main className='flex gap-150 justify-between p-5'>
      <ItemForm/>

      <ItemList/>

      <MealIdeas/>
    </main>
  )
}

export default Page