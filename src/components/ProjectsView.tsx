import { useState } from 'react';
import { ArrowRight, Filter, Target, LineChart, Sparkles, Database, Eye, Search, Globe, Megaphone, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../data';

interface ProjectsViewProps {
  setCurrentView: (view: string) => void;
  setSelectedProjectId: (id: string) => void;
  darkMode: boolean;
}

// Category mappings with customized enterprise descriptions
const CATEGORY_META: { [key: string]: { label: string; description: string; icon: any } } = {
  All: {
    label: "All Solutions",
    description: "A complete overview of international market expansion programs, digital performance traffic, conversion optimization, and brand campaigns.",
    icon: Sparkles
  },
  "Market expansion": {
    label: "Market Expansion",
    description: "Strategic international expansion of Shopify DTC systems, including localized checkouts, currency flows, and localized market entry programs on country targets like France and South Africa.",
    icon: Globe
  },
  "Performance marketing": {
    label: "Performance Marketing",
    description: "Data-driven traffic acquisition strategy, holistic omnichannel scaling, search engine optimization (SEO) networks, and rigorous conversion rate optimization (CRO) testing models.",
    icon: TrendingUp
  },
  "Campaign management": {
    label: "Campaign Management",
    description: "End-to-end management, messaging, and multi-channel execution of seasonal promo events, major product introductions, and licensed brand crossover collaborations.",
    icon: Megaphone
  }
};

export default function ProjectsView({ setCurrentView, setSelectedProjectId, darkMode }: ProjectsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView(`project-${projectId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter projects first by Category, then by Search (Case insensitive on title, client, summary)
  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === "All" || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = Object.keys(CATEGORY_META);

  return (
    <div className="relative pt-20 md:pt-28 pb-16 min-h-screen">
      {/* Subtle lighting accents */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title and intro header */}
        <div className="text-left border-b pb-8 mb-8 border-slate-200/40">
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold block mb-1">
            QUALIFIED PORTFOLIO
          </span>
          <h1 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Growth & Analytics Case Studies
          </h1>
          <p className="text-sm text-slate-500 mt-2 max-w-2xl">
            Explore authentic, documented growth experiments. Filter cases by operational discipline to review custom tracking implementations, conversion metrics, and visual models.
          </p>
        </div>

        {/* Dynamic Category Filtering & Search Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Filter List and Search */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Search Input Box */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                id="project-search-input"
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-9 pr-4 py-2.5 rounded-lg text-sm transition-colors border outline-hidden ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500'
                    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600'
                }`}
              />
            </div>

            {/* Category Filter list */}
            <div className="space-y-1.5 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block px-3 mb-2">
                Operational Discipline
              </span>
              {categories.map((catKey) => {
                const isActive = selectedCategory === catKey;
                const CatIcon = CATEGORY_META[catKey].icon;
                return (
                  <button
                    key={catKey}
                    id={`filter-btn-${catKey.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={() => {
                      setSelectedCategory(catKey);
                      // Avoid resetting search unless they change category and want fresh start
                    }}
                    className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                      isActive
                        ? darkMode
                          ? 'bg-indigo-950/50 text-indigo-400 border border-indigo-900/50'
                          : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                        : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <CatIcon className="h-4 w-4 flex-shrink-0" />
                    <span>{CATEGORY_META[catKey].label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Active category display explanation and matching cards list */}
          <div className="lg:col-span-9 space-y-6 text-left">
            
            {/* Active category details display widget */}
            <div className={`p-5 rounded-xl border ${
              darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-50/50 border-slate-100'
            }`}>
              <h2 className={`text-sm font-semibold uppercase font-mono tracking-wider ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                {CATEGORY_META[selectedCategory].label}
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {CATEGORY_META[selectedCategory].description}
              </p>
            </div>

            {/* If empty */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 border rounded-xl border-dashed border-slate-200/60">
                <span className="text-slate-400 text-sm">No case studies match your current filters. Try resetting the criteria.</span>
              </div>
            ) : (
              /* Grid elements list */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    id={`project-card-detail-${proj.id}`}
                    onClick={() => handleProjectClick(proj.id)}
                    className={`rounded-xl border p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.01] ${
                      darkMode
                        ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                        : 'bg-white border-slate-200/80 hover:border-indigo-100 hover:shadow-indigo-500/5'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Tag row */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-indigo-500 bg-indigo-500/5 px-2.5 py-0.5 rounded-full font-semibold border border-indigo-500/10">
                          {proj.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">{proj.period}</span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                          {proj.title}
                        </h3>
                        <span className="text-xs text-slate-400 block font-sans">
                          Client Profile: <strong className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{proj.client}</strong>
                        </span>
                        <p className="text-xs text-slate-500 leading-relaxed pt-1 line-clamp-3">
                          {proj.summary}
                        </p>
                      </div>
                    </div>

                    {/* Results footer */}
                    <div className={`mt-6 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs ${
                      darkMode ? 'border-slate-800' : 'border-slate-100'
                    }`}>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">Business Impact</span>
                        <span className="font-semibold text-emerald-500">{proj.resultsSummary}</span>
                      </div>
                      <div className="self-end sm:self-auto flex items-center space-x-1 text-indigo-500 font-semibold uppercase text-[10px] tracking-wider">
                        <span>Analysis</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
