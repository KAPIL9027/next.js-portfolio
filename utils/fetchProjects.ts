import { Project } from "@/typings";
import {createClient, groq} from 'next-sanity'
import {client} from "../sanity/lib/client"

const query = groq
`
*[_type == "project"]{
  ...,
  technologies[]->
}
`

export const fetchProjects = async()=>{
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getProjects`);

    // const data = await res.json();
    const projects: Project[] = await client.fetch(query)

    return projects;
}