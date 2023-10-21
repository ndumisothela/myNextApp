import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
function Navbar() {

 const [activeItem, setActiveItem ] = useState<string>('');

  return (
    <div>
<span className='font-bold text-green-500'>{activeItem}</span>
<div className='text-red-500 font-lg space-x-3 flex'>
    {
        activeItem !== 'About' && (
            <Link href='/'>
               <span onClick={()=>setActiveItem('About')}>About</span>
               </Link>
        )
    }
  {
        activeItem !== 'Projects' && (
            <Link href='/projects'>
               <span onClick={()=>setActiveItem('Projects')}>Projects</span>
               </Link>
        )
    }
    {
        activeItem !== 'Resume' && (
            <Link href='/resume'>
               <span onClick={()=>setActiveItem('Resume')}>Resume</span>
               </Link>
        )
    }
</div>
    </div>
  
  )
}

export default Navbar;
