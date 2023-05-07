import { PageInfo } from "@/typings";


export const fetchPageInfo = async()=>{
    const res = await fetch("https://next-js-portfolio-i7se-jtfpkqjln-kapil9027.vercel.app/api/getPageInfo");

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}