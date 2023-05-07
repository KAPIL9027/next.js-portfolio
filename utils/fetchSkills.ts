import { Skill } from "@/typings";


export const fetchSkills = async()=>{
    const res = await fetch("https://next-js-portfolio-i7se-jtfpkqjln-kapil9027.vercel.app/api/getSkills");

    const data = await res.json();
    const skills: Skill[] = data.skills;

    return skills;
}