
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-posts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Blog',
  description: 'Read the latest news, stories, and articles from Al-Ansor Orphan Care. Learn about our impact, our community, and how you can get involved.',
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="relative z-10 pt-28">
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-manrope font-semibold tracking-tight text-foreground mb-4">
              News, Stories & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to our blog. Here, we share updates from our work, inspiring stories from our community, and insights into the world of orphan care in Nigeria.
            </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Featured Post */}
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group-hover:shadow-primary/20 transition-shadow duration-300">
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    data-ai-hint={featuredPost.imageHint}
                  />
                </div>
                <div>
                   <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">Featured</Badge>
                    <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-base text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-primary/20 transition-shadow duration-300">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <span className="text-sm text-muted-foreground mb-2">{post.date}</span>
                  <h3 className="text-xl font-manrope font-semibold text-foreground mb-3 flex-grow group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                   <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium mt-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
