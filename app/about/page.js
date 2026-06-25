import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import About from '@/components/sections/About';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'About',
  description:
    'With over 5 years of experience, Sulaimon Mayowa bridges the gap between business and code — specializing in web development and AI automation.',
};

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
