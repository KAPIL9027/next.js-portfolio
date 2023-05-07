import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient, groq} from 'next-sanity'
import {client} from "../../sanity/lib/client"
import { PageInfo,Social } from '@/typings'
// import {PageInfo, Social} from "../../typings";

type Data = {
    pageInfo: PageInfo
  }
  

const query = groq
`
*[_type == "pageInfo"][0]
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const pageInfo: PageInfo = await client.fetch(query)
     res.status(200).json({pageInfo})
  }