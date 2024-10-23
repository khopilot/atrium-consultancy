// src/components/Home.tsx
import React from 'react';
import { ArrowRight, Shield, Key, Briefcase, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import icosahedronImage from '../images/icosahedron@4-1728x868.png';
import primroseImage from '../images/Dreamsville.png';
import { Link } from 'react-router-dom'; // Make sure to import Link
import handshakeImage from '../images/home/hanshake asia .jpeg';

const Home: React.FC = () => {
  const { t } = useTranslation('home'); // Initialize translation hook

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={icosahedronImage}
            alt={t('atrium')} // Translated alt text
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 container mx-auto px-4 h-full flex items-center"
        >
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-black mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block"
              >
                {t('atrium')}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                {t('consultancyLtd')}
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl text-black mb-6"
            >
              {t('empoweringInvestments')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl text-black mb-8"
            >
              {t('navigateMarkets')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-200 transition duration-300 text-lg border border-black shadow-[0_0_0_1px_rgba(0,0,0,1)]"
                >
                  {t('exploreOpportunities')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Our Mission Section */}
      <motion.section
        className="py-32 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-5xl font-light text-center mb-12">{t('ourMission')}</h2>

          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt={t('ourMission')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="font-serif text-2xl text-center text-gray-800">
                  {t('missionStatement')}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              {t('ourMissionSection.paragraph1')}
            </p>
            <p>
              {t('ourMissionSection.paragraph2')}
            </p>
            <p>
              {t('ourMissionSection.paragraph3')}
            </p>
            <p>
              {t('ourMissionSection.paragraph4')}
            </p>
            <p>
              {t('ourMissionSection.paragraph5')}
            </p>
            <p>
              {t('ourMissionSection.paragraph6')}
            </p>
          </div>
        </div>
      </motion.section>

      {/* A Gate to Exclusive Opportunities Section */}
      <WhyUsSection />

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">{t('callToAction.readyToInvest')}</h2>
          <p className="text-xl mb-8">{t('callToAction.guideThroughProcess')}</p>
          <motion.a
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('callToAction.contactUs')}
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

const WhyUsSection: React.FC = () => {
  const { t } = useTranslation('home');

  const projectLinkOptions = [
    "Enhance your negotiation power",
    "Discover market insights",
    "Explore real estate prospects",
    "Maximize your investment potential",
    "Streamline your market entry"
  ];

  return (
    <section className="bg-white text-black py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-6xl font-light text-center mb-24">{t('whyUsSection.gateToOpportunities')}</h2>
        </motion.div>

        <div className="space-y-32">
          <OpportunityCard
            icon={<Key className="w-12 h-12 text-gray-800" />}
            title={t('opportunityCards.unparalleledAccess.title')}
            description={t('opportunityCards.unparalleledAccess.description')}
            additionalInfo={t('whyUsSection.gainInsiderAccess')}
            bulletPoints={[
              "Emerging tech startups poised for exponential growth",
              "Prime real estate in developing urban centers",
              "Government infrastructure projects with long-term value"
            ]}
            imageUrl={primroseImage}
            imageClassName="w-full h-64 object-cover"
            projectLinkOptions={projectLinkOptions}
          />

          <OpportunityCard
            icon={<Shield className="w-12 h-12 text-gray-800" />}
            title={t('opportunityCards.discretionAssured.title')}
            description={t('opportunityCards.discretionAssured.description')}
            additionalInfo={t('whyUsSection.ourCommitmentIncludes')}
            bulletPoints={[
              "Secure communication channels for all client interactions",
              "Anonymized transaction processes to protect your identity",
              "Strict non-disclosure agreements with all involved parties"
            ]}
            imageUrl="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            projectLinkOptions={projectLinkOptions}
          />

          <OpportunityCard
            icon={<Briefcase className="w-12 h-12 text-gray-800" />}
            title={t('opportunityCards.strategicPartnerships.title')}
            description={t('opportunityCards.strategicPartnerships.description')}
            additionalInfo={t('whyUsSection.benefitFromPartnerships')}
            bulletPoints={[
              "Influential business magnates and industry pioneers",
              "Key government decision-makers and policy influencers",
              "Top-tier legal and financial institutions"
            ]}
            imageUrl={handshakeImage}
            projectLinkOptions={projectLinkOptions}
          />

          <OpportunityCard
            icon={<BarChart className="w-12 h-12 text-gray-800" />}
            title={t('opportunityCards.tailoredInvestmentSolutions.title')}
            description={t('opportunityCards.tailoredInvestmentSolutions.description')}
            additionalInfo={t('whyUsSection.ourTailoredSolutions')}
            bulletPoints={[
              "Comprehensive risk assessment and mitigation strategies",
              "Custom portfolio diversification across emerging sectors",
              "Adaptive investment timelines to maximize returns"
            ]}
            imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            projectLinkOptions={projectLinkOptions}
          />
        </div>
      </div>
    </section>
  );
};

interface OpportunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  additionalInfo: string;
  bulletPoints: string[];
  imageUrl: string;
  imageClassName?: string;
  projectLinkOptions: string[];
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  icon,
  title,
  description,
  additionalInfo,
  bulletPoints,
  imageUrl,
  imageClassName,
  projectLinkOptions,
}) => {
  const { t } = useTranslation('home');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      <div className="md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className={`rounded-lg shadow-lg w-full h-auto ${imageClassName}`}
        />
      </div>
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center gap-4">
          {icon}
          <h3 className="text-4xl font-light">{title}</h3>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">{description}</p>
        <div>
          <h4 className="text-2xl font-light mb-4">{additionalInfo}</h4>
          <ul className="list-disc list-inside space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-lg text-gray-700">
                {projectLinkOptions.includes(t(point)) ? (
                  <Link to="/projects" className="hover:underline">
                    {t(point)}
                  </Link>
                ) : (
                  t(point)
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
