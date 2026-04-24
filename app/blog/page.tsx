import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { JsonLd } from '@/components/seo/json-ld';
import { BLOG_POSTS } from '@/lib/blog-posts';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Research Peptide Blog — Guides, Comparisons, Protocols',
  description:
    'In-depth research-peptide guides: BPC-157 vs TB-500, GLP-1 family comparisons, reconstitution protocols, COA interpretation, and EU compliance.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Research Peptide Blog — EuroPeptide Pro',
    description: 'Guides, comparisons, and protocols for research peptides.',
    url: '/blog',
    type: 'website',
  },
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${SITE_URL}/blog`,
  url: `${SITE_URL}/blog`,
  name: `${SITE_NAME} Research Blog`,
  publisher: { '@id': `${SITE_URL}/#organization` },
  blogPost: BLOG_POSTS.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.publishedAt,
    dateModified: p.updatedAt,
    author: { '@type': 'Person', name: p.author.name },
  })),
};

export default function BlogIndex() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <JsonLd data={blogJsonLd} />
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 text-center">Research Peptide Blog</h1>
        <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          Evidence-based guides on peptide mechanisms, comparisons, reconstitution protocols, storage, and EU research-use compliance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-950 rounded-t-xl flex items-center justify-center p-6">
                  <span className="text-white/90 font-semibold text-center line-clamp-3">{post.title}</span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-0 text-xs">{post.category}</Badge>
                    <span className="text-xs text-slate-400">· {post.readingTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-slate-500 line-clamp-2">{post.description}</p>
                  <p className="text-xs text-slate-400 mt-3">
                    {new Date(post.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })} · by {post.author.name}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
