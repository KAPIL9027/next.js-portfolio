import { Social } from "@/typings";


export const fetchSocials = async()=>{
    const res = await fetch("https://next-js-portfolio-i7se-jtfpkqjln-kapil9027.vercel.app/api/api/getSocial");

    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}