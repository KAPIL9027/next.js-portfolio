import { Project } from "@/typings";


export const fetchProjects = async()=>{
    const res = await fetch("https://next-js-portfolio-i7se-jtfpkqjln-kapil9027.vercel.app/api/getProjects");

    const data = await res.json();
    const projects: Project[] = data.projects;

    return projects;
}