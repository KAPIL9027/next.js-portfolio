import { Experience } from "@/typings";
import {client} from "../sanity/lib/client"
import {createClient, groq} from 'next-sanity'

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

export const fetchExperience = async()=>{
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getExperience`);


    // const data = await res.json();
    const experiences: Experience[] = await client.fetch(query)
    // const experiences: Experience[] = data.experiences;

    return experiences;
}