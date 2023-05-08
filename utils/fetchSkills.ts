import { Skill } from "@/typings";
import {createClient, groq} from 'next-sanity'
import {client} from "../sanity/lib/client"

const query = groq
`
*[_type == "skill"]
`

export const fetchSkills = async()=>{
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSkills`);

    // const data = await res.json();
    // const skills: Skill[] = data.skills;
    const skills: Skill[] = await client.fetch(query)
    return skills;
}