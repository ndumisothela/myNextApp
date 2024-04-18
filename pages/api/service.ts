import{NextApiRequest ,NextApiResponse} from 'next';

import {services} from '../../src/app/data';

export default (req: NextApiRequest, res: NextApiResponse)=>{
    //default get request


    console.log(services)

    res.status(200).json({services})
}