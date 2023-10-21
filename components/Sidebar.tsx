import React from 'react';
import pro from '../public/pro.jpg';
import {AiFillGithub,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import {MdAlternateEmail} from 'react-icons/md'
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi'
import Image from 'next/image';


function Sidebar() {
  return (
    <div>
      <Image className='w-32 h-32 rounded-full mx-auto ' src={pro} alt='propic'/>
      <h1 className='my-4 text-3x1 font-medium tracking-wider font-kaushan'><span>Ndumiso</span> Thela</h1>
      <p className='px-2  my-3 bg-gray-200 rounded-full'>Web Developer</p>
      <p className='px-2  my-3 bg-gray-200 rounded-full flex item-center justify-center'><GiTie className='w-6 h-6'/>Download Resume</p>
      <div className='flex justify-around w-9/12 md:w-full my-5 text-green-500 mx-auto'>
        <a href=''><AiFillLinkedin className='w-8 h-8 cursor-pointer'/></a>
        <a href=''><AiFillGithub className='w-8 h-8 cursor-pointer'/></a>
        <a href=''><AiFillYoutube className='w-8 h-8 cursor-pointer'/></a>
        </div>
      
      {/*Social media icons*/}


      {/*Address*/}
      <div className='py-4 my-5 bg-gray-200 'style={{marginLeft:'-1rem',marginRight:'-1rem'}} >
       <div className='space-x-2 flex items-center justify-center'> <GoLocation/><span > Germiston, South Africa </span></div>
        <div className='space-x-2 flex items-center  justify-center my-2' ><MdAlternateEmail/><span>ndumisothela480@gmail.com</span></div>
        <p>072 885 4482</p>
      </div>

      {/*EMAIL BUTTON */}
      <div>
      <button className='bg-gradient-to-r  from-green-400 to-blue-400 rounded-full py-2 px-2 my-2 w-8/12' onClick={()=>window.open('mailto:ndumisothela480@gmail.com')}>Email Me</button>
      <button className='bg-gradient-to-r  from-green-400 to-blue-400 rounded-full py-2 px-2 my-2 w-8/12'>Toggle Theme</button>
      </div>
    </div>
  )
} 


export default Sidebar;
