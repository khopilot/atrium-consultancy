// src/components/About.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Briefcase,
  Users,
  FileText,
  Award,
  Lock,
  Key,
  ArrowRight,
} from 'lucide-react';
import backgroundImage from '../images/Hero Image.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Add this import at the top of your file
import ethicalCommitmentImage from '../images/about/54b02a8a-45ba-4e3b-96bd-1bbb00204479.jpeg';

// Updated interfaces to match JSON structure
interface Introduction {
  title: string;
  subtitle: string;
  description: string;
  button: string;
}

interface Commitment {
  title: string;
  cards: {
    legitimacy: {
      title: string;
      description: string;
    };
    ethicalCommitment: {
      title: string;
      description: string;
    };
  };
}

interface Expertise {
  title: string;
  cards: {
    strategicAssetAcquisitions: {
      title: string;
      description: string;
      achievements: string[];
    };
    eliteAdvisoryServices: {
      title: string;
      description: string;
      achievements: string[];
    };
  };
}

interface Services {
  title: string;
  cards: {
    bespokeInvestmentFacilitation: {
      title: string;
      description: string;
    };
    discreetLegalRegulatoryNavigation: {
      title: string;
      description: string;
    };
    strategicPartnerships: {
      title: string;
      description: string;
    };
    comprehensiveDueDiligence: {
      title: string;
      description: string;
    };
  };
}

interface BenchmarkItem {
  title: string;
  description: string;
  image: string;
}

interface BenchmarkAchievements {
  title: string;
  description: string;
  items: BenchmarkItem[];
}

interface LegalPrivacyCompliance {
  title: string;
  description: string;
}

interface CallToAction {
  title: string;
  description: string;
  button: string;
}

