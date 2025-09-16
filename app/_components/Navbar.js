import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='border-b-gray-600 bg-black border-b w-full top-0 fixed'>
      <Link href={'/'}>
        <h1 className="font-extrabold text-2xl my-2 mx-3">
        <span className="font-normal text-green-600">{"</> "}</span>
        CPRG 306: Web Development 2
      </h1>
      </Link>
    </header>
  )
}

export default Navbar