import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Download, Printer, 
  Maximize2, Minimize2, ZoomIn, ZoomOut, RotateCcw, 
  Layers, FileText, CheckCircle2, TrendingUp, BarChart2,
  ExternalLink, Search, Globe, Award, Shield, AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface UgreenSeoPdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export const UgreenSeoPdfViewerModal: React.FC<UgreenSeoPdfViewerModalProps> = ({
  isOpen,
  onClose,
  darkMode = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'slide' | 'all'>('slide');
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = 13;

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen, totalPages, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  // Background geometric grid pattern SVG
  const CubeWireframePattern = () => (
    <svg className="w-full h-full text-pink-300/40 pointer-events-none" viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polygon points="100,20 130,35 130,70 100,55" />
      <polygon points="100,20 70,35 70,70 100,55" />
      <polygon points="100,55 130,70 100,85 70,70" />
      <polygon points="130,35 160,50 160,85 130,70" />
      <polygon points="130,70 160,85 130,100 100,85" />
      <polygon points="70,35 100,50 100,85 70,70" />
      <polygon points="40,50 70,35 70,70 40,85" />
      <polygon points="70,70 100,85 70,100 40,85" />
      <polygon points="100,85 130,100 100,115 70,100" />
      <polygon points="160,50 190,65 190,100 160,85" />
      <polygon points="130,100 160,115 130,130 100,115" />
      <polygon points="70,100 100,115 70,130 40,115" />
    </svg>
  );

  // Render individual slide by page number
  const renderSlide = (pageNum: number) => {
    switch (pageNum) {
      case 1:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-14 bg-white text-slate-900 select-none overflow-hidden">
            {/* Top Right Geometric Cube Pattern */}
            <div className="absolute top-0 right-0 w-80 h-64 pointer-events-none opacity-80">
              <CubeWireframePattern />
            </div>

            {/* Top Left Sunburst Icon */}
            <div className="w-10 h-10 text-pink-400">
              <svg viewBox="0 0 40 40" fill="currentColor">
                <circle cx="20" cy="20" r="3" fill="#E84393" />
                {[...Array(16)].map((_, i) => (
                  <line 
                    key={i}
                    x1="20" 
                    y1="20" 
                    x2={20 + 16 * Math.cos((i * 22.5 * Math.PI) / 180)} 
                    y2={20 + 16 * Math.sin((i * 22.5 * Math.PI) / 180)} 
                    stroke="#E84393" 
                    strokeWidth="1.2" 
                    strokeLinecap="round" 
                  />
                ))}
              </svg>
            </div>

            {/* Main Title Center-Left */}
            <div className="my-auto space-y-6 max-w-2xl z-10">
              <h1 className="text-4xl sm:text-6xl font-serif tracking-tight text-slate-900 font-bold leading-tight">
                SEO Case Study<br />
                <span className="text-slate-800">— UGREEN NL</span>
              </h1>

              <div className="inline-block border border-pink-400 px-4 py-1.5 rounded-sm bg-pink-50/40">
                <span className="text-sm font-sans font-medium text-slate-800">
                  Written By Xiao Qi
                </span>
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="flex justify-between items-end text-xs text-slate-500 font-sans z-10">
              <div className="font-mono uppercase tracking-wider text-[11px] text-pink-600 font-semibold">
                Official Work Showcase
              </div>
              <div>Data source period: January 2024 - May 2024</div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 bg-white text-slate-900 select-none overflow-hidden">
            {/* Top Right Geometric Cube Pattern */}
            <div className="absolute top-0 right-0 w-64 h-52 pointer-events-none opacity-70">
              <CubeWireframePattern />
            </div>
            {/* Bottom Right Cube */}
            <div className="absolute -bottom-8 -right-8 w-72 h-60 pointer-events-none opacity-70">
              <CubeWireframePattern />
            </div>

            <div className="z-10">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-8">
                Category
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
                {/* 01 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      01
                    </span>
                    <h3 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-900 pb-0.5">
                      Effectiveness Summary
                    </h3>
                  </div>
                </div>

                {/* 03 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      03
                    </span>
                    <h3 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-900 pb-0.5">
                      Website Optimization Effectiveness
                    </h3>
                  </div>
                  <ul className="pl-14 text-xs sm:text-sm text-slate-700 space-y-1 list-disc">
                    <li>Website Rank</li>
                    <li>Keyword Position</li>
                    <li>On-page Optimization</li>
                  </ul>
                </div>

                {/* 02 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      02
                    </span>
                    <h3 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-900 pb-0.5">
                      Organic Traffic Growth
                    </h3>
                  </div>
                  <ul className="pl-14 text-xs sm:text-sm text-slate-700 space-y-1 list-disc">
                    <li>Organic Traffic Data</li>
                    <li>Website Impression Data</li>
                  </ul>
                </div>

                {/* 04 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      04
                    </span>
                    <h3 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-900 pb-0.5">
                      Work Showcase
                    </h3>
                  </div>
                  <ul className="pl-14 text-xs sm:text-sm text-slate-700 space-y-1 list-disc">
                    <li>Budget Distribution</li>
                    <li>Keyword Database</li>
                    <li>SEO Content</li>
                    <li>Backlinks</li>
                    <li>Technical SEO</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-sans z-10 pt-4">
              Page 2 of 13
            </div>
          </div>
        );

      case 3:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                01
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Effectiveness Summary
              </h2>
            </div>

            {/* Content Two Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
              {/* Card 1 */}
              <div className="border border-pink-400 rounded-sm p-6 bg-white shadow-xs space-y-4">
                <h3 className="text-base font-sans font-bold text-slate-900">
                  1. Organic Traffic Growth:
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      The strategic implementation of keyword planning, blog and backlink integration, content optimization, and localized campaign strategies resulted in <strong className="text-pink-600 font-semibold">substantial growth in organic traffic</strong>.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      The initial phase from January to early April represented a <strong className="text-amber-700 font-semibold">sandbox period</strong>, characterized by exploratory SEO activities. By mid-April, the website experienced <strong className="text-emerald-700 font-semibold">rapid growth</strong>, entering an early growth phase.
                    </span>
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-pink-400 rounded-sm p-6 bg-white shadow-xs space-y-4">
                <h3 className="text-base font-sans font-bold text-slate-900">
                  2. Overview of Website Optimization Effectiveness:
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      The channel strategies and optimization actions have shown significant effectiveness, particularly in the improvement of keyword rankings and positions, demonstrating a notable shift from <strong className="text-pink-600 font-semibold">absence to presence</strong>.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-4">
              <span>Source: UGREEN NL Website</span>
              <span>01 Effectiveness Summary · Page 3</span>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                02
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Organic Traffic Growth
              </h2>
            </div>

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
              {/* Left Column Text in Pink Border Box */}
              <div className="lg:col-span-4 border border-pink-400 rounded-sm p-5 bg-pink-50/10 space-y-4">
                <h3 className="text-base font-bold font-sans text-slate-900">
                  1. Organic Session:
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  • Sessions steadily rose from <strong className="text-slate-900 font-semibold">around 10</strong> at the beginning of the year to <strong className="text-pink-600 font-semibold">surpass 40</strong> by mid-year, indicating a substantial increase in website engagement.
                </p>
                <div className="pt-2 border-t border-slate-200/60">
                  <div className="text-[11px] font-mono text-slate-500">
                    Source: Google Analytics 4 (GA4)
                  </div>
                </div>
              </div>

              {/* Right Column GA4 Chart & Table Display */}
              <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-md p-4 text-xs space-y-3">
                <div className="flex justify-between items-center text-slate-600 font-sans border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">Analytics</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-mono">Ugreen-NL-GA4</span>
                  </div>
                  <div className="text-[11px] text-slate-500">1 Jan - 6 May 2024</div>
                </div>

                {/* Simulated GA4 Curve Graph */}
                <div className="h-28 w-full bg-white rounded border border-slate-200 p-2 relative flex flex-col justify-end">
                  <div className="text-[10px] text-slate-400 mb-1 font-mono">Traffic acquisition: Sessions over time</div>
                  <svg className="w-full h-20" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#e2e8f0" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="#e2e8f0" strokeDasharray="3 3" />
                    {/* Organic sessions line */}
                    <path
                      d="M0,65 Q30,68 60,62 T120,60 T180,52 T210,38 T240,25 T270,18 T300,12"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="2.5"
                    />
                    {/* Second comparison line */}
                    <path
                      d="M0,72 Q30,70 60,72 T120,68 T180,62 T210,50 T240,40 T270,32 T300,28"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                    />
                  </svg>
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono mt-1">
                    <span>Jan 2024 (~10/day)</span>
                    <span>March (Sandbox)</span>
                    <span className="text-blue-600 font-bold">May 2024 (&gt;40/day)</span>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-[10px] text-left border border-slate-200 bg-white">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[9px]">
                      <tr>
                        <th className="p-1 border-b">Session source / medium</th>
                        <th className="p-1 border-b text-right">Sessions</th>
                        <th className="p-1 border-b text-right">Users</th>
                        <th className="p-1 border-b text-right">Avg Duration</th>
                        <th className="p-1 border-b text-right">Engagement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="p-1 font-medium text-slate-900">google / organic</td>
                        <td className="p-1 text-right font-bold text-blue-600">1,785</td>
                        <td className="p-1 text-right">1,405</td>
                        <td className="p-1 text-right">1m 12s</td>
                        <td className="p-1 text-right">69.08%</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-medium">duckduckgo / organic</td>
                        <td className="p-1 text-right">177</td>
                        <td className="p-1 text-right">138</td>
                        <td className="p-1 text-right">1m 36s</td>
                        <td className="p-1 text-right">74.01%</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-medium">bing / organic</td>
                        <td className="p-1 text-right">128</td>
                        <td className="p-1 text-right">112</td>
                        <td className="p-1 text-right">1m 28s</td>
                        <td className="p-1 text-right">71.09%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: Google Analytics (GA 4)</span>
              <span>02 Organic Traffic Growth · Page 4</span>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                02
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Organic Traffic Growth
              </h2>
            </div>

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
              {/* Left Column Text in Pink Border Box */}
              <div className="lg:col-span-5 border border-pink-400 rounded-sm p-5 bg-pink-50/10 space-y-4">
                <h3 className="text-base font-bold font-sans text-slate-900">
                  2. Website Data:
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      Impressions within the Google Search Console surged from an initial daily range of <strong className="text-slate-900 font-semibold">0-800</strong> to a range of <strong className="text-pink-600 font-bold">1.5K-2.5K</strong>, reflecting improved visibility and reach.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      Total clicks also improved significantly, rising from approximately <strong className="text-slate-900 font-semibold">5-15 clicks per day</strong> to an average of <strong className="text-pink-600 font-bold">15-40 clicks per day</strong>.
                    </span>
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 text-[11px] font-mono text-slate-500">
                  Source: Google Search Console (GSC)
                </div>
              </div>

              {/* Right Column GSC Metric Cards & Performance Graph */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-md p-4 text-xs space-y-4 shadow-xs">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono border-b pb-2">
                  <span>Performance on Search results · nl.ugreen.com</span>
                  <span>1 Jan 2024 - 6 May 2024</span>
                </div>

                {/* 4 Metrics Header Box */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-blue-600 text-white rounded p-2 text-center">
                    <div className="text-[10px] opacity-80 uppercase">Total clicks</div>
                    <div className="text-lg font-bold font-mono">1.86K</div>
                  </div>
                  <div className="bg-purple-600 text-white rounded p-2 text-center">
                    <div className="text-[10px] opacity-80 uppercase">Impressions</div>
                    <div className="text-lg font-bold font-mono">94.7K</div>
                  </div>
                  <div className="bg-slate-100 text-slate-800 rounded p-2 text-center border">
                    <div className="text-[10px] text-slate-500 uppercase">Avg CTR</div>
                    <div className="text-lg font-bold font-mono">2%</div>
                  </div>
                  <div className="bg-slate-100 text-slate-800 rounded p-2 text-center border">
                    <div className="text-[10px] text-slate-500 uppercase">Avg position</div>
                    <div className="text-lg font-bold font-mono">27.5</div>
                  </div>
                </div>

                {/* GSC Wave Graph */}
                <div className="h-32 bg-slate-50 rounded border border-slate-200 p-2 relative flex flex-col justify-end">
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono mb-1">
                    <span className="text-blue-600 font-bold">Clicks: 5 → 40/day</span>
                    <span className="text-purple-600 font-bold">Impressions: 800 → 2.5K/day</span>
                  </div>
                  <svg className="w-full h-24" viewBox="0 0 300 90" preserveAspectRatio="none">
                    {/* Impressions Area (Purple) */}
                    <path
                      d="M0,80 L20,78 L50,75 L90,70 L140,65 L180,50 L210,40 L240,25 L270,18 L300,15 L300,90 L0,90 Z"
                      fill="#e9d5ff"
                      opacity="0.4"
                    />
                    <path
                      d="M0,80 L20,78 L50,75 L90,70 L140,65 L180,50 L210,40 L240,25 L270,18 L300,15"
                      fill="none"
                      stroke="#9333ea"
                      strokeWidth="2"
                    />
                    {/* Clicks Line (Blue) */}
                    <path
                      d="M0,85 L30,83 L70,80 L120,78 L160,72 L190,60 L220,48 L250,38 L280,28 L300,22"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono mt-1">
                    <span>18/01/2024</span>
                    <span>17/02/2024</span>
                    <span>18/03/2024</span>
                    <span>17/04/2024</span>
                    <span>02/05/2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: Google Search Console (GSC)</span>
              <span>02 Organic Traffic Growth · Page 5</span>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                03
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Website Optimization Effectiveness
              </h2>
            </div>

            {/* Split Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
              {/* Left explanation */}
              <div className="lg:col-span-5 border border-pink-400 rounded-sm p-5 bg-pink-50/10 space-y-4">
                <h3 className="text-base font-bold font-sans text-slate-900">
                  1. Website URL Rating Score Improved to 12:
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      The website's URL rating score has significantly improved, rising from <strong className="text-slate-900 font-semibold">5 to 12 in UR</strong>.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      This improvement reflects effective <strong className="text-pink-600 font-semibold">link building</strong> and <strong className="text-pink-600 font-semibold">referral domain strategies</strong>.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      Due to a smaller base of available opportunities, continuous outreach and collaboration with external webmasters are essential to sustain and further enhance these outcomes.
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Ahrefs metrics showcase */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-md p-5 shadow-xs space-y-4">
                <div className="flex items-center gap-2 border-b pb-2 text-xs font-mono text-slate-500">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="font-bold text-slate-800">Ahrefs Overview:</span>
                  <span className="text-blue-600 truncate">https://nl.ugreen.com/</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Domain Rating (DR)</div>
                    <div className="text-2xl font-bold text-slate-900 font-mono">72</div>
                    <div className="text-[10px] text-slate-400">AR 77,818</div>
                  </div>
                  <div className="p-3 bg-pink-50/60 rounded border border-pink-200">
                    <div className="text-[10px] text-pink-700 uppercase font-mono font-bold">URL Rating (UR)</div>
                    <div className="text-2xl font-bold text-pink-600 font-mono">12 <span className="text-xs text-emerald-600 font-normal">+7</span></div>
                    <div className="text-[10px] text-emerald-600 font-medium">Up from 5</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Backlinks</div>
                    <div className="text-2xl font-bold text-slate-900 font-mono">71 <span className="text-xs text-emerald-600 font-normal">+70</span></div>
                    <div className="text-[10px] text-slate-400">All time 86</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center pt-2">
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Ref. Domains</div>
                    <div className="text-xl font-bold text-slate-800 font-mono">24 <span className="text-xs text-emerald-600 font-normal">+23</span></div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Organic Keywords</div>
                    <div className="text-xl font-bold text-blue-600 font-mono">1.6K <span className="text-xs text-emerald-600 font-normal">+989</span></div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Organic Traffic</div>
                    <div className="text-xl font-bold text-emerald-600 font-mono">668 <span className="text-xs text-emerald-600 font-normal">+618</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: Ahrefs</span>
              <span>03 Website Optimization Effectiveness · Page 6</span>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                03
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Website Optimization Effectiveness
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 border border-pink-400 rounded-sm p-5 bg-pink-50/10 space-y-4">
                <h3 className="text-base font-bold font-sans text-slate-900 leading-snug">
                  2. The website has successfully introduced previously unranked keywords and secured positions within search engine results.
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      <strong className="text-slate-900 font-semibold">New Keyword Integration:</strong> Previously unranked keywords have been strategically integrated into the website's content and optimization efforts.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      The attainment of rankings within SERPs has significantly improved, with a <strong className="text-pink-600 font-bold">400% increase</strong> in the number of pages ranking organically.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      <strong className="text-slate-900 font-semibold">From Absence to Presence:</strong> The keywords ranking in the top three positions have begun to generate impressions, and the number of keywords ranking in the <strong className="text-emerald-700 font-bold">top ten increased from 100 in April to nearly 400</strong>.
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Charts */}
              <div className="lg:col-span-6 space-y-3">
                {/* Keywords progression */}
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs">
                  <div className="flex justify-between items-center font-mono text-[11px] mb-2 text-slate-700">
                    <span className="font-bold">Organic keywords distribution</span>
                    <span className="text-emerald-600 font-bold">Top 10: 100 → 400</span>
                  </div>
                  <div className="h-20 bg-white rounded border p-1 relative flex flex-col justify-end">
                    <svg className="w-full h-16" viewBox="0 0 250 60" preserveAspectRatio="none">
                      <path d="M0,58 L50,55 L100,52 L150,45 L180,30 L220,18 L250,8 L250,60 L0,60 Z" fill="#fed7aa" opacity="0.6" />
                      <path d="M0,58 L50,55 L100,52 L150,45 L180,30 L220,18 L250,8" fill="none" stroke="#ea580c" strokeWidth="2" />
                    </svg>
                    <div className="flex justify-between text-[8px] text-slate-400 font-mono">
                      <span>Nov 2023 (0)</span>
                      <span>Jan 2024</span>
                      <span>Apr 2024 (100)</span>
                      <span className="text-orange-600 font-bold">May 2024 (~400)</span>
                    </div>
                  </div>
                </div>

                {/* Organic Pages growth */}
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs">
                  <div className="flex justify-between items-center font-mono text-[11px] mb-2 text-slate-700">
                    <span className="font-bold">Organic ranking pages</span>
                    <span className="text-pink-600 font-bold">+400% organic pages</span>
                  </div>
                  <div className="h-20 bg-white rounded border p-1 relative flex flex-col justify-end">
                    <svg className="w-full h-16" viewBox="0 0 250 60" preserveAspectRatio="none">
                      <path d="M0,55 L60,52 L120,48 L160,35 L200,20 L250,10 L250,60 L0,60 Z" fill="#fbcfe8" opacity="0.6" />
                      <path d="M0,55 L60,52 L120,48 L160,35 L200,20 L250,10" fill="none" stroke="#db2777" strokeWidth="2" />
                    </svg>
                    <div className="flex justify-between text-[8px] text-slate-400 font-mono">
                      <span>Early Sandbox</span>
                      <span>Integration Phase</span>
                      <span className="text-pink-600 font-bold">400% Growth Surge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: Ahrefs</span>
              <span>03 Website Optimization Effectiveness · Page 7</span>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                03
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Website Optimization Effectiveness
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 border border-pink-400 rounded-sm p-5 bg-pink-50/10 space-y-4">
                <h3 className="text-base font-bold font-sans text-slate-900">
                  3. Enhancing crucial on-page elements to boost URL performance:
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      Key webpage elements including <strong className="text-pink-600 font-semibold underline decoration-pink-300">H1 headings, titles, descriptions, and URLs</strong> were optimized through diagnostic analysis and necessary repairs.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>
                      Following these optimizations, URLs showed significant improvement, and the performance of those requiring optimization also improved.
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Core Web Vitals report from GSC */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-md p-4 space-y-4 shadow-xs">
                {/* Mobile report */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>Mobile Page Experience</span>
                    <span className="text-emerald-600 font-mono">112 Good URLs · 0 Poor</span>
                  </div>
                  <div className="h-16 bg-slate-50 border rounded p-1 flex items-end">
                    <svg className="w-full h-12" viewBox="0 0 250 50" preserveAspectRatio="none">
                      <path d="M0,45 L40,30 L80,25 L120,22 L160,18 L200,10 L250,8" fill="none" stroke="#059669" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex gap-4 text-[9px] font-mono text-slate-500">
                    <span className="text-emerald-700 font-bold">● 112 good URLs</span>
                    <span>● 0 URLs need improvement</span>
                    <span>● 0 poor URLs</span>
                  </div>
                </div>

                {/* Desktop report */}
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>Desktop Page Experience</span>
                    <span className="text-emerald-600 font-mono">112 Good URLs · 0 Poor</span>
                  </div>
                  <div className="h-16 bg-slate-50 border rounded p-1 flex items-end">
                    <svg className="w-full h-12" viewBox="0 0 250 50" preserveAspectRatio="none">
                      <path d="M0,48 L50,45 L80,20 L130,15 L180,12 L220,10 L250,8" fill="none" stroke="#059669" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex gap-4 text-[9px] font-mono text-slate-500">
                    <span className="text-emerald-700 font-bold">● 112 good URLs</span>
                    <span>● 0 URLs need improvement</span>
                    <span>● 0 poor URLs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: Google Search Console (GSC)</span>
              <span>03 Website Optimization Effectiveness · Page 8</span>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                04
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Work Showcase - Budget Distribution
              </h2>
            </div>

            {/* Content & Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
              {/* Left Principles */}
              <div className="lg:col-span-5 border border-pink-400 rounded-sm p-4 bg-pink-50/10 space-y-3 text-xs">
                <h3 className="font-bold text-slate-900 text-sm">
                  Principles and Accounting Standards for SEO Budget
                </h3>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800">1. Cost Analysis and Budget Allocation:</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 leading-relaxed">
                    <li>Begin by <strong className="text-slate-900">referencing the proportion</strong> of SEO expenditure among comparable scale and industry websites.</li>
                    <li>Subsequently, integrate sales targets and cost structure to determine the total SEO budget allocated for the NL region.</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800">2. Analysis of Blog Content and Backlink ROI:</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 leading-relaxed">
                    <li>Evaluate contribution of <strong className="text-pink-600">blog sections</strong> on SEO, emphasizing high-quality content output.</li>
                    <li>Conduct cost-benefit analysis of external linking, acquiring links from authoritative, niche-specific websites.</li>
                  </ul>
                </div>
              </div>

              {/* Right Accounting Comparison Tables */}
              <div className="lg:col-span-7 space-y-3 text-[10px]">
                {/* Comparison benchmark */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-slate-200 rounded p-2 bg-slate-50">
                    <div className="font-bold font-mono text-slate-700 mb-1">FR SEO 成本 (Benchmark)</div>
                    <div className="flex justify-between"><span>FR Total GMV:</span> <span className="font-mono font-bold">€194,000.00</span></div>
                    <div className="flex justify-between"><span>FR 费用占比:</span> <span className="font-mono font-bold text-blue-600">1.76%</span></div>
                  </div>
                  <div className="border border-pink-300 rounded p-2 bg-pink-50/40">
                    <div className="font-bold font-mono text-pink-800 mb-1">NL 需求 (Calculated Target)</div>
                    <div className="flex justify-between"><span>NL 3月 GMV:</span> <span className="font-mono font-bold">€31,596.09</span></div>
                    <div className="flex justify-between"><span>月度总预算:</span> <span className="font-mono font-bold text-pink-600 text-xs">550€ / Month</span></div>
                  </div>
                </div>

                {/* NL 1-3 month allocation table */}
                <div className="border border-slate-200 rounded overflow-hidden">
                  <div className="bg-slate-100 p-1.5 font-bold font-mono text-slate-800 text-[10px] text-center">
                    NL 1-3月 SEO 预算分配 (Netherlands Allocation Matrix)
                  </div>
                  <table className="w-full text-left bg-white divide-y divide-slate-100">
                    <thead className="bg-slate-50 text-[9px] font-mono text-slate-600 uppercase">
                      <tr>
                        <th className="p-1.5">月份</th>
                        <th className="p-1.5 text-right">Total</th>
                        <th className="p-1.5 text-right">前期规划</th>
                        <th className="p-1.5 text-right">站内优化</th>
                        <th className="p-1.5 text-right">原创博文 (Pcs)</th>
                        <th className="p-1.5 text-right">外链资源 (Pcs)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono">
                      <tr>
                        <td className="p-1.5 font-sans font-bold">1月</td>
                        <td className="p-1.5 text-right font-bold text-slate-900">550€</td>
                        <td className="p-1.5 text-right">165€</td>
                        <td className="p-1.5 text-right">220€</td>
                        <td className="p-1.5 text-right">0€ (0)</td>
                        <td className="p-1.5 text-right">165€ (0)</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 font-sans font-bold">2月</td>
                        <td className="p-1.5 text-right font-bold text-slate-900">550€</td>
                        <td className="p-1.5 text-right">110€</td>
                        <td className="p-1.5 text-right">110€</td>
                        <td className="p-1.5 text-right">165€ (3)</td>
                        <td className="p-1.5 text-right">165€ (3)</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 font-sans font-bold">3月</td>
                        <td className="p-1.5 text-right font-bold text-slate-900">550€</td>
                        <td className="p-1.5 text-right">0€</td>
                        <td className="p-1.5 text-right">110€</td>
                        <td className="p-1.5 text-right">220€ (5)</td>
                        <td className="p-1.5 text-right">220€ (5)</td>
                      </tr>
                      <tr className="bg-pink-50/40 font-bold text-slate-900">
                        <td className="p-1.5 font-sans">Total</td>
                        <td className="p-1.5 text-right text-pink-600">1650€</td>
                        <td className="p-1.5 text-right">275€</td>
                        <td className="p-1.5 text-right">440€</td>
                        <td className="p-1.5 text-right">385€ (8篇)</td>
                        <td className="p-1.5 text-right">550€ (8条)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: personal work output</span>
              <span>04 Work Showcase - Budget Distribution · Page 9</span>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                04
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Work Showcase - Keyword Database
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
              {/* Left Column Text */}
              <div className="lg:col-span-4 border border-pink-400 rounded-sm p-4 bg-pink-50/10 space-y-3 text-xs">
                <p className="text-slate-800 leading-relaxed font-medium">
                  A well-managed keyword library is crucial for attracting relevant traffic, enhancing online visibility, and driving business growth through effective SEO practices.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  By <strong className="text-slate-900 font-semibold">strategically integrating these keywords</strong> into website content, businesses optimize their pages to appear more relevant to search engines.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-pink-600 font-semibold">Monitoring keyword performance</strong> allows businesses to refine their SEO strategy over time, ensuring continued alignment with user search behavior.
                </p>
              </div>

              {/* Right Keyword Database Spreadsheet Preview */}
              <div className="lg:col-span-8 border border-slate-200 rounded-md overflow-hidden shadow-xs">
                <div className="bg-slate-800 text-white text-[10px] p-2 flex justify-between font-mono">
                  <span>Dutch Keyword Mapping Matrix (KW NL vs EN / Volume / KD)</span>
                  <span className="text-emerald-400">nl.ugreen.com</span>
                </div>
                <div className="overflow-x-auto max-h-60 bg-white">
                  <table className="w-full text-[9px] font-mono text-left divide-y divide-slate-100">
                    <thead className="bg-slate-100 text-slate-700 uppercase">
                      <tr>
                        <th className="p-1">Category (一级分类)</th>
                        <th className="p-1">Dutch Keyword (KW NL)</th>
                        <th className="p-1 text-right">Vol.</th>
                        <th className="p-1 text-right">KD</th>
                        <th className="p-1">Second-level / Target Item</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="p-1 font-sans font-medium text-slate-900">Portable Power Station</td>
                        <td className="p-1 font-bold text-blue-600">portable power station</td>
                        <td className="p-1 text-right">700</td>
                        <td className="p-1 text-right">12</td>
                        <td className="p-1 text-slate-500">Power Strip / Power Bank</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans font-medium text-slate-900">Dock & Hub</td>
                        <td className="p-1 font-bold text-blue-600">docking station</td>
                        <td className="p-1 text-right">6.2K</td>
                        <td className="p-1 text-right">0</td>
                        <td className="p-1 text-slate-500">USB-C Hub / Docking Station</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans font-medium text-slate-900">Audio & Video</td>
                        <td className="p-1 font-bold text-blue-600">hdmi kabel</td>
                        <td className="p-1 text-right">13K</td>
                        <td className="p-1 text-right">5</td>
                        <td className="p-1 text-slate-500">HDMI Cable / DP kabel</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans font-medium text-slate-900">PC Accessory</td>
                        <td className="p-1 font-bold text-blue-600">laptop standaard / muizen</td>
                        <td className="p-1 text-right">1.9K</td>
                        <td className="p-1 text-right">1</td>
                        <td className="p-1 text-slate-500">Laptop stand, ethernet kabel</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans font-medium text-slate-900">Charger</td>
                        <td className="p-1 font-bold text-blue-600">oplader / snellader</td>
                        <td className="p-1 text-right">4.2K</td>
                        <td className="p-1 text-right">0</td>
                        <td className="p-1 text-slate-500">GaN Charger / Nexode Pro</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans font-medium text-slate-900">Cable</td>
                        <td className="p-1 font-bold text-blue-600">usb c kabel</td>
                        <td className="p-1 text-right">9.3K</td>
                        <td className="p-1 text-right">2</td>
                        <td className="p-1 text-slate-500">Lightning / USB-C data cable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: personal work output</span>
              <span>04 Work Showcase - Keyword Database · Page 10</span>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                04
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Work Showcase - SEO Content
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 border border-pink-400 rounded-sm p-4 bg-pink-50/10 space-y-3 text-xs">
                <p className="text-slate-800 leading-relaxed font-bold">
                  SEO blogs and TDK optimization play crucial roles in enhancing website visibility and performance:
                </p>
                <div className="space-y-2 text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">SEO blogs</strong> regularly publish high-quality content with optimized keywords to attract and retain visitors, boosting search engine rankings.
                  </p>
                  <p>
                    <strong className="text-pink-600">TDK optimization</strong> fine-tunes page elements like titles, descriptions, and keywords to improve click-through rates (CTR) in search results.
                  </p>
                </div>
              </div>

              {/* Right Spreadsheet view */}
              <div className="lg:col-span-8 border border-slate-200 rounded-md overflow-hidden shadow-xs">
                <div className="bg-slate-100 text-slate-800 text-[10px] p-2 flex justify-between font-mono font-bold border-b">
                  <span>Shopify TDK Meta Title & Description Tracking Matrix</span>
                  <span className="text-pink-600">Dutch Localization</span>
                </div>
                <div className="overflow-x-auto max-h-60 bg-white">
                  <table className="w-full text-[9px] font-mono text-left divide-y divide-slate-100">
                    <thead className="bg-slate-50 text-slate-600 uppercase">
                      <tr>
                        <th className="p-1">Type</th>
                        <th className="p-1">Status</th>
                        <th className="p-1">Shopify Handle</th>
                        <th className="p-1">Dutch Meta Description (DP)</th>
                        <th className="p-1 text-right">Chars</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="p-1 font-sans">核心单品</td>
                        <td className="p-1 text-emerald-600 font-bold">active</td>
                        <td className="p-1 text-blue-600">ugreen-nexode-65w</td>
                        <td className="p-1 truncate max-w-xs text-slate-600">Laad meerdere apparaten tegelijkertijd op met de Ugreen Nexode 65W</td>
                        <td className="p-1 text-right font-bold">116</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans">核心单品</td>
                        <td className="p-1 text-emerald-600 font-bold">active</td>
                        <td className="p-1 text-blue-600">nexode-100w-station</td>
                        <td className="p-1 truncate max-w-xs text-slate-600">Transformeer je type C laptop in een krachtige workstation met de Ugreen</td>
                        <td className="p-1 text-right font-bold">132</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans">移动电源</td>
                        <td className="p-1 text-emerald-600 font-bold">active</td>
                        <td className="p-1 text-blue-600">powerbank-140w-pd</td>
                        <td className="p-1 truncate max-w-xs text-slate-600">Laad je apparaten supersnel op met de UGREEN 140W Power Bank</td>
                        <td className="p-1 text-right font-bold">99</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans">扩展坞</td>
                        <td className="p-1 text-emerald-600 font-bold">active</td>
                        <td className="p-1 text-blue-600">revodok-usb-c-dock</td>
                        <td className="p-1 truncate max-w-xs text-slate-600">UGREEN Revodok USB C docking station ondersteunt dubbele weergave</td>
                        <td className="p-1 text-right font-bold">146</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-sans">404 Fix</td>
                        <td className="p-1 text-amber-600 font-bold">fixed</td>
                        <td className="p-1 text-amber-600">redirect/cables</td>
                        <td className="p-1 truncate max-w-xs text-slate-600">Correct 301 redirect mapped to collection for indexed rank preservation</td>
                        <td className="p-1 text-right font-bold">88</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: personal work output</span>
              <span>04 Work Showcase - SEO Content · Page 11</span>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                04
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Work Showcase - Backlinks
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 border border-pink-400 rounded-sm p-4 bg-pink-50/10 space-y-3 text-xs">
                <p className="text-slate-800 leading-relaxed font-bold">
                  Backlinks are essential in the early stages of website development for establishing authority, improving search engine rankings, driving targeted traffic, accelerating indexing, and enhancing brand awareness.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The Dutch website engaged in link building during its initial launch phase, primarily focusing on <strong className="text-pink-600">core keywords and relevant linking strategies</strong> to enhance search engine visibility.
                </p>
              </div>

              {/* Right Table */}
              <div className="lg:col-span-8 border border-slate-200 rounded-md overflow-hidden shadow-xs">
                <div className="bg-slate-800 text-white text-[10px] p-2 flex justify-between font-mono">
                  <span>Outreach & Backlink Acquisition Ledger (Dutch Media & Tech Portals)</span>
                  <span className="text-emerald-400">8 / 8 Active</span>
                </div>
                <div className="overflow-x-auto max-h-60 bg-white">
                  <table className="w-full text-[9px] font-mono text-left divide-y divide-slate-100">
                    <thead className="bg-slate-100 text-slate-700 uppercase">
                      <tr>
                        <th className="p-1">Target Keyword</th>
                        <th className="p-1">Domain & Authority</th>
                        <th className="p-1 text-right">PA / DA</th>
                        <th className="p-1 text-right">Traffic</th>
                        <th className="p-1 text-center">Live Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="p-1 font-bold text-blue-600">usb c oplader</td>
                        <td className="p-1 font-sans">techconnect.nl / mediagroup</td>
                        <td className="p-1 text-right">40 / 52</td>
                        <td className="p-1 text-right">2.1K</td>
                        <td className="p-1 text-center text-emerald-600 font-bold">OK ✓</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-bold text-blue-600">powerbank nl</td>
                        <td className="p-1 font-sans">itnieuws.nl / review portal</td>
                        <td className="p-1 text-right">45 / 65</td>
                        <td className="p-1 text-right">10.7K</td>
                        <td className="p-1 text-center text-emerald-600 font-bold">OK ✓</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-bold text-blue-600">docking station</td>
                        <td className="p-1 font-sans">gadgetgear.nl / hardware blog</td>
                        <td className="p-1 text-right">41 / 59</td>
                        <td className="p-1 text-right">3.3K</td>
                        <td className="p-1 text-center text-emerald-600 font-bold">OK ✓</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-bold text-blue-600">hdmi switch</td>
                        <td className="p-1 font-sans">smarttechtips.nl / consumer</td>
                        <td className="p-1 text-right">40 / 50</td>
                        <td className="p-1 text-right">7.0K</td>
                        <td className="p-1 text-center text-emerald-600 font-bold">OK ✓</td>
                      </tr>
                      <tr>
                        <td className="p-1 font-bold text-blue-600">ugreen review</td>
                        <td className="p-1 font-sans">applewereld.nl / tech community</td>
                        <td className="p-1 text-right">42 / 56</td>
                        <td className="p-1 text-right">1.4K</td>
                        <td className="p-1 text-center text-emerald-600 font-bold">OK ✓</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: personal work output</span>
              <span>04 Work Showcase - Backlinks · Page 12</span>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-white text-slate-900 select-none overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <span className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                04
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Work Showcase - Technical SEO
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-start">
              {/* Left Column Text & Checklist */}
              <div className="lg:col-span-4 border border-pink-400 rounded-sm p-4 bg-pink-50/10 space-y-3 text-xs">
                <p className="text-slate-800 leading-relaxed font-bold">
                  Technical SEO involves optimizing a website's technical aspects to enhance performance and visibility in search engine results, ultimately improving rankings and delivering better user experiences.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-200">
                  <div className="font-bold text-slate-900">9 Core Technical Audit Checkpoints:</div>
                  <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-700 font-mono">
                    <div>1 网站健康</div>
                    <div>2 加载速度优化</div>
                    <div>3 Sitemap 提交</div>
                    <div>4 Robots.txt 调整</div>
                    <div>5 结构化代码</div>
                    <div>6 地域标注声明</div>
                    <div>7 死链排查</div>
                    <div>8 图片破损修复</div>
                  </div>
                </div>
              </div>

              {/* Right Core Web Vitals & Issue Remediation Table */}
              <div className="lg:col-span-8 space-y-3">
                {/* Core Web Vitals Score Header */}
                <div className="bg-emerald-50 border border-emerald-200 rounded p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-bold text-emerald-900">Core Web Vitals Assessment: Passed ✓</span>
                  </div>
                  <div className="flex gap-3 text-[10px] font-mono text-emerald-800">
                    <span>LCP: <strong>1.6 s</strong></span>
                    <span>INP: <strong>52 ms</strong></span>
                    <span>CLS: <strong>0.04</strong></span>
                  </div>
                </div>

                {/* Remediation Table */}
                <div className="border border-slate-200 rounded-md overflow-hidden shadow-xs">
                  <div className="bg-slate-100 p-1.5 text-[10px] font-mono font-bold text-slate-700 border-b flex justify-between">
                    <span>Technical Issue Remediation Log (nl.ugreen.com)</span>
                    <span className="text-emerald-600 font-bold">Status: All Fixed</span>
                  </div>
                  <div className="overflow-x-auto max-h-48 bg-white">
                    <table className="w-full text-[9px] font-mono text-left divide-y divide-slate-100">
                      <thead className="bg-slate-50 text-slate-600 uppercase">
                        <tr>
                          <th className="p-1">Level</th>
                          <th className="p-1">Issue Identified</th>
                          <th className="p-1">Remediation Action (To do)</th>
                          <th className="p-1 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr>
                          <td className="p-1 text-red-600 font-bold">Error</td>
                          <td className="p-1">Image file size too large</td>
                          <td className="p-1">图片尺寸与分辨率调整，压缩图片后再上传</td>
                          <td className="p-1 text-center text-emerald-600 font-bold">Done ✓</td>
                        </tr>
                        <tr>
                          <td className="p-1 text-amber-600 font-bold">Warning</td>
                          <td className="p-1">H1 tag missing or empty</td>
                          <td className="p-1">补充关键H1标签，严格限制在58个字符以内</td>
                          <td className="p-1 text-center text-emerald-600 font-bold">Done ✓</td>
                        </tr>
                        <tr>
                          <td className="p-1 text-red-600 font-bold">Error</td>
                          <td className="p-1">3XX page receives traffic</td>
                          <td className="p-1">验证重定向是否成功，检查目标页索引状态</td>
                          <td className="p-1 text-center text-emerald-600 font-bold">Done ✓</td>
                        </tr>
                        <tr>
                          <td className="p-1 text-amber-600 font-bold">Warning</td>
                          <td className="p-1">CSS broken / Render-blocking</td>
                          <td className="p-1">网页样式正常显示，剔除冗余阻塞资源</td>
                          <td className="p-1 text-center text-emerald-600 font-bold">Done ✓</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Source: personal work output</span>
              <span>04 Work Showcase - Technical SEO · Page 13</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 md:p-6"
        id="modal-ugreen-seo-pdf"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          ref={containerRef}
          className={`relative w-full max-w-6xl h-[92vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border ${
            darkMode 
              ? 'bg-slate-900 border-slate-800 text-slate-100' 
              : 'bg-slate-900 border-slate-800 text-slate-100'
          }`}
        >
          {/* Top Control Bar */}
          <div className="h-14 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between shrink-0 select-none">
            {/* Left: Document Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate flex items-center gap-2">
                  <span>SEO Case Study — UGREEN NL</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300 font-semibold">
                    13 Slides
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400 truncate">
                  Written By Xiao Qi · Jan 2024 - May 2024
                </p>
              </div>
            </div>

            {/* Center: Page Controls */}
            {viewMode === 'slide' && (
              <div className="flex items-center gap-1 sm:gap-2 bg-slate-800/80 border border-slate-700/60 rounded-xl px-2 py-1">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-1 rounded-md text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer transition-colors"
                  title="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="text-xs font-mono px-2 text-slate-200">
                  <span className="text-pink-400 font-bold">{currentPage}</span> / {totalPages}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-1 rounded-md text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer transition-colors"
                  title="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Right: Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Thumbnails toggle */}
              <button
                onClick={() => setShowThumbnails(!showThumbnails)}
                className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                  showThumbnails 
                    ? 'bg-pink-500 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Toggle Thumbnails Grid"
              >
                <Layers className="w-4 h-4" />
                <span className="hidden md:inline">Slides</span>
              </button>

              {/* View mode toggle */}
              <button
                onClick={() => setViewMode(viewMode === 'slide' ? 'all' : 'slide')}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer text-xs"
                title={viewMode === 'slide' ? 'Continuous Scroll View' : 'Single Slide View'}
              >
                {viewMode === 'slide' ? 'All Pages' : 'Slide View'}
              </button>

              {/* Print / Save PDF */}
              <button
                onClick={handlePrint}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Print or Save PDF"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-rose-500/20 hover:text-rose-400 transition-colors cursor-pointer ml-1"
                title="Close Viewer (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex overflow-hidden relative bg-slate-950">
            {/* Optional Thumbnail Sidebar */}
            {showThumbnails && (
              <div className="w-44 sm:w-52 border-r border-slate-800 bg-slate-900/90 overflow-y-auto p-3 space-y-3 shrink-0">
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold mb-2">
                  All Slides ({totalPages})
                </div>
                {[...Array(totalPages)].map((_, idx) => {
                  const pNum = idx + 1;
                  return (
                    <button
                      key={pNum}
                      onClick={() => {
                        setCurrentPage(pNum);
                        setViewMode('slide');
                      }}
                      className={`w-full text-left p-2 rounded-lg border transition-all cursor-pointer ${
                        currentPage === pNum && viewMode === 'slide'
                          ? 'border-pink-500 bg-pink-500/10 text-white ring-1 ring-pink-500'
                          : 'border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="aspect-[16/9] w-full bg-white rounded border border-slate-700/50 mb-1 overflow-hidden scale-95 pointer-events-none origin-top-left flex items-center justify-center text-[10px] text-slate-400 font-serif">
                        Slide {pNum}
                      </div>
                      <div className="text-[10px] font-mono flex justify-between">
                        <span>Slide {pNum}</span>
                        {pNum === 1 && <span className="text-pink-400">Cover</span>}
                        {pNum === 2 && <span>TOC</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Viewer Stage */}
            <div className="flex-1 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-8">
              {viewMode === 'slide' ? (
                <div className="w-full max-w-5xl aspect-[16/9] max-h-full rounded-xl shadow-2xl overflow-hidden border border-slate-700/40 relative">
                  {renderSlide(currentPage)}

                  {/* On-Slide Floating Navigation Arrows */}
                  {currentPage > 1 && (
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all shadow-lg hover:scale-105"
                      title="Previous"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  {currentPage < totalPages && (
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all shadow-lg hover:scale-105"
                      title="Next"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ) : (
                /* Continuous Scroll Mode */
                <div className="w-full max-w-4xl space-y-8 py-4">
                  {[...Array(totalPages)].map((_, idx) => (
                    <div key={idx} className="aspect-[16/9] w-full rounded-xl shadow-2xl overflow-hidden border border-slate-700/50">
                      {renderSlide(idx + 1)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom quick navigation bar */}
          <div className="h-10 bg-slate-900/90 border-t border-slate-800 px-4 flex items-center justify-between text-xs text-slate-400 shrink-0 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              <span>UGREEN Netherlands — SEO Case Study</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="hidden sm:inline">Use ← and → keys to navigate</span>
              <span className="text-slate-300">Slide {currentPage} of {totalPages}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
