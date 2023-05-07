import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'
import { fetchExperience } from '@/utils/fetchExperience'
const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
export default function Home({pageInfo, experiences,skills,projects,socials}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden overflow-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Kapil Portfolio</title>
      </Head>
     
      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
      
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>

      
    </div>
  )
};

export const getStaticProps: GetStaticProps = async (context) => {
  
   const pageInfo: PageInfo = await fetchPageInfo();
   const experiences: Experience[] = await fetchExperience();
   const skills: Skill[] = await fetchSkills();
   const projects: Project[] = await fetchProjects();
   const socials: Social[] = await fetchSocials();
  return {
    props: {
     pageInfo,
     experiences,
     skills,
     projects,
     socials
    }
  }
}
