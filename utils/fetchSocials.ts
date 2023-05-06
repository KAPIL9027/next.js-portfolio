import { Social } from "@/typings";


export const fetchSocials = async()=>{
    const res = await fetch("http://localhost:3000/api/getSocial");

    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}