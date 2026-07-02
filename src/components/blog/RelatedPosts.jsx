import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../utils/blogPosts';

export default function RelatedPosts({ currentSlug, slugs }) {
  const posts = (
    slugs?.length
      ? slugs.map((s) => BLOG_POSTS.find((p) => p.slug === s)).filter(Boolean)
      : BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 2)
  ).filter((p) => p.slug !== currentSlug);

  if (!posts.length) return null;

  return (
    <div className="mt-14 pt-10 border-t border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-5">Leia também</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
              {post.category}
            </span>
            <p className="mt-2 font-semibold text-gray-900 leading-snug group-hover:text-brand-600 transition-colors">
              {post.title}
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-500 group-hover:text-brand-600 transition-colors">
              Ler artigo
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
