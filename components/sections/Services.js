import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';

const services = [
  {
    icon: 'terminal',
    title: 'Web Development',
    desc: 'Premium WordPress and React applications tailored to your unique business logic and growth goals.',
    tags: ['WORDPRESS', 'REACT'],
  },
  {
    icon: 'robot_2',
    title: 'AI Automation',
    desc: 'Intelligent automation that handles customer support, sales qualification, and repetitive data tasks.',
    tags: ['OPENAI', 'WORKFLOWS'],
  },
  {
    icon: 'hub',
    title: 'Workflow Optimization',
    desc: 'Connecting your tech stack into a seamless machine that runs 24/7 without manual intervention.',
    tags: ['SEO', 'UX DESIGN'],
  },
  {
    icon: 'dashboard_customize',
    title: 'CRM Integration',
    desc: 'Centralized platforms for internal operations, lead management, and business intelligence.',
    tags: ['INTERNAL', 'PORTALS'],
  },
];

export default function Services() {
  return (
    <section
      className="section-padding bg-[#111111] text-white px-margin-mobile md:px-margin-desktop"
      id="services"
    >
      <div className="max-w-container-max mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-label-caps text-primary-fixed mb-4">
                OUR CAPABILITIES
              </h2>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white leading-tight">
                Modern Web &amp; Automation Systems
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className="group relative bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 hover:bg-white/10 transition-all cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <Icon
                    name={service.icon}
                    size="text-5xl"
                    className="text-primary-fixed mb-8"
                  />
                  <h4 className="font-headline-lg text-headline-lg mb-4">
                    {service.title}
                  </h4>
                  <p className="text-outline-variant text-body-lg mb-8 max-w-sm">
                    {service.desc}
                  </p>
                  <div className="flex gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-white/20 text-label-caps"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
