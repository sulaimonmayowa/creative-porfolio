import GlassPanel from '@/components/ui/GlassPanel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-semibold text-label-caps">
              <Icon name="bolt" size="text-[14px]" />
              AVAILABLE FOR NEW PARTNERSHIPS
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg leading-[1.1] tracking-tighter text-balance">
              Build Smarter Businesses With{' '}
              <span className="text-primary">Web &amp; AI</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              I help startups and SMEs automate operations, increase efficiency,
              and scale revenue using custom web applications and AI-driven
              automation systems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-[#111111] text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all group btn-glow-purple"
              >
                Book a Discovery Call
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1nV_8K3Q4bM6fZDzkCYSReDSGXPhL69gm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 rounded-full font-semibold flex items-center justify-center btn-glass-purple"
              >
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right — Glass Panel Dashboard */}
        <ScrollReveal delay={400} className="lg:col-span-6 relative">
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <GlassPanel>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-tertiary" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <div className="text-label-caps text-on-surface-variant">
                AETHERIS COMMAND CENTER
              </div>
            </div>

            <div className="space-y-6">
              {/* AI Agent Activity — Animated Bar Chart */}
              <div className="h-32 bg-primary/5 rounded-xl border border-primary/10 p-4 flex flex-col justify-end">
                <div className="text-label-caps text-primary mb-1">
                  AI AGENT ACTIVITY
                </div>
                <div className="h-12 flex items-end gap-1">
                  {[40, 70, 50, 90, 60].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-gradient-to-t from-primary/60 to-primary/30 rounded-t-sm bar-animate"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-low rounded-xl border border-on-surface/5">
                  <div className="text-label-caps text-on-surface-variant">
                    LEADS GENERATED
                  </div>
                  <div className="text-headline-md font-bold">1,284</div>
                </div>
                <div className="p-4 bg-surface-container-low rounded-xl border border-on-surface/5">
                  <div className="text-label-caps text-on-surface-variant">
                    TIME SAVED
                  </div>
                  <div className="text-headline-md font-bold">
                    42h
                    <span className="text-body-md font-normal text-on-surface-variant">
                      /wk
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Workflow */}
              <div className="p-4 bg-[#111111] text-white rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="smart_toy" filled />
                  <span className="text-body-md">
                    Workflow: Lead Qualification Active
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              </div>
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </GlassPanel>
        </ScrollReveal>
      </div>
    </section>
  );
}
