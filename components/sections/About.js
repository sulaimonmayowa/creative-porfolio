import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';

const traits = [
  {
    icon: 'insights',
    title: 'Business First',
    desc: 'I don\'t just build features; I solve business problems. Every line of code must serve your bottom line.',
  },
  {
    icon: 'layers',
    title: 'Modern Stack',
    desc: 'Leveraging the latest in AI and web tech like Next.js and Supabase to build scalable, high-performance systems.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Automation Expert',
    desc: 'Deep expertise in WordPress and AI workflows to eliminate manual human bottlenecks.',
  },
  {
    icon: 'handshake',
    title: 'Long-term Ally',
    desc: 'I partner for the long haul, optimizing systems as your business evolves and scales.',
  },
];

export default function About() {
  return (
    <section className="section-padding px-margin-mobile md:px-margin-desktop" id="about">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Image */}
        <ScrollReveal className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-3xl bg-surface-container-highest overflow-hidden relative group cursor-pointer">
            <Image
              alt="Sulaimon Mayowa .A."
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
              src="/images/projects/profile.jpg"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-6 right-6">
              <div className="bg-primary text-white px-4 py-2 rounded-full text-label-caps font-bold shadow-lg">
                5+ Years Experience
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-xl">
              <div className="text-headline-md font-bold">
                Sulaimon Mayowa .A.
              </div>
              <div className="text-label-caps text-primary">
                Web Developer &amp; AI Automation Specialist
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="lg:col-span-7 space-y-12">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="text-label-caps text-primary">THE PARTNERSHIP</h2>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
                Bridging the Gap Between Business &amp; Code
              </h3>
              <p className="text-body-lg text-on-surface-variant italic border-l-4 border-primary pl-6">
                With over 5 years of specialized experience, I transform manual
                bottlenecks into automated growth engines.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {traits.map((trait, i) => (
              <ScrollReveal key={trait.title} delay={i * 100}>
                <div className="space-y-4">
                  <h4 className="font-headline-md flex items-center gap-3">
                    <Icon name={trait.icon} className="text-primary" />
                    {trait.title}
                  </h4>
                  <p className="text-on-surface-variant">{trait.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
