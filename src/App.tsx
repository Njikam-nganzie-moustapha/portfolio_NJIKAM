import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollToTop from './components/ui/ScrollToTop';
import './index.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.5
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Header />
            <AnimatePresence mode="wait">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Home />
                    </motion.div>
                  } />
                  <Route path="/about" element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <About />
                    </motion.div>
                  } />
                  <Route path="/projects" element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Projects />
                    </motion.div>
                  } />
                  <Route path="/gallery" element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Gallery />
                    </motion.div>
                  } />
                  <Route path="/contact" element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Contact />
                    </motion.div>
                  } />
                </Routes>
              </Suspense>
            </AnimatePresence>
            <ScrollToTop />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
