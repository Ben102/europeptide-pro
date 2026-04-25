import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Clock, User } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { JsonLd } from '@/components/seo/json-ld';
import { BLOG_POSTS, blogPostBySlug } from '@/lib/blog-posts';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

type RouteParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post) return { title: 'Article Not Found', robots: { index: false, follow: false } };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: RouteParams) {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: 'en',
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    author: { '@type': 'Person', name: post.author.name, jobTitle: post.author.role },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />

      {/* Breadcrumb bar */}
      <div className="bg-slate-900 py-3">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
        </div>
      </div>

      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-10">
          <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-0 mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">{post.title}</h1>
          <p className="text-lg text-slate-600 mb-6">{post.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-200">
            <span className="flex items-center"><User className="w-4 h-4 mr-1.5" />{post.author.name}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" />{post.readingTime}</span>
            <span>
              Published{' '}
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </span>
            <span>
              Updated{' '}
              <time dateTime={post.updatedAt}>
                {new Date(post.updatedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </span>
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none space-y-8">
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
              {section.paragraphs.map((para, j) => (
                <p
                  key={j}
                  className="text-slate-700 leading-relaxed mb-4"
                  // Inline links are authored in post content — safe as all posts are from a local trusted source
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </section>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-1">About the Author</h3>
            <p className="text-sm text-slate-600">
              <strong>{post.author.name}</strong> — {post.author.role}. Responsible for EuroPeptide Pro&apos;s technical content, lab-partner coordination, and COA review.
            </p>
          </div>
        </footer>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="block p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold text-accent uppercase">{r.category}</span>
                  <h3 className="font-semibold text-slate-900 mt-1 line-clamp-2">{r.title}</h3>
                  <p className="text-xs text-slate-500 mt-2">{r.readingTime}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
