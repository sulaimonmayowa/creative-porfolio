import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassPanel from '@/components/ui/GlassPanel';
import Icon from '@/components/ui/Icon';
import TypingText from '@/components/ui/TypingText';

const tools = [
  {
    icon: 'chat_bubble',
    title: 'AI FAQ Agent',
    desc: 'Trained on your knowledge base to answer client queries instantly.',
    preview: (
      <div className="w-full bg-white rounded-xl p-4 border border-on-surface/5 text-left text-sm space-y-3">
        <div className="bg-surface-container-highest/30 p-2 rounded-lg">
          What are your service hours?
        </div>
        <div className="bg-primary/5 p-2 rounded-lg ml-8 text-primary text-left">
          <TypingText text="I'm available 24/7 to support your business operations across all timezones." />
        </div>
      </div>
    ),
  },
  {
    icon: 'verified_user',
    title: 'Qualification Agent',
    desc: 'Scans inbound leads and only books calls with those who match your ICP.',
    featured: true,
    preview: (
      <div className="w-full flex justify-center gap-2">
        {[0, 100, 200].map((delay) => (
          <div
            key={delay}
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: 'account_tree',
    title: 'Node Automation',
    desc: 'Visualize complex logic chains moving data between 500+ apps.',
    preview: (
      <div className="w-full relative h-32 flex items-center justify-center">
        <div className="w-8 h-8 rounded bg-on-surface/10 absolute left-4" />
        <div className="w-20 h-[1px] bg-primary/40 absolute left-12" />
        <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
          AI
        </div>
        <div className="w-20 h-[1px] bg-primary/40 absolute right-12" />
        <div className="w-8 h-8 rounded bg-on-surface/10 absolute right-4" />
      </div>
    ),
  },
];

export default function AILab() {
  return (
    <section
      className="section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop overflow-hidden relative"
      id="lab"
    >
      <div className="max-w-container-max mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-label-caps text-primary mb-4">THE LAB</h2>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              Interactive AI Capabilities
            </h3>
            <p className="text-body-lg text-on-surface-variant">
              Preview how autonomous systems can live within your existing
              business infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.title} delay={i * 100}>
              <div
                className={`${
                  tool.featured
                    ? 'glass-panel p-8 rounded-2xl flex flex-col items-center text-center border-primary/20 shadow-[0_0_40px_rgba(124,58,237,0.1)]'
                    : 'glass-panel p-8 rounded-2xl flex flex-col items-center text-center'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${
                    tool.featured
                      ? 'bg-primary'
                      : 'bg-primary/10'
                  } flex items-center justify-center ${
                    tool.featured ? 'text-white' : 'text-primary'
                  } mb-6`}
                >
                  <Icon name={tool.icon} size="text-3xl" />
                </div>
                <h4 className="font-headline-md mb-2">{tool.title}</h4>
                <p className="text-body-md text-on-surface-variant mb-6">
                  {tool.desc}
                </p>
                {tool.preview}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
