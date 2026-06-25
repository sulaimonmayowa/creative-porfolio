import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassPanel from '@/components/ui/GlassPanel';
import Icon from '@/components/ui/Icon';

const testimonials = [
  {
    quote:
      "Sulaimon's redesign of our website was on another level compared to our previous developer. The design is premium, the process was smooth, and the final result is exactly what we needed. Truly flawless work.",
    author: 'Kate M.D',
    role: 'IE-Hub Ltd',
    initials: 'KM',
  },
  {
    quote:
      'From the first discovery call to the final launch, the process was seamless. The final product feels incredibly premium and works flawlessly.',
    author: 'David O.',
    role: 'CEO, PrimeBooth Advisory Ltd',
    initials: 'DO',
  },
  {
    quote:
      'Working with Sulaimon on our automation workflow was a game-changer. Our lead response time dropped from hours to seconds, and the system runs itself. Highly recommend for any serious business owner.',
    author: 'Tunde A.',
    role: 'Founder, TechBridge Solutions',
    initials: 'TA',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
              Trusted by Business Leaders
            </h3>
            <div className="flex gap-4">
              <button
                className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <Icon name="chevron_left" />
              </button>
              <button
                className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <Icon name="chevron_right" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 100}>
              <GlassPanel className="p-12 rounded-3xl space-y-8">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} name="star" filled size="text-xl" />
                  ))}
                </div>
                <p className="text-headline-md italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold">{t.author}</div>
                    <div className="text-label-caps text-on-surface-variant">
                      {t.role}
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
