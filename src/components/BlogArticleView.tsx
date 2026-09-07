import { useState, useEffect, FormEvent } from 'react';
import { ArrowLeft, Share2, Clipboard, Mail, Calendar, Clock, User, Bookmark, ChevronRight, Check } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data';

interface BlogArticleProps {
  blogId: string;
  setCurrentView: (view: string) => void;
  setSelectedBlogId: (id: string) => void;
  darkMode: boolean;
}

export default function BlogArticleView({ blogId, setCurrentView, setSelectedBlogId, darkMode }: BlogArticleProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Find blog
  const article = BLOG_POSTS.find((b) => b.id === blogId) || BLOG_POSTS[0];

  // Track page reading/scrolling progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const pct = (window.scrollY / scrollHeight) * 100;
        setScrollPercentage(pct);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBack = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleShareEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent(article.title)}&body=Read this article at: ${encodeURIComponent(window.location.href)}`);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const handleRelatedClick = (relatedId: string) => {
    setSelectedBlogId(relatedId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find related articles (same category or others, max 2)
  const relatedArticles = BLOG_POSTS.filter((p) => p.id !== article.id).slice(0, 2);

  return (
    <div className="relative pt-20 md:pt-28 pb-20 min-h-screen text-left">
      {/* Scroll indicator reading line bar */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-indigo-600 z-50 transition-all duration-75"
        style={{ width: `${scrollPercentage}%` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation CTA */}
        <button
          onClick={handleBack}
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-500 hover:text-indigo-600 mb-8 cursor-pointer transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Insights blog</span>
        </button>

        {/* Individual Article Header Block */}
        <div className="border-b pb-8 border-slate-200/40 text-left mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs mb-3 font-mono">
            <span className="text-indigo-500 font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-slate-400">•</span>
            <div className="flex items-center space-x-1 text-slate-500">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight ${
            darkMode ? 'text-white' : 'text-slate-950'
          }`}>
            {article.title}
          </h1>

          {/* Author/Data segment */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-xs border border-indigo-500/20">
                QX
              </div>
              <span className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>Qi Xiao</span>
            </div>
            <span className="text-slate-400">•</span>
            <div className="flex items-center space-x-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>Published {article.publishDate}</span>
            </div>
            {article.lastUpdated && (
              <>
                <span className="text-slate-400">•</span>
                <span>Last Updated {article.lastUpdated}</span>
              </>
            )}
          </div>
        </div>

        {/* Main layout Grid - content and right sticky directory side block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left panel: Article Longform */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SEO Article Intro block */}
            <p className={`text-base leading-relaxed font-sans font-medium ${
              darkMode ? 'text-slate-300' : 'text-slate-800'
            }`}>
              {article.content.introduction}
            </p>

            {/* Custom Interactive Elements Iterations */}
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {/* Visual anchor point for TOC scrolling */}
                <h2
                  id={`topic-heading-${idx}`}
                  className={`text-lg sm:text-xl font-bold tracking-tight pt-4 ${
                    darkMode ? 'text-white border-slate-800' : 'text-slate-950 border-slate-100'
                  }`}
                >
                  {section.heading}
                </h2>
                {section.subheading && (
                  <h3 className={`text-sm font-semibold tracking-wide uppercase font-mono ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {section.subheading}
                  </h3>
                )}

                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm leading-relaxed text-slate-500">
                    {para}
                  </p>
                ))}

                {/* Inline Quote Block support */}
                {section.quote && (
                  <blockquote className="pl-4 py-1.5 border-l-4 border-indigo-500 text-xs sm:text-sm italic font-medium my-4 bg-slate-500/5 rounded-r">
                    {section.quote}
                  </blockquote>
                )}

                {/* Dynamic customized Chart rendering block */}
                {section.chartData && (
                  <div className={`p-5 rounded-lg border my-6 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4 block">
                      Visual Model: {section.chartData.title}
                    </span>
                    <div className="space-y-3.5">
                      {section.chartData.labels.map((label, lIdx) => {
                        const val = section.chartData!.values[lIdx];
                        const maxVal = Math.max(...section.chartData!.values);
                        const percent = (val / maxVal) * 100;
                        return (
                          <div key={label} className="space-y-1 text-xs">
                            <div className="flex justify-between text-[11px] font-mono text-slate-500">
                              <span>{label}</span>
                              <strong className={darkMode ? 'text-white' : 'text-slate-900'}>{val}%</strong>
                            </div>
                            <div className="h-2.5 w-full bg-slate-500/5 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-indigo-600 rounded-full"
                                style={{ width: `${percent}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Code highlight segment blocks */}
                {section.codeBlock && (
                  <div className="rounded-lg overflow-hidden border border-slate-800 my-6">
                    {/* Header language strip */}
                    <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400">
                        {section.codeBlock.language}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(section.codeBlock!.code);
                          alert("Code snippet copied to clipboard.");
                        }}
                        className="text-[10px] font-mono text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                      >
                        <Clipboard className="h-3.5 w-3.5" />
                        <span>Copy Block</span>
                      </button>
                    </div>
                    {/* Raw output markup code box */}
                    <pre className="p-4 bg-slate-950 font-mono text-[11px] overflow-x-auto text-left text-slate-200 leading-relaxed scrollbar-thin">
                      <code>{section.codeBlock.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}

            {/* Ending conclusion */}
            <div className={`pt-6 border-t font-sans mt-8 ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
              <h3 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-950'}`}>Conclusion</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-500 italic">
                {article.content.conclusion}
              </p>
            </div>

            {/* Tags footer section */}
            <div className="flex flex-wrap gap-1.5 pt-4">
              {article.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono bg-slate-500/5 px-3 py-1 rounded-full text-slate-500 border border-slate-500/5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right panel: Sticky widgets, Sharing and T.O.C */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Table of Contents block */}
            <div className={`p-5 rounded-xl border text-left ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/50 border-slate-200/40'
            }`}>
              <h3 className="text-xs font-bold uppercase font-mono tracking-wider text-indigo-500 mb-3 flex items-center space-x-2">
                <Bookmark className="h-4 w-4" />
                <span>Table of Contents</span>
              </h3>
              <ul className="space-y-2 text-xs">
                {article.content.sections.map((sec, idx) => (
                  <li key={idx}>
                    <a
                      href={`#topic-heading-${idx}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(`topic-heading-${idx}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className="text-slate-400 hover:text-indigo-500 hover:underline flex items-start space-x-1 leading-snug"
                    >
                      <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                      <span>{sec.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sharing micro-tools */}
            <div className={`p-5 rounded-xl border text-left ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/50 border-slate-200/40'
            }`}>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3.5 font-semibold">
                Share this Analysis Document
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  id="share-btn-copy"
                  onClick={handleCopyLink}
                  className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    copiedLink
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : darkMode
                      ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {copiedLink ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
                  <span>{copiedLink ? "Link Copied" : "Copy Link"}</span>
                </button>

                <button
                  id="share-btn-email"
                  onClick={handleShareEmail}
                  className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Mail className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Send Email</span>
                </button>
              </div>
            </div>

            {/* Newsletter widget sign up form */}
            <div className={`p-6 rounded-xl border text-left ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/50 border-slate-200/40 shadow-xs'
            }`}>
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-500 block mb-1 font-semibold">
                Weekly Ledger Dispatch
              </span>
              <h4 className={`text-sm font-bold tracking-tight mb-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Advanced analytical loops delivered twice a month.
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                No telemetry spam. Secure strategic writeups regarding technical GA4 pipelines, schema markups, and structural conversion testing.
              </p>

              {newsletterSubscribed ? (
                <div className="bg-emerald-500/15 border border-emerald-500/20 text-emerald-500 rounded-lg p-3 text-xs flex items-center space-x-2">
                  <Check className="h-4.5 w-4.5 flex-shrink-0" />
                  <span><strong>Thank you!</strong> You are subscribed in the marketing analytics queue.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg text-xs border outline-hidden transition-colors ${
                      darkMode
                        ? 'bg-slate-900 border-slate-700 text-slate-200 focus:border-indigo-500'
                        : 'bg-white border-slate-200 text-slate-900 focus:border-indigo-600'
                    }`}
                  />
                  <button
                    type="submit"
                    className="w-full text-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer shadow-sm"
                  >
                    Subscribe to Queue
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Related Articles list & Contact Action indicator */}
        <section id="bottom-related-articles" className="mt-16 pt-12 border-t border-slate-500/10 text-left">
          <h3 className={`text-xs font-semibold font-mono uppercase tracking-widest text-indigo-500 mb-8`}>
            Related Thought Essays
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                id={`blog-related-card-${rel.id}`}
                onClick={() => handleRelatedClick(rel.id)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01] flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/45 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                    : 'bg-white border-slate-200/80 hover:border-indigo-100 shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[10px] font-mono">
                    <span className="text-indigo-500 font-semibold uppercase tracking-wider">{rel.category}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{rel.readingTime}</span>
                  </div>
                  <h4 className={`text-sm font-bold line-clamp-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {rel.summary}
                  </p>
                </div>
                <div className="flex items-center space-x-1.5 text-indigo-500 font-semibold uppercase text-[10px] tracking-wider pt-4 mt-2 border-t border-slate-500/5">
                  <span>Open Article</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Business Contact CTA */}
          <div className={`mt-12 p-8 rounded-2xl border text-center relative overflow-hidden ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'
          }`}>
            <h3 className={`text-xl font-bold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Need tailored data structures for your marketing campaigns?
            </h3>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mb-5">
              Let's align technical parameters representing your buyer journey. I assist startups and enterprise setups configuring high-converting marketing automation engines.
            </p>
            <button
              onClick={() => setCurrentView('contact')}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer shadow-md transition-transform hover:-translate-y-0.5"
            >
              Contact me regarding custom integrations
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
