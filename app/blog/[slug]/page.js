import { notFound } from 'next/navigation';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import MDXContent from '@/components/ui/MDXContent';
import { getItemBySlug, getAllSlugs } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getAllSlugs('blog');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getItemBySlug('blog', params.slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt || post.frontmatter.description,
  };
}

export default function BlogPostPage({ params }) {
  const post = getItemBySlug('blog', params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-24">
        <article className="section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <div className="text-label-caps text-primary mb-3">
                {post.frontmatter.category || 'Article'} &middot;{' '}
                {post.frontmatter.date}
              </div>
              <h1 className="text-headline-md md:text-headline-lg font-semibold leading-tight mb-4">
                {post.frontmatter.title}
              </h1>
              {post.frontmatter.excerpt && (
                <p className="text-body-md md:text-body-lg text-on-surface-variant">
                  {post.frontmatter.excerpt}
                </p>
              )}
            </div>

              <MDXContent source={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