const About: React.FC = () => {
  const { t, ready } = useTranslation('about');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Optional: Add loading state
  if (!ready) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  // Access translations with the correct path - notice we're using about.* as the path
  const introduction = t('about.introduction', { returnObjects: true }) as Introduction;
  const commitment = t('about.commitment', { returnObjects: true }) as Commitment;
  const expertise = t('about.expertise', { returnObjects: true }) as Expertise;
  const services = t('about.services', { returnObjects: true }) as Services;
  const benchmarkAchievements = t('about.benchmarkAchievements', { returnObjects: true }) as BenchmarkAchievements;
  const legalPrivacyCompliance = t('about.legalPrivacyCompliance', { returnObjects: true }) as LegalPrivacyCompliance;
  const callToAction = t('about.callToAction', { returnObjects: true }) as CallToAction;

  return (
    <div className="bg-gray-50">
      {/* 1. Introduction & Mission */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={introduction.title}
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 container mx-auto px-4 h-full flex items-center"
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-black">{introduction.title}</h1>
            <p className="text-xl mb-8 text-black">{introduction.subtitle}</p>
            <p className="text-lg mb-8 text-black">{introduction.description}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-200 transition duration-300 text-lg border border-black shadow-[0_0_0_1px_rgba(0,0,0,1)]"
              >
                {introduction.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. Legitimacy & Ethical Commitment */}
      <motion.section
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-5xl font-light text-center mb-16">
            {commitment.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Legitimacy Card */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
            >
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  alt={commitment.cards.legitimacy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <Shield className="w-12 h-12 text-gray-800 mb-6" />
              <h3 className="text-3xl font-semibold mb-4 text-black">
                {commitment.cards.legitimacy.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {commitment.cards.legitimacy.description}
              </p>
            </motion.div>

            {/* Ethical Commitment Card */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
            >
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src={ethicalCommitmentImage}
                  alt={commitment.cards.ethicalCommitment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <Award className="w-12 h-12 text-gray-800 mb-6" />
              <h3 className="text-3xl font-semibold mb-4 text-black">
                {commitment.cards.ethicalCommitment.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {commitment.cards.ethicalCommitment.description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Our Expertise & Experience */}
      <motion.section
        className="py-24 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-5xl font-light text-center mb-16">
            {expertise.title}
          </h2>
          <ExpertiseCard
            title={expertise.cards.strategicAssetAcquisitions.title}
            description={expertise.cards.strategicAssetAcquisitions.description}
            achievements={expertise.cards.strategicAssetAcquisitions.achievements}
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <ExpertiseCard
            title={expertise.cards.eliteAdvisoryServices.title}
            description={expertise.cards.eliteAdvisoryServices.description}
            achievements={expertise.cards.eliteAdvisoryServices.achievements}
            imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
      </motion.section>

      {/* 4. What We Do (Services) */}
      <motion.section
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-5xl font-light text-center mb-16">
            {services.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Bespoke Investment Facilitation */}
            <ServiceCard
              icon={<Briefcase className="w-12 h-12 text-gray-800" />}
              title={services.cards.bespokeInvestmentFacilitation.title}
              description={services.cards.bespokeInvestmentFacilitation.description}
              imageUrl="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />

            {/* Discreet Legal & Regulatory Navigation */}
            <ServiceCard
              icon={<Shield className="w-12 h-12 text-gray-800" />}
              title={services.cards.discreetLegalRegulatoryNavigation.title}
              description={services.cards.discreetLegalRegulatoryNavigation.description}
              imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />

            {/* Strategic Partnerships */}
            <ServiceCard
              icon={<Users className="w-12 h-12 text-gray-800" />}
              title={services.cards.strategicPartnerships.title}
              description={services.cards.strategicPartnerships.description}
              imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />

            {/* Comprehensive Due Diligence */}
            <ServiceCard
              icon={<FileText className="w-12 h-12 text-gray-800" />}
              title={services.cards.comprehensiveDueDiligence.title}
              description={services.cards.comprehensiveDueDiligence.description}
              imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
        </div>
      </motion.section>

      {/* 5. Benchmark Achievements */}
      <BenchmarkSection
        benchmarks={benchmarkAchievements.items}
        title={benchmarkAchievements.title}
        description={benchmarkAchievements.description}
      />

      {/* 6. Legal & Privacy Compliance */}
      <motion.section
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-5xl font-light text-center mb-16">
            {legalPrivacyCompliance.title}
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <Lock className="w-12 h-12 text-gray-800 mb-6 mx-auto" />
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              {legalPrivacyCompliance.description}
            </p>
          </div>
        </div>
      </motion.section>

      {/* 7. Call to Action */}
      <motion.section
        className="py-24 bg-black text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="font-serif text-5xl font-bold mb-8">
            {callToAction.title}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            {callToAction.description}
          </p>
          <motion.a
            href="#contact"
            className="bg-white text-black px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {callToAction.button}
            <ArrowRight className="ml-2 w-6 h-6" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

// Sub-components

interface ExpertiseCardProps {
  title: string;
  description: string;
  achievements: string[];
  imageUrl: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, achievements, imageUrl }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-6 h-64 overflow-hidden rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
      <motion.button
        onClick={() => setIsRevealed(!isRevealed)}
        className="flex items-center justify-center w-full text-gray-800 hover:text-black transition duration-300 bg-gray-100 px-6 py-3 rounded-full font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isRevealed ? <Lock className="w-5 h-5 mr-2" /> : <Key className="w-5 h-5 mr-2" />}
        <span>{isRevealed ? 'Conceal Details' : 'Reveal Achievements'}</span>
      </motion.button>
      {isRevealed && (
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 space-y-3 list-disc list-inside"
        >
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-700">
              {achievement}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300"
      whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
    >
      <div className="mb-6 h-48 overflow-hidden rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      {icon}
      <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

interface BenchmarkSectionProps {
  benchmarks: BenchmarkItem[];
  title: string;
  description: string;
}

const BenchmarkSection: React.FC<BenchmarkSectionProps> = ({ benchmarks, title, description }) => {
  const benchmarkImages = [
    "https://images.unsplash.com/photo-1506755855567-92ff770e8e00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Infrastructure
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Tech Startup
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Luxury Real Estate
    "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Cross-Border M&A
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Sustainable Energy
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  // Advanced Technology
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-serif text-5xl font-light text-center mb-16">
          {title}
        </h2>
        <p className="text-xl text-center mb-16 max-w-4xl mx-auto">
          {description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benchmarks.map((benchmark, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={benchmarkImages[index]}
                alt={benchmark.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-semibold mb-4">{benchmark.title}</h3>
                <p className="text-sm">{benchmark.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
