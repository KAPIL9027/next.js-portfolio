import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient, groq} from 'next-sanity'
import {client} from "../../sanity/lib/client"
import { Skill,Social } from '@/typings'
// import {PageInfo, Social} from "../../typings";

type Data = {
    skills: Skill[]
  }
  

const query = groq
`
*[_type == "skill"]
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
     const skills: Skill[] = await client.fetch(query)
     res.status(200).json({skills})
  }