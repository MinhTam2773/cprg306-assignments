'use server'

import React from 'react';
import Item from './item';
import Buttons from './buttons';
import { getList } from '../actions';

const ItemList = async () => {
      const items = await getList();
    return (
        <div>
            <Buttons />
            {/* Items */}
            <ul className="mt-4 bg-gray-100 rounded-xl p-3">
                {items.map(item => (
                        <li key={item.name}>
                            <Item item={item} />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ItemList;
