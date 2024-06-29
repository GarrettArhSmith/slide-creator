'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';
import ThemeSelector from './ThemeSelector';
import { Bars3Icon } from '@heroicons/react/24/outline';

type Props = {}

const routes = [
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
]

const Nav = (props: Props) => {
  const [top, setTop] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`sticky top-0 w-full mx-auto transition
      ${!top && 'shadow-lg backdrop-blur-md bg-gradient-to-br from-white/5 to-white/0'}`}
    >
      <nav className={
        `flex max-w-7xl flex-row items-center justify-between mx-auto h-24 px-10`
      }>
        <h1 className='font-bold text-xl font-mono'>LOGO</h1>
        <Bars3Icon className='size-8 md:hidden' onClick={() => setOpen(prev => !prev)} />
        <div className='hidden md:flex gap-10 items-center'>
          <ThemeSelector />
          {routes.map(route => (
            <Link
              key={uuidv4()}
              href={route.path}
              className='hover:text-violet-500 hover:transition'
            >{route.label}</Link>
          ))}
          <button className='hover:bg-violet-600 transition bg-violet-500 px-4 py-2 rounded-lg text-white'>
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Nav