import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import EducationSection from '@/components/EducationSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'


const page = () => {
  return (
    <div>
         <Navbar></Navbar>
            <main>
                <AboutSection></AboutSection>
                <SkillsSection></SkillsSection>
                <ProjectsSection></ProjectsSection>
                <EducationSection></EducationSection>
                <ContactSection></ContactSection>
            </main>
                 <Footer></Footer>
    </div>
  )
}

export default page