import React, { FunctionComponent } from 'react'
import { useState,useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'


const NavItem:FunctionComponent <{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}>=({activeItem,name,route,setActiveItem})=>{
    
    return (
        activeItem !== name ? (
                <Link href={route}>
                   <span className='hover:text-green-500' onClick={()=>setActiveItem(name)}>{name}</span>
                   </Link>
            ):null
        
    )
}



function Navbar() {

 const [activeItem, setActiveItem ] = useState<string>('');

 const {pathname} = useRouter();

 useEffect(()=>{
if(pathname === '/') setActiveItem('About');
if(pathname === '/projects') setActiveItem('Projects');
if(pathname === '/resume') setActiveItem('Resume')

 },[]);

  return (
    <div className='flex justify-between mx-5 p-4 border-b-2'>
<span className='font-bold text-xl border-b-4 border-green-500 text-green-500 md:text-2xl '>{activeItem}</span>
<div className='text-red-400 text-lg space-x-3 flex'>
   <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/"/>
   <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects"/>
   <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume"/>
</div>
    </div>

  )
}

export default Navbar;
