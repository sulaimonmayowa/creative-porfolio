import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import Counter from '@/components/ui/Counter';

const caseStudies = [
  {
    title: 'Smarts Magazine',
    slug: 'smarts-magazine',
    category: 'DIGITAL PUBLISHING PLATFORM',
    img: '/images/projects/smarts-home.png',
    problem: 'Needed a modern editorial platform for news and video content for African audiences.',
    solution: 'Custom WordPress platform with optimized editorial workflows and video integration.',
    result: { value: 'Scalable', label: 'Foundation Built' },
    tags: ['WORDPRESS', 'SEO', 'UI/UX'],
    reverse: false,
  },
  {
    title: 'PrimeBooth Edu Advisory',
    slug: 'primebooth',
    category: 'STUDY-ABROAD CONSULTANCY',
    img: '/images/projects/primebooth.png',
    problem: 'Needed to strengthen credibility and streamline student recruitment and payments.',
    solution: 'Premium WordPress site with university search features and secure payment integration.',
    result: { value: '+80%', label: 'Improved Leads', isCounter: true, endValue: 80, prefix: '+', suffix: '%' },
    tags: ['WORDPRESS', 'PAYMENTS', 'SEO'],
    reverse: true,
  },
  {
    title: 'IE-Hub Ltd',
    slug: 'ie-hub',
    category: 'INTERNATIONAL EDUCATION ECOSYSTEM',
    img: '/images/projects/iehconsult.png',
    problem: 'Needed a robust digital ecosystem including CRM, search portal, and corporate site.',
    solution: 'Multi-platform solution with seamless CRM integration and a unified university portal.',
    result: { value: 'Unified', label: 'Operational Efficiency' },
    tags: ['WORDPRESS', 'CRM', 'SEO'],
    reverse: false,
  },
];

export default function CaseStudies() {
  return (
    <section className="section-padding px-margin-mobile md:px-margin-desktop" id="projects">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-20">
            <h2 className="text-label-caps text-primary mb-4">PROVEN RESULTS</h2>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
              Transforming Challenges into{' '}
              <span className="text-primary">Competitive Advantages</span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-32">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 100}>
              <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
                {/* Image Side */}
                <div
                  className={`w-full lg:w-1/2 ${
                    study.reverse ? 'lg:order-2' : ''
                  }`}
                >
                  <Link href={`/projects/${study.slug}`} className="block">
                    <div className="auto-scroll-container bg-surface-container-high shadow-lg">
                      <Image
                        alt={study.title}
                        className="auto-scroll-img object-cover"
                        src={study.img}
                        width={800}
                        height={1200}
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="bg-white text-[#111111] px-6 py-3 rounded-full font-bold shadow-xl">
                          View Details
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content Side */}
                <div
                  className={`w-full lg:w-1/2 space-y-8 ${
                    study.reverse ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="text-label-caps text-on-surface-variant border-b border-on-surface/10 pb-4">
                    {study.category}
                  </div>
                  <h4 className="text-headline-lg font-bold">{study.title}</h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <div className="text-label-caps text-primary mb-2">
                        PROBLEM
                      </div>
                      <p className="text-body-md text-on-surface-variant">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <div className="text-label-caps text-primary mb-2">
                        SOLUTION
                      </div>
                      <p className="text-body-md text-on-surface-variant">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <div className="text-label-caps text-primary mb-2">
                        RESULT
                      </div>
                      <p className="text-display-lg-mobile font-bold text-on-surface">
                        {study.result.isCounter ? (
                          <Counter endValue={study.result.endValue} prefix={study.result.prefix} suffix={study.result.suffix} />
                        ) : (
                          study.result.value
                        )}
                      </p>
                      <p className="text-label-caps">{study.result.label}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-surface-container text-label-caps"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/projects/${study.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all group btn-glass-light text-primary"
                    >
                      <span className="text-body-md">View Project</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
