import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import About from './components/About'
import Blog from './components/Blog'
import Projects from './components/Projects'

function App() {
  const [currentPage, setCurrentPage] = React.useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'services':
        return <Services />
      case 'contact':
        return <Contact />
      case 'privacy':
        return <PrivacyPolicy />
      case 'about':
        return <About />
      case 'blog':
        return <Blog />
      case 'projects':
        return <Projects />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
