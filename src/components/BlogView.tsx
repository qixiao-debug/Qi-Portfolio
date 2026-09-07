import { useState } from 'react';
import { Search, ChevronRight, BookOpen, Clock, Calendar, Bookmark } from 'lucide-react';
import { BLOG_POSTS } from '../data';

interface BlogViewProps {
  setCurrentView: (view: string) => void;
  setSelectedBlogId: (id: string) => void;
  darkMode: boolean;
}

const CATEGORIES = [
  "All Articles",
  "Digital Marketing",
  "SEO",
  "CRO",
  "Analytics",
  "Data Visualization",
  "AI & Marketing",
  "Career Development"
];

export default function BlogView({ setCurrentView, setSelectedBlogId, darkMode }: BlogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handlePostClick = (postId: string) => {
    setSelectedBlogId(postId);
    setCurrentView(`blog-${postId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Hot article of the year (Featured post banner)
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="relative pt-20 md:pt-28 pb-16 min-h-screen">
      {/* Decorative Blur Background spot */}
      <div className="absolute top-44 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Introduction */}
        <div className="text-left border-b pb-8 mb-8 border-slate-200/40">
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold block mb-1">
            THOUGHT LEADERSHIP
          </span>
          <h1 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Insights & Technical Articles
          </h1>
          <p className="text-sm text-slate-500 mt-2 max-w-2xl">
            In-depth structural writeups on multi-channel marketing, analytics, conversion engineering, and search engine Topical cluster frameworks.
          </p>
        </div>

        {/* Featured Post Card Banner (Only show if search is blank or filtered by All) */}
        {searchQuery === "" && selectedCategory === "All Articles" && featuredPost && (
          <div
            id={`featured-blog-banner-${featuredPost.id}`}
            onClick={() => handlePostClick(featuredPost.id)}
            className={`rounded-2xl border p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-indigo-500/30 mb-12 text-left ${
              darkMode
                ? 'bg-slate-900/40 border-slate-800'
                : 'bg-white border-slate-200 shadow-xs hover:shadow-indigo-500/5'
            }`}
          >
            {/* Visual Abstract illustration depicting data analytics pipelines */}
            <div className="lg:col-span-5 h-48 md:h-64 rounded-xl bg-indigo-500/5 border border-indigo-500/10 border-dashed flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-indigo-500 text-white font-mono text-[9px] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-full">
                Featured Thought
              </div>
              <Bookmark className="h-10 w-10 text-indigo-500 mb-3 animate-pulse" />
              <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">GA4 Exploded Funnels Modeling</span>
              <span className={`text-xs text-center mt-2 font-mono ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>
                BigQuery SQL schemas mapped and deployed
              </span>
            </div>

            {/* Featured Post details */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <span className="text-indigo-500 font-semibold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-400 text-slate-500">•</span>
                  <span className="text-slate-500">{featuredPost.readingTime}</span>
                </div>

                <h2 className={`text-xl sm:text-2xl font-bold tracking-tight hover:text-indigo-500 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-950'
                }`}>
                  {featuredPost.title}
                </h2>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {featuredPost.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono bg-slate-500/5 px-2.5 py-0.5 rounded text-slate-500 border border-slate-500/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author signature footer */}
              <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                darkMode ? 'border-slate-800' : 'border-slate-100'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-[10px] font-mono border border-indigo-500/20">
                    QX
                  </div>
                  <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{featuredPost.author}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{featuredPost.publishDate}</span>
                </div>
                <div className="flex items-center space-x-1 text-indigo-500 font-bold uppercase text-[10px] tracking-wider">
                  <span>Read Essay</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search controls & Category Filters block */}
        <div className="space-y-6 mb-10 text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                id="blog-search-input"
                type="text"
                placeholder="Search articles or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-9 pr-4 py-2 rounded-lg text-xs transition-colors border outline-hidden ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500'
                    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:focus:border-indigo-600'
                }`}
              />
            </div>

            {/* Category selection tags layout */}
            <div className="md:col-span-8 flex flex-wrap gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
              {CATEGORIES.map((catKey) => {
                const isActive = selectedCategory === catKey;
                return (
                  <button
                    key={catKey}
                    id={`blog-category-btn-${catKey.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={() => setSelectedCategory(catKey)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? darkMode
                          ? 'bg-indigo-950 text-indigo-400 border border-indigo-900/60'
                          : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                        : darkMode
                        ? 'bg-slate-900 text-slate-400 border border-transparent hover:text-white hover:bg-slate-800'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    {catKey}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Blog Article Grid list */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 border rounded-xl border-dashed border-slate-200/60">
            <span className="text-slate-400 text-sm">No articles match your search parameters. Try writing another query.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                id={`blog-grid-card-${post.id}`}
                onClick={() => handlePostClick(post.id)}
                className={`rounded-xl border p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.01] ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    : 'bg-white border-slate-200/80 hover:border-indigo-100 hover:shadow-indigo-500/5'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Technical Graphic abstract placeholder */}
                  <div className="aspect-[16/10] w-full bg-slate-500/5 rounded-lg border border-slate-500/10 border-dashed flex items-center justify-center p-4">
                    <BookOpen className="h-6 w-6 text-indigo-500/40" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-[10px] font-mono">
                      <span className="text-indigo-500 font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{post.readingTime}</span>
                    </div>

                    <h3 className={`text-base font-bold line-clamp-2 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Tags list */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-mono bg-slate-500/5 px-2 py-0.5 rounded text-slate-500 text-[9px]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer and Read button */}
                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <span className="text-slate-500 font-mono">{post.publishDate}</span>
                  <span className="text-indigo-500 font-semibold flex items-center space-x-1 text-[11px]">
                    <span>Read</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
