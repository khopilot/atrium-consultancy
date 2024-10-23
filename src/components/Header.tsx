import React, { useState, useEffect } from 'react';
import { Home, Users, Briefcase, Grid, MessageCircle, Menu, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  const { t, i18n } = useTranslation('header');
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileLanguageMenuOpen, setIsMobileLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.replace('/', '') || 'home';
    setActivePage(path);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    setActivePage(page);
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsMobileLanguageMenuOpen(false);
    
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }

    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleMobileLanguageMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileLanguageMenuOpen(!isMobileLanguageMenuOpen);
  };

  const handleMobileLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsMobileLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector') && !target.closest('.mobile-menu') && !target.closest('.mobile-language-menu')) {
        setIsLanguageMenuOpen(false);
        setIsMenuOpen(false);
        setIsMobileLanguageMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <header
        className={`fixed z-50 transition-all duration-300 ease-in-out hidden md:block ${
          isScrolled ? 'top-4 right-4' : 'top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl'
        }`}
      >
        <nav
          className={`bg-white text-black rounded-full transition-all duration-300 ease-in-out 
                      border border-black backdrop-blur-sm bg-opacity-90 shadow-md
                      ${isScrolled ? 'p-2' : 'py-3 px-6'}`}
        >
          {!isScrolled ? (
            <ul className="flex justify-between items-center">
              <NavItem
                icon={<Home />}
                text={t('nav.home')}
                onClick={() => handleNavigation('home')}
                isActive={activePage === 'home'}
              />
              <NavItem
                icon={<Users />}
                text={t('nav.about')}
                onClick={() => handleNavigation('about')}
                isActive={activePage === 'about'}
              />
              <NavItem
                icon={<Briefcase />}
                text={t('nav.services')}
                onClick={() => handleNavigation('services')}
                isActive={activePage === 'services'}
              />
              <NavItem
                icon={<Grid />}
                text={t('nav.projects')}
                onClick={() => handleNavigation('projects')}
                isActive={activePage === 'projects'}
              />
              <NavItem
                icon={<MessageCircle />}
                text={t('nav.contact')}
                onClick={() => handleNavigation('contact')}
                isActive={activePage === 'contact'}
              />
              <div className="language-selector">
                <LanguageSelector
                  isOpen={isLanguageMenuOpen}
                  toggleMenu={toggleLanguageMenu}
                />
              </div>
            </ul>
          ) : (
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 mobile-menu"
                aria-label={t('menu')}
              >
                <Menu size={24} />
              </button>
              <div className="language-selector">
                <LanguageSelector
                  isOpen={isLanguageMenuOpen}
                  toggleMenu={toggleLanguageMenu}
                />
              </div>
            </div>
          )}
        </nav>
        {isScrolled && isMenuOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 border border-black">
            <NavItem
              icon={<Home />}
              text={t('nav.home')}
              onClick={() => handleNavigation('home')}
              isActive={activePage === 'home'}
            />
            <NavItem
              icon={<Users />}
              text={t('nav.about')}
              onClick={() => handleNavigation('about')}
              isActive={activePage === 'about'}
            />
            <NavItem
              icon={<Briefcase />}
              text={t('nav.services')}
              onClick={() => handleNavigation('services')}
              isActive={activePage === 'services'}
            />
            <NavItem
              icon={<Grid />}
              text={t('nav.projects')}
              onClick={() => handleNavigation('projects')}
              isActive={activePage === 'projects'}
            />
            <NavItem
              icon={<MessageCircle />}
              text={t('nav.contact')}
              onClick={() => handleNavigation('contact')}
              isActive={activePage === 'contact'}
            />
          </div>
        )}
      </header>

      {/* Mobile Navigation */}
      <nav
        className="md:hidden fixed bottom-4 left-4 right-4 bg-white text-black z-50 rounded-full shadow-lg border border-black"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Mobile Language Menu Popup */}
        {isMobileLanguageMenuOpen && (
          <div className="mobile-language-menu absolute bottom-full left-1/2 -translate-x-1/2 mb-4 py-2 w-40 bg-white rounded-lg shadow-xl z-20 border border-black">
            <button
              onClick={() => handleMobileLanguageChange('en')}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100
                ${i18n.language === 'en' ? 'bg-gray-50 font-medium' : ''}`}
            >
              {t('language.english')}
            </button>
            <button
              onClick={() => handleMobileLanguageChange('zh')}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100
                ${i18n.language === 'zh' ? 'bg-gray-50 font-medium' : ''}`}
            >
              {t('language.chinese')}
            </button>
            <button
              onClick={() => handleMobileLanguageChange('pt')}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100
                ${i18n.language === 'pt' ? 'bg-gray-50 font-medium' : ''}`}
            >
              {t('language.portuguese')}
            </button>
          </div>
        )}

        <ul className="flex justify-around items-center py-2 px-4">
          <MobileNavItem
            icon={<Home size={24} />}
            onClick={() => handleNavigation('home')}
            isActive={activePage === 'home'}
            label={t('nav.home')}
          />
          <MobileNavItem
            icon={<Users size={24} />}
            onClick={() => handleNavigation('about')}
            isActive={activePage === 'about'}
            label={t('nav.about')}
          />
          <MobileNavItem
            icon={<Briefcase size={24} />}
            onClick={() => handleNavigation('services')}
            isActive={activePage === 'services'}
            label={t('nav.services')}
          />
          <MobileNavItem
            icon={<Grid size={24} />}
            onClick={() => handleNavigation('projects')}
            isActive={activePage === 'projects'}
            label={t('nav.projects')}
          />
          <MobileNavItem
            icon={<MessageCircle size={24} />}
            onClick={() => handleNavigation('contact')}
            isActive={activePage === 'contact'}
            label={t('nav.contact')}
          />
          <MobileNavItem
            icon={<Globe size={24} />}
            onClick={toggleMobileLanguageMenu}
            isActive={isMobileLanguageMenuOpen}
            label={t('language.select')}
          />
        </ul>
      </nav>
    </>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, onClick, isActive }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center px-3 py-2 rounded-full transition duration-300 w-full
                    ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}
                    focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`}
      >
        {React.cloneElement(icon as React.ReactElement, {
          color: isActive ? 'white' : 'black',
          size: 18,
        })}
        <span className="ml-2 text-sm font-medium">{text}</span>
      </button>
    </li>
  );
};

interface MobileNavItemProps {
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  isActive: boolean;
  label: string;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ icon, onClick, isActive, label }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`p-2 rounded-full transition duration-300 ${
          isActive ? 'bg-black text-white' : 'hover:bg-gray-100'
        }`}
        aria-label={label}
      >
        {icon}
      </button>
    </li>
  );
};

interface LanguageSelectorProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isOpen, toggleMenu }) => {
  const { t, i18n } = useTranslation('header');

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    toggleMenu();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center px-3 py-2 rounded-full transition duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
      >
        <Globe size={18} />
        <span className="ml-2 text-sm font-medium">
          {i18n.language === 'en'
            ? t('language.english')
            : i18n.language === 'zh'
            ? t('language.chinese')
            : t('language.portuguese')}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-xl z-20 border border-black">
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {t('language.english')}
          </button>
          <button
            onClick={() => changeLanguage('zh')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {t('language.chinese')}
          </button>
          <button
            onClick={() => changeLanguage('pt')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {t('language.portuguese')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
