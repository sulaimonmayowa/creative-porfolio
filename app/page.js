import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Problem from '@/components/sections/Problem';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import AILab from '@/components/sections/AILab';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <CaseStudies />
        <AILab />
        <About />
        <Process />
        <Testimonials />
        <Cta />


      </main>
      <Footer />
    </>
  );
}
