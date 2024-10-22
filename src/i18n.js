// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction en anglais
import aboutEN from './locales/en/about.json';
import contactEN from './locales/en/contact.json';
import footerEN from './locales/en/footer.json';
import headerEN from './locales/en/header.json';
import homeEN from './locales/en/home.json';
import privacyPolicyEN from './locales/en/privacyPolicy.json';
import projectsEN from './locales/en/projects.json';
import servicesEN from './locales/en/services.json';

// Importation des fichiers de traduction en portugais
import aboutPT from './locales/pt/about.json';
import contactPT from './locales/pt/contact.json';
import footerPT from './locales/pt/footer.json';
import headerPT from './locales/pt/header.json';
import homePT from './locales/pt/home.json';
import privacyPolicyPT from './locales/pt/privacyPolicy.json';
import projectsPT from './locales/pt/projects.json';
import servicesPT from './locales/pt/services.json';

// Importation des fichiers de traduction en chinois
import aboutZH from './locales/zh/about.json';
import contactZH from './locales/zh/contact.json';
import footerZH from './locales/zh/footer.json';
import headerZH from './locales/zh/header.json';
import homeZH from './locales/zh/home.json';
import privacyPolicyZH from './locales/zh/privacyPolicy.json';
import projectsZH from './locales/zh/projects.json';
import servicesZH from './locales/zh/services.json';

// Définition des ressources de traduction
const resources = {
  en: {
    about: aboutEN,
    contact: contactEN,
    footer: footerEN,
    header: headerEN,
    home: homeEN,
    privacyPolicy: privacyPolicyEN,
    projects: projectsEN,
    services: servicesEN,
  },
  pt: {
    about: aboutPT,
    contact: contactPT,
    footer: footerPT,
    header: headerPT,
    home: homePT,
    privacyPolicy: privacyPolicyPT,
    projects: projectsPT,
    services: servicesPT,
  },
  zh: {
    about: aboutZH,
    contact: contactZH,
    footer: footerZH,
    header: headerZH,
    home: homeZH,
    privacyPolicy: privacyPolicyZH,
    projects: projectsZH,
    services: servicesZH,
  },
};

// Initialisation d'i18next avec react-i18next
i18n
  .use(initReactI18next) // Passe i18n à react-i18next
  .init({
    resources, // Les ressources de traduction
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la traduction n'est pas trouvée
    interpolation: {
      escapeValue: false, // React se charge déjà de l'échappement
    },
    ns: ['about', 'contact', 'footer', 'header', 'home', 'privacyPolicy', 'projects', 'services'], // Liste des namespaces
    defaultNS: 'home', // Namespace par défaut
    react: {
      useSuspense: false, // Désactive le suspense pour éviter les problèmes de rendu
    },
  });

export default i18n;
