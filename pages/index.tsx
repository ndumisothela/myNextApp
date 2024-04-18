import React from 'react'
import {services} from '../src/app/data'
import { GetServerSidePropsContext } from 'next';
import ServiceCard from '../components/ServiceCard';



const index =()=> {

  console.log('CLIENT', services);
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
            
              <p className="p-2">
              Welcome to my corner of the digital universe! I'm a junior web developer with an unbridled passion for problem-solving and a deep-seated desire to craft innovative solutions that enhance our daily lives. Armed with a Bachelor of Commerce (B.Com.) degree in Business Strategy and Marketing from the University of Johannesburg, I bring a unique perspective to the world of web development.
                </p>
            
              <div className='p-4 mt-5 bg-zinc-700  flex-grow' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
                <h6 className='text-xl my-3 font-bold tracking-wider text-gray-200'>What I offer </h6>
                <div className='grid lg:grid-cols-2 gap-6'>
                  { services.map(service => (
                    <div className='lg:col-span-1 bg-gray-200 rounded-lg '>
                    <ServiceCard service = {service} />
                    </div>
                        ))}
                </div>
                </div>
   </div>
    
  )
}

export default index;

export const getServerSideProps = async (context : GetServerSidePropsContext)=>{

  //Caculation 

const res = await  fetch('http://localhost:3000/api/service')
const data = await res.json()

console.log('SERVER',services)
  return {
    props:{
      services: data.services,
    }
  }
} 
