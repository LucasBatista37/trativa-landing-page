import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { getBlogPostBySlug } from '../utils/blogPosts';
import { LANDING_URL, SITE_URL } from '../utils/constants';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const path = `/blog/${post.slug}`;
  const title = `${post.title} | Blog Trativa`;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <SEO
        title={title}
        description={post.description}
        path={path}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          articleSection: post.category,
          url: `${LANDING_URL}${path}`,
          publisher: {
            '@type': 'Organization',
            name: 'Trativa',
            url: LANDING_URL,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${LANDING_URL}${path}`,
          },
        }}
      />
      <Header />
      <main className="flex-1 pb-20">
        <article>
          <header className="border-b border-gray-100 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-14 sm:pb-20">
              <div className="flex flex-wrap items-center gap-3 text-sm mb-8">
                <Link to="/blog" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                  ← Blog
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-500">{post.category}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                <span className="font-semibold text-brand-600 uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-5">
                {post.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                {post.description}
              </p>
            </div>
          </header>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-gray-100">
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Organize esse processo no Trativa
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Centralize leads, acompanhe etapas do funil, registre atendimentos e tenha mais clareza sobre a rotina comercial da sua equipe.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`${SITE_URL}/register`}
                    className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/25"
                  >
                    Começar teste gratuito
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    to="/blog"
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-white font-semibold text-sm px-5 py-3 rounded-xl transition-all"
                  >
                    Ver outros artigos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
