import Link from 'next/link';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/sections/Footer';
import { getAllItems } from '@/lib/mdx';

export const metadata = {
  title: 'Blog',
  description:
    'Insights on web development, AI automation, workflow optimization, and scaling your business with technology.',
};

export default function BlogPage() {
  const posts = getAllItems('blog');

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        <section className="section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <ScrollReveal>
              <div className="max-w-2xl mb-20">
                <h2 className="text-label-caps text-primary mb-4">INSIGHTS</h2>
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight">
                  Thoughts on Web &amp; AI{' '}
                  <span className="text-primary">Engineering</span>
                </h3>
              </div>
            </ScrollReveal>

            {posts.length === 0 ? (
              <div className="text-center py-32">
                <Icon name="edit_note" size="text-6xl" className="text-on-surface-variant/30 mb-6" />
                <h3 className="text-headline-md text-on-surface-variant mb-2">
                  Coming Soon
                </h3>
                <p className="text-body-md text-on-surface-variant/60">
                  Blog posts are on the way. Check back for insights on web
                  development, AI, and automation.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={i * 100}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block group p-8 bg-white border border-on-surface/5 rounded-2xl hover:border-primary/20 transition-all proximity-glow"
                    >
                      <div className="text-label-caps text-primary mb-3">
                        {post.category || 'Article'}
                      </div>
                      <h4 className="font-headline-md mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-body-md text-on-surface-variant mb-6 line-clamp-3">
                        {post.excerpt || post.description}
                      </p>
                      <div className="flex items-center justify-between text-label-caps text-on-surface-variant">
                        <span>{post.date}</span>
                        <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read <Icon name="arrow_forward" size="text-sm" />
                        </span>
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
