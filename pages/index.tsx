import React from 'react'
import {services} from '../src/app/data'
import { GetServerSidePropsContext } from 'next';
import ServiceCard from '../components/serviceCard';



const index =()=> {

  console.log('CLIENT', services);
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
            
              <p className="m-4 border-solid border-2 border-gray-300  rounded-1xl p-2">
                  Junior web developer, with passion and love for problem
                  solving and bringing new solutions to our daily lives.Graduated
                  from University of Johannesburg with a Bachelor of
                  Commerce (B.com.) in Business Strategy and Marketing. I am
                  always excited to take on a new challenge.
                </p>
            
              <div className='p-4 mt-5 bg-zinc-700  flex-grow' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
                <h6 className='text-xl my-3 font-bold tracking-wider'>What I offer </h6>
                <div className='grid lg:grid-cols-2 gap-6'>
                  { services.map(service => (
                    <div className='lg:col-span-1 bg-grey-200 rounded-lg '>
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
