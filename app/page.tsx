import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import BestITSolutions from '@/components/BestITSolutions'
import HowItWorks from '@/components/HowItWorks'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import OurTeam from '@/components/OurTeam'
import Blogs from '@/components/Blogs'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BestITSolutions />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <OurTeam />
      <Blogs />
    </main>
  )
}


