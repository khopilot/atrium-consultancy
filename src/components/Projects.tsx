import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import icosahedronImage from '../images/icosahedron@4-1728x868.png';

// Define interfaces for the translation structure
interface HeroSection {
  title: string;
  description: string;
}

interface ProjectFamily {
  id: number;
  name: string;
  description: string;
}

interface Modal {
  description: string;
  buttons: {
    back: string;
    requestAccess: string;
  };
}

interface ProjectsTranslations {
  heroSection: HeroSection;
  projectsSection: {
    intro: string;
  };
  projectFamilies: ProjectFamily[];
  modal: Modal;
}

// Image mapping for project families
const projectImages: { [key: number]: string } = {
  1: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  2: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  3: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  4: "https://images.unsplash.com/photo-1565514020179-026b92b2d890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  5: "https://images.unsplash.com/photo-1583912267670-5c3673567c9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  6: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  7: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  8: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  9: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  10: "https://images.unsplash.com/photo-1573167278390-0699fb12be46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  11: "https://images.unsplash.com/photo-1619997348816-58a92e2e38af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  12: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  13: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  14: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  15: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  16: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  17: "https://images.unsplash.com/photo-1615811361523-6fca19ff7086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  18: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
};

const Projects: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<number | null>(null);
  const { t, ready } = useTranslation('projects');

  if (!ready) {
    return <div className="h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  const translations = t('projects', { returnObjects: true }) as ProjectsTranslations;

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img 
          src={icosahedronImage}
          alt="Icosahedron" 
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
              className="font-serif text-4xl md:text-6xl font-bold mb-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {translations.heroSection.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-left mb-6"
            >
              {translations.heroSection.description}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.projectFamilies.map((family) => (
            <motion.div
              key={family.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFamily(family.id)}
            >
              <img 
                src={projectImages[family.id]} 
                alt={family.name} 
                className="w-full h-64 object-cover" 
              />
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
                {translations.projectFamilies.find(f => f.id === selectedFamily)?.name}
              </h2>
              <p className="mb-6">
                {translations.modal.description}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedFamily(null)}
                  className="bg-gray-200 text-black px-6 py-2 rounded-full flex items-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2 transform rotate-180" />
                  {translations.modal.buttons.back}
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-full flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  {translations.modal.buttons.requestAccess}
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
