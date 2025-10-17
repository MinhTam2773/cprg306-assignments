import React, { useEffect, useState } from 'react';
import Item from './item';
import itemList from '../items.json';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const [items, setItems] = useState([...itemList]);

    useEffect(() => {
        if (sortBy === 'group') {
            const groupedObj = itemList.reduce((acc, item) => {
                (acc[item.category] ||= []).push(item);
                return acc;
            }, {});

            // Convert object to array of groups
            const groupedArray = Object.entries(groupedObj).map(([category, items]) => ({
                category,
                items,
            }));

            setItems(groupedArray); // update state
        } else {
            setItems(
                itemList.toSorted((a, b) =>
                    sortBy === 'name'
                        ? a.name.localeCompare(b.name)
                        : a.category.localeCompare(b.category)
                )
            );
        }
    }, [sortBy]);

    return (
        <div>

            {/* Button Container */}
            <div className="flex gap-3 mb-4 mt-2">
                <button
                    onClick={() => setSortBy('name')}
                    className={`px-4 py-2 rounded-lg border transition 
          ${sortBy === 'name'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                    Sort by Name
                </button>

                <button
                    onClick={() => setSortBy('category')}
                    className={`px-4 py-2 rounded-lg border transition 
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
