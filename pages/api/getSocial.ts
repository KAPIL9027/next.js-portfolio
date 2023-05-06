import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient, groq} from 'next-sanity'
import {client} from "../../sanity/lib/client"
import { Social } from '@/typings'
// import {PageInfo, Social} from "../../typings";

type Data = {
    socials: Social[]
  }
  

const query = groq
`
*[_type == "social"]
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const socials: Social[] = await client.fetch(query)
     res.status(200).json({socials})
  }