import Counter from '@/components/ui/Counter';
import ScrollReveal from '@/components/ui/ScrollReveal';

const stats = [
  { target: 10, suffix: '+', label: 'Projects Delivered' },
  { target: 99.9, suffix: '%', decimals: 1, label: 'System Uptime' },
  { target: 100, suffix: '%', label: 'Quality Focus' },
  { target: null, label: 'Remote Expert' },
];

const technologies = [
  'WordPress',
  'React',
  'Next.js',
  'Supabase',
  'Python',
  'OpenAI',
  'n8n',
  'SEO',
  'CRM',
];

export default function TrustBar() {
  return (
    <section className="py-24 border-y border-on-surface/5 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-display-lg-mobile font-bold text-on-surface">
                  {stat.target !== null ? (
                    <Counter
                      target={stat.target}
                      suffix={stat.suffix || ''}
                      decimals={stat.decimals || 0}
                    />
                  ) : (
                    'Global'
                  )}
                </div>
                <div className="text-label-caps text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech Stack */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {technologies.map((tech) => (
              <span key={tech} className="font-bold text-headline-md">
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
