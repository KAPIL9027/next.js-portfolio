import { Experience } from "@/typings";


export const fetchExperience = async()=>{
    const res = await fetch("https://next-js-portfolio-i7se-jtfpkqjln-kapil9027.vercel.app/api/getExperience");


    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}