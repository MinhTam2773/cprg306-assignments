'use client'

import React, { useEffect, useState } from 'react'
import { setSortBy } from '../actions'

const Buttons = () => {
    const [sort, setSort] = useState('name');

    useEffect
    const handleChangeSort = async (name) => {
        setSort(await setSortBy(name));
    }
    return (
        < div className = "flex gap-3" >
                <button
                    onClick={() => handleChangeSort('name')}
                    className={`px-4 py-2 rounded-lg border transition cursor-pointer
          ${sort === 'name'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                    Sort by Name
                </button>

                <button
                    onClick={() => handleChangeSort('category')}
                    className={`px-4 py-2 rounded-lg border transition cursor-pointer
          ${sort === 'category'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                    Sort by Category
                </button>
    </div >
  )
}

export default Buttons