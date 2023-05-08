import { Social } from "@/typings";
import {client} from "../sanity/lib/client"
import {createClient, groq} from 'next-sanity'


const query = groq
`
*[_type == "social"]
`

export const fetchSocials = async()=>{
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSocial`);

    // const data = await res.json();
    // const socials: Social[] = data.socials;
    const socials: Social[] = await client.fetch(query)
    return socials;
}