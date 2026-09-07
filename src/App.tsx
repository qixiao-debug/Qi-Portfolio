import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProjectsView from './components/ProjectsView';
import ProjectDetailView from './components/ProjectDetailView';
import BlogView from './components/BlogView';
import BlogArticleView from './components/BlogArticleView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import { SHOW_BLOG } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('luxvelo-ecommerce-growth');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('ga4-transition-predictive-funnels');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Synchronize router state changes if they use deep query strings or hashes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        if (hash.startsWith('project-')) {
          setSelectedProjectId(hash.replace('project-', ''));
          setCurrentView(hash);
        } else if (hash.startsWith('blog-')) {
          if (SHOW_BLOG) {
            setSelectedBlogId(hash.replace('blog-', ''));
            setCurrentView(hash);
          } else {
            setCurrentView('home');
          }
        } else if (['home', 'projects', 'blog', 'about', 'contact'].includes(hash)) {
          if (hash === 'blog' && !SHOW_BLOG) {
            setCurrentView('home');
          } else {
            setCurrentView(hash);
          }
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on init
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash state relative to view
  const handleSetCurrentView = (view: string) => {
    if ((view === 'blog' || view.startsWith('blog-')) && !SHOW_BLOG) {
      setCurrentView('home');
      window.location.hash = 'home';
      return;
    }
    setCurrentView(view);
    window.location.hash = view;
  };

  // Custom motion variants for polished view transitions
  const pageTransitionVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  // Routing render helper
  const renderCurrentView = () => {
    if (currentView === 'home') {
      return (
        <HomeView
          setCurrentView={handleSetCurrentView}
          setSelectedProjectId={setSelectedProjectId}
          setSelectedBlogId={setSelectedBlogId}
          darkMode={darkMode}
        />
      );
    }
    if (currentView === 'projects') {
      return (
        <ProjectsView
          setCurrentView={handleSetCurrentView}
          setSelectedProjectId={setSelectedProjectId}
          darkMode={darkMode}
        />
      );
    }
    if (currentView.startsWith('project-')) {
      const pId = currentView.replace('project-', '');
      return (
        <ProjectDetailView
          projectId={pId || selectedProjectId}
          setCurrentView={handleSetCurrentView}
          darkMode={darkMode}
        />
      );
    }
    if (currentView === 'blog' && SHOW_BLOG) {
      return (
        <BlogView
          setCurrentView={handleSetCurrentView}
          setSelectedBlogId={setSelectedBlogId}
          darkMode={darkMode}
        />
      );
    }
    if (currentView.startsWith('blog-') && SHOW_BLOG) {
      const bId = currentView.replace('blog-', '');
      return (
        <BlogArticleView
          blogId={bId || selectedBlogId}
          setCurrentView={handleSetCurrentView}
          setSelectedBlogId={setSelectedBlogId}
          darkMode={darkMode}
        />
      );
    }
    if (currentView === 'about') {
      return (
        <AboutView
          setCurrentView={handleSetCurrentView}
          darkMode={darkMode}
        />
      );
    }
    if (currentView === 'contact') {
      return (
        <ContactView
          darkMode={darkMode}
        />
      );
    }
    return (
      <HomeView
        setCurrentView={handleSetCurrentView}
        setSelectedProjectId={setSelectedProjectId}
        setSelectedBlogId={setSelectedBlogId}
        darkMode={darkMode}
      />
    );
  };

  return (
    <div
      id="root-container"
      className={`min-h-screen flex flex-col justify-between font-sans transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Sticky Header block */}
      <Header
        currentView={currentView}
        setCurrentView={handleSetCurrentView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Area with elegant fade layout transition animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Foot info panel */}
      <Footer
        setCurrentView={handleSetCurrentView}
        darkMode={darkMode}
      />
    </div>
  );
}
