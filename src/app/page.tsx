import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import React from 'react'

const page = () => {
  return (
    <div>
         <Navbar></Navbar>
            <main>
                <AboutSection></AboutSection>
                <SkillsSection></SkillsSection>
                <ProjectsSection></ProjectsSection>
                <ContactSection></ContactSection>
            </main>
                 <Footer></Footer>
    </div>
  )
}

export default page