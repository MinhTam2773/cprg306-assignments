"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const path = usePathname();
    const currentLocation = path.split('/')[1]

    let tabs = [];
    for (let i = 1; i <= 10; i++) {
        tabs.push('week ' + i.toString())
    }

    return (
        <aside className='w-64 border-r-gray-800 border-r min-h-screen fixed left-0 top-12'>
            <h2 className="text-gray-400 text-xl mx-3 my-2">Assignments</h2>
            <ul>
                {tabs?.length && tabs.map((tab) =>
                    <li key={tab}>
                        <Link href={`/${tab.replace(' ','-')}`}>
                            <div className={`${tab.replace(' ','-') === currentLocation ? 'text-green-600 underline bg-green-900' : 'hover:text-green-600 hover: hover:bg-green-800'} px-3 py-2 mx-2 rounded-xl`}>
                                {tab}
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
        </aside>
    )
}

export default Sidebar