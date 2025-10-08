'use client'

import QuantityButton from '@/app/week-4/_component/QuantityButton';
import React, { useState } from 'react'

const ItemForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('produce');
  
  const handleSubmitItem = (e) => {
    e.preventDefault();
    console.log({ name, quantity, category });
    alert("name: " + name + ", quantity: " + quantity + ", category: " + category);
  }

  const itemFormLabel = 'block font-semibold text-gray-700 text-lg mb-2';
  const itemFormInput =
    'w-full border border-gray-300 px-5 py-3 rounded-xl text-gray-800 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder:text-gray-400';

  return (
    <form
      onSubmit={handleSubmitItem}
      className='max-w-2xl bg-white shadow-lg rounded-2xl my-12 p-8 space-y-8 border border-gray-100 mx-12'
    >
      {/* Header */}
      <h2 className='text-2xl font-bold text-center text-indigo-600'>
        Add New Item
      </h2>

      {/* Name Input */}
      <div>
        <label className={itemFormLabel}>Item Name</label>
        <input
          type='text'
          value={name}
          placeholder='e.g. Apples, Milk, Bread...'
          onChange={(e) => setName(e.target.value)}
          className={itemFormInput}
        />
      </div>

      {/* Quantity */}
      <div>
        <div className='mt-2'>
          <QuantityButton
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>

      {/* Category Dropdown */}
      <div>
        <label className={itemFormLabel}>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={itemFormInput}
        >
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Bakery'>Bakery</option>
          <option value='Meat'>Meat</option>
          <option value='Frozen Foods'>Frozen Foods</option>
          <option value='Canned Goods'>Canned Goods</option>
          <option value='Dry Goods'>Dry Goods</option>
          <option value='Beverages'>Beverages</option>
          <option value='Snacks'>Snacks</option>
          <option value='Household'>Household</option>
          <option value='Others'>Others</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className='flex justify-center'>
        <button
          type='submit'
          className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-200'
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
