'use client'

import QuantityButton from '@/app/week-4/_component/QuantityButton';
import React, { useState } from 'react'
import { addItem } from '../actions';

const ItemForm = ({setItems, items}) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');
  
  const handleSubmitItem = async (e) => {
    e.preventDefault();

    setName("");
    setQuantity(0);
    setCategory("produce");

    setItems(await addItem({name, quantity, category}, items));
  }

  const itemFormLabel = 'block font-semibold text-gray-700 text-lg mb-2';
  const itemFormInput =
    'w-full border border-gray-300 px-5 py-3 rounded-xl text-gray-800 text-[16px] focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder:text-gray-400';

  return (
    <form
      onSubmit={handleSubmitItem}
      className='max-w-2xl bg-white shadow-lg mt-14 mx-100 rounded-2xl p-8 space-y-8 border border-gray-100 fixed'
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
          <option value='produce'>Produce</option>
          <option value='dairy'>Dairy</option>
          <option value='bakery'>Bakery</option>
          <option value='meat'>Meat</option>
          <option value='frozen foods'>Frozen Foods</option>
          <option value='canned goods'>Canned Goods</option>
          <option value='dry goods'>Dry Goods</option>
          <option value='beverages'>Beverages</option>
          <option value='snacks'>Snacks</option>
          <option value='household'>Household</option>
          <option value='others'>Others</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className='flex justify-center'>
        <button
          type='submit'
          className={` text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-200
          ${quantity == 0 || name.trim() === ''? 'bg-gray-500':'bg-indigo-500 hover:bg-indigo-600 cursor-pointer'}`}
          disabled={quantity == 0 || name.trim() === ''? true : false}
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
