import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Cta() {
  return (
    <section className="section-padding bg-primary text-on-primary-container px-margin-mobile md:px-margin-desktop text-center overflow-hidden relative">
      <div className="max-w-container-max mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-display-lg-mobile md:text-display-lg font-bold leading-tight mb-8">
            Ready To Automate, Scale, And Grow?
          </h2>
          <p className="text-headline-md mb-12 opacity-90 max-w-2xl mx-auto font-light">
            Let&apos;s build systems that work while you sleep. Transform your
            business today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-[#111111] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl btn-glow-purple"
            >
              Schedule Your Free Audit
            </a>
            <a
              href="https://drive.google.com/file/d/1nV_8K3Q4bM6fZDzkCYSReDSGXPhL69gm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 rounded-full font-bold text-lg btn-glass-white text-white border-white/30 flex items-center justify-center"
            >
              Download CV
            </a>
          </div>
        </ScrollReveal>
      </div>
      <div className="absolute inset-0 opacity-20 pointer-events-none" />
    </section>
  );
}
