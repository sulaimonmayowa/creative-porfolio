import Link from 'next/link';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/sections/Footer';
import { getAllItems } from '@/lib/mdx';

export const metadata = {
  title: 'Projects',
  description:
    'A curated portfolio of web development and AI automation projects delivering real business impact.',
};

export default function ProjectsPage() {
  const projects = getAllItems('projects');

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        <section className="section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <ScrollReveal>
              <div className="max-w-2xl mb-20">
                <h2 className="text-label-caps text-primary mb-4">PORTFOLIO</h2>
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight">
                  Transforming Ideas Into{' '}
                  <span className="text-primary">Digital Reality</span>
                </h3>
              </div>
            </ScrollReveal>

            {projects.length === 0 ? (
              <div className="text-center py-32">
                <Icon name="folder_open" size="text-6xl" className="text-on-surface-variant/30 mb-6" />
                <h3 className="text-headline-md text-on-surface-variant mb-2">
                  More Projects Coming
                </h3>
                <p className="text-body-md text-on-surface-variant/60">
                  New case studies are being documented. Visit the homepage to
                  see featured work.
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Back to Home <Icon name="arrow_forward" size="text-sm" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                  <ScrollReveal key={project.slug} delay={i * 100}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block group bg-white border border-on-surface/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all proximity-glow"
                    >
                      <div className="aspect-video bg-surface-container-high overflow-hidden">
                        {project.image && (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}
                      </div>
                      <div className="p-8">
                        <div className="text-label-caps text-primary mb-2">
                          {project.category || 'Case Study'}
                        </div>
                        <h4 className="font-headline-md mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-body-md text-on-surface-variant mb-4 line-clamp-2">
                          {project.excerpt || project.description}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {(project.tags || []).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full bg-surface-container text-label-caps"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
