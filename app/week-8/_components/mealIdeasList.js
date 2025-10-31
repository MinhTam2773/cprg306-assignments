'use server'
import React from 'react'
import { getMeals, getName } from '../actions'
import Meal from './meal';

const MealIdeasList = async () => {
  const meals = await getMeals();
  const name = await getName();
  return (
    <div className=''>
      <h1>Meal Deals</h1>

      {!meals &&
        <p>Select an item to see meal ideas</p>
      }

      {meals?.length === 0 &&
        <p>No meals found for {name}</p>
      }

      {meals?.length > 0 &&
        <>
          <p>Here are some meals for {name}</p>
          {meals.map( (item) =>
            <Meal props={item} key={item.idMeal}></Meal>
          )}
        </>
      }
    </div>
  )
}

export default MealIdeasList