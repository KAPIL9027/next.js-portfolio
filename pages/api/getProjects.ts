import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient, groq} from 'next-sanity'
import {client} from "../../sanity/lib/client"
import { Project,Social } from '@/typings'
// import {PageInfo, Social} from "../../typings";

type Data = {
    projects: Project[]
  }
  

const query = groq
`
*[_type == "project"]{
  ...,
  technologies[]->
}
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const projects: Project[] = await client.fetch(query)
     res.status(200).json({projects})
  }