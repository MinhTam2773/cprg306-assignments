import React from 'react'

const Item = ({item}) => {
    const {quantity, name, category} = item;
    return (
        <div className='mb-3 text-black'>
            <div className='flex gap-1'>
                <span className='bg-orange-500 rounded-sm px-1 text-white font-semibold'>{quantity}</span>
                <h1 className='font-semibold'>{name}</h1>
            </div>
            <span className='text-gray-400 font-extralight'>{category}</span>
            <hr/>
        </div>
    )
}

export default Item