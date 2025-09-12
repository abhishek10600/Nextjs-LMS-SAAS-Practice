import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navitems from './Navitems'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
            <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
        </Link>
        <div className='flex items-center gap-8'>
          <Navitems/>
          <SignedOut>

              {/* This is for a new page for the sign in button */}
              <SignInButton>
                <button className='btn-signin'>Sign In</button>
              </SignInButton>
              
              {/* This is for the model version of the sign in button */}
              {/* <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                Sign In
              </button>
            </SignInButton> */}
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar