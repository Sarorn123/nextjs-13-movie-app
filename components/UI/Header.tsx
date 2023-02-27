import Link from 'next/link'
import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <header className='backdrop:blur-sm fixed w-full top-0 z-50'>
        <div className='flex items-center justify-between h-16 container mx-auto'>
            <Link href="/" >
                <h1 className='text-xl text-blue-600 font-bold'>MooVee</h1>
            </Link>
            <Search />
        </div>
    </header>
  )
}

export default Header