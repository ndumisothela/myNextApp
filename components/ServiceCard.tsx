import React from 'react';
import {IService} from '../src/app/type'
import {FunctionComponent} from 'react'

const ServiceCard:FunctionComponent<{service:IService}> = ({
    service:{Icon , about,title}
}) => {
  return (
    <div className='p-2 flex items-center space-x-4 border-2xl'>
    <Icon className='w-12 h-12 text-green ' />
        <div>
      <h4 className='font-bold'>{title}</h4>
      <p>{about}</p>
      </div>
    </div>
  )
}

export default ServiceCard;
