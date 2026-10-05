import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import EstimateModal from './components/EstimateModal';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ExteriorPaintingPage from './pages/ExteriorPaintingPage';
import InteriorPaintingPage from './pages/InteriorPaintingPage';
import RemodelingFinishesPage from './pages/RemodelingFinishesPage';
import CapeCoralPage from './pages/CapeCoralPage';
import FortMyersPage from './pages/FortMyersPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const openEstimate = () => setIsEstimateModalOpen(true);
  const closeEstimate = () => setIsEstimateModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#14171E] font-sans selection:bg-[#B81828]/20 selection:text-[#B81828]">
        <Navbar onOpenEstimate={openEstimate} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenEstimate={openEstimate} />} />
            
            {/* Core Services */}
            <Route
              path="/services/exterior-painting"
              element={<ExteriorPaintingPage onOpenEstimate={openEstimate} />}
            />
            <Route
              path="/services/interior-painting"
              element={<InteriorPaintingPage onOpenEstimate={openEstimate} />}
            />
            <Route
              path="/services/remodeling-finishes"
              element={<RemodelingFinishesPage onOpenEstimate={openEstimate} />}
            />

            {/* Visual Portfolio & Company */}
            <Route
              path="/projects"
              element={<ProjectsPage onOpenEstimate={openEstimate} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenEstimate={openEstimate} />}
            />

            {/* Local Authority Landing Pages */}
            <Route
              path="/locations/cape-coral"
              element={<CapeCoralPage onOpenEstimate={openEstimate} />}
            />
            <Route
              path="/locations/fort-myers"
              element={<FortMyersPage onOpenEstimate={openEstimate} />}
            />

            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenEstimate={openEstimate} />} />
          </Routes>
        </main>

        <Footer onOpenEstimate={openEstimate} />
        
        <MobileStickyBar onOpenEstimate={openEstimate} />
        
        <EstimateModal
          isOpen={isEstimateModalOpen}
          onClose={closeEstimate}
        />
      </div>
    </Router>
  );
}
