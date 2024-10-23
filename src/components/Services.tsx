import React from 'react';
import { Briefcase, FileSearch, Globe, Building, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Define interfaces for the translation structure
interface HeroSection {
  title: string;
  description: string;
}

interface ServiceSection {
  title: string;
  description: string;
  servicesTitle: string;
  servicesList: string[];
}

interface AdditionalParagraphs {
  paragraph1: string;
  paragraph2: string;
}

interface OpportunityCard {
  icon: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

interface OpportunitiesSection {
  title: string;
  cards: OpportunityCard[];
}

interface CallToActionSection {
  title: string;
  description: string;
  buttonText: string;
}

interface ServicesTranslations {
  heroSection: HeroSection;
  investmentFacilitation: ServiceSection;
  strategicAdvisory: ServiceSection;
  additionalParagraphs: AdditionalParagraphs;
  opportunitiesSection: OpportunitiesSection;
  callToActionSection: CallToActionSection;
}

const Services: React.FC = () => {
  const { t, ready } = useTranslation('services');

  if (!ready) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  // Get the translations
  const translations = t('services', { returnObjects: true }) as ServicesTranslations;

  // Icon mapping function
  const getIcon = (iconName: string) => {
    const icons = {
      Globe: <Globe className="h-12 w-12 text-gray-900" />,
      Briefcase: <Briefcase className="h-12 w-12 text-gray-900" />,
      FileSearch: <FileSearch className="h-12 w-12 text-gray-900" />,
      Building: <Building className="h-12 w-12 text-gray-900" />,
      TrendingUp: <TrendingUp className="h-12 w-12 text-gray-900" />,
      Users: <Users className="h-12 w-12 text-gray-900" />,
    };
    return icons[iconName as keyof typeof icons];
  };

  // Define specific image URLs for each opportunity card
  const opportunityImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80", // New image for "Optimize Your Investment Returns"
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80", // New image for "Seamless Expansion into South Asian Markets"
    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  ];

  return (
    <div className="bg-white">
      <motion.section 
        className="pt-32 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
            {translations.heroSection.title}
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg mb-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                alt="ATRIUM CONSULTANCY Services" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-gray-100">
                <p className="font-serif text-xl text-center text-gray-800">
                  {translations.heroSection.description}
                </p>
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">{translations.investmentFacilitation.title}</h2>
              <p className="mb-6">{translations.investmentFacilitation.description}</p>
              
              <p className="font-semibold mb-4">{translations.investmentFacilitation.servicesTitle}</p>
              <ul className="list-disc pl-6 mb-8">
                {translations.investmentFacilitation.servicesList.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold mb-6">{translations.strategicAdvisory.title}</h2>
              <p className="mb-6">{translations.strategicAdvisory.description}</p>
              
              <p className="font-semibold mb-4">{translations.strategicAdvisory.servicesTitle}</p>
              <ul className="list-disc pl-6 mb-8">
                {translations.strategicAdvisory.servicesList.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

              <p className="mb-6">{translations.additionalParagraphs.paragraph1}</p>
              <p className="mb-6">{translations.additionalParagraphs.paragraph2}</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Opportunities Section */}
      <div className="container mx-auto px-4 max-w-6xl py-24">
        <div className="space-y-32">
          {translations.opportunitiesSection.cards.map((card, index) => (
            <OpportunityCard
              key={index}
              icon={getIcon(card.icon)}
              title={card.title}
              description={card.description}
              ctaText={card.ctaText}
              ctaLink={card.ctaLink}
              imageUrl={opportunityImages[index]}
            />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
            {translations.callToActionSection.title}
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            {translations.callToActionSection.description}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300"
          >
            {translations.callToActionSection.buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

// OpportunityCard component remains mostly the same, just the props interface
interface OpportunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  icon, title, description, ctaText, ctaLink, imageUrl
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
        <div className="mb-8">{icon}</div>
        <h3 className="text-3xl font-semibold mb-6 text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-8">{description}</p>
        <a 
          href={ctaLink} 
          className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition duration-300"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
      <div className="md:w-1/2">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
};

export default Services;
