'use client'

import React from 'react'
import { useUserAuth } from './_utils/auth-context'
import Link from 'next/link';

const AuthPage = () => {
  const { user, githubSignIn, firebaseSignOut } = useUserAuth();
  return (
    <div className='p-5'>
      <h1 className='font-semibold text-2xl'>Shopping List App</h1>

      {user &&
        <div className='flex flex-col gap-5'>
          <h2>Welcome {user.displayName}</h2>

          <button
            className='border-1 rounded-md py-2 px-5 hover:bg-black/70 cursor-pointer transition-colors '>
            <Link
              href={'/week-8'} >
              Continue Shopping
            </Link>
          </button>

          <button
            onClick={async () => firebaseSignOut()}
            className='border-1 rounded-md py-2 px-5 hover:bg-black/70 cursor-pointer transition-colors '>
            Sign out
          </button>
        </div>
      }

      {!user &&
        <button
          onClick={async () => githubSignIn()}
          className='border-1 rounded-md p-2 px-5 mt-10 hover:bg-black/70 cursor-pointer transition-colors '>
          Login with GitHub
        </button>
      }

    </div>
  )
}

export default AuthPage