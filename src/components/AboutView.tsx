import { Award, GraduationCap, Check, HelpCircle, Briefcase, ExternalLink, Calendar } from 'lucide-react';
import { PERSONAL_BIO, CERTIFICATIONS } from '../data';

interface AboutViewProps {
  setCurrentView: (view: string) => void;
  darkMode: boolean;
}

export default function AboutView({ setCurrentView, darkMode }: AboutViewProps) {
  return (
    <div className="relative pt-20 md:pt-28 pb-16 min-h-screen text-left">
      {/* Dynamic Background decor */}
      <div className="absolute top-28 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About heading header */}
        <div className="border-b pb-8 mb-8 border-slate-200/40">
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold block mb-1">
            PERSONAL JOURNEY
          </span>
          <h1 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            My Story
          </h1>
        </div>

        {/* Narrative bio and profile card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative text block */}
          <div className="lg:col-span-8 space-y-8">
            
            <div>
              <h2 className={`text-xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                Curiosity started it all.
              </h2>
              <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  I've always been curious about why people make decisions. Why does one product stand out while another is ignored? Why do customers behave differently across markets? And how can small changes create meaningful business growth?
                </p>
                <p>
                  That curiosity is what led me into e-commerce and digital marketing.
                </p>
              </div>
            </div>

            <div>
              <h2 className={`text-xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                Learning through growth.
              </h2>
              <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  Over the past four years, I've worked with Shopify-based consumer brands across European markets, from website operations and performance marketing to campaign execution and commercial analysis. Along the way, I've learned that growth rarely comes from one big idea—it's usually the result of hundreds of small improvements, tested, measured, and refined over time.
                </p>
                <p>
                  Contributing to more than $4M in GMV has reinforced one lesson: the best decisions are driven by data, but always centred around people.
                </p>
              </div>
            </div>

            <div>
              <h2 className={`text-xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                How I work.
              </h2>
              <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  I enjoy connecting the dots between marketing, customer behaviour, and business performance. Whether I'm analysing campaign results, improving a customer journey, or planning the next experiment, I'm always asking the same question:
                </p>
                <blockquote className={`border-l-2 pl-4 py-1 my-2 italic font-medium ${darkMode ? 'border-indigo-500 text-indigo-400' : 'border-indigo-600 text-indigo-700'}`}>
                  "How can we make this work better?"
                </blockquote>
                <p>
                  For me, growth isn't just about acquiring more customers—it's about creating better experiences that deliver long-term value for both the business and its customers.
                </p>
              </div>
            </div>

            <div>
              <h2 className={`text-xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                Beyond marketing.
              </h2>
              <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  Outside work, I've practiced Ashtanga Yoga for over seven years. Yoga has taught me that progress comes from consistency rather than perfection, and that mindset shapes how I approach both my work and my life.
                </p>
                <p>
                  Today, I'm based in Dublin, pursuing an MSc in Digital Marketing while continuing to explore how AI, data, and technology are changing the way brands connect with people.
                </p>
              </div>
            </div>

          </div>

          {/* Right sidebar: Academic records & verified certificates */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Academic block */}
            <div className={`p-5 rounded-xl border ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/50 border-slate-200/40'
            }`}>
              <h3 className="text-xs font-bold uppercase font-mono tracking-wider text-indigo-500 mb-4 flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Academic Foundation</span>
              </h3>
              <div className="space-y-4 text-xs">
                {PERSONAL_BIO.education.map((edu) => (
                  <div key={edu.degree} className="space-y-1.5">
                    <h4 className={`font-bold leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.degree}
                    </h4>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">
                      {edu.institution} | {edu.period}
                    </span>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Action */}
            <button
              onClick={() => setCurrentView('contact')}
              className="w-full text-center px-5 py-3 rounded-xl text-xs font-bold uppercase font-mono tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer shadow-md transition-all hover:scale-[1.02] duration-200"
            >
              Contact me
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
