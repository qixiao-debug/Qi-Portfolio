import { ArrowRight, Sparkles, Award, BarChart3, ChevronRight, Mail, MapPin, Linkedin, Star, ArrowDownToLine, ShoppingBag, TrendingUp, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_BIO, BLOG_POSTS, PROJECTS } from '../data';
import qiXiaoPortrait from '../assets/images/QI.png';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
  setSelectedProjectId: (id: string) => void;
  setSelectedBlogId: (id: string) => void;
  darkMode: boolean;
}

export default function HomeView({
  setCurrentView,
  setSelectedProjectId,
  setSelectedBlogId,
  darkMode,
}: HomeViewProps) {

  const handleBlogClick = (blogId: string) => {
    setSelectedBlogId(blogId);
    setCurrentView(`blog-${blogId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView(`project-${projectId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get 3 featured posts
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  // Stagger variants for list container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="relative pt-8 sm:pt-12">
      {/* Background Decorative Glow Nodes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[10000ms]"></div>
      <div className="absolute top-[800px] left-[-200px] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Redesigned Graphic Hero Section (One section, one row) */}
      <section id="hero" className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-6 sm:p-10 lg:p-14 rounded-[36px] border ${
          darkMode 
            ? 'bg-slate-900/40 border-slate-800' 
            : 'bg-white border-slate-200/55 shadow-xs'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait photo with organic shape and starry decor */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[340px] md:max-w-[360px]">
                
                {/* Speckled dots pattern on left margin */}
                <div className="absolute -left-3 top-6 grid grid-cols-4 gap-2.5 opacity-45 pointer-events-none z-0">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-slate-400'}`}
                    ></div>
                  ))}
                </div>

                {/* Star shape decor top-right (Pink hand-drawn star) */}
                <div className="absolute -top-7 -right-4 text-rose-400 dark:text-rose-500 animate-pulse select-none pointer-events-none z-20">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" opacity="0.9">
                    <path d="M12 0l2.8 8.4 8.4 2.8-8.4 2.8-2.8 8.4-2.8-8.4-8.4-2.8 8.4-2.8z" />
                  </svg>
                </div>

                {/* Star shape decor bottom-left (Navy/Blue hand-drawn star) */}
                <div className="absolute -bottom-8 -left-5 text-indigo-950 dark:text-indigo-400 select-none pointer-events-none z-20">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor" opacity="0.85">
                    <path d="M12 2l2.3 7 7 2.3-7 2.3-2.3 7-2.3-7-7-2.3 7-2.3z" />
                  </svg>
                </div>

                {/* Mini decorative star in middle-right */}
                <div className="absolute right-[-24px] top-[45%] text-indigo-500 animate-bounce select-none pointer-events-none z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3l1.8 5.4 5.4 1.8-5.4 1.8-1.8 5.4-1.8-5.4-5.4-1.8 5.4-1.8z" />
                  </svg>
                </div>

                {/* Backing customized organic pink/rose blob container */}
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-tr from-rose-400/35 to-rose-300/30 rounded-[48%_52%_68%_32%_/_44%_48%_62%_56%] scale-105 pointer-events-none z-0"></div>

                {/* Image Mask frame layer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative z-10 w-full aspect-[4/5] rounded-[110px_35px_95px_42px] overflow-hidden border-2 bg-slate-200 dark:bg-slate-800 ${
                    darkMode ? 'border-slate-700 shadow-2xl' : 'border-white shadow-xl shadow-[#2A3B8F]/5'
                  }`}
                >
                  <img
                    src={qiXiaoPortrait}
                    alt={PERSONAL_BIO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                  />
                  {/* Glass layout reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none"></div>
                </motion.div>
                
              </div>
            </div>

            {/* Right Column: Title, concise paragraph introduction, stylized contact grid */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              <div className="space-y-1.5">
                <div className="flex items-baseline space-x-2">
                  <motion.h1 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-5xl sm:text-6xl font-bold tracking-tight ${
                      darkMode ? 'text-indigo-400' : 'text-[#2A3B8F]'
                    }`}
                  >
                    ¡Hello! I'm QI XIAO
                  </motion.h1>
                  <span className={`text-base sm:text-lg font-mono font-medium opacity-70 ${
                    darkMode ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    ¡Hi!
                  </span>
                </div>
                
                <p className="text-[11px] font-mono tracking-wide uppercase font-bold text-indigo-500">
                  Qi Xiao • E-commerce Growth Specialist | Digital Marketing | Consumer Electronics & New Energy
                </p>
              </div>

              {/* Top divider */}
              <div className={`h-[1px] w-full ${darkMode ? 'bg-slate-800' : 'bg-slate-200/80'}`} />

              <div className="space-y-4">
                <p className={`text-[13px] sm:text-[14px] leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-[#4A5568]'
                }`}>
                  I'm passionate about building scalable growth systems for international consumer brands through data, experimentation, and customer-centric marketing. With 4 years of experience in Shopify-based DTC e-commerce, I've contributed to over $4M in GMV across European markets.
                </p>
                <div className={`p-4 rounded-xl border text-[13px] sm:text-[14px] leading-relaxed font-medium ${
                  darkMode 
                    ? 'bg-indigo-950/35 border-indigo-500/20 text-indigo-300' 
                    : 'bg-indigo-50 border-indigo-100 text-[#1E293B]'
                }`}>
                  I'm currently seeking opportunities in Performance Marketing, Growth Marketing, and E-commerce, particularly within consumer brands and Tech company.
                </div>
              </div>

              {/* Bottom divider */}
              <div className={`h-[1px] w-full ${darkMode ? 'bg-slate-800' : 'bg-slate-200/80'}`} />

              {/* Styled Contact Grid (Matching picture contact block layout) */}
              <div className="space-y-3.5">
                <span className={`text-xs font-mono uppercase tracking-widest block font-bold ${
                  darkMode ? 'text-slate-400' : 'text-[#2A3B8F]'
                }`}>
                  Contacts
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <a 
                    href={`mailto:${PERSONAL_BIO.email}`} 
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-9 h-9 rounded-2xl flex items-center justify-center bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 group-hover:scale-105 transition-transform">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">Email Address</span>
                      <span className={`text-xs font-semibold font-mono ${darkMode ? 'text-slate-200' : 'text-slate-700'} group-hover:text-indigo-500 transition-colors`}>
                        {PERSONAL_BIO.email}
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href={PERSONAL_BIO.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-9 h-9 rounded-2xl flex items-center justify-center bg-indigo-100 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                      <Linkedin className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">LinkedIn Network</span>
                      <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'} group-hover:text-indigo-500 transition-colors`}>
                        linkedin.com/in/qipassion
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-2xl flex items-center justify-center bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                      <MapPin className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">Working Base</span>
                      <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                        {PERSONAL_BIO.location}
                      </span>
                    </div>
                  </div>

                  {/* Quick Form Trigger */}
                  <button 
                    onClick={() => navigateTo('contact')}
                    className="flex items-center space-x-3 group cursor-pointer text-left w-full"
                  >
                    <div className="w-9 h-9 rounded-2xl flex items-center justify-center bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 group-hover:scale-105 transition-transform">
                      <ArrowRight className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[9.5px] font-mono font-bold text-indigo-500 uppercase block tracking-wider group-hover:underline">Contact Form</span>
                      <span className={`text-xs font-semibold ${darkMode ? 'text-slate-350' : 'text-slate-600'} transition-colors group-hover:text-[#2A3B8F]`}>
                        Write a direct response
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Inline Secondary Actions */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => navigateTo('projects')}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-transform hover:-translate-y-0.5 cursor-pointer shadow-md shadow-indigo-500/10"
                >
                  Explore Work Projects
                </button>
                <button
                  onClick={() => navigateTo('contact')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-250 hover:bg-slate-700'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Contact me
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* "What Can I Do" Section */}
      <section id="what-can-i-do" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/80">
        <div className="text-left mb-12">
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold block mb-1">
            EXPERTISE & CAPABILITIES
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            What Can I Do
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-xl">
            Helping brands accelerate growth and monetisation through data-driven marketing and conversion optimisation.
          </p>
        </div>

        {/* 4 Clean Skill Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Block 1 */}
          <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/60 shadow-xs'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
              darkMode ? 'bg-rose-950/40 text-rose-400' : 'bg-rose-50 text-rose-600'
            }`}>
              <ShoppingBag className="h-5 w-5" />
            </div>
            <h3 className={`text-base font-bold mb-1 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              DTC E-commerce Operations
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-3 font-medium">
              Shopify & WordPress
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Growth Strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Category Management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Customer Experience</span>
              </li>
            </ul>
          </div>

          {/* Block 2 */}
          <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/60 shadow-xs'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
              darkMode ? 'bg-indigo-950/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
            }`}>
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className={`text-base font-bold mb-3 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Performance Marketing
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Paid Media (Google Ads)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>SEO & Content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Conversion Optimisation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>A/B Testing</span>
              </li>
            </ul>
          </div>

          {/* Block 3 */}
          <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/60 shadow-xs'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
              darkMode ? 'bg-emerald-950/40 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
            }`}>
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className={`text-base font-bold mb-3 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Campaign & Project Management
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Campaign Planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>GTM Execution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Cross-functional Collaboration</span>
              </li>
            </ul>
          </div>

          {/* Block 4 */}
          <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/60 shadow-xs'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
              darkMode ? 'bg-amber-950/40 text-amber-400' : 'bg-amber-50 text-amber-600'
            }`}>
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className={`text-base font-bold mb-3 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Data & Market Analytics
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Performance Analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Competitive Intelligence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Data Visualisation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>GA4</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Power BI, Google Looker Studio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-slate-400 dark:text-slate-600 font-bold">•</span>
                <span>Excel, SQL</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section id="project-showcase" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left">
            <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold block mb-1">
              FEATURED WORK
            </span>
            <h2 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
              Project Showcase
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Real-world results in market expansion, e-commerce growth, campaign operations, and search optimization across Europe.
            </p>
          </div>
          <button
            onClick={() => navigateTo('projects')}
            className={`group inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500 mt-4 md:mt-0 transition-colors cursor-pointer hover:text-indigo-600`}
          >
            <span>See All Projects</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Display 4 Different Types of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`group rounded-3xl border p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  : 'bg-white border-slate-200/60 hover:border-indigo-100 hover:shadow-indigo-500/5'
              }`}
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-indigo-500 font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-slate-500">{project.period}</span>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors group-hover:text-indigo-500 ${
                    darkMode ? 'text-white' : 'text-slate-950'
                  }`}>
                    {project.title}
                  </h3>
                </div>

                {/* Highlighted Results Box */}
                <div className={`p-4 rounded-xl text-xs font-medium border ${
                  darkMode
                    ? 'bg-indigo-950/20 border-indigo-900/30 text-indigo-300'
                    : 'bg-indigo-50/50 border-indigo-100/60 text-indigo-950'
                }`}>
                  <span className="font-bold font-mono text-[10px] tracking-widest uppercase block mb-1 text-indigo-500">
                    KEY OUTCOME & METRICS
                  </span>
                  <p className="line-clamp-2 leading-relaxed">{project.resultsSummary}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px]">{project.client}</span>
                <span className="text-indigo-500 flex items-center space-x-1">
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* "Watch More" Bottom Trigger */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('projects')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-indigo-500/15"
          >
            <span>Watch more / View all projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Embedded High Value Conversion Call to Action widget */}
      <section id="interactive-cta" className="mb-16 md:mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-3xl border p-8 md:p-10 overflow-hidden text-center z-10 ${
          darkMode
            ? 'bg-slate-900/40 border-slate-800 text-slate-100'
            : 'bg-slate-50 border-slate-200/50 text-slate-800 shadow-xs'
        }`}>
          {/* Subtle glow background */}
          <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className={`text-xl sm:text-2xl font-sans font-bold tracking-tight ${darkMode ? 'text-white' : 'text-[#2A3B8F]'}`}>
              Want to Learn More About Me?
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Discover my background, experiences, and projects, or reach out to start a conversation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigateTo('contact')}
                className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/10 transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
