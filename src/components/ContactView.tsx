import { useState } from 'react';
import { Mail, Loader2, MapPin, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_BIO } from '../data';

interface ContactViewProps {
  darkMode: boolean;
}

export default function ContactView({ darkMode }: ContactViewProps) {
  const [googleFormUrl] = useState(() => {
    const stored = localStorage.getItem('google_form_url');
    if (stored && stored.includes('1FAIpQLScYw_K90A5F8F89Q1N9HUpI_67A5S84K_N8P6gX3_L7X0A_Q')) {
      localStorage.removeItem('google_form_url');
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdOP55iF0qxDw5JUPSEf2qKdnBy7imMMi4_F_yg55l6-_dMlA/viewform?embedded=true';
    }
    return stored || 'https://docs.google.com/forms/d/e/1FAIpQLSdOP55iF0qxDw5JUPSEf2qKdnBy7imMMi4_F_yg55l6-_dMlA/viewform?embedded=true';
  });
  const [iframeLoading, setIframeLoading] = useState(true);

  // Motion animation parameters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Smooth custom ease
      },
    },
  };

  return (
    <div className={`relative pt-24 md:pt-32 pb-24 min-h-screen text-left transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF9F5] text-slate-900'
    }`}>
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* LEFT SIDE: Heading & Contact Info Link */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-8 lg:pr-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight leading-tight ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}>
                Get in Touch
              </h1>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
                Let's create something together 👋
              </p>
            </motion.div>

            {/* Contact Pills Stack */}
            <div className="flex flex-col gap-4">
              {/* Email highlight pill */}
              <motion.div variants={itemVariants}>
                <a 
                  href={`mailto:${PERSONAL_BIO.email}`}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 shadow-xs hover:shadow-md ${
                    darkMode 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900' 
                      : 'bg-white border-slate-200/60 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`rounded-xl p-3 flex items-center justify-center flex-shrink-0 ${
                    darkMode ? 'bg-indigo-950/60 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      Mail me at
                    </span>
                    <span className="text-sm sm:text-base font-bold font-mono text-indigo-600 dark:text-indigo-400">
                      {PERSONAL_BIO.email}
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* Working Base highlight pill */}
              <motion.div variants={itemVariants}>
                <div 
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 shadow-xs ${
                    darkMode 
                      ? 'bg-slate-900/60 border-slate-800' 
                      : 'bg-white border-slate-200/60'
                  }`}
                >
                  <div className={`rounded-xl p-3 flex items-center justify-center flex-shrink-0 ${
                    darkMode ? 'bg-indigo-950/60 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      Working Base
                    </span>
                    <span className="text-sm sm:text-base font-bold font-mono text-slate-700 dark:text-slate-300">
                      {PERSONAL_BIO.location}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* LinkedIn Network highlight pill */}
              <motion.div variants={itemVariants}>
                <a 
                  href={PERSONAL_BIO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 shadow-xs hover:shadow-md ${
                    darkMode 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900' 
                      : 'bg-white border-slate-200/60 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`rounded-xl p-3 flex items-center justify-center flex-shrink-0 ${
                    darkMode ? 'bg-indigo-950/60 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      LinkedIn Network
                    </span>
                    <span className="text-sm sm:text-base font-bold font-mono text-indigo-600 dark:text-indigo-400">
                      linkedin.com/in/qipassion
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Embedded Google Form Card */}
          <motion.div variants={itemVariants} className="lg:col-span-6 xl:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 shadow-xl flex flex-col h-[700px] ${
              darkMode 
                ? 'bg-slate-900/40 border-slate-800/80 shadow-slate-950/20' 
                : 'bg-white border-slate-100 shadow-slate-200/40'
            }`}>
              
              <div className="flex items-center justify-between mb-4 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className={`text-xs font-bold font-mono tracking-wider uppercase ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Embedded Contact Form
                  </span>
                </div>
              </div>

              <div className="relative flex-grow rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 h-[530px]">
                {iframeLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-50 dark:bg-slate-950 z-10 animate-fade-in">
                    <Loader2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-spin" />
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono animate-pulse">
                      Loading secure Google Form...
                    </span>
                  </div>
                )}
                
                <iframe
                  src={googleFormUrl}
                  title="Contact Google Form"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-full"
                  onLoad={() => setIframeLoading(false)}
                >
                  Loading…
                </iframe>
              </div>

              {/* Bottom footer bar for security and branding */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4 flex-shrink-0">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Secure 256-bit connection</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold font-mono">
                  <span>Powered by Google Sheets</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
