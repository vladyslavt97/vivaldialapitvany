import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie, getCookie, hasCookie } from 'cookies-next';
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const options: any = { req, res };


  //if there is cookie = do nothing
  if(hasCookie('id', options)){
    console.log('there is a cookie ? ', hasCookie('id', options));
    console.log('which one: ', getCookie('id', options));

  } else {
    //else set a cookie 
    setCookie('id', 'formidable', options);
    //and update the mongodb
  }
  
  res.status(200).json({ name: 'John Doe' })
}
