
import { blogPosts, BlogPost } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative z-10 pt-28">
      <article className="container mx-auto max-w-4xl px-6 lg:px-8 py-16 md:py-24">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-manrope font-semibold tracking-tight text-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex justify-center items-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={post.imageHint}
          />
        </div>

        <div
          className="prose prose-lg prose-invert max-w-none text-muted-foreground mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 pt-8 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-primary hover:underline">
              &larr; Back to all posts
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
