import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';
import icosahedronImage from '../images/icosahedron@4-1728x868.png'; // Import the image


const projectFamilies = [
  {
    id: 1,
    name: "Luxury Real Estate Developments",
    description: "Exclusive high-end properties and resort projects in prime locations",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    name: "Cutting-Edge Tech Innovations",
    description: "Investments in groundbreaking technology startups and research",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    name: "Sustainable Energy Solutions",
    description: "Green energy and eco-friendly infrastructure projects",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    name: "Next-Gen Financial Services",
    description: "Revolutionary banking and fintech solutions",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b2d890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    name: "Advanced Healthcare Initiatives",
    description: "Pioneering medical technologies and state-of-the-art facilities",
    image: "https://images.unsplash.com/photo-1583912267670-5c3673567c9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    name: "Aerospace and Space Exploration",
    description: "Ventures pushing the boundaries of air and space travel",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 7,
    name: "Artificial Intelligence Frontiers",
    description: "Investments in AI research and practical applications",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 8,
    name: "Quantum Computing Initiatives",
    description: "Developing next-generation computing technologies",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 9,
    name: "Biotechnology Breakthroughs",
    description: "Cutting-edge biotech research and development projects",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 10,
    name: "Smart City Infrastructures",
    description: "Integrated urban development projects leveraging IoT and AI",
    image: "https://images.unsplash.com/photo-1573167278390-0699fb12be46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 11,
    name: "Autonomous Transportation Systems",
    description: "Self-driving vehicles and advanced transportation networks",
    image: "https://images.unsplash.com/photo-1619997348816-58a92e2e38af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 12,
    name: "Cybersecurity Innovations",
    description: "Advanced digital security solutions and infrastructure",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 13,
    name: "Blockchain and Cryptocurrency",
    description: "Investments in distributed ledger technologies and digital assets",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 14,
    name: "Nanotechnology Advancements",
    description: "Pioneering research and applications in nanoscale science",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 15,
    name: "Augmented and Virtual Reality",
    description: "Immersive technologies for various industries and applications",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 16,
    name: "Advanced Materials Research",
    description: "Development of novel materials with extraordinary properties",
    image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 17,
    name: "Precision Agriculture Technologies",
    description: "High-tech farming solutions for sustainable food production",
    image: "https://images.unsplash.com/photo-1615811361523-6fca19ff7086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 18,
    name: "Ocean Exploration and Conservation",
    description: "Innovative projects for deep-sea research and marine preservation",
    image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const Projects: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<number | null>(null);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img 
          src={icosahedronImage} // Use the imported image
          alt="Icosahdron" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 container mx-auto px-4 h-full flex items-center"
        >
          <div className="max-w-2xl">
            <motion.h1 
              className="font-serif text-4xl md:text-6xl font-bold mb-6 text-left" // Adjusted text alignment
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Exclusive Project Portfolios
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-left mb-6" // Adjusted text alignment
            >
              Discover our curated collection of high-impact investment opportunities across various sectors.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectFamilies.map((family) => (
            <motion.div
              key={family.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFamily(family.id)}
            >
              <img src={family.image} alt={family.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">{family.name}</h2>
                  <p className="text-sm">{family.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Family */}
      <AnimatePresence>
        {selectedFamily && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black p-8 rounded-lg max-w-2xl w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                {projectFamilies.find(f => f.id === selectedFamily)?.name}
              </h2>
              <p className="mb-6">
                Our portfolio in this sector includes several high-profile projects with significant potential for returns. Due to the confidential nature of these ventures, detailed information is available only upon request and subject to our strict privacy protocols.
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedFamily(null)}
                  className="bg-gray-200 text-black px-6 py-2 rounded-full flex items-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2 transform rotate-180" />
                  Back
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-full flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Request Access
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
