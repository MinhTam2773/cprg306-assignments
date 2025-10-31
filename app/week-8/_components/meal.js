'use client'
import React, { useState } from 'react'
import { getIngredients } from '../actions';

const Meal = ({props}) => {
    const {strMeal: name} = props;
    const [ingredients, setIngredients] = useState([]);
    const [toggle, setToggle] = useState(false);

    const handleGetIngredients = async () => {
        if (!toggle) {
            setToggle(true);
            setIngredients(await getIngredients(props));
        } else setToggle(false)
    }
  return (
    <div 
        className='bg-white rounded-md text-black my-1.5 p-2 hover:cursor-pointer hover:bg-white/90 transition'
        onClick={handleGetIngredients}    
    >
        <h1>{name}</h1>

        {toggle && (<p className='text-gray-800 text-sm'>Ingredients needed:</p>)}
        {toggle && ingredients?.map( (str, index) =>
            <p 
                key={index}
                className='text-gray-800 text-sm mx-2'
            >
                {str}
            </p>
        )}
    </div>
  )
}

export default Meal