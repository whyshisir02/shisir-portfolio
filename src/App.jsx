import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import IntroOverlay from './components/ui/IntroOverlay'
import InteractiveBackdrop from './components/ui/InteractiveBackdrop'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Logs from './pages/Logs'
import LogDetail from './pages/LogDetail'
import SewaFiCaseStudy from './pages/SewaFiCaseStudy'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <InteractiveBackdrop />
      <IntroOverlay />

      <div className="relative z-10">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/logs/:slug" element={<LogDetail />} />
            <Route path="/work/sewafi" element={<SewaFiCaseStudy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  )
}

export default App
