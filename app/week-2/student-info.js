import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StudentInfor = () => {
  return (
    <div className='mt-2'>
      <h1>Name: <span className='font-semibold'>Minh Tam Nguyen</span></h1>
      <Link href='https://github.com/MinhTam2773/cprg306-assignments'>
        <div className='border-gray-500 border-2 pl-10 rounded-xl hover:border-gray-400 py-1 mt-1 font-mono text-sm flex gap-2 items-center'>
          <p>Git Repo</p>
          <Image
            width={24}
            height={12}
            alt='Github Icon'
            src='https://imgs.search.brave.com/Sb-oj_OztgiQJky_m1K_8QlQVGQ-Bw7lxRqT5CyqyBc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdpdGh1Yi1pY29u/LXN2Zy1wbmctZG93/bmxvYWQtMTA5MTkw/MjUucG5nP2Y9d2Vi/cCZ3PTEyOA' />
        </div>
      </Link>

    </div>
  )
}

export default StudentInfor