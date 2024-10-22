import React from 'react';
import { useTranslation } from 'react-i18next';

// TypeScript interfaces for the translations
interface PolicySection {
  title: string;
  content: string;
}

interface PrivacyPolicyTranslations {
  title: string;
  sections: {
    introduction: PolicySection;
    informationCollection: PolicySection;
    useOfInformation: PolicySection;
    dataSecurity: PolicySection;
    confidentiality: PolicySection;
    changesPolicy: PolicySection;
    contactUs: PolicySection;
  };
}

const PrivacyPolicy: React.FC = () => {
  const { t, ready } = useTranslation('privacyPolicy');

  // Get the translations
  const translations = t('privacyPolicy', { returnObjects: true }) as PrivacyPolicyTranslations;

  if (!ready) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  // Array of section keys for mapping
  const sections: (keyof typeof translations.sections)[] = [
    'introduction',
    'informationCollection',
    'useOfInformation',
    'dataSecurity',
    'confidentiality',
    'changesPolicy',
    'contactUs'
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-8">
          {translations.title}
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          {sections.map((sectionKey) => (
            <div key={sectionKey}>
              <h3 className="text-xl font-semibold mb-4">
                {translations.sections[sectionKey].title}
              </h3>
              <p className="mb-4">
                {translations.sections[sectionKey].content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
