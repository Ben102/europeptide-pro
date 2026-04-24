'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const POSTS = [
  { id: 1, title: 'Understanding Peptide Reconstitution', date: 'March 20, 2026', category: 'Guides' },
  { id: 2, title: 'BPC-157 vs TB-500: A Comparative Analysis', date: 'March 15, 2026', category: 'Research' },
  { id: 3, title: 'The Importance of HPLC Testing in Peptide Quality', date: 'March 10, 2026', category: 'Quality' },
];

export default function BlogPage() {
  const handlePostClick = (title: string) => {
    toast.info(`Opening article: ${title}`);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 text-center">Research Blog</h1>
        <p className="text-lg text-slate-600 mb-12 text-center">
          Educational guides, industry news, and research summaries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map(post => (
            <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => handlePostClick(post.title)}>
              <div className="h-48 bg-slate-200 rounded-t-xl" />
              <CardContent className="p-6">
                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{post.category}</span>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h2>
                <p className="text-sm text-slate-500">{post.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
