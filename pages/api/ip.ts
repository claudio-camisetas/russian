import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const responseData = await fetch(`https://api.ipify.org?format=json`)
        const responseJson = await responseData.json()
        res.status(200).json(responseJson)
    }
}
