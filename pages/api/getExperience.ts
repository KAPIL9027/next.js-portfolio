import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient, groq} from 'next-sanity'
import {client} from "../../sanity/lib/client"
import { Experience,Social } from '@/typings'
// import {PageInfo, Social} from "../../typings";

type Data = {
    experiences: Experience[]
  }
  

const query = groq
`
*[_type == "experience"]{
  ...,
  technologies[]->
}
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const experiences: Experience[] = await client.fetch(query)
     res.status(200).json({experiences})
  }