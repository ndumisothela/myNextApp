import React from 'react';
import {IService} from '../src/app/type'
import {FunctionComponent} from 'react'

const ServiceCard:FunctionComponent<{service:IService}> = ({
    service:{Icon , about,title}
}) => {
  return (
    <div className='p-2  flex items-center shadow-slate-400 space-x-4 rounded-lg'>
    <Icon className='w-12 h-12 text-green-500 '/>
        <div>
      <h4 className='font-bold'>{title}</h4>
      <p >{about}</p>
      </div>
    </div>
  )
}

export default ServiceCard;
 