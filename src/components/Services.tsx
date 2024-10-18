import React from 'react'
import { Briefcase, FileSearch, Globe, Building, TrendingUp, Users, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <motion.section 
        className="pt-32 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h1>
          
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
                  At ATRIUM CONSULTANCY LTD, we offer a suite of bespoke services designed to navigate the complex landscape of Southeast Asian investments. Our offerings are meticulously crafted to meet the exacting standards of our elite clientele, providing unparalleled access and expertise in one of the world's most dynamic economic regions.
                </p>
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Bespoke Investment Facilitation</h2>
              <p className="mb-6">
                We specialize in identifying and securing high-value, exclusive investment opportunities across Southeast Asia. Our team's deep market insights and extensive network allow us to uncover hidden gems before they reach the public eye. From emerging tech startups in Singapore's vibrant ecosystem to untapped natural resources in Indonesia's archipelago, we provide our clients with first-mover advantages in the region's most promising sectors.
              </p>
              
              <p className="font-semibold mb-4">Our investment facilitation services encompass:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Proprietary deal sourcing from our exclusive network</li>
                <li>Comprehensive due diligence leveraging local expertise</li>
                <li>Seamless transaction execution with utmost discretion</li>
                <li>Post-investment support and value optimization</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">Strategic Advisory Services</h2>
              <p className="mb-6">
                In the intricate tapestry of Southeast Asian business landscapes, local knowledge is paramount. Our strategic advisory services offer a beacon of clarity, guiding our clients through the nuances of each market.
              </p>
              
              <p className="font-semibold mb-4">We provide:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>In-depth market entry strategies tailored to each country's unique ecosystem</li>
                <li>Risk assessment and mitigation plans accounting for geopolitical, economic, and cultural factors</li>
                <li>Competitive intelligence and market positioning advice</li>
                <li>Strategic partnership identification and facilitation with local powerhouses</li>
              </ul>

              <p className="mb-6">
                At ATRIUM CONSULTANCY LTD, we don't just facilitate transactions; we architect opportunities. Our services are designed to provide you with a decisive edge in Southeast Asia's competitive investment landscape. We combine global best practices with nuanced local insights, ensuring that your forays into this dynamic region are not just successful, but transformative.
              </p>

              <p className="mb-6">
                In a world where information is ubiquitous but true insight is rare, we stand as your trusted partners, turning the complex into the conquerable. With ATRIUM CONSULTANCY LTD, you're not just investing in Southeast Asia; you're shaping its future while securing yours.
              </p>

              <p className="mb-6">
                Embark on your Southeast Asian investment journey with us, and experience the power of truly bespoke, elite consultancy services. At ATRIUM CONSULTANCY LTD, we don't follow the trends – we set them.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Opportunities Section */}
      <div className="container mx-auto px-4 max-w-6xl py-24">
        <div className="space-y-32">
          <OpportunityCard
            icon={<Globe className="h-12 w-12 text-gray-900" />}
            title="Access High-Value Government Assets"
            description="Tap into exclusive government asset acquisitions with our expert guidance. Benefit from our deep understanding of local regulations and global best practices to secure high-value deals with discretion and efficiency. Position yourself for success in sensitive transactions that offer significant growth potential."
            ctaText="Explore government asset opportunities"
            ctaLink="#"
            imageUrl="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />
          <OpportunityCard
            icon={<Briefcase className="h-12 w-12 text-gray-900" />}
            title="Gain a Competitive Edge in Negotiations"
            description="Leverage our decades of experience to secure favorable outcomes in your international investments. Benefit from our culturally nuanced, context-specific guidance to navigate complex cross-border partnerships. Maximize your negotiation potential from initial strategy to closing deals."
            ctaText="Enhance your negotiation power"
            ctaLink="#"
            imageUrl="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />
          <OpportunityCard
            icon={<FileSearch className="h-12 w-12 text-gray-900" />}
            title="Uncover Hidden Market Opportunities"
            description="Stay ahead of the curve with our comprehensive due diligence and market research. Gain actionable insights that combine data-driven analysis with on-the-ground intelligence. Make informed decisions that mitigate risks and capitalize on the dynamic opportunities in the South Asian market."
            ctaText="Discover market insights"
            ctaLink="#"
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />
          <OpportunityCard
            icon={<Building className="h-12 w-12 text-gray-900" />}
            title="Maximize Real Estate Investment Potential"
            description="Capitalize on the booming South Asian real estate market with our end-to-end property solutions. Optimize asset performance, ensure compliance with local laws, and identify lucrative opportunities in this rapidly growing sector. Transform challenges into profitable ventures across the region."
            ctaText="Explore real estate prospects"
            ctaLink="#"
            imageUrl="https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />
          <OpportunityCard
            icon={<TrendingUp className="h-12 w-12 text-gray-900" />}
            title="Optimize Your Investment Returns"
            description="Enhance your financial performance with our in-depth investment return analysis. Gain a comprehensive evaluation of both short-term and long-term prospects, considering market trends, risk factors, and growth potential. Make data-driven decisions that maximize returns and achieve your financial goals in the South Asian market."
            ctaText="Maximize your investment potential"
            ctaLink="#"
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />
          <OpportunityCard
            icon={<Users className="h-12 w-12 text-gray-900" />}
            title="Seamless Expansion into South Asian Markets"
            description="Accelerate your business growth with our residency and employment facilitation services. Navigate the complexities of establishing your presence in South Asia with ease. Focus on your core business activities while we ensure a smooth transition for you and your employees into this vibrant market."
            ctaText="Streamline your market entry"
            ctaLink="#"
            imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">Ready to Seize These Opportunities?</h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let's discuss how you can leverage our expertise to capitalize on the vast potential of South Asian markets and maximize your investment returns.
          </p>
          <a href="#contact" className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300">
            Schedule a Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

interface OpportunityCardProps {
  icon: React.ReactNode
  title: string
  description: string
  ctaText: string
  ctaLink: string
  imageUrl: string
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ icon, title, description, ctaText, ctaLink, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
        <div className="mb-8">{icon}</div>
        <h3 className="text-3xl font-semibold mb-6 text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-8">{description}</p>
        <a href={ctaLink} className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition duration-300">
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
      <div className="md:w-1/2">
        <img src={imageUrl} alt={title} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  )
}

export default Services
