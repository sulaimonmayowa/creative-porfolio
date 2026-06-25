import ScrollReveal from '@/components/ui/ScrollReveal';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Deep dive into your current ops to find bottlenecks and automation ROI.' },
  { num: '02', title: 'Strategy', desc: 'Architecting the technical solution and mapping out the automation flow.' },
  { num: '03', title: 'Development', desc: 'Building the custom web engine and database architecture.' },
  { num: '04', title: 'Automation', desc: 'Integrating AI agents and connecting the node-based workflows.' },
  { num: '05', title: 'Launch', desc: 'Seamless deployment with comprehensive team training and handover.' },
  { num: '06', title: 'Optimization', desc: 'Continuous monitoring and fine-tuning AI systems for peak performance.' },
];

function StepRow({ step, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
      {isLeft ? (
        <>
          <div className="md:w-1/2 md:text-right md:pr-16 order-2 md:order-1">
            <h4 className="text-headline-md font-bold mb-2">{step.title}</h4>
            <p className="text-outline-variant">{step.desc}</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-[#111111] border-4 border-primary flex items-center justify-center font-bold text-xl order-1 md:order-2 shrink-0">
            {step.num}
          </div>
          <div className="md:w-1/2 md:pl-16 order-3" />
        </>
      ) : (
        <>
          <div className="md:w-1/2 order-3" />
          <div className="w-16 h-16 rounded-full bg-[#111111] border-4 border-primary flex items-center justify-center font-bold text-xl order-1 md:order-2 shrink-0">
            {step.num}
          </div>
          <div className="md:w-1/2 md:pl-16 order-2 md:order-3">
            <h4 className="text-headline-md font-bold mb-2">{step.title}</h4>
            <p className="text-outline-variant">{step.desc}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Process() {
  return (
    <section
      className="section-padding bg-[#111111] text-white px-margin-mobile md:px-margin-desktop overflow-hidden"
      id="process"
    >
      <div className="max-w-container-max mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-32">
            <h2 className="text-label-caps text-primary-fixed mb-4">
              THE METHODOLOGY
            </h2>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
              6 Steps To Autonomy
            </h3>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-0 left-8 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-white/10">
            <div className="w-full bg-primary h-0 animate-grow-line" />
          </div>

          <div className="space-y-12 md:space-y-24 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <StepRow step={step} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
