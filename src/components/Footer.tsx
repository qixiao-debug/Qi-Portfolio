import { Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_BIO, SHOW_BLOG } from '../data';

interface FooterProps {
  setCurrentView: (view: string) => void;
  darkMode: boolean;
}

export default function Footer({ setCurrentView, darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-all duration-300 ${
        darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Column 1: Info & Brand */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center space-x-2">
              <span className={`text-base font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_BIO.name}
              </span>
              <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full"></span>
              <span className="text-xs font-mono tracking-widest text-indigo-400">PORTFOLIO</span>
            </div>
            {/* Social icons & Motto */}
            <div className="flex items-center space-x-5 pt-2 flex-wrap gap-y-2">
              <a
                id="footer-social-linkedin"
                href={PERSONAL_BIO.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  darkMode
                    ? 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white hover:bg-slate-900'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-950 hover:bg-white'
                }`}
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <span className={`text-xs font-mono tracking-wider italic font-medium px-3.5 py-1.5 rounded-full border select-none ${
                darkMode 
                  ? 'bg-slate-900/50 border-slate-800/80 text-indigo-300/90' 
                  : 'bg-indigo-50/45 border-indigo-100/50 text-[#2A3B8F]'
              }`}>
                " Stay Gold, Stay Hungry "
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className={`text-xs font-mono tracking-widest uppercase font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
              Interactive Core
            </h4>
            <ul id="footer-navigation-list" className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('projects')}
                  className="hover:text-indigo-500 hover:underline cursor-pointer transition-colors"
                >
                  Project Gallery
                </button>
              </li>
              {SHOW_BLOG && (
                <li>
                  <button
                    onClick={() => handleLinkClick('blog')}
                    className="hover:text-indigo-500 hover:underline cursor-pointer transition-colors"
                  >
                    Blog
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-indigo-500 hover:underline cursor-pointer transition-colors"
                >
                  About Me
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing details */}
        <div className={`mt-12 md:mt-16 pt-8 border-t ${
          darkMode ? 'border-slate-800' : 'border-slate-200/60'
        }`}>
          <p className={`text-[11px] leading-relaxed italic mb-6 max-w-3xl ${
            darkMode ? 'text-slate-500' : 'text-slate-400'
          }`}>
            Certain figures have been adjusted or anonymised to protect confidential business information while preserving the accuracy of performance trends.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              &copy; 2026 Qi Xiao. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => {
                  alert(`Privacy & Cookies Declaration.\nWe track no unauthorized personal user data. In compliance with active GDPR and ePrivacy rules, active states reside strictly within the client sandbox.`);
                }}
                className="hover:text-indigo-500 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => {
                  alert(`Manage Cookies.\nYour tracking preferences have been verified. Only necessary system and performance cookies are stored to persist your browsing preferences.`);
                }}
                className="hover:text-indigo-500 transition-colors cursor-pointer"
              >
                Manage Cookies
              </button>
              <button
                id="back-to-top-btn"
                onClick={scrollToTop}
                className={`flex items-center space-x-1.5 p-1 px-3.5 rounded-full border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-white hover:bg-slate-800'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span className="font-mono text-[10px]">BACK TO TOP</span>
                <ArrowUp className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
