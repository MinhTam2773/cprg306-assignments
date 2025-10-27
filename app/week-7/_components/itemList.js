'use client'

import React, { useEffect, useState } from 'react';
import Item from './item';
import { getSortBy, setSortBy, sort } from '../actions';

const ItemList = ({ items, setItems }) => {
    const [sortBy, setSortBy] = useState('name');
    useEffect(() => {
        const sortItems = async () => {
            setItems(await sort(items, sortBy));
        }
        sortItems();
    }, [sortBy]);

    return (
        <div>
            {/* Button Container */}
            <div className="flex gap-3">
                <button
                    onClick={() => setSortBy('name')}
                    className={`px-4 py-2 rounded-lg border transition cursor-pointer
          ${sortBy === 'name'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                    Sort by Name
                </button>

                <button
                    onClick={() => setSortBy('category')}
                    className={`px-4 py-2 rounded-lg border transition cursor-pointer
          ${sortBy === 'category'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                    Sort by Category
                </button>


            </div>

            {/* Items */}
            <ul className="mt-4 bg-gray-100 rounded-xl p-3">
                {sortBy === 'group'
                    ? items.map(group => (
                        <li key={group.category}>
                            <strong>{group.category}</strong>
                            <ul className="ml-4">
                                {group.items.map(item => (
                                    <li key={item.name}>
                                        <Item item={item} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))
                    : items.map(item => (
                        <li key={item.name}>
                            <Item item={item} />
                        </li>
                    ))}
            </ul>

        </div>
    );
};

export default ItemList;
