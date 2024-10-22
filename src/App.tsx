// src/App.tsx
import { useState, useEffect } from 'react'; // Removed React import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('');

  // Update the document title based on the current page
  useEffect(() => {
    document.title = currentPage || 'Default Title'; // Set a default title if currentPage is empty
  }, [currentPage]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header setCurrentPage={setCurrentPage} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </Router>
  );
}

export default App;
