import {RiComputerLine} from 'react-icons/ri';
import {FaServer} from 'react-icons/fa'
import {IService} from './type';
import { AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';


export const services: IService[] =[
    {  Icon: RiComputerLine,
        title: 'Frontend developer',
        about:'I cant build a beautiful and scalable SPA using HTML, CSS and React.js',
  

},
{
    Icon:FaServer,
    title:'Backend Developer ',
about:'handle database, server , api using Express.js, MongoDB & other popular frameworks',
},
{
    Icon:AiOutlineApi,
    title:'API Developer ',
about:'I can develop robust REST api using mongoDB, Authentication with authentication jwt and firebase',
},
{
    Icon:MdDeveloperMode,
    title:'Problem solver  ',
about:'I believe in continuous learning, I will stop at nothing until I find a solution',
}

]