import React, { useState } from 'react';
import { Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// TypeScript interfaces for translations
interface FooterTranslations {
  company: {
    name: string;
    tagline: string;
    address: string;
  };
  quickLinks: {
    title: string;
    links: {
      services: string;
      contactUs: string;
      privacyPolicy: string;
      termsOfService: string;
    };
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    social: {
      linkedin: string;
      twitter: string;
    };
  };
  newsletter: {
    title: string;
    emailPlaceholder: string;
    subscribe: string;
    language: string;
    languages: {
      english: string;
      chinese: string;
      portuguese: string;
    };
  };
  copyright: string;
  backToTop: string;
}

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { t, ready, i18n } = useTranslation('footer');
  const [email, setEmail] = useState('');

  if (!ready) {
    return <div className="h-12 bg-black"></div>; // Minimal footer placeholder while loading
  }

  const translations = t('footer', { returnObjects: true }) as FooterTranslations;

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {translations.company.name}
            </h2>
            <p className="text-sm mb-2">
              {translations.company.tagline}
            </p>
            <address className="text-sm not-italic">
              {translations.company.address.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {translations.quickLinks.title}
            </h3>
            <nav>
              <ul className="text-sm space-y-2">
                <li>
                  <button 
                    onClick={() => setCurrentPage('services')} 
                    className="hover:text-gray-300"
                  >
                    {translations.quickLinks.links.services}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('contact')} 
                    className="hover:text-gray-300"
                  >
                    {translations.quickLinks.links.contactUs}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('privacy')} 
                    className="hover:text-gray-300"
                  >
                    {translations.quickLinks.links.privacyPolicy}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('terms')} 
                    className="hover:text-gray-300"
                  >
                    {translations.quickLinks.links.termsOfService}
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {translations.contact.title}
            </h3>
            <p className="text-sm mb-2">{translations.contact.email}</p>
            <p className="text-sm mb-4">{translations.contact.phone}</p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={translations.contact.social.linkedin}
              >
                <Linkedin className="w-6 h-6 hover:text-gray-300" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={translations.contact.social.twitter}
              >
                <Twitter className="w-6 h-6 hover:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Newsletter and Language Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {translations.newsletter.title}
            </h3>
            <form onSubmit={handleNewsletterSignup} className="mb-4">
              <label htmlFor="email" className="sr-only">
                {translations.newsletter.emailPlaceholder}
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={translations.newsletter.emailPlaceholder}
                  required
                  className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex-grow"
                />
                <button 
                  type="submit" 
                  className="px-3 py-2 bg-white text-black rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  {translations.newsletter.subscribe}
                </button>
              </div>
            </form>
            <div>
              <label htmlFor="language" className="sr-only">
                {translations.newsletter.language}
              </label>
              <select 
                id="language" 
                className="bg-white text-black px-3 py-2 rounded-md"
                onChange={handleLanguageChange}
                value={i18n.language}
              >
                <option value="en">{translations.newsletter.languages.english}</option>
                <option value="zh">{translations.newsletter.languages.chinese}</option>
                <option value="pt">{translations.newsletter.languages.portuguese}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-wrap justify-between items-center">
          <p className="text-sm">{translations.copyright}</p>
          <button 
            onClick={scrollToTop} 
            className="text-sm flex items-center hover:text-gray-300" 
            aria-label={translations.backToTop}
          >
            <ArrowUp className="w-4 h-4 mr-1" /> {translations.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
