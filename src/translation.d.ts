// src/types/translation.d.ts

export interface Introduction {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  }
  
  export interface CommitmentCard {
    title: string;
    description: string;
  }
  
  export interface Commitment {
    title: string;
    cards: {
      legitimacy: CommitmentCard;
      ethicalCommitment: CommitmentCard;
    };
  }
  
  export interface ExpertiseCardTranslation {
    title: string;
    description: string;
    achievements: string[];
  }
  
  export interface Expertise {
    title: string;
    cards: {
      strategicAssetAcquisitions: ExpertiseCardTranslation;
      eliteAdvisoryServices: ExpertiseCardTranslation;
    };
  }
  
  export interface ServiceCardTranslation {
    title: string;
    description: string;
  }
  
  export interface Services {
    title: string;
    cards: {
      bespokeInvestmentFacilitation: ServiceCardTranslation;
      discreetLegalRegulatoryNavigation: ServiceCardTranslation;
      strategicPartnerships: ServiceCardTranslation;
      comprehensiveDueDiligence: ServiceCardTranslation;
    };
  }
  
  export interface BenchmarkItem {
    title: string;
    description: string;
  }
  
  export interface BenchmarkAchievements {
    title: string;
    description: string;
    items: BenchmarkItem[];
  }
  
  export interface LegalPrivacyCompliance {
    title: string;
    description: string;
  }
  
  export interface CallToAction {
    title: string;
    description: string;
    button: string;
  }
  
  export interface AboutTranslation {
    introduction: Introduction;
    commitment: Commitment;
    expertise: Expertise;
    services: Services;
    benchmarkAchievements: BenchmarkAchievements;
    legalPrivacyCompliance: LegalPrivacyCompliance;
    callToAction: CallToAction;
  }
  
  // Extend i18next default interfaces
  import 'react-i18next';
  
  declare module 'react-i18next' {
    interface CustomTypeOptions {
      resources: {
        about: AboutTranslation;
      };
    }
  }
  