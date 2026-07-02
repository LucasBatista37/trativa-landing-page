import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BLOG_POSTS } from '../utils/blogPosts';
import { LANDING_URL, SITE_URL } from '../utils/constants';

export default function BlogPage() {
  const title = 'Blog Trativa | Gestão de leads, vendas e atendimento';
  const description = 'Guias práticos para equipes comerciais organizarem leads, funil de vendas, WhatsApp, metas e relatórios com mais clareza.';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <SEO
        title={title}
        description={description}
        path="/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Blog Trativa',
          url: `${LANDING_URL}/blog`,
          description,
          hasPart: BLOG_POSTS.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${LANDING_URL}/blog/${post.slug}`,
          })),
        }}
      />
      <Header />
      <main className="flex-1 pb-20">
        <section className="border-b border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-16 sm:pb-20">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors mb-8"
            >
              ← Voltar ao início
            </Link>

            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest text-brand-600 uppercase mb-3">
                Blog Trativa
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
                Conteúdos para organizar leads, vendas e atendimento
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Guias práticos para equipes comerciais que querem ganhar controle sobre contatos, funil, WhatsApp, metas e relatórios sem criar processos complicados.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
                >
                  {post.coverImage ? (
                    <Link to={`/blog/${post.slug}`} className="block">
                      <img
                        src={post.coverImage}
                        alt={post.coverImageAlt || post.title}
                        loading="lazy"
                        className="w-full aspect-[1200/630] object-cover"
                      />
                    </Link>
                  ) : null}
                  <div className="p-6 flex flex-col flex-1">
                  {!post.coverImage && (
                    <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="font-semibold text-brand-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                    <Link to={`/blog/${post.slug}`} className="hover:text-brand-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-brand-600 transition-colors mt-auto"
                  >
                    Ler artigo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-2xl bg-brand-600 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Quer aplicar esses processos na prática?
                </h2>
                <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
                  O Trativa ajuda sua equipe a organizar leads, acompanhar o funil e manter o atendimento comercial em um só lugar.
                </p>
              </div>
              <a
                href={`${SITE_URL}/register`}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold text-sm px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors flex-shrink-0"
              >
                Começar teste gratuito
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
