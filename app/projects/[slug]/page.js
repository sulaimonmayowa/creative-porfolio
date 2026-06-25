import { notFound } from 'next/navigation';
import Link from 'next/link';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import { getItemBySlug, getAllSlugs } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getAllSlugs('projects');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const project = getItemBySlug('projects', params.slug);
  if (!project) return { title: 'Not Found' };

  return {
    title: `${project.frontmatter.title} — Sulaimon Mayowa`,
    description: project.frontmatter.excerpt || project.frontmatter.description,
  };
}

export default function ProjectPage({ params }) {
  const project = getItemBySlug('projects', params.slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  // Get all project slugs for Next/Previous navigation
  const allSlugs = getAllSlugs('projects');
  const currentIndex = allSlugs.indexOf(params.slug);
  const nextProject = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-24">
        {/* Back to Work Link */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body-md group"
          >
            <Icon name="arrow_back" size="text-lg" />
            <span>Back to Work</span>
          </Link>
        </div>

        <article className="section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            {/* Hero */}
            <ScrollReveal>
              <div className="mb-4">
                <div className="flex items-center gap-3 text-label-caps text-on-surface-variant mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                    {frontmatter.category || 'Case Study'}
                  </span>
                  <span>{frontmatter.industry}</span>
                  <span>·</span>
                  <span>{frontmatter.year}</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight mb-6">
                  {frontmatter.title}
                </h1>
                <p className="text-body-lg text-on-surface-variant max-w-2xl mb-8">
                  {frontmatter.excerpt}
                </p>
                <div className="flex flex-wrap gap-4">
                  {frontmatter.liveUrl && (
                    <a
                      href={frontmatter.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-full font-semibold text-sm btn-glow-purple"
                    >
                      Visit Live Site
                      <Icon name="open_in_new" size="text-base" />
                    </a>
                  )}
                  <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-glass-light text-on-surface"
                  >
                    <Icon name="arrow_back" size="text-base" />
                    Back to Work
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Project Image — constrained height with hover scroll */}
            <ScrollReveal delay={100}>
              <div className="auto-scroll-container mt-12 mb-20 h-[450px] border border-on-surface/5 shadow-lg bg-surface-container-high">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  className="auto-scroll-img"
                />
              </div>
            </ScrollReveal>

            {/* Content + Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                {frontmatter.sections && (
                  <div className="space-y-10">
                    {frontmatter.sections.map((section, i) => (
                      <div key={i} className={i > 0 ? 'pt-8 border-t border-on-surface/10' : ''}>
                        <p className="text-body-lg font-semibold text-on-surface mb-3">{section.heading}</p>
                        <p className="text-body-md text-on-surface-variant leading-relaxed">{section.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <aside className="lg:col-span-1">
                <div className="glass-panel p-8 rounded-2xl space-y-8 sticky top-32">
                  <div className="space-y-5">
                    {frontmatter.client && (
                      <div>
                        <div className="text-label-caps text-on-surface-variant mb-1">Client</div>
                        <div className="font-semibold">{frontmatter.client}</div>
                      </div>
                    )}
                    {frontmatter.industry && (
                      <div>
                        <div className="text-label-caps text-on-surface-variant mb-1">Industry</div>
                        <div className="font-semibold">{frontmatter.industry}</div>
                      </div>
                    )}
                    {frontmatter.service && (
                      <div>
                        <div className="text-label-caps text-on-surface-variant mb-1">Service</div>
                        <div className="font-semibold">{frontmatter.service}</div>
                      </div>
                    )}
                    {frontmatter.year && (
                      <div>
                        <div className="text-label-caps text-on-surface-variant mb-1">Year</div>
                        <div className="font-semibold">{frontmatter.year}</div>
                      </div>
                    )}
                  </div>

                  {frontmatter.tags && frontmatter.tags.length > 0 && (
                    <div className="pt-5 border-t border-on-surface/10">
                      <div className="text-label-caps text-on-surface-variant mb-3">Built With</div>
                      <div className="flex flex-wrap gap-2">
                        {frontmatter.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-surface-container text-label-caps">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {frontmatter.liveUrl && (
                    <div className="pt-5 border-t border-on-surface/10">
                      <a
                        href={frontmatter.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#111111] text-white rounded-full font-semibold text-sm btn-glow-purple"
                      >
                        Visit Live Site
                        <Icon name="open_in_new" size="text-base" />
                      </a>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Next Project */}
        {nextProject && (
          <section className="border-t border-on-surface/5">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
              <Link
                href={`/projects/${nextProject}`}
                className="group flex items-center justify-between"
              >
                <div>
                  <div className="text-label-caps text-on-surface-variant mb-2">Next Project</div>
                  <h3 className="font-headline-md group-hover:text-primary transition-colors">
                    {nextProject.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h3>
                </div>
                <Icon
                  name="arrow_forward"
                  size="text-3xl"
                  className="group-hover:translate-x-2 transition-transform text-primary"
                />
              </Link>
            </div>
          </section>
        )}

        {/* Bottom Back Link */}
        <div className="pb-16 border-t border-on-surface/5">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8">
            <Button href="/#projects" variant="outline" icon="arrow_back">
              Back to All Projects
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
