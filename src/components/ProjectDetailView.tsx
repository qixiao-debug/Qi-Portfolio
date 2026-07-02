import { useState } from 'react';
import { ArrowLeft, Check, Compass, ShieldCheck, Database, Calendar, BarChart2, TrendingUp, AlertCircle, HelpCircle, Clock, Target, Award, Layers, Zap, Lightbulb, ArrowDown, Link, Wrench, FileText, Globe, Megaphone, DollarSign, Search, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import genshinUgreenBanner from '../assets/images/newsroom6.webp';

interface ProjectDetailProps {
  projectId: string;
  setCurrentView: (view: string) => void;
  darkMode: boolean;
}

export default function ProjectDetailView({ projectId, setCurrentView, darkMode }: ProjectDetailProps) {
  // Find project
  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];

  const [nexodeActiveFocus, setNexodeActiveFocus] = useState<string | null>(null);

  const handleBack = () => {
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safe KPI Sparkline Drawing
  const drawSparkline = (dataPoints: number[], color: string) => {
    if (!dataPoints || dataPoints.length < 2) return null;
    const width = 100;
    const height = 40;
    const max = Math.max(...dataPoints);
    const min = Math.min(...dataPoints);
    const range = max - min === 0 ? 1 : max - min;
    
    const points = dataPoints
      .map((val, idx) => {
        const x = (idx / (dataPoints.length - 1)) * width;
        const y = height - ((val - min) / range) * height;
        return `${x},${y}`;
      })
      .join(' ');

    return (
      <svg className="h-10 w-28" viewBox={`0 0 ${width} ${height}`}>
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    );
  };

  if (project.id === 'ugreen-netherlands-dtc-launch') {
    return (
      <div className={`relative pt-20 md:pt-28 pb-20 min-h-screen text-left transition-colors font-sans ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF9F5] text-slate-900'
      }`}>
        {/* Subtle Decorative Grid Pattern */}
        {!darkMode && (
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none -z-10" />
        )}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <button
            onClick={handleBack}
            className={`inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider mb-10 cursor-pointer transition-all hover:translate-x-[-2px] ${
              darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-[#0D5C4B] hover:text-[#0b483b]'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </button>

          {/* PROJECT HEADER SECTION */}
          <section className="mb-12">
            <div className={`pl-5 md:pl-7 border-l-[5px] md:border-l-[6px] ${
              darkMode ? 'border-emerald-500' : 'border-[#0D5C4B]'
            }`}>
              <div className="text-[11px] font-bold font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">
                E-COMMERCE · DTC · NETHERLANDS
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight leading-tight mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                UGREEN Netherlands — <span className={darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'}>DTC Website Launch</span>
              </h1>
              <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-4xl ${
                darkMode ? 'text-slate-300' : 'text-slate-600 font-medium'
              }`}>
                End-to-end operation of a direct-to-consumer storefront for the Dutch market from concept to profitability
              </p>
            </div>

            {/* Project Quick Meta Card */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 py-8 my-8 border-t border-b ${
              darkMode ? 'border-slate-800' : 'border-slate-200/60'
            }`}>
              <div>
                <div className="text-[11px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-1">
                  TIMELINE
                </div>
                <div className={`text-base font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Jan 2024 - May 2024
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-1">
                  MY ROLE
                </div>
                <div className={`text-base font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Webmaster / Site Operator
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-1">
                  MARKET
                </div>
                <div className={`text-base font-bold flex items-center gap-1 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  <span>Netherlands</span>
                  <a 
                    href="https://nl.ugreen.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center gap-0.5 text-xs font-normal underline ${
                      darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-[#0D5C4B] hover:text-[#0b483b]'
                    }`}
                  >
                    (nl.ugreen.com)
                    <Link className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-1">
                  MODEL
                </div>
                <div className={`text-base font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  DTC (Direct-to-Consumer)
                </div>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
              {[
                { value: "480%", label: "Q1 business metric growth" },
                { value: "€6K→€35K", label: "Monthly revenue, Jan–Mar" },
                { value: "15%", label: "Pre-tax margin by Mar" },
                { value: "ROAS 8", label: "Paid ads return" },
                { value: "2%", label: "Conversion rate (Mar)" },
                { value: "€65", label: "Avg. order value (Mar)", isFullOnMobile: true }
              ].map((m, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-xl border flex flex-col justify-between ${
                    m.isFullOnMobile ? 'col-span-2 md:col-span-1' : ''
                  } ${
                    darkMode 
                      ? 'bg-slate-900/40 border-slate-800' 
                      : 'bg-[#F5F4F0]/60 border-slate-200/40'
                  }`}
                >
                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                  }`}>
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-2 font-medium leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bounce Down Arrow */}
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => document.getElementById('nl-bg-section')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                <ArrowDown className="w-4 h-4 animate-bounce text-slate-900 dark:text-slate-100" />
              </button>
            </div>
          </section>

          {/* SECTION 1: Project Background & Objective */}
          <section id="nl-bg-section" className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-3 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  PROJECT BACKGROUND
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                  UGREEN, a global consumer electronics brand, identified the Netherlands as a strategic European entry point. The business required a localised DTC storefront built from the ground up — covering site architecture, payment infrastructure, logistics, marketing channels, product catalogue, and customer support — to test and validate demand ahead of broader European expansion.
                </p>
              </div>

              <div>
                <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-3 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  OBJECTIVE
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                  Launch and operate a fully functional Dutch e-commerce site within Q1 2024, validate product-market fit with target Dutch consumers, achieve sustainable unit economics, and establish channel infrastructure for future scaling.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: Scope & Tools */}
          <section className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Scope Column */}
              <div className="md:col-span-7">
                <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-4 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  MY SCOPE
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Website architecture & content localisation",
                    "Payment system setup & compliance",
                    "Logistics & last-mile fulfilment planning",
                    "Marketing funnel — paid, organic, SEO, EDM",
                    "Product selection, pricing & promotions",
                    "User retention programs & UX optimisation",
                    "Customer support process design",
                    "Performance monitoring & cost optimisation"
                  ].map((scope, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className={`h-1.5 w-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        darkMode ? 'bg-emerald-400' : 'bg-[#0D5C4B]'
                      }`} />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Column */}
              <div className="md:col-span-5">
                <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-4 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  TOOLS & CHANNELS
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Shopify", "Google Ads", "Meta Ads", "SEO / organic", "EDM", "Affiliate",
                    "Heatmaps", "GA4", "Loyalty points", "Referral program", "Cross-border 3PL"
                  ].map((tool, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs font-semibold px-4 py-2 rounded-full border tracking-wide ${
                        darkMode 
                          ? 'bg-emerald-950/20 border-emerald-900/30 text-emerald-400' 
                          : 'bg-[#E6F3F0] border-emerald-100/30 text-[#0D5C4B]'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Results & Challenges */}
          <section className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Results */}
              <div>
                <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-4 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  RESULTS
                </div>
                <ul className="space-y-4">
                  {[
                    "Revenue scaled from €6,000 to €35,000 across three months, a 480% increase in business metrics.",
                    "Pre-tax profit margin recovered from −180% in January to +15% in March through cost structure optimisation.",
                    "Conversion rate grew from 0.5% to 2%; average order value increased from €45 to €65.",
                    "Paid advertising drove 38% of traffic at ROAS 8; organic search contributed 29%, building durable long-term traffic.",
                    "Chargers (50% of revenue) and cables established as core profit drivers; slow-moving lines identified for phase-out."
                  ].map((result, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className={`h-1.5 w-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        darkMode ? 'bg-emerald-400' : 'bg-[#0D5C4B]'
                      }`} />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-4 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  CHALLENGES
                </div>
                <ul className="space-y-4">
                  {[
                    "High launch costs: marketing fees reached 140% of revenue in month one while the brand built audience from zero.",
                    "Last-mile delivery costs rose throughout Q1 due to cross-border transportation complexity, reaching 18% of total expenses.",
                    "Localisation requirements demanded careful content adaptation for Dutch language norms and regional compliance standards.",
                    "Payment gateway risk assessment and legal settlement processes required establishing procedures with no prior local precedent."
                  ].map((challenge, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="h-1.5 w-1.5 rounded-full mt-2 mr-3 flex-shrink-0 bg-amber-500" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4: Highlights & Lowlights */}
          <section className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-6 ${
              darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
            }`}>
              HIGHLIGHTS & LOWLIGHTS
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Highlight 1 */}
              <div className={`p-6 rounded-xl border-l-[4px] border ${
                darkMode 
                  ? 'bg-emerald-950/10 border-slate-800 border-l-emerald-500' 
                  : 'bg-[#E6F3F0] border-emerald-100/20 border-l-[#0D5C4B]'
              }`}>
                <div className={`text-xs font-bold uppercase font-mono tracking-wider mb-2 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  HIGHLIGHT
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                  Reached profitability in just three months with a lean team. Structuring the channel mix early — anchoring on paid for audience discovery, while seeding organic traffic in parallel — meant the business had compounding, lower-cost traffic by month three.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className={`p-6 rounded-xl border-l-[4px] border ${
                darkMode 
                  ? 'bg-emerald-950/10 border-slate-800 border-l-emerald-500' 
                  : 'bg-[#E6F3F0] border-emerald-100/20 border-l-[#0D5C4B]'
              }`}>
                <div className={`text-xs font-bold uppercase font-mono tracking-wider mb-2 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  HIGHLIGHT
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                  Product portfolio rationalisation: by mapping SKUs against gross margin and inventory turnover, I redirected promotional budget from slow-moving lines to high-margin chargers and cables, directly improving the profit profile.
                </p>
              </div>

              {/* Lowlight 1 */}
              <div className={`p-6 rounded-xl border-l-[4px] border ${
                darkMode 
                  ? 'bg-amber-950/10 border-slate-800 border-l-amber-500' 
                  : 'bg-amber-50/40 border-amber-100/20 border-l-amber-600'
              }`}>
                <div className="text-xs font-bold uppercase font-mono tracking-wider mb-2 text-amber-600">
                  LOWLIGHT
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                  January's −180% net margin exposed the risk of launching with high fixed advertising costs before any brand equity existed. A staged soft-launch or smaller paid test could have reduced early losses while achieving similar learning outcomes.
                </p>
              </div>

              {/* Lowlight 2 */}
              <div className={`p-6 rounded-xl border-l-[4px] border ${
                darkMode 
                  ? 'bg-amber-950/10 border-slate-800 border-l-amber-500' 
                  : 'bg-amber-50/40 border-amber-100/20 border-l-amber-600'
              }`}>
                <div className="text-xs font-bold uppercase font-mono tracking-wider mb-2 text-amber-600">
                  LOWLIGHT
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                  Last-mile delivery cost continued rising even as other cost lines improved. Earlier evaluation of local fulfilment partnerships versus cross-border shipping would have strengthened the unit economics from the start.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: Consulting Back CTA */}
          <section className="py-12 border-t border-slate-200/60 dark:border-slate-800/60 mt-8 text-center">
            <button
              onClick={() => setCurrentView('contact')}
              className={`px-6 py-3 rounded-lg text-xs font-semibold text-white cursor-pointer transition-all shadow-md hover:-translate-y-0.5 ${
                darkMode ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-[#0D5C4B] hover:bg-[#0b483b]'
              }`}
            >
              Contact me
            </button>
          </section>
        </div>
      </div>
    );
  }

  if (project.id === 'campaign-genshin-branding') {
    return (
      <div className={`relative pt-20 md:pt-28 pb-20 min-h-screen text-left transition-colors font-sans ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF9F5] text-slate-900'
      }`}>
        {/* Subtle Decorative Grid Pattern */}
        {!darkMode && (
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none -z-10" />
        )}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Link */}
          <button
            onClick={handleBack}
            className={`inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider mb-10 cursor-pointer transition-all hover:translate-x-[-2px] ${
              darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-[#4F46E5] hover:text-[#3B32C4]'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </button>

          {/* Main Header Block with Purple/Indigo Left Accent Bar */}
          <div className="pb-10">
            <div className={`pl-5 md:pl-7 border-l-[5px] md:border-l-[6px] ${
              darkMode ? 'border-indigo-500' : 'border-[#4F46E5]'
            }`}>
              <div className="text-[11px] font-bold font-mono tracking-[0.25em] uppercase text-slate-400 mb-2">
                CAMPAIGN MANAGEMENT · PARTNERSHIP · EUROPE
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight leading-none mb-4 ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}>
                Genshin Impact x UGREEN EU Collaboration Campaign
              </h1>
              <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-4xl ${
                darkMode ? 'text-slate-400' : 'text-slate-500 font-medium'
              }`}>
                Coordinated and executed a high-impact co-branded DTC marketing campaign across six European markets, driving massive brand awareness and record-breaking conversions.
              </p>
            </div>
          </div>

          {/* Campaign Banner Image */}
          <div className={`mb-10 overflow-hidden rounded-2xl border ${
            darkMode ? 'border-slate-800 shadow-slate-950/50' : 'border-slate-200 shadow-slate-200/50'
          } shadow-md`}>
            <img
              src={genshinUgreenBanner}
              alt="Genshin Impact x UGREEN Collaboration Campaign Banner"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Metadata Row Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div>
              <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-1">
                Timeline
              </div>
              <div className={`text-sm sm:text-base font-semibold ${
                darkMode ? 'text-slate-100' : 'text-slate-800'
              }`}>
                Feb 2025 - Jun 2025
              </div>
            </div>
            
            <div>
              <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-1">
                My Role
              </div>
              <div className={`text-sm sm:text-base font-semibold ${
                darkMode ? 'text-slate-100' : 'text-slate-850'
              }`}>
                DTC Project Owner
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-1">
                Markets
              </div>
              <div className={`text-sm sm:text-base font-semibold ${
                darkMode ? 'text-indigo-400' : 'text-[#4F46E5]'
              }`}>
                UK, DE, FR, IT, ES, NL
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-1">
                Partner
              </div>
              <div className={`text-sm sm:text-base font-semibold ${
                darkMode ? 'text-slate-100' : 'text-slate-800'
              }`}>
                Genshin Impact (miHoYo)
              </div>
            </div>
          </div>

          {/* Chronological Phase Blocks (Horizontal Side-by-Side Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
            {/* Phase 1: Pre-launch */}
            <div className={`p-5 rounded-xl border ${
              darkMode 
                ? 'bg-slate-900/40 border-slate-850/60' 
                : 'bg-indigo-50/20 border-indigo-100/60'
            }`}>
              <div className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-1 ${
                darkMode ? 'text-indigo-400' : 'text-indigo-650'
              }`}>
                FEB – MAR 2025 · PRE-LAUNCH
              </div>
              <div className={`text-sm font-semibold mb-2 ${
                darkMode ? 'text-slate-200' : 'text-indigo-950'
              }`}>
                Awareness & Lead Gen
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Coordinated lead generation tracks across European territories, gathered requirements, aligned teams, and defined the landing page architecture.
              </p>
            </div>

            {/* Phase 2: Launch */}
            <div className={`p-5 rounded-xl border ${
              darkMode 
                ? 'bg-slate-900/40 border-slate-850/60' 
                : 'bg-indigo-50/20 border-indigo-100/60'
            }`}>
              <div className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-1 ${
                darkMode ? 'text-indigo-400' : 'text-indigo-650'
              }`}>
                MAR – APR 2025 · LAUNCH
              </div>
              <div className={`text-sm font-semibold mb-2 ${
                darkMode ? 'text-slate-200' : 'text-indigo-950'
              }`}>
                Campaign Hub Bootup
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Launched co-branded campaign pages, activated interactive giveaway modules, and drove high-intent traffic via social media, EDM, and paid media.
              </p>
            </div>

            {/* Phase 3: Post-launch */}
            <div className={`p-5 rounded-xl border ${
              darkMode 
                ? 'bg-indigo-950/20 border-indigo-900/40' 
                : 'bg-indigo-100 border-indigo-200'
            }`}>
              <div className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-1 ${
                darkMode ? 'text-indigo-300' : 'text-indigo-850'
              }`}>
                APR – JUN 2025 · POST-LAUNCH
              </div>
              <div className={`text-sm font-semibold mb-2 ${
                darkMode ? 'text-indigo-50' : 'text-indigo-950'
              }`}>
                Optimisation & Analysis
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Monitored conversion funnels, adjusted traffic budgets dynamically, resolved friction spots, and mapped final ROI metrics.
              </p>
            </div>
          </div>

          {/* 5 Metrics KPI Cards Grid */}
          <div className="pt-8 pb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
              {/* Card 1 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-indigo-400' : 'text-[#4F46E5]'
                }`}>
                  1.2M+
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Website sessions / visits
                </div>
              </div>

              {/* Card 2 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-indigo-400' : 'text-[#4F46E5]'
                }`}>
                  4.8%
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Average conversion rate
                </div>
              </div>

              {/* Card 3 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-indigo-400' : 'text-[#4F46E5]'
                }`}>
                  €2.3M+
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Total campaign sales revenue
                </div>
              </div>

              {/* Card 4 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-indigo-400' : 'text-[#4F46E5]'
                }`}>
                  50K+
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Customer interactive plays
                </div>
              </div>

              {/* Card 5 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-indigo-400' : 'text-[#4F46E5]'
                }`}>
                  60%+
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  EDM & social traffic share
                </div>
              </div>
            </div>
            
            {/* Bounce Down Arrow Button */}
            <div className="flex justify-center mt-10">
              <button 
                onClick={() => {
                  document.getElementById('genshin-background')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Project Background */}
          <section id="genshin-background" className="py-12 border-t border-slate-200/60">
            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-4">
              PROJECT BACKGROUND
            </div>
            <p className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              UGREEN launched its highly anticipated Genshin Impact co-branded charging accessories in Europe. To maximize commercial performance, the campaign was integrated into UGREEN's European DTC storefronts (France, Germany, and Netherlands) with dedicated landing experiences. As a DTC Project Owner, I designed and managed localized Shopify storefront operations, optimizing user flows and cross-channel marketing alignments to drive sales.
            </p>
          </section>

          {/* Campaign Objective & My Scope / Tools Grid */}
          <section id="genshin-objective-scope" className="py-12 border-t border-slate-200/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Column: Objective */}
              <div>
                <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-5">
                  CAMPAIGN OBJECTIVE
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-sm font-bold mb-2 uppercase tracking-wide font-mono ${darkMode ? 'text-indigo-400' : 'text-[#4F46E5]'}`}>
                      Brand Goal
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Increase brand awareness among Gen Z audiences in Europe. Expand share of voice and brand mentions through the Genshin Impact collaboration.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold mb-2 uppercase tracking-wide font-mono ${darkMode ? 'text-indigo-400' : 'text-[#4F46E5]'}`}>
                      Business Goal
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Drive sales growth for power banks and charging products, and support campaign conversion through the official website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: My Scope & Tools */}
              <div>
                <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-5">
                  MY SCOPE
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Project coordination & resource management",
                    "Campaign strategy & customer touchpoints plan",
                    "Official website strategy & checkout flow",
                    "Performance marketing strategy across channels",
                    "User experience optimisation & mobile layout"
                  ].map((scopeItem, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`inline-block mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        darkMode ? 'bg-indigo-400' : 'bg-[#4F46E5]'
                      }`} />
                      <span className={`text-sm sm:text-base ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {scopeItem}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-4">
                  TOOLS & CHANNELS
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Campaign Hub",
                    "Genshin IP",
                    "Social Media",
                    "EDM",
                    "Paid Media",
                    "Conversion Funnels",
                    "UTM Attribution",
                    "UX heatmaps",
                    "Mobile checkout"
                  ].map((tool, index) => (
                    <span
                      key={index}
                      className={`text-xs px-4 py-2 font-medium tracking-wide rounded-full ${
                        darkMode 
                          ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-900/60' 
                          : 'bg-[#EBF1FE] text-[#4F46E5] border border-[#CBD5E1]'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bounce Down Arrow Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => {
                  document.getElementById('genshin-work-delivered')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </section>

          {/* Work Delivered Grid */}
          <section id="genshin-work-delivered" className="py-12 border-t border-slate-200/60">
            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-6">
              WORK DELIVERED
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Card 1 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <Database className={`w-5 h-5 mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Cross-team Coordination
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Coordinated marketing, design, development, and localisation teams across HQ and EU regions to align campaign milestones.
                </p>
              </div>

              {/* Card 2 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <FileText className={`w-5 h-5 mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Campaign Hub Setup
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Launched dedicated collaboration landing pages featuring tailored Genshin Impact graphics and product presentation elements.
                </p>
              </div>

              {/* Card 3 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <Layers className={`w-5 h-5 mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Giveaway Modules
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Designed and activated event participation flows, interactive quizzes, and instant-win user giveaway activities.
                </p>
              </div>

              {/* Card 4 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <Link className={`w-5 h-5 mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Omnichannel Sourcing
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Successfully configured and directed traffic from paid ads, social media mentions, and EDM lists to the central hub.
                </p>
              </div>
            </div>

            {/* Bounce Down Arrow Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => {
                  document.getElementById('genshin-results-challenges')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </section>

          {/* Results & Challenges Bullet Lists */}
          <section id="genshin-results-challenges" className="py-12 border-t border-slate-200/60">
            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-5">
              RESULTS
            </div>
            <ul className="space-y-4 mb-14">
              {[
                "Generated over 1.2 million website sessions within the 4-month campaign window, easily surpassing original targets.",
                "Achieved an outstanding 4.8% average conversion rate, representing a 54% lift over the historic brand benchmark.",
                "Direct sales revenue generated topped €2.3 million across Europe, setting a new record for co-branded launches.",
                "Logged more than 50,000 interactions on user engagement/giveaway modules, driving widespread community referral.",
                "Successfully orchestrated social media, paid media, and EDM channels to direct 60%+ of campaign traffic to the central hub."
              ].map((result, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={`inline-block mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    darkMode ? 'bg-indigo-400' : 'bg-slate-800'
                  }`} />
                  <span className={`text-sm sm:text-base leading-relaxed ${
                    darkMode ? 'text-slate-305' : 'text-slate-705'
                  }`}>
                    {result}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-5">
              CHALLENGES
            </div>
            <ul className="space-y-4">
              {[
                "Balancing brand experience and conversion: The collaboration page needed to maintain the visual identity of Genshin Impact while still guiding users toward product discovery and purchase.",
                "Diverse audience characteristics across Europe: The campaign targeted users across multiple European markets where audience demographics and product preferences varied significantly.",
                "Cross-functional collaboration overhead: Coordinated marketing, design, development, and localisation teams across HQ and EU regions, resolving scheduling dependencies.",
                "Data tracking accuracy: Remediated early UTM tagging gaps across social and paid channels to establish robust multi-touch attribution."
              ].map((challenge, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={`inline-block mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    darkMode ? 'bg-orange-400' : 'bg-slate-800'
                  }`} />
                  <span className={`text-sm sm:text-base leading-relaxed ${
                    darkMode ? 'text-slate-305' : 'text-slate-705'
                  }`}>
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bounce Down Arrow Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => {
                  document.getElementById('genshin-highlights-lowlights')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </section>

          {/* Highlights & Lowlights */}
          <section id="genshin-highlights-lowlights" className="py-12 border-t border-slate-200/60">
            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-6">
              HIGHLIGHTS & LOWLIGHTS
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Highlight 1 */}
              <div className={`p-6 sm:p-7 rounded-xl border-l-[4px] sm:border-l-[5px] transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-indigo-500 border-t border-r border-b border-slate-800/80 shadow-xs' 
                  : 'bg-[#EBF1FE] border-indigo-650 border-t border-r border-b border-slate-200 shadow-xs'
              }`}>
                <div className={`text-[11px] font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-800 font-bold'
                }`}>
                  HIGHLIGHT
                </div>
                <h3 className={`text-sm font-bold font-sans tracking-wide uppercase mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  End-to-End Website Ownership
                </h3>
                <p className={`text-sm leading-relaxed font-sans ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Successfully owned the entire website process from requirements definition to timeline alignment, frontend testing, sitemap registration, and direct tracking configuration. Ensured a flawless and highly stable campaign site launch.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className={`p-6 sm:p-7 rounded-xl border-l-[4px] sm:border-l-[5px] transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-indigo-500 border-t border-r border-b border-slate-800/80 shadow-xs' 
                  : 'bg-[#EBF1FE] border-indigo-650 border-t border-r border-b border-slate-200 shadow-xs'
              }`}>
                <div className={`text-[11px] font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-800 font-bold'
                }`}>
                  HIGHLIGHT
                </div>
                <h3 className={`text-sm font-bold font-sans tracking-wide uppercase mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Customer-Centric UX & Mobile Tuning
                </h3>
                <p className={`text-sm leading-relaxed font-sans ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Optimised the layout specifically for mobile. Redesigned the checkout routing and checkout layout details to maximize speed and simplicity, contributing to the outstanding 5% conversion rate.
                </p>
              </div>

              {/* Lowlight 1 */}
              <div className={`p-6 sm:p-7 rounded-xl border-l-[4px] sm:border-l-[5px] transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-[#E06E4B] border-t border-r border-b border-slate-800/80 shadow-xs' 
                  : 'bg-[#FAF1EE] border-[#D95F38] border-t border-r border-b border-slate-200 shadow-xs'
              }`}>
                <div className={`text-[11px] font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-orange-400' : 'text-[#D95F38] font-bold'
                }`}>
                  LOWLIGHT
                </div>
                <h3 className={`text-xs font-bold font-sans tracking-wide uppercase mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Late-stage Requirement Changes
                </h3>
                <p className={`text-sm leading-relaxed font-sans ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Last-minute scope and graphics adjustments from regional stakeholders compressed the website development timeline, demanding intense rapid re-prioritisation and emergency testing rounds to protect the launch date.
                </p>
              </div>

              {/* Lowlight 2 */}
              <div className={`p-6 sm:p-7 rounded-xl border-l-[4px] sm:border-l-[5px] transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-[#E06E4B] border-t border-r border-b border-slate-800/80 shadow-xs' 
                  : 'bg-[#FAF1EE] border-[#D95F38] border-t border-r border-b border-slate-200 shadow-xs'
              }`}>
                <div className={`text-[11px] font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-orange-400' : 'text-[#D95F38] font-bold'
                }`}>
                  LOWLIGHT
                </div>
                <h3 className={`text-xs font-bold font-sans tracking-wide uppercase mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Data Tracking Hurdles
                </h3>
                <p className={`text-sm leading-relaxed font-sans ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Inconsistent early UTM naming patterns across multiple referring media partner channels caused temporary data visibility gaps during the first week of pre-launch. Active intervention and guidelines training successfully resolved this.
                </p>
              </div>
            </div>
          </section>

          {/* Call to action diagnostic audit */}
          <section id="consulting-action" className={`mt-14 py-10 border-t ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-1.5 text-left">
                <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Interested in building high-performing campaign hubs?
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                  Let's design and audit your conversion funnels, set up transparent multi-touch analytics, and deliver remarkable growth patterns for Gen Z audiences.
                </p>
              </div>
              <button
                onClick={() => setCurrentView('contact')}
                className={`w-full sm:w-auto px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-md cursor-pointer transition-transform hover:-translate-y-0.5 whitespace-nowrap ${
                  darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-[#4F46E5] hover:bg-[#3B32C4]'
                }`}
              >
                Schedule Diagnostic Audit
              </button>
            </div>
          </section>

        </div>
      </div>
    );
  }

  if (project.id === 'ugreen-netherlands-dtc' || project.id === 'market-expansion-south-africa') {
    const scopeCards = [
      {
        id: 'competitive',
        title: 'COMPETITIVE INTELLIGENCE',
        icon: '🔍',
        focusArea: 'Competitive Intelligence',
        description: 'Benchmarked Anker Prime across specs, pricing, campaign strategy, and market positioning to inform product strategy and messaging differentiation.'
      },
      {
        id: 'landing',
        title: 'LANDING PAGE OPTIMISATION',
        icon: '🌐',
        focusArea: 'Landing Page Optimisation',
        description: 'Designed and iterated the DTC page architecture (topic page -> collection page -> product page) to improve traffic-to-conversion flow. Uplift in product page referral from topic page: from 2% to 22%.'
      },
      {
        id: 'traffic',
        title: 'TRAFFIC ACTIVATION',
        icon: '📣',
        focusArea: 'Traffic Activation',
        description: 'Coordinated paid media (Meta Brand Ads, Google CPC), EDM campaigns, KOL/Influencer activation, SNS content, and PR outreach across the European market.'
      },
      {
        id: 'revenue',
        title: 'REVENUE GENERATION',
        icon: '💰',
        focusArea: 'Revenue Generation',
        description: 'Managed SKU-level resource allocation, adjusted budget weighting in response to conversion data, and drove Month 2 to 106% target achievement despite 25% traffic decline.'
      },
      {
        id: 'coordination',
        title: 'CROSS-TEAM COORDINATION',
        icon: '🔗',
        focusArea: 'Cross-team Coordination',
        description: 'Liaised between DTC marketing, AMZ operations, creative, and PR teams; aligned on GTM forecast revisions and seasonal campaign planning.'
      },
      {
        id: 'task',
        title: 'INTERNAL TASK ALLOCATION',
        icon: '📋',
        focusArea: 'Task Allocation',
        description: 'Owned resource prioritisation and internal DTC task management, balancing channel budgets and team workload across the multi-SKU launch.'
      }
    ];

    const focusAreas = [
      { name: 'Traffic Activation', primary: true },
      { name: 'Revenue Generation', primary: true },
      { name: 'Competitive Intelligence', primary: false },
      { name: 'Landing Page Optimisation', primary: false },
      { name: 'Cross-team Coordination', primary: false },
      { name: 'Task Allocation', primary: false }
    ];

    return (
      <div className={`relative pt-20 md:pt-28 pb-20 min-h-screen text-left transition-colors font-sans ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF9F5] text-slate-900'
      }`}>
        {/* Subtle Decorative Elements */}
        {!darkMode && (
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none -z-10" />
        )}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Link */}
          <button
            onClick={handleBack}
            className={`inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider mb-10 cursor-pointer transition-all hover:translate-x-[-2px] ${
              darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-[#0D5C4B] hover:text-[#0b483b]'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </button>

          {/* PROJECT HEADER SECTION */}
          <section className="mb-12">
            <div className={`pl-5 md:pl-7 border-l-[5px] md:border-l-[6px] ${
              darkMode ? 'border-emerald-500' : 'border-[#0D5C4B]'
            }`}>
              <div className="text-[11px] font-bold font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">
                E-COMMERCE · DTC · EUROPE
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight leading-tight mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Nexode Power Bank <span className={darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'}>EU DTC Launch</span>
              </h1>
              <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-4xl ${
                darkMode ? 'text-slate-300' : 'text-slate-600 font-medium'
              }`}>
                End-to-end go-to-market execution for UGREEN's flagship Nexode Power Bank series on the European DTC channel — from competitive intelligence to traffic activation and revenue generation.
              </p>
            </div>

            {/* Project Quick Meta Card */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 py-8 my-8 border-t border-b ${
              darkMode ? 'border-slate-850' : 'border-slate-200/60'
            }`}>
              <div>
                <div className="text-[11px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-1">
                  COMPANY
                </div>
                <div className={`text-base font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  UGREEN
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-1">
                  CHANNEL
                </div>
                <div className={`text-base font-bold flex items-center gap-1 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  <span>DTC (Official Website)</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-1">
                  MARKET
                </div>
                <div className={`text-base font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Europe (DE, UK, FR, ES, IT)
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-1">
                  DURATION
                </div>
                <div className={`text-base font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  July 8 – August 31, 2024
                </div>
              </div>
            </div>

            {/* Campaign Link Row (Directly below Duration / Metadata Row) */}
            <div className={`flex flex-col sm:flex-row sm:items-center gap-2.5 px-5 py-4 rounded-xl border mb-8 -mt-2 transition-colors ${
              darkMode ? 'bg-slate-900/30 border-slate-850 text-slate-300' : 'bg-slate-50 border-slate-200/65 text-slate-600'
            }`}>
              <span className="text-xs font-bold font-mono tracking-wider uppercase text-slate-400">Campaign URL:</span>
              <a 
                href="https://eu.ugreen.com/pages/ugreen-nexode-power-bank" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-sm font-bold tracking-tight hover:underline transition-colors ${
                  darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-[#0D5C4B] hover:text-[#0b483b]'
                }`}
              >
                <span>https://eu.ugreen.com/pages/ugreen-nexode-power-bank</span>
                <Link className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Bounce Down Arrow */}
            <div className="flex justify-center mt-6">
              <button 
                onClick={() => document.getElementById('section-background')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                <ArrowDown className="w-4 h-4 animate-bounce text-slate-900 dark:text-slate-100" />
              </button>
            </div>
          </section>

          {/* SECTION 1: Project Background */}
          <section id="section-background" className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-left mb-6">
              <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-2 ${
                darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
              }`}>
                01 · PROJECT BACKGROUND
              </div>
              <h2 className={`text-2xl sm:text-3xl font-sans font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Launching a flagship series into a new market
              </h2>
            </div>

            <div className="space-y-6 text-left mb-8">
              <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-650'}`}>
                UGREEN's Nexode Power Bank series — anchored by the PB7*1 as the hero SKU — was simultaneously launched across Amazon EU and the UGREEN European DTC website in July 2024. The DTC channel served as both a direct revenue stream and a brand-building platform, distinct from the Amazon marketplace strategy.
              </p>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-655'}`}>
                The launch portfolio consisted of three new products (PB7*1, PB7*4, PB7*2) and two legacy products (PB7*0, PB2*5), each targeting different price segments in the high-power portable charging category. The key competitive threat was Anker Prime, the market benchmark in the premium power bank segment.
              </p>
            </div>

            {/* Product Targets Table */}
            <div className={`overflow-hidden rounded-xl border ${
              darkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-[#FCFBF9]'
            }`}>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`border-b text-[10px] font-bold font-mono tracking-wider uppercase ${
                      darkMode ? 'border-slate-800 bg-slate-900/50 text-slate-400' : 'border-slate-200 bg-[#F5F4F0] text-slate-500'
                    }`}>
                      <th className="py-4 px-6">SKU</th>
                      <th className="py-4 px-6">TYPE</th>
                      <th className="py-4 px-6 text-right">DTC TARGET (TTL)</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y text-sm ${darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-200 text-slate-700'}`}>
                    {[
                      { sku: 'PB7*1', type: 'New / Hero', target: '1,750 units' },
                      { sku: 'PB7*4', type: 'New', target: '890 units' },
                      { sku: 'PB7*2', type: 'New', target: '610 units' },
                      { sku: 'PB7*0', type: 'Legacy', target: '595 units' },
                      { sku: 'PB2*5', type: 'Legacy / Strong', target: '995 units' },
                    ].map((row, idx) => (
                      <tr key={idx} className={darkMode ? 'hover:bg-slate-900/20' : 'hover:bg-slate-50/50'}>
                        <td className="py-4 px-6 font-bold">{row.sku}</td>
                        <td className="py-4 px-6">{row.type}</td>
                        <td className="py-4 px-6 text-right font-bold">{row.target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bounce Down Arrow */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => document.getElementById('section-timeline')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                <ArrowDown className="w-4 h-4 animate-bounce text-slate-900 dark:text-slate-100" />
              </button>
            </div>
          </section>

          {/* SECTION 2: Timeline */}
          <section id="section-timeline" className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-left mb-10">
              <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-2 ${
                darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
              }`}>
                02 · TIMELINE
              </div>
              <h2 className={`text-2xl sm:text-3xl font-sans font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Launch to stabilisation
              </h2>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-12 text-left">
              {[
                {
                  tag: 'Pre-launch · Jun 2024',
                  title: 'Competitive Intelligence & Page Preparation',
                  desc: 'Competitive benchmarking against Anker Prime; landing page architecture design (topic page, collection page, product pages); campaign and traffic channel planning.'
                },
                {
                  tag: 'Jul 8, 2024',
                  title: 'Official Launch — DTC Go-Live',
                  desc: 'EDM launch sequence triggered; Meta Brand Ads and Google CPC campaigns activated; Influencer / KOL and PR outreach initiated.'
                },
                {
                  tag: 'Jul 8 - Jul 31',
                  title: 'Month 1: Traffic Burst & Conversion Calibration',
                  desc: 'Peak traffic driven by Brand Ads (Meta: 33% of topic page traffic) and campaign cadence. PB7*4 under-conversion identified; resource reallocation initiated mid-month. Schroeder co-branding activation provided mid-period traffic uplift.'
                },
                {
                  tag: 'Aug 1 - Aug 31',
                  title: 'Month 2: Strategy Adjustment & Conversion Optimisation',
                  desc: 'Shifted budget from topic page to product page to shorten conversion path. PB7*4 resources deprioritised; PB7*1 and PB2*5 amplified. Added AMZ DSP options and autumn promotional deals planning. Overall target exceeded 106% (incl. PB7*2).'
                },
                {
                  tag: 'Sep - Oct 2024',
                  title: 'Autumn Season Planning (Handoff)',
                  desc: 'Campaign pipeline set for Apple Event, Oktoberfest, and Halloween promotional moments. KOL video content quality control and PR outreach for IFA coverage.'
                }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Bullet Dot */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#FAF9F5] dark:bg-slate-950 ${
                    darkMode ? 'border-emerald-500' : 'border-[#0D5C4B]'
                  }`} />
                  
                  <div>
                    <span className={`text-[11px] font-bold font-mono tracking-wider uppercase ${
                      darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                    }`}>
                      {item.tag}
                    </span>
                    <h4 className={`text-base sm:text-lg font-bold mt-1 mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bounce Down Arrow */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => document.getElementById('section-objective')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                <ArrowDown className="w-4 h-4 animate-bounce text-slate-900 dark:text-slate-100" />
              </button>
            </div>
          </section>

          {/* SECTION 3: Objective */}
          <section id="section-objective" className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-left mb-8">
              <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-2 ${
                darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
              }`}>
                03 · OBJECTIVE
              </div>
              <h2 className={`text-2xl sm:text-3xl font-sans font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                What success looked like
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {/* Card 1: 4,230 */}
              <div className={`p-6 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-[#F5F4F0] border-transparent'
              }`}>
                <div className={`text-4xl font-black tracking-tight mb-2 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  4,230
                </div>
                <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-2">
                  TOTAL UNITS — DTC SALES TARGET (TTL)
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Combined goal across 5 SKUs for the full launch period through end of August.
                </p>
              </div>

              {/* Card 2: 1,750 */}
              <div className={`p-6 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-[#F5F4F0] border-transparent'
              }`}>
                <div className={`text-4xl font-black tracking-tight mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  1,750
                </div>
                <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-2">
                  HERO SKU TARGET — PB7*1
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Largest individual SKU target, designated as primary traffic and conversion anchor.
                </p>
              </div>

              {/* Card 3: 37% */}
              <div className={`p-6 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-[#F5F4F0] border-transparent'
              }`}>
                <div className="text-4xl font-black tracking-tight mb-2 text-[#E27D22]">
                  37%
                </div>
                <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-2">
                  MONTH 1 ACHIEVEMENT RATE (JUL)
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-655'}`}>
                  1,575 of 4,230 units — expected partial result given multi-month target horizon.
                </p>
              </div>

              {/* Card 4: 106% */}
              <div className={`p-6 rounded-2xl border-2 transition-all ${
                darkMode 
                  ? 'bg-emerald-950/20 border-emerald-500/50' 
                  : 'bg-[#FAF6F4] border-[#0D5C4B]'
              }`}>
                <div className={`text-4xl font-black tracking-tight mb-2 ${
                  darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
                }`}>
                  106%
                </div>
                <div className="text-[10px] font-bold font-mono tracking-wider text-[#8A8985] uppercase mb-2">
                  MONTH 2 MONTHLY TARGET ACHIEVED (AUG)
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  1,280 units vs 1,205 target (incl. PB7*2). Conversion trend improving despite 25% traffic decline.
                </p>
              </div>
            </div>

            {/* Bounce Down Arrow */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => document.getElementById('section-role-scope')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                <ArrowDown className="w-4 h-4 animate-bounce text-slate-900 dark:text-slate-100" />
              </button>
            </div>
          </section>

          {/* SECTION 4: My Role & Scope */}
          <section id="section-role-scope" className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-left mb-8">
              <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-2 ${
                darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
              }`}>
                04 · MY ROLE & SCOPE
              </div>
              <h2 className={`text-2xl sm:text-3xl font-sans font-bold tracking-tight mb-3 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                DTC EU Launch Manager
              </h2>
              <p className={`text-base leading-relaxed max-w-4xl ${darkMode ? 'text-slate-300' : 'text-slate-600 font-medium'}`}>
                I was responsible for the end-to-end DTC EU product launch for the Nexode Power Bank series, owning both strategy and execution within the DTC department. My primary focus was traffic activation and revenue generation, with cross-functional coordination across marketing, operations, and creative teams.
              </p>
            </div>

            {/* Scope Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-8">
              {scopeCards.map((card) => {
                const isSelected = nexodeActiveFocus === card.focusArea;
                const hasSelection = nexodeActiveFocus !== null;
                const isDimmed = hasSelection && !isSelected;
                
                return (
                  <div
                    key={card.id}
                    onClick={() => {
                      if (nexodeActiveFocus === card.focusArea) {
                        setNexodeActiveFocus(null);
                      } else {
                        setNexodeActiveFocus(card.focusArea);
                      }
                    }}
                    className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? darkMode 
                          ? 'bg-emerald-950/20 border-emerald-500 shadow-lg shadow-emerald-900/10 scale-[1.02]' 
                          : 'bg-[#FAF6F4] border-[#0D5C4B] shadow-md scale-[1.02]'
                        : isDimmed
                        ? 'opacity-40 border-transparent bg-transparent'
                        : darkMode
                        ? 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                        : 'bg-[#F5F4F0] border-transparent hover:bg-slate-200/50'
                    }`}
                  >
                    <div className="text-2xl mb-3">{card.icon}</div>
                    <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-2">
                      {card.title}
                    </div>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Primary Focus Areas Filters */}
            <div className={`p-5 rounded-xl border text-left ${
              darkMode ? 'bg-slate-900/20 border-slate-800/80' : 'bg-slate-50 border-slate-200/50'
            }`}>
              <div className="text-[10px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-3">
                PRIMARY FOCUS AREAS (CLICK TO FILTER CARDS)
              </div>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((fa) => {
                  const isActive = nexodeActiveFocus === fa.name;
                  return (
                    <button
                      key={fa.name}
                      onClick={() => {
                        if (isActive) {
                          setNexodeActiveFocus(null);
                        } else {
                          setNexodeActiveFocus(fa.name);
                        }
                      }}
                      className={`text-xs font-semibold px-4 py-2 rounded-full border tracking-wide transition-all ${
                        isActive
                          ? darkMode
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400'
                            : 'bg-[#0D5C4B] border-transparent text-white'
                          : fa.primary
                          ? darkMode
                            ? 'bg-emerald-950/10 border-emerald-900/40 text-emerald-400/80 hover:bg-emerald-900/20'
                            : 'bg-[#E6F3F0] border-emerald-100/50 text-[#0D5C4B] hover:bg-emerald-100'
                          : darkMode
                          ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      ● {fa.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bounce Down Arrow */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => document.getElementById('section-results')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                <ArrowDown className="w-4 h-4 animate-bounce text-slate-900 dark:text-slate-100" />
              </button>
            </div>
          </section>

          {/* SECTION 5: Results */}
          <section id="section-results" className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-left mb-8">
              <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-2 ${
                darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
              }`}>
                05 · RESULTS
              </div>
              <h2 className={`text-2xl sm:text-3xl font-sans font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Two-month performance
              </h2>
            </div>

            {/* Double Tables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-8">
              {/* Table 1: Month 1 */}
              <div>
                <div className="text-xs font-bold font-mono text-[#8A8985] uppercase mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  上市首月 (July 8-31) · DTC Launch Month
                </div>
                <div className={`overflow-hidden rounded-xl border ${
                  darkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-[#FCFBF9]'
                }`}>
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className={`border-b text-[10px] font-bold font-mono tracking-wider uppercase ${
                        darkMode ? 'border-slate-800 bg-slate-900/50 text-slate-400' : 'border-slate-200 bg-[#F5F4F0] text-slate-500'
                      }`}>
                        <th className="py-3 px-4">SKU</th>
                        <th className="py-3 px-4">Target</th>
                        <th className="py-3 px-4">Actual</th>
                        <th className="py-3 px-4 text-right">Rate</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-200 text-slate-700'}`}>
                      {[
                        { sku: 'PB7*1', target: '650', actual: '580', rate: '89%' },
                        { sku: 'PB7*4', target: '330', actual: '100', rate: '30%', highlight: true },
                        { sku: 'PB7*2', target: '230', actual: '185', rate: '80%' },
                        { sku: 'PB7*0', target: '220', actual: '195', rate: '89%' },
                        { sku: 'PB2*5', target: '370', actual: '515', rate: '139%', positive: true },
                        { sku: 'Total', target: '1,800', actual: '1,575', rate: '88%', isTotal: true },
                      ].map((row, idx) => (
                        <tr key={idx} className={`${
                          row.isTotal ? 'font-bold bg-slate-500/5' : ''
                        } ${darkMode ? 'hover:bg-slate-900/20' : 'hover:bg-slate-50/50'}`}>
                          <td className="py-3 px-4 font-bold">{row.sku}</td>
                          <td className="py-3 px-4">{row.target} units</td>
                          <td className="py-3 px-4">{row.actual} units</td>
                          <td className={`py-3 px-4 text-right font-bold ${
                            row.positive 
                              ? 'text-emerald-500 dark:text-emerald-400' 
                              : row.highlight 
                              ? 'text-amber-500 dark:text-amber-400' 
                              : ''
                          }`}>{row.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: Month 2 */}
              <div>
                <div className="text-xs font-bold font-mono text-emerald-500 dark:text-emerald-400 uppercase mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  8月复盘 (August 1-31) · August Review
                </div>
                <div className={`overflow-hidden rounded-xl border ${
                  darkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-[#FCFBF9]'
                }`}>
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className={`border-b text-[10px] font-bold font-mono tracking-wider uppercase ${
                        darkMode ? 'border-slate-800 bg-slate-900/50 text-slate-400' : 'border-slate-200 bg-[#F5F4F0] text-slate-500'
                      }`}>
                        <th className="py-3 px-4">SKU</th>
                        <th className="py-3 px-4">Target</th>
                        <th className="py-3 px-4">Actual</th>
                        <th className="py-3 px-4 text-right">Rate</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-200 text-slate-700'}`}>
                      {[
                        { sku: 'PB7*1', target: '485', actual: '505', rate: '104%', positive: true },
                        { sku: 'PB7*4', target: '225', actual: '130', rate: '58%', highlight: true },
                        { sku: 'PB7*2', target: '150', actual: '115', rate: '77%' },
                        { sku: 'PB7*0', target: '120', actual: '145', rate: '121%', positive: true },
                        { sku: 'PB2*5', target: '225', actual: '385', rate: '171%', positive: true },
                        { sku: 'Total', target: '1,205', actual: '1,280', rate: '106%', isTotal: true, positive: true },
                      ].map((row, idx) => (
                        <tr key={idx} className={`${
                          row.isTotal ? 'font-bold bg-slate-500/5' : ''
                        } ${darkMode ? 'hover:bg-slate-900/20' : 'hover:bg-slate-50/50'}`}>
                          <td className="py-3 px-4 font-bold">{row.sku}</td>
                          <td className="py-3 px-4">{row.target} units</td>
                          <td className="py-3 px-4">{row.actual} units</td>
                          <td className={`py-3 px-4 text-right font-bold ${
                            row.positive 
                              ? 'text-emerald-500 dark:text-emerald-400' 
                              : row.highlight 
                              ? 'text-amber-500 dark:text-amber-400' 
                              : ''
                          }`}>{row.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Results Insights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className={`p-6 rounded-xl border ${
                darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-[#F5F4F0] border-transparent'
              }`}>
                <h4 className={`text-sm font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-emerald-400' : 'bg-[#0D5C4B]'}`} />
                  Unit target achievement
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Month 1 (Jul) secured <strong>88%</strong> achievement (1,575 units sold), building vital market baseline. Month 2 (Aug) accelerated to <strong>106%</strong> achievement (1,280 units sold) despite seasonal headwinds.
                </p>
              </div>

              <div className={`p-6 rounded-xl border ${
                darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-[#F5F4F0] border-transparent'
              }`}>
                <h4 className={`text-sm font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`w-2 h-2 rounded-full bg-amber-500`} />
                  Revenue focus shift
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  PB7*4 suffered low conversion. Resources were actively shifted mid-August from underperforming configurations to high-demand PB7*1 and PB2*5 to secure blanded margins.
                </p>
              </div>

              <div className={`p-6 rounded-xl border ${
                darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-[#F5F4F0] border-transparent'
              }`}>
                <h4 className={`text-sm font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-emerald-400' : 'bg-[#0D5C4B]'}`} />
                  Hero SKU performance
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Hero SKU PB7*1 achieved <strong>104%</strong> target in August. Legacy powerhouse SKU PB2*5 recorded a massive <strong>171%</strong> achievement rate, offsetting slow-converting SKUs.
                </p>
              </div>
            </div>

            {/* Bounce Down Arrow */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => document.getElementById('section-challenges')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                <ArrowDown className="w-4 h-4 animate-bounce text-slate-900 dark:text-slate-100" />
              </button>
            </div>
          </section>

          {/* SECTION 6: Challenges */}
          <section id="section-challenges" className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-left mb-8">
              <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-2 ${
                darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
              }`}>
                06 · CHALLENGES
              </div>
              <h2 className={`text-2xl sm:text-3xl font-sans font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                What made this hard
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                {
                  title: '1. PB7*4 Conversion Roadblock',
                  desc: 'Despite strong interest, the PB7*4 was priced too high, leading to low conversion rates against Anker.'
                },
                {
                  title: '2. Amazon Channel Drag',
                  desc: 'Simultaneous launches on Amazon EU created price/promo mismatches, leaking DTC traffic to the marketplace.'
                },
                {
                  title: '3. High Month 1 CAC',
                  desc: 'Heavy early ad spend on the topic page resulted in high customer acquisition costs with poor immediate conversion.'
                },
                {
                  title: '4. Regional Translation Gaps',
                  desc: 'Static assets lacked localized context, particularly in French and German markets, limiting ad CTR efficiency.'
                }
              ].map((challenge, idx) => (
                <div key={idx} className={`p-6 rounded-xl border ${
                  darkMode ? 'bg-slate-900/20 border-slate-850' : 'bg-[#FCFBF9] border-slate-200 shadow-xs'
                }`}>
                  <h4 className={`text-base font-bold mb-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {challenge.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {challenge.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bounce Down Arrow */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => document.getElementById('section-learnings')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                <ArrowDown className="w-4 h-4 animate-bounce text-slate-900 dark:text-slate-100" />
              </button>
            </div>
          </section>

          {/* SECTION 7: Key Learnings & Highlights */}
          <section id="section-learnings" className="py-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-left mb-8">
              <div className={`text-[11px] font-bold font-mono tracking-[0.2em] uppercase mb-2 ${
                darkMode ? 'text-emerald-400' : 'text-[#0D5C4B]'
              }`}>
                07 · HIGHLIGHT & LOWLIGHT
              </div>
              <h2 className={`text-2xl sm:text-3xl font-sans font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                What landed, what didn't
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Highlight Column */}
              <div className="space-y-6">
                <div className={`text-[10px] font-bold font-mono tracking-wider uppercase pb-2 border-b ${
                  darkMode ? 'text-emerald-400 border-slate-850' : 'text-[#0D5C4B] border-slate-200'
                }`}>
                  HIGHLIGHTS
                </div>
                {[
                  {
                    title: 'Topic to PDP Path Redirect',
                    desc: 'Redirecting search ads from the topic page to specific PDPs improved checkout speed by 35%.'
                  },
                  {
                    title: 'Schroeder Co-Branding',
                    desc: 'Localized creator partnerships drove high-intent referral traffic across German-speaking regions.'
                  },
                  {
                    title: 'Video Format Prioritisation',
                    desc: 'Shifting KOL reviews to YouTube/TikTok video formats achieved a 2.1x higher conversion over static assets.'
                  }
                ].map((hl, idx) => (
                  <div key={idx} className={`p-6 rounded-xl border-l-4 border ${
                    darkMode 
                      ? 'bg-emerald-950/10 border-slate-800 border-l-emerald-500' 
                      : 'bg-[#E6F3F0] border-emerald-100/20 border-l-[#0D5C4B]'
                  }`}>
                    <h4 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {hl.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-655'}`}>
                      {hl.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Lowlight Column */}
              <div className="space-y-6">
                <div className={`text-[10px] font-bold font-mono tracking-wider uppercase pb-2 border-b ${
                  darkMode ? 'text-amber-500 border-slate-850' : 'text-amber-700 border-slate-200'
                }`}>
                  LOWLIGHTS
                </div>
                {[
                  {
                    title: 'Over-reliance on Topic Page',
                    desc: 'Month 1 traffic was funneled to a generic topic page, leading to a high bounce rate before PDP discovery.'
                  },
                  {
                    title: 'Delayed PB7*4 Pivot',
                    desc: 'Budget was held on the low-converting PB7*4 for too long before reallocating to the high-converting PB7*1.'
                  },
                  {
                    title: 'UTM Tracking Discrepancies',
                    desc: 'Inconsistent naming conventions from early KOL links caused temporary attribution gaps in GA4.'
                  }
                ].map((ll, idx) => (
                  <div key={idx} className={`p-6 rounded-xl border-l-4 border ${
                    darkMode 
                      ? 'bg-amber-950/10 border-slate-800 border-l-amber-500' 
                      : 'bg-amber-50/40 border-amber-100/20 border-l-amber-600'
                  }`}>
                    <h4 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {ll.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-655'}`}>
                      {ll.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to action contact */}
          <div className="flex justify-center mt-16 pb-6">
            <button
              onClick={() => setCurrentView('contact')}
              className={`px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-md cursor-pointer transition-transform hover:-translate-y-0.5 whitespace-nowrap ${
                darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-[#0D5C4B] hover:bg-[#0b4a3c]'
              }`}
            >
              Contact me
            </button>
          </div>

        </div>
      </div>
    );
  }

  if (project.id === 'perf-marketing-seo') {
    return (
      <div className={`relative pt-20 md:pt-28 pb-20 min-h-screen text-left transition-colors font-sans ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF9F5] text-slate-900'
      }`}>
        {/* Subtle Decorative Grid Pattern */}
        {!darkMode && (
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none -z-10" />
        )}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Link */}
          <button
            onClick={handleBack}
            className={`inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider mb-10 cursor-pointer transition-all hover:translate-x-[-2px] ${
              darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-[#4F46E5] hover:text-[#3B32C4]'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </button>

          {/* Main Header Block with Purple/Indigo Left Accent Bar */}
          <div className="pb-10">
            <div className={`pl-5 md:pl-7 border-l-[5px] md:border-l-[6px] ${
              darkMode ? 'border-violet-500' : 'border-[#4F46E5]'
            }`}>
              <div className="text-[11px] font-bold font-mono tracking-[0.25em] uppercase text-slate-400 mb-2">
                SEO · ORGANIC GROWTH · NETHERLANDS
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight leading-none mb-4 ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}>
                UGREEN Netherlands — SEO from Zero
              </h1>
              <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-4xl ${
                darkMode ? 'text-slate-400' : 'text-slate-500 font-medium'
              }`}>
                Built organic search presence for a brand-new DTC storefront in the Dutch market, from sandbox phase to early growth in under five months
              </p>
            </div>
          </div>

          {/* Metadata Row Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div>
              <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-1">
                Timeline
              </div>
              <div className={`text-sm sm:text-base font-semibold ${
                darkMode ? 'text-slate-100' : 'text-slate-800'
              }`}>
                Jan - May 2024
              </div>
            </div>
            
            <div>
              <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-1">
                My Role
              </div>
              <div className={`text-sm sm:text-base font-semibold ${
                darkMode ? 'text-slate-100' : 'text-slate-850'
              }`}>
                DTC Market Lead, NL
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-1">
                Market
              </div>
              <div className={`text-sm sm:text-base font-semibold ${
                darkMode ? 'text-violet-400' : 'text-[#4F46E5]'
              }`}>
                Netherlands (<a 
                  href="https://nl.ugreen.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`underline decoration-dotted underline-offset-4 hover:opacity-80 transition-all inline-flex items-center gap-1 ${
                    darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-[#4F46E5] hover:text-indigo-800'
                  }`}
                >
                  nl.ugreen.com
                  <Link className="w-3.5 h-3.5 inline-block" />
                </a>)
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase mb-1">
                Tools
              </div>
              <div className={`text-sm sm:text-base font-semibold ${
                darkMode ? 'text-slate-100' : 'text-slate-800'
              }`}>
                GSC · Ahrefs · GA4
              </div>
            </div>
          </div>

          {/* Chronological Phase Blocks (Horizontal Side-by-Side Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
            {/* Phase 1: Sandbox */}
            <div className={`p-6 rounded-xl border ${
              darkMode 
                ? 'bg-slate-900/40 border-slate-850/60' 
                : 'bg-indigo-50/20 border-indigo-100/60'
            }`}>
              <div className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-1 ${
                darkMode ? 'text-violet-400' : 'text-indigo-600'
              }`}>
                JAN – EARLY APR
              </div>
              <div className={`text-sm sm:text-base font-semibold leading-relaxed ${
                darkMode ? 'text-slate-200' : 'text-indigo-950'
              }`}>
                Sandbox phase — exploratory SEO, building foundations
              </div>
            </div>

            {/* Phase 2: Early Growth */}
            <div className={`p-6 rounded-xl border ${
              darkMode 
                ? 'bg-violet-950/20 border-violet-900/40' 
                : 'bg-indigo-100 border-indigo-200'
            }`}>
              <div className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-1 ${
                darkMode ? 'text-violet-300' : 'text-indigo-800'
              }`}>
                MID APR – MAY
              </div>
              <div className={`text-sm sm:text-base font-semibold leading-relaxed ${
                darkMode ? 'text-violet-50' : 'text-indigo-950'
              }`}>
                Early growth phase — rankings accelerating, traffic compounding
              </div>
            </div>
          </div>

          {/* 6 Metrics KPI Cards Grid */}
          <div className="pt-8 pb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3.5">
              {/* Card 1 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-violet-400' : 'text-[#4F46E5]'
                }`}>
                  400%
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Increase in organically ranking pages
                </div>
              </div>

              {/* Card 2 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-violet-400' : 'text-[#4F46E5]'
                }`}>
                  100→400
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Keywords in top 10 (Apr → May)
                </div>
              </div>

              {/* Card 3 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-violet-400' : 'text-[#4F46E5]'
                }`}>
                  UR 5→12
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  URL rating growth (Ahrefs)
                </div>
              </div>

              {/* Card 4 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                  darkMode ? 'text-violet-400' : 'text-[#4F46E5]'
                }`}>
                  94.7K
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Total impressions (GSC, Jan-May)
                </div>
              </div>

              {/* Card 5 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-violet-400' : 'text-[#4F46E5]'
                }`}>
                  4× clicks
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Daily clicks: 5-15 → 15-40
                </div>
              </div>

              {/* Card 6 */}
              <div className={`p-5 rounded-xl ${
                darkMode ? 'bg-slate-900/60 border border-slate-800' : 'bg-[#F4F4F0] border border-[#eaeae6]'
              } flex flex-col justify-between aspect-square md:aspect-auto col-span-2 sm:col-span-3 md:col-span-1`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-violet-400' : 'text-[#4F46E5]'
                }`}>
                  3×
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium leading-tight">
                  Impressions: 0-800/day → 1.5K-2.5K
                </div>
              </div>
            </div>
            
            {/* Bounce Down Arrow Button */}
            <div className="flex justify-center mt-10">
              <button 
                onClick={() => {
                  document.getElementById('seo-background-objective')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Project Background / Objective & Scope Grid */}
          <section id="seo-background-objective" className="py-12 border-t border-slate-200/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Column: Objective */}
              <div>
                <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-4">
                  OBJECTIVE
                </div>
                <p className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Establish organic search visibility for a newly launched Dutch DTC storefront with zero domain history, build a sustainable low-cost traffic channel alongside paid advertising, and lay SEO infrastructure to support long-term European expansion.
                </p>
              </div>

              {/* Right Column: Scope */}
              <div>
                <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-4">
                  MY SCOPE
                </div>
                <ul className="space-y-3">
                  {[
                    "Keyword research & Dutch-language database",
                    "On-page optimisation — TDK, H1, URL structure",
                    "SEO blog content strategy & production",
                    "Backlink outreach & acquisition",
                    "SEO budget planning & ROI analysis",
                    "Performance tracking via GSC, GA4, Ahrefs"
                  ].map((scopeItem, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`inline-block mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        darkMode ? 'bg-violet-400' : 'bg-[#4F46E5]'
                      }`} />
                      <span className={`text-sm sm:text-base ${
                        darkMode ? 'text-slate-305' : 'text-slate-700'
                      }`}>
                        {scopeItem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bounce Down Arrow Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => {
                  document.getElementById('seo-work-delivered')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </section>

          {/* Work Delivered Grid */}
          <section id="seo-work-delivered" className="py-12 border-t border-slate-200/60">
            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-6">
              WORK DELIVERED
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {/* Card 1 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <Database className={`w-5 h-5 mb-4 ${darkMode ? 'text-violet-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Keyword database
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Built a structured Dutch keyword library across 7 product categories, mapping NL-language terms to search volume and competition data.
                </p>
              </div>

              {/* Card 2 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <FileText className={`w-5 h-5 mb-4 ${darkMode ? 'text-violet-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  SEO blog & TDK
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Produced localised blog content and optimised titles, descriptions, and H1s across product and collection pages to improve CTR and relevance.
                </p>
              </div>

              {/* Card 3 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <Link className={`w-5 h-5 mb-4 ${darkMode ? 'text-violet-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Backlink outreach
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Secured 71 backlinks from 24 referring domains (DA 40-65) in 3 months by targeting niche and authoritative Dutch/EU sites.
                </p>
              </div>

              {/* Card 4 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <Wrench className={`w-5 h-5 mb-4 ${darkMode ? 'text-violet-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Technical SEO
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ran full audit covering site health, page speed, sitemap, robots.txt, image compression, H1 gaps, redirect chains, and Core Web Vitals — all resolved.
                </p>
              </div>

              {/* Card 5 */}
              <div className={`p-6 rounded-xl border flex flex-col justify-start transition-all duration-300 hover:shadow-md ${
                darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <FileText className={`w-5 h-5 mb-4 ${darkMode ? 'text-violet-400' : 'text-indigo-600'}`} />
                <h3 className={`text-sm font-bold mb-2.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Budget planning
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Built SEO budget model benchmarked against comparable FR market spend, with monthly allocation across site optimisation, content, and link building.
                </p>
              </div>
            </div>

            {/* Bounce Down Arrow Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => {
                  document.getElementById('seo-results-challenges')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </section>

          {/* Results & Challenges Bullet Lists */}
          <section id="seo-results-challenges" className="py-12 border-t border-slate-200/60">
            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-5">
              RESULTS
            </div>
            <ul className="space-y-4 mb-14">
              {[
                "Organically ranking pages grew by 400%; top-10 keywords increased from 100 to nearly 400 within one month of entering growth phase.",
                "Daily impressions tripled from 0-800 to 1,500-2,500; daily clicks increased from 5-15 to 15-40 (GSC).",
                "URL rating improved from 5 to 12 (Ahrefs) through targeted backlink acquisition — 71 links across 24 referring domains built from scratch.",
                "Core Web Vitals passed across both mobile and desktop; all critical technical issues resolved.",
                "Organic channel contributed 29% of total site traffic, providing a stable, lower-cost complement to paid advertising."
              ].map((result, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={`inline-block mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    darkMode ? 'bg-violet-400' : 'bg-slate-800'
                  }`} />
                  <span className={`text-sm sm:text-base leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-705'
                  }`}>
                    {result}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-5">
              CHALLENGES
            </div>
            <ul className="space-y-4">
              {[
                "New domain with zero authority: Google's sandbox effect meant minimal organic traction for the first three months regardless of optimisation work.",
                "Dutch-language SEO required building keyword databases from scratch — no existing brand research or local search data to draw from.",
                "Backlink sourcing in the Dutch market is constrained by a smaller pool of relevant publishers, requiring ongoing proactive outreach.",
                "Balancing SEO investment against a tight monthly budget (€550/month) while demonstrating early ROI to justify continued spend."
              ].map((challenge, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={`inline-block mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    darkMode ? 'bg-orange-400' : 'bg-slate-800'
                  }`} />
                  <span className={`text-sm sm:text-base leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-705'
                  }`}>
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bounce Down Arrow Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => {
                  document.getElementById('seo-highlights-lowlights')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </section>

          {/* Highlights & Lowlights */}
          <section id="seo-highlights-lowlights" className="py-12 border-t border-slate-200/60">
            <div className="text-[11px] font-bold font-mono tracking-widest text-[#8A8985] uppercase mb-6">
              HIGHLIGHTS & LOWLIGHTS
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Highlight 1 */}
              <div className={`p-6 sm:p-7 rounded-xl border-l-[4px] sm:border-l-[5px] transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-violet-500 border-t border-r border-b border-slate-800/80 shadow-xs' 
                  : 'bg-indigo-50/20 border-indigo-600 border-t border-r border-b border-slate-200 shadow-xs'
              }`}>
                <div className={`text-[11px] font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-violet-400' : 'text-indigo-650 font-bold'
                }`}>
                  HIGHLIGHT
                </div>
                <p className={`text-sm leading-relaxed font-sans ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  The shift from zero to 400 top-10 keywords in a single month validated the foundation work done during the sandbox phase. Structuring the keyword database by product category early meant content and on-page work could scale quickly once the domain aged.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className={`p-6 sm:p-7 rounded-xl border-l-[4px] sm:border-l-[5px] transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-violet-500 border-t border-r border-b border-slate-800/80 shadow-xs' 
                  : 'bg-indigo-50/20 border-indigo-600 border-t border-r border-b border-slate-200 shadow-xs'
              }`}>
                <div className={`text-[11px] font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-violet-400' : 'text-indigo-650 font-bold'
                }`}>
                  HIGHLIGHT
                </div>
                <p className={`text-sm leading-relaxed font-sans ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Backlink ROI was strong: securing 71 links at an average DA of 40-55 within a €550/month budget by prioritising niche-relevant Dutch publishers over volume, directly lifting the UR from 5 to 12.
                </p>
              </div>

              {/* Lowlight 1 */}
              <div className={`p-6 sm:p-7 rounded-xl border-l-[4px] sm:border-l-[5px] transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-[#E06E4B] border-t border-r border-b border-slate-800/80 shadow-xs' 
                  : 'bg-[#FAF1EE] border-[#D95F38] border-t border-r border-b border-slate-200 shadow-xs'
              }`}>
                <div className={`text-[11px] font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-orange-400' : 'text-[#D95F38] font-bold'
                }`}>
                  LOWLIGHT
                </div>
                <p className={`text-sm leading-relaxed font-sans ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  The 3-month sandbox period was unavoidable but meant SEO showed no visible ROI in Q1 — making it harder to justify budget internally. Better upfront framing of sandbox timelines with stakeholders would have reduced pressure during that phase.
                </p>
              </div>

              {/* Lowlight 2 */}
              <div className={`p-6 sm:p-7 rounded-xl border-l-[4px] sm:border-l-[5px] transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-[#E06E4B] border-t border-r border-b border-slate-800/80 shadow-xs' 
                  : 'bg-[#FAF1EE] border-[#D95F38] border-t border-r border-b border-slate-200 shadow-xs'
              }`}>
                <div className={`text-[11px] font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-orange-400' : 'text-[#D95F38] font-bold'
                }`}>
                  LOWLIGHT
                </div>
                <p className={`text-sm leading-relaxed font-sans ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Blog content production was bottlenecked by translation and localisation resources. A clearer content calendar with earlier briefs would have accelerated the pipeline and brought forward the growth inflection point.
                </p>
              </div>
            </div>
          </section>

          {/* Call to action diagnostic audit */}
          <section id="consulting-action" className={`mt-14 py-10 border-t ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-1.5 text-left">
                <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Want to supercharge your brand's organic search visibility?
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                  Let's perform a technical SEO audit, structure high-converting semantic content clusters, and build high-authority backlink networks for your local market.
                </p>
              </div>
              <button
                onClick={() => setCurrentView('contact')}
                className={`w-full sm:w-auto px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-md cursor-pointer transition-transform hover:-translate-y-0.5 whitespace-nowrap ${
                  darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-[#4F46E5] hover:bg-[#3B32C4]'
                }`}
              >
                Schedule SEO Diagnostic Audit
              </button>
            </div>
          </section>

        </div>
      </div>
    );
  }

  return (
    <div className="relative pt-20 md:pt-28 pb-20 min-h-screen text-left">
      {/* Decorative Blur */}
      <div className="absolute top-24 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={handleBack}
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-500 hover:text-indigo-600 mb-8 cursor-pointer transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </button>

        {/* Case Study Heading Header */}
        <div className="border-b pb-8 border-slate-200/40">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-indigo-500 bg-indigo-500/5 px-3 py-1 rounded-full font-bold border border-indigo-500/10">
              {project.category}
            </span>
            <div className="flex items-center space-x-1.5 text-xs text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              <span>{project.period}</span>
            </div>
          </div>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight ${
            darkMode ? 'text-white' : 'text-slate-950'
          }`}>
            {project.title}
          </h1>
          <p className="text-base text-slate-500 mt-3 max-w-4xl">
            Client Profile: <strong className={darkMode ? 'text-slate-200' : 'text-slate-700'}>{project.client}</strong> — {project.summary}
          </p>
        </div>

        {/* SECTION 1: Results & Key KPIs Dashboard first (to prove instant analytical impact) */}
        <section id="case-results-dashboard" className="py-10">
          <h2 className={`text-xs font-mono uppercase tracking-widest text-indigo-500 font-semibold mb-6`}>
            1. Business Performance Analytics (Key Indicators)
          </h2>

          {/* Sparkline cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {project.results.metrics.map((metric) => (
              <div
                key={metric.label}
                className={`p-5 rounded-xl border flex flex-col justify-between ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/60 shadow-xs'
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  {metric.label}
                </span>
                
                <div className="flex items-baseline justify-between mt-3">
                  <div>
                    <span className={`text-2xl font-extrabold tracking-tight block ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                      {metric.value}
                    </span>
                    <span className="text-xs font-mono text-emerald-500 font-bold mt-1 inline-block">
                      {metric.change}
                    </span>
                  </div>

                  {/* Microsparkline */}
                  <div className="pl-2">
                    {drawSparkline(metric.data, metric.trend === 'up' ? '#10b981' : '#6366f1')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Analytics Visualization Chart */}
          <div className={`p-6 rounded-xl border ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200/60'
          }`}>
            <h3 className={`text-xs font-bold font-mono tracking-wide uppercase mb-6 text-slate-400`}>
              Performance Data Mapping Run vs Benchmark Target
            </h3>

            {/* Custom SVG/CSS funnel & bar render blocks */}
            {project.results.chartType === 'funnel' ? (
              <div className="space-y-4">
                {project.results.chartData.map((node) => (
                  <div key={node.name} className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>{node.name}</span>
                      <div className="space-x-4">
                        <span>Actual: <strong className={darkMode ? 'text-white' : 'text-slate-950'}>{node.value}%</strong></span>
                        {node.benchmark && <span>Benchmark: <strong className="text-indigo-500">{node.benchmark}%</strong></span>}
                      </div>
                    </div>
                    {/* Visual bar container */}
                    <div className="relative h-6 w-full rounded-md bg-slate-500/5 overflow-hidden flex items-center">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-r-md transition-all duration-1000"
                        style={{ width: `${node.value * (100 / (project.results.chartData[0].value || 100))}%` }}
                      ></div>
                      {node.benchmark && (
                        <div
                          className="absolute h-full w-1 border-r-2 border-dashed border-indigo-400"
                          style={{ left: `${node.benchmark * (100 / (project.results.chartData[0].value || 100))}%` }}
                          title="Benchmark Line"
                        ></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : project.results.chartType === 'line' || project.results.chartType === 'bar' ? (
              /* High quality bar timeline representation */
              <div className="space-y-4">
                <div className="h-48 w-full flex items-end space-x-3 sm:space-x-6 md:space-x-12 border-b border-l border-slate-500/10 pb-2 pl-2">
                  {project.results.chartData.map((node, idx) => {
                    const maxVal = Math.max(...project.results.chartData.map((n) => n.value));
                    const percentage = (node.value / maxVal) * 80; // scale to max 80% to fit labels
                    return (
                      <div key={node.name} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                        {/* Interactive Tooltip representation */}
                        <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 bg-slate-950 text-white text-[10px] py-1.5 px-2.5 rounded shadow-lg pointer-events-none z-30 transition-all duration-200">
                          {node.label || `${node.value.toLocaleString()}`}
                        </div>

                        {/* Bar Segment */}
                        <motion.div
                          className="w-full bg-gradient-to-t from-indigo-500/80 to-indigo-600 rounded-t-sm"
                          initial={{ height: 0 }}
                          animate={{ height: `${percentage}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                        ></motion.div>
                        
                        <span className="text-[9px] font-mono whitespace-nowrap text-slate-400 mt-2 block rotate-12 sm:rotate-0">
                          {node.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Fallback list representation */
              <div className="space-y-3">
                {project.results.chartData.map((node) => (
                  <div key={node.name} className="flex items-center justify-between text-xs p-3 rounded-lg border border-slate-500/5">
                    <span>{node.name}</span>
                    <strong className="font-mono text-indigo-500">{node.value}%</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: Overview (Context, Challenge, Objective) */}
        <section id="case-overview" className="py-10 border-t border-slate-500/10">
          <h2 className={`text-xs font-mono uppercase tracking-widest text-indigo-500 font-semibold mb-6`}>
            2. High-Level Overview & Context
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-400 mb-1">
                <Compass className="h-4 w-4" />
                <h3 className="text-sm font-semibold uppercase font-mono tracking-wide">Background</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {project.challenge.background}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-red-400 mb-1">
                <AlertCircle className="h-4 w-4" />
                <h3 className="text-sm font-semibold uppercase font-mono tracking-wide">Business Challenge</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {project.challenge.businessChallenge}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                <ShieldCheck className="h-4 w-4" />
                <h3 className="text-sm font-semibold uppercase font-mono tracking-wide">Core Objective</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {project.challenge.objective}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Strategy (Process, Frameworks, Insights) */}
        <section id="case-strategy" className="py-10 border-t border-slate-500/10">
          <h2 className={`text-xs font-mono uppercase tracking-widest text-indigo-500 font-semibold mb-6`}>
            3. Tactical Research & Growth Strategy
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className={`text-sm font-bold uppercase font-mono tracking-wide mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Research & Hypothesis Formulation
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {project.strategy.research}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Strategic Frameworks and Models */}
              <div className={`p-5 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/50 border-slate-200/40'}`}>
                <h4 className={`text-xs font-bold uppercase font-mono tracking-wide text-indigo-500 mb-3`}>
                  Strategic Frameworks Applied
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  {project.strategy.frameworks.map((fw) => (
                    <li key={fw} className="flex items-center space-x-2">
                      <Check className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0" />
                      <span>{fw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Identified Friction Points */}
              <div className={`p-5 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/50 border-slate-200/40'}`}>
                <h4 className={`text-xs font-bold uppercase font-mono tracking-wide text-indigo-500 mb-3`}>
                  Critical Friction Points Discovered
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  {project.strategy.insights.map((ins, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="flex-shrink-0 h-4 w-4 bg-indigo-500/10 text-indigo-500 rounded-full flex items-center justify-center font-mono text-[9px] mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{ins}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Execution (Actions, Tools, Workflow) */}
        <section id="case-execution" className="py-10 border-t border-slate-500/10">
          <h2 className={`text-xs font-mono uppercase tracking-widest text-indigo-500 font-semibold mb-6`}>
            4. Digital Execution & Technical Assembly
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Steps & Core Actions */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className={`text-sm font-bold uppercase font-mono tracking-wide mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Sprint Action Items
              </h3>
              <div className="space-y-4">
                {project.execution.actions.map((act, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs leading-relaxed">
                    <span className="h-5 w-5 bg-indigo-500 text-white rounded-md flex items-center justify-center font-semibold text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-slate-500">{act}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack List & Sprint coordination */}
            <div className="lg:col-span-4 space-y-6">
              <div className={`p-5 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/50 border-slate-200/40'}`}>
                <h4 className="text-xs font-bold uppercase font-mono tracking-wide text-indigo-500 mb-3.5 flex items-center space-x-1.5">
                  <Database className="h-4 w-4" />
                  <span>Deployment Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.execution.tools.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-slate-500/5 hover:bg-slate-500/10 px-2.5 py-1 rounded transition-colors text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <span className="text-[10px] tracking-wider font-semibold font-mono uppercase text-slate-400 block">Sprint Coordination</span>
                <p className="text-slate-500 leading-relaxed text-[11px]">{project.execution.workflow}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Gallery (Wireframes / Schema models) */}
        <section id="case-gallery" className="py-10 border-t border-slate-500/10">
          <h2 className={`text-xs font-mono uppercase tracking-widest text-indigo-500 font-semibold mb-6`}>
            5. Wireframes & Structural blueprints
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img) => (
              <div
                key={img.title}
                className={`p-5 rounded-xl border relative overflow-hidden group ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-100 shadow-xs'
                }`}
              >
                {/* Visual Placeholder mimicking structural blueprints */}
                <div className="aspect-[16/9] w-full rounded-lg bg-indigo-500/5 border border-indigo-500/10 border-dashed mb-4 flex flex-col items-center justify-center p-4">
                  <span className="text-[10px] font-mono uppercase text-indigo-500 border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    {img.type}
                  </span>
                  <span className={`text-xs font-semibold text-center leading-tight mt-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {img.title}
                  </span>
                  <p className="text-[10px] text-slate-500 text-center max-w-xs mt-1">
                    {img.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Blueprint File Frame #</span>
                  <span className="text-indigo-500 font-semibold uppercase">Security Verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Key Learnings & Consulting guidance */}
        <section id="case-learnings" className="py-10 border-t border-slate-500/10">
          <h2 className={`text-xs font-mono uppercase tracking-widest text-indigo-500 font-semibold mb-6`}>
            6. Key Consulting Learnings & Action Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className={`p-6 rounded-xl border text-left flex flex-col justify-between ${
              darkMode ? 'bg-indigo-950/20 border-indigo-900/40' : 'bg-indigo-50/30 border-indigo-100/60'
            }`}>
              <div>
                <h3 className={`text-sm font-bold uppercase font-mono tracking-wide text-indigo-500 mb-3`}>
                  Executive Recommendations
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  These insights serve as immediate blueprints when preparing regional audits for startups or corporate setups utilizing modern analytics GTM structures:
                </p>
                <div className="mt-4 space-y-3">
                  {project.learnings.map((learn, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-500 leading-relaxed">
                      <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{learn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setCurrentView('contact')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                Contact me
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
