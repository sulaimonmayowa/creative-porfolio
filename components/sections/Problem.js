import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';

const problems = [
  {
    icon: 'leak_remove',
    title: 'Lost Leads',
    desc: 'Manual follow-ups mean potential customers slip through the cracks before you even notice.',
  },
  {
    icon: 'cached',
    title: 'Repetitive Tasks',
    desc: 'Your team spends 40% of their time on data entry instead of high-value strategic growth.',
  },
  {
    icon: 'account_tree',
    title: 'Fragmented Systems',
    desc: 'Data isolated in different spreadsheets creates a blind spot for decision makers.',
  },
  {
    icon: 'speed',
    title: 'Slow Operations',
    desc: 'Inefficient workflows delay delivery, frustrate clients, and kill your competitive edge.',
  },
];

export default function Problem() {
  return (
    <section className="section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-20">
            <h2 className="text-label-caps text-primary mb-4">
              THE REALITY OF GROWTH
            </h2>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
              Businesses Lose Money Through{' '}
              <span className="italic font-normal">Manual Processes</span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="bento-grid">
          {problems.map((problem, i) => (
            <ScrollReveal
              key={problem.title}
              delay={i * 100}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <div className="p-10 bg-white border border-on-surface/5 rounded-2xl hover:border-primary/20 transition-all group h-full proximity-glow">
                <Icon
                  name={problem.icon}
                  size="text-4xl"
                  className="mb-6 text-primary transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-primary/80 animate-icon-float"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
                <h4 className="font-headline-md text-headline-md mb-4">
                  {problem.title}
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  {problem.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
