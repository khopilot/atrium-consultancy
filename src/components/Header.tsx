import React, { useState, useEffect } from 'react'
import { Home, Users, Briefcase, Grid, MessageCircle, Menu, Globe } from 'lucide-react'

interface HeaderProps {
  setCurrentPage: (page: string) => void
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  const [activePage, setActivePage] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (page: string) => {
    setActivePage(page)
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en')
    setIsLanguageMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <header className={`fixed z-50 transition-all duration-300 ease-in-out hidden md:block
                          ${isScrolled ? 'top-4 right-4' : 'top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl'}`}>
        <nav className={`bg-white text-black rounded-full transition-all duration-300 ease-in-out 
                         border border-black backdrop-blur-sm bg-opacity-90 shadow-md
                         ${isScrolled ? 'p-2' : 'py-3 px-6'}`}>
          {isScrolled ? (
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
              <LanguageSelector 
                language={language} 
                setLanguage={setLanguage} 
                isOpen={isLanguageMenuOpen}
                setIsOpen={setIsLanguageMenuOpen}
              />
            </div>
          ) : (
            <ul className="flex justify-between items-center">
              <NavItem icon={<Home />} text="Home" onClick={() => handleNavigation('home')} isActive={activePage === 'home'} />
              <NavItem icon={<Users />} text="About" onClick={() => handleNavigation('about')} isActive={activePage === 'about'} />
              <NavItem icon={<Briefcase />} text="Services" onClick={() => handleNavigation('services')} isActive={activePage === 'services'} />
              <NavItem icon={<Grid />} text="Projects" onClick={() => handleNavigation('projects')} isActive={activePage === 'projects'} />
              <NavItem icon={<MessageCircle />} text="Contact" onClick={() => handleNavigation('contact')} isActive={activePage === 'contact'} />
              <LanguageSelector 
                language={language} 
                setLanguage={setLanguage} 
                isOpen={isLanguageMenuOpen}
                setIsOpen={setIsLanguageMenuOpen}
              />
            </ul>
          )}
        </nav>
        {isScrolled && isMenuOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 border border-black">
            <NavItem icon={<Home />} text="Home" onClick={() => handleNavigation('home')} isActive={activePage === 'home'} />
            <NavItem icon={<Users />} text="About" onClick={() => handleNavigation('about')} isActive={activePage === 'about'} />
            <NavItem icon={<Briefcase />} text="Services" onClick={() => handleNavigation('services')} isActive={activePage === 'services'} />
            <NavItem icon={<Grid />} text="Projects" onClick={() => handleNavigation('projects')} isActive={activePage === 'projects'} />
            <NavItem icon={<MessageCircle />} text="Contact" onClick={() => handleNavigation('contact')} isActive={activePage === 'contact'} />
          </div>
        )}
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 bg-white text-black z-50 rounded-full shadow-lg border border-black" role="navigation" aria-label="Mobile navigation">
        <ul className="flex justify-around items-center py-2 px-4">
          <MobileNavItem icon={<Home size={24} />} onClick={() => handleNavigation('home')} isActive={activePage === 'home'} label="Home" />
          <MobileNavItem icon={<Users size={24} />} onClick={() => handleNavigation('about')} isActive={activePage === 'about'} label="About" />
          <MobileNavItem icon={<Briefcase size={24} />} onClick={() => handleNavigation('services')} isActive={activePage === 'services'} label="Services" />
          <MobileNavItem icon={<Grid size={24} />} onClick={() => handleNavigation('projects')} isActive={activePage === 'projects'} label="Projects" />
          <MobileNavItem icon={<MessageCircle size={24} />} onClick={() => handleNavigation('contact')} isActive={activePage === 'contact'} label="Contact" />
          <MobileNavItem 
            icon={<Globe size={24} />} 
            onClick={toggleLanguage} 
            isActive={false} 
            label={language === 'en' ? 'English' : '中文'} 
          />
        </ul>
      </nav>
    </>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  text: string
  onClick: () => void
  isActive: boolean
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, onClick, isActive }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center px-3 py-2 rounded-full transition duration-300 w-full
                    ${isActive
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100'
                    } focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`}
      >
        {React.cloneElement(icon as React.ReactElement, { 
          color: isActive ? 'white' : 'black',
          size: 18
        })}
        <span className="ml-2 text-sm font-medium">{text}</span>
      </button>
    </li>
  )
}

interface MobileNavItemProps {
  icon: React.ReactNode
  onClick: () => void
  isActive: boolean
  label: string
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ icon, onClick, isActive, label }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`p-2 rounded-full transition duration-300 ${
          isActive
            ? 'bg-black text-white'
            : 'hover:bg-gray-100'
        }`}
        aria-label={label}
      >
        {icon}
      </button>
    </li>
  )
}

interface LanguageSelectorProps {
  language: string
  setLanguage: (lang: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage, isOpen, setIsOpen }) => {
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded-full transition duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
      >
        <Globe size={18} />
        <span className="ml-2 text-sm font-medium">{language === 'en' ? 'EN' : '中文'}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-xl z-20 border border-black">
          <button
            onClick={() => { setLanguage('en'); setIsOpen(false); }}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            English
          </button>
          <button
            onClick={() => { setLanguage('zh'); setIsOpen(false); }}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            中文
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
