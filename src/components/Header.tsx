import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowDownToLine, TrendingUp } from 'lucide-react';
import { PERSONAL_BIO, SHOW_BLOG } from '../data';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ currentView, setCurrentView, darkMode, setDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', view: 'projects' },
    ...(SHOW_BLOG ? [{ label: 'Blog', view: 'blog' }] : []),
    { label: 'About Me', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-slate-950/10'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-md shadow-slate-100/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className={`p-1.5 rounded-lg transition-transform duration-300 group-hover:scale-105 ${
              darkMode ? 'bg-indigo-950 text-indigo-400 border border-indigo-800' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
            }`}>
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <span className={`text-lg font-semibold tracking-tight block ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                {PERSONAL_BIO.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 block -mt-1 font-semibold">
                Growth & Analytics
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentView === item.view || (item.view === 'projects' && currentView.startsWith('project-')) || (item.view === 'blog' && currentView.startsWith('blog-'));
              return (
                <button
                  key={item.view}
                  id={`nav-link-${item.view}`}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? darkMode
                        ? 'text-indigo-400 bg-indigo-950/40 border border-indigo-900/40'
                        : 'text-indigo-600 bg-indigo-50/50 border border-indigo-100/50'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Utility Buttons: Dark Mode Toggle & CV Download */}
          <div id="desktop-utilities" className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>


          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div id="mobile-controls" className="flex md:hidden items-center space-x-2">
            {/* Dark Mode Toggle for Mobile */}
            <button
              id="theme-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-yellow-400'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile Menu Action */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className={`md:hidden border-b transition-all duration-300 animate-slide-down ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {/* Navigation links */}
            {navItems.map((item) => {
              const isActive = currentView === item.view || (item.view === 'projects' && currentView.startsWith('project-')) || (item.view === 'blog' && currentView.startsWith('blog-'));
              return (
                <button
                  key={item.view}
                  id={`mobile-nav-link-${item.view}`}
                  onClick={() => handleNavClick(item.view)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? darkMode
                        ? 'text-indigo-400 bg-slate-800'
                        : 'text-indigo-600 bg-slate-50'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}


          </div>
        </div>
      )}
    </header>
  );
}
