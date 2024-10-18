import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Briefcase, Users, FileText, Award, Lock, Key, ArrowRight, Building, TrendingUp, Home, Leaf, Cpu } from 'lucide-react';
import backgroundImage from '../images/Hero Image.png';

const About: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-gray-50">
      {/* 1. Introduction & Mission */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage}
            alt="About ATRIUM CONSULTANCY" 
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
            <h1 className="text-5xl font-bold mb-4 text-black">ATRIUM CONSULTANCY</h1>
            <p className="text-xl mb-8 text-black">
              Empowering Elite Investments in Southeast Asia
            </p>
            <p className="text-lg mb-8 text-black">
              Our mission is to provide unparalleled access to exclusive investment opportunities, 
              guiding discerning investors through the complexities of Southeast Asian markets 
              with expertise, discretion, and unwavering commitment to success.
            </p>
            <motion.a 
              href="/about"
              className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-200 transition duration-300 text-lg border border-black shadow-[0_0_0_1px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
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
          <h2 className="font-serif text-5xl font-light text-center mb-16">Our Commitment to Excellence</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
            >
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" 
                  alt="Legitimacy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <Shield className="w-12 h-12 text-gray-800 mb-6" />
              <h3 className="text-3xl font-semibold mb-4 text-black">Legitimacy</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                ATRIUM CONSULTANCY operates with full compliance to international 
                and local regulations. Our operations are transparent, and we 
                maintain the highest standards of professional conduct.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
            >
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Ethical Commitment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <Award className="w-12 h-12 text-gray-800 mb-6" />
              <h3 className="text-3xl font-semibold mb-4 text-black">Ethical Commitment</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to ethical business practices, ensuring that all 
                investments and transactions we facilitate are socially responsible 
                and contribute positively to the regions we operate in.
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
          <h2 className="font-serif text-5xl font-light text-center mb-16">Our Expertise & Experience</h2>
          <ExpertiseCard 
            title="Strategic Asset Acquisitions"
            description="Facilitating high-value deals with unprecedented discretion across Southeast Asia. Our network and expertise unlock doors to exclusive opportunities often hidden from the public eye."
            achievements={[
              "Orchestrated confidential acquisitions exceeding $1 billion in total value",
              "Developed an exclusive network spanning 15+ countries",
              "Implemented proprietary strategies for sensitive, high-stakes transactions"
            ]}
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <ExpertiseCard 
            title="Elite Advisory Services"
            description="Providing unmatched guidance for complex international investments. Our seasoned experts navigate the intricate landscape of Southeast Asian markets with precision and insight."
            achievements={[
              "Steered cross-border investment deals surpassing $5 billion in cumulative value",
              "Crafted bespoke strategies for diverse cultural and regulatory landscapes",
              "Achieved a 98% success rate in closing intricate, multi-jurisdictional deals"
            ]}
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
          <h2 className="font-serif text-5xl font-light text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ServiceCard 
              icon={<Briefcase className="w-12 h-12 text-gray-800" />}
              title="Bespoke Investment Facilitation"
              description="Tailored guidance on ultra-high-value investment opportunities across Southeast Asian markets, with unparalleled access to off-market assets."
              imageUrl="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <ServiceCard 
              icon={<Shield className="w-12 h-12 text-gray-800" />}
              title="Discreet Legal & Regulatory Navigation"
              description="Confidential solutions for seamless business establishment and management across Southeast Asia, ensuring compliance while maintaining absolute privacy."
              imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <ServiceCard 
              icon={<Users className="w-12 h-12 text-gray-800" />}
              title="Strategic Partnerships"
              description="Leverage our extensive network of industry leaders, government officials, and local experts to forge powerful alliances that drive your investment success in Southeast Asia."
              imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <ServiceCard 
              icon={<FileText className="w-12 h-12 text-gray-800" />}
              title="Comprehensive Due Diligence"
              description="Thorough analysis and vetting of investment opportunities, ensuring our clients have all the necessary information to make informed decisions."
              imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
        </div>
      </motion.section>

      {/* 5. Benchmark Achievements (Replacing Client Success Stories) */}
      <BenchmarkSection />

      {/* 6. Legal & Privacy Compliance */}
      <motion.section 
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-5xl font-light text-center mb-16">Legal & Privacy Compliance</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <Lock className="w-12 h-12 text-gray-800 mb-6 mx-auto" />
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              At ATRIUM CONSULTANCY, we adhere to the highest standards of legal and privacy compliance. 
              Our operations are fully compliant with international regulations and local laws in all 
              jurisdictions where we operate. We implement state-of-the-art data protection measures 
              to ensure the utmost confidentiality of our clients' information and transactions.
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
          <h2 className="font-serif text-5xl font-bold mb-8">Ready to Explore Exclusive Opportunities?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Let our team of expert consultants guide you through Southeast Asia's most exclusive investment landscape. 
            Experience the ATRIUM CONSULTANCY difference.
          </p>
          <motion.a 
            href="#contact"
            className="bg-white text-black px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Private Consultation
            <ArrowRight className="ml-2 w-6 h-6" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

// Sub-components
const ExpertiseCard: React.FC<{
  title: string;
  description: string;
  achievements: string[];
  imageUrl: string;
}> = ({ title, description, achievements, imageUrl }) => {
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
            <li key={index} className="text-gray-700">{achievement}</li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}> = ({ icon, title, description, imageUrl }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300"
      whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
      <div className="mb-6 h-48 overflow-hidden rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      {icon}
      <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const BenchmarkSection: React.FC = () => {
  const benchmarks = [
    {
      icon: <Building className="w-12 h-12 text-white mb-4" />,
      title: "Major Infrastructure Acquisitions",
      description: "Facilitation of strategic infrastructure asset acquisitions exceeding $500 million, successfully navigating complex regulatory environments across multiple Southeast Asian countries.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white mb-4" />,
      title: "Tech Startup Portfolio Expansions",
      description: "Guidance for sovereign wealth funds in building portfolios up to $200 million, focusing on high-growth tech startups in emerging Southeast Asian markets.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Home className="w-12 h-12 text-white mb-4" />,
      title: "Luxury Real Estate Developments",
      description: "Orchestration of joint ventures for luxury resort developments valued over $750 million, uniting international investors with local partners.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-white mb-4" />,
      title: "Cross-Border M&A Transactions",
      description: "Successful execution of cross-border mergers and acquisitions totaling over $1 billion, streamlining complex international business integrations.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Leaf className="w-12 h-12 text-white mb-4" />,
      title: "Sustainable Energy Projects",
      description: "Facilitation of renewable energy investments exceeding $300 million, contributing to the development of sustainable infrastructure across Southeast Asia.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Cpu className="w-12 h-12 text-white mb-4" />,
      title: "Advanced Technology Implementations",
      description: "Guidance on AI and blockchain technology integrations for government entities, resulting in efficiency improvements valued at over $100 million annually.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Benchmark Achievements
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At ATRIUM CONSULTANCY, we measure our success by the scale and impact of the projects we facilitate. Our benchmark achievements across key sectors demonstrate our capacity to handle high-value, complex investments in Southeast Asia, always maintaining the utmost discretion and professionalism.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benchmarks.map((benchmark, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg h-96"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${benchmark.image})` }}
              />
              <div className="absolute inset-0 bg-black opacity-60 z-10" />
              <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                {benchmark.icon}
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
