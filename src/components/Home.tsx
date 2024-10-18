import React from 'react';
import { ArrowRight, Shield, Key, Briefcase, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import icosahedronImage from '../images/icosahedron@4-1728x868.png';
import primroseImage from '../images/Dreamsville.png';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={icosahedronImage}
            alt="Hero Background"
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
                ATRIUM
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                CONSULTANCY .LTD
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl text-black mb-6"
            >
              Empowering Global Investments in Southeast Asia
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl text-black mb-8"
            >
              Navigate complex markets with confidence and maximize your investment potential.
              Our expert consultancy services guide you through the intricacies of Southeast Asian markets,
              ensuring strategic growth and sustainable success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="/services"
                className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-200 transition duration-300 text-lg border border-black shadow-[0_0_0_1px_rgba(0,0,0,1)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
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
          <h2 className="font-serif text-5xl font-light text-center mb-12">Our Mission</h2>

          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="ATRIUM CONSULTANCY Mission"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="font-serif text-2xl text-center text-gray-800">
                  To empower investors by offering expert guidance on the intricacies of the investment process
                  and identifying lucrative opportunities for cross-border investments in Southeast Asia.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              At ATRIUM CONSULTANCY LTD, we specialize in facilitating high-value investments in Southeast Asia by providing exclusive access to unique opportunities. Built on decades of experience, our firm leverages a vast network of industry leaders, government officials, and key decision-makers to assist foreign investors in navigating the complex market landscape. Our commitment to discretion and expertise gives our clients a competitive edge, unlocking doors that were previously inaccessible.
            </p>
            <p>
              Our team of seasoned experts possesses an intimate understanding of Southeast Asia's diverse cultural, legal, and economic intricacies. This profound knowledge allows us to navigate the most challenging regulatory environments with finesse and precision, ensuring our clients' interests are not just protected, but optimized for maximum return. From the bustling financial hubs of Singapore and Bangkok to the emerging tech corridors of Ho Chi Minh City and Jakarta, we offer insights that go beyond surface-level analysis, tapping into the pulse of local markets and future trends.
            </p>
            <p>
              We pride ourselves on our ability to identify and secure high-potential investment opportunities that align perfectly with our clients' strategic objectives and risk profiles. Whether you're seeking to acquire premium real estate in burgeoning urban centers, enter rapidly growing industries poised for exponential growth, or forge strategic partnerships with local powerhouses, we craft bespoke solutions tailored to your unique needs and aspirations. Our services span a wide spectrum, encompassing everything from facilitating large-scale infrastructure projects and negotiating complex government concessions to orchestrating discreet acquisitions of private islands for ultra-high-net-worth individuals.
            </p>
            <p>
              Our commitment to discretion is unwavering and forms the cornerstone of our operations. We understand that in the world of high-stakes investments, confidentiality is not just expected – it's imperative. Our protocols for information security and client privacy are rigorous and constantly evolving to meet the highest global standards. This dedication to discretion, coupled with our track record of successful, high-value transactions, positions us as the trusted advisor for the most discerning investors looking to capitalize on Southeast Asia's vast potential.
            </p>
            <p>
              We go beyond mere transaction facilitation; we are your strategic partners in long-term value creation. Our advisory services encompass comprehensive market entry strategies, risk mitigation plans, and ongoing portfolio optimization. We leverage cutting-edge financial modeling and data analytics, combined with our on-the-ground intelligence, to provide you with actionable insights that drive informed decision-making.
            </p>
            <p>
              In an era of global uncertainty and shifting economic paradigms, Southeast Asia stands out as a beacon of growth and opportunity. At ATRIUM CONSULTANCY LTD, we are your compass in this promising yet complex landscape, guiding you towards investments that not only yield significant returns but also contribute to the region's sustainable development. Join us in unlocking the full potential of your investment aspirations in one of the world's most dynamic and rewarding markets.
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
          <h2 className="font-serif text-3xl font-bold mb-6">Ready to Invest in Southeast Asia?</h2>
          <p className="text-xl mb-8">Let us guide you through the process and maximize your investment potential.</p>
          <motion.a
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

const WhyUsSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-6xl font-light text-center mb-24">A Gate to Exclusive Opportunities</h2>
        </motion.div>

        <div className="space-y-32">
          <OpportunityCard
            icon={<Key className="w-12 h-12 text-gray-800" />}
            title="Unparalleled Access"
            description="ATRIUM CONSULTANCY LTD opens doors to the most coveted investment opportunities in Southeast Asia, curated exclusively for our distinguished clientele. Our privileged network grants you entry to off-market deals, private equity opportunities, and high-potential ventures often hidden from the public eye."
            additionalInfo="Gain insider access to:"
            bulletPoints={[
              "Emerging tech startups poised for exponential growth",
              "Prime real estate in developing urban centers",
              "Government infrastructure projects with long-term value",
            ]}
            imageUrl={primroseImage}
            imageClassName="w-full h-64 object-cover"
          />

          <OpportunityCard
            icon={<Shield className="w-12 h-12 text-gray-800" />}
            title="Discretion Assured"
            description="We operate with the utmost confidentiality, ensuring your strategic moves and investments remain known only to those you choose. Our advanced security protocols and discreet operational methods safeguard your privacy at every step of the investment process."
            additionalInfo="Our commitment to discretion includes:"
            bulletPoints={[
              "Secure communication channels for all client interactions",
              "Anonymized transaction processes to protect your identity",
              "Strict non-disclosure agreements with all involved parties",
            ]}
            imageUrl="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />

          <OpportunityCard
            icon={<Briefcase className="w-12 h-12 text-gray-800" />}
            title="Strategic Partnerships"
            description="Leverage our extensive network of industry leaders, government officials, and local experts to forge powerful alliances that drive your investment success in Southeast Asia. Our connections span across various sectors, providing you with a competitive edge in navigating complex market dynamics."
            additionalInfo="Benefit from partnerships with:"
            bulletPoints={[
              "Influential business magnates and industry pioneers",
              "Key government decision-makers and policy influencers",
              "Top-tier legal and financial institutions",
            ]}
            imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />

          <OpportunityCard
            icon={<BarChart className="w-12 h-12 text-gray-800" />}
            title="Tailored Investment Solutions"
            description="Our bespoke approach ensures that every investment strategy is meticulously crafted to align with your unique goals, risk profile, and long-term vision for growth in the Southeast Asian market. We combine deep market insights with cutting-edge financial modeling to create personalized investment roadmaps."
            additionalInfo="Our tailored solutions encompass:"
            bulletPoints={[
              "Comprehensive risk assessment and mitigation strategies",
              "Custom portfolio diversification across emerging sectors",
              "Adaptive investment timelines to maximize returns",
            ]}
            imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
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
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  icon,
  title,
  description,
  additionalInfo,
  bulletPoints,
  imageUrl,
  imageClassName,
}) => {
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
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
