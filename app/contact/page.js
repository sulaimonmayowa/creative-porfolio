import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Contact',
  description:
    'Ready to automate, scale, and grow? Book a discovery call with Sulaimon Mayowa.',
};

export default function ContactPage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        <section className="section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-8">
                <h2 className="text-label-caps text-primary">GET IN TOUCH</h2>
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight">
                  Let&apos;s Build Something{' '}
                  <span className="text-primary">Extraordinary</span>
                </h3>
                <p className="text-body-lg text-on-surface-variant">
                  Ready to transform your business with custom web applications
                  and AI automation? Book a free discovery call and let&apos;s
                  map out your growth strategy.
                </p>
                <div className="space-y-6 pt-4">
                  {[
                    { icon: 'calendar_month', label: 'Free Discovery Call', val: '30-min strategy session' },
                    { icon: 'schedule', label: 'Response Time', val: 'Within 24 hours' },
                    { icon: 'language', label: 'Location', val: 'Remote — Global Availability' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Icon name={item.icon} />
                      </div>
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-body-md text-on-surface-variant">
                          {item.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
                  target="_blank"
                  icon="arrow_forward"
                  size="lg"
                >
                  Book a Discovery Call
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-panel p-12 rounded-3xl">
                <div className="space-y-6">
                  <div className="text-headline-md font-bold mb-6">
                    Send a Message
                  </div>
                  <div>
                    <label className="text-label-caps text-on-surface-variant block mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-on-surface/20 bg-transparent py-3 text-body-md focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-label-caps text-on-surface-variant block mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      className="w-full border-b border-on-surface/20 bg-transparent py-3 text-body-md focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-label-caps text-on-surface-variant block mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border-b border-on-surface/20 bg-transparent py-3 text-body-md focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full" variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
