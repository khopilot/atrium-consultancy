import React from 'react'
import { Globe, Calendar, ChevronRight, Briefcase, GraduationCap, Code } from 'lucide-react'

const person = {
  name: 'Atrium Consultants Ltd',
  role: 'Expert Consultancy for Foreign Investment in South Asia',
  location: 'South Asia',
  languages: ['English', 'Hindi', 'Bengali', 'Urdu'],
  avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
}

const about = {
  intro: {
    title: 'Introduction',
    display: true,
    description: 'Atrium Consultants Ltd is a leading consultancy firm specializing in facilitating foreign investment in South Asian countries. Our mission is to empower investors by offering expert guidance on the intricacies of the investment process and identifying lucrative opportunities for cross-border investments.'
  },
  work: {
    title: 'Our Expertise',
    display: true,
    experiences: [
      {
        company: 'Government Asset Acquisitions',
        role: 'Facilitating high-value deals',
        timeframe: '2010 - Present',
        achievements: [
          'Successfully brokered over $500 million in government asset acquisitions',
          'Developed a network of exclusive buyers across 20+ countries',
          'Implemented discreet negotiation strategies for sensitive transactions'
        ]
      },
      {
        company: 'Strategic Negotiation and Advisory',
        role: 'Expert guidance for international investments',
        timeframe: '2012 - Present',
        achievements: [
          'Advised on complex cross-border investment deals worth over $1 billion',
          'Developed tailored negotiation strategies for diverse cultural contexts',
          'Achieved a 95% success rate in closing challenging investment deals'
        ]
      }
    ]
  },
  technical: {
    title: 'Our Services',
    display: true,
    skills: [
      {
        title: 'Investment Facilitation',
        description: 'Expert guidance on investment processes and opportunities in South Asian countries.'
      },
      {
        title: 'Legal & Regulatory Support',
        description: 'Navigate complex legal frameworks with our tailored solutions for business incorporation and management.'
      },
      {
        title: 'Strategic Consulting',
        description: 'Comprehensive advice on debt collection, dispute resolution, and investment optimization.'
      }
    ]
  },
  calendar: {
    display: true,
    link: '#schedule-consultation'
  }
}

const social = [
  { name: 'LinkedIn', icon: 'linkedin', link: '#' },
  { name: 'Twitter', icon: 'twitter', link: '#' },
  { name: 'Email', icon: 'mail', link: 'mailto:contact@atriumconsultants.com' }
]

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
            <img src={person.avatar} alt={person.name} className="w-48 h-48 rounded-full mb-6 shadow-lg" />
            <div className="flex items-center mb-4">
              <Globe className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-lg">{person.location}</span>
            </div>
            <div className="flex flex-wrap justify-center">
              {person.languages.map((language, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
                  {language}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-2/3 md:pl-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">{person.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{person.role}</p>
            <div className="flex mb-8">
              {social.map((item) => (
                <a key={item.name} href={item.link} className="mr-6 text-gray-600 hover:text-black transition duration-300">
                  {item.name}
                </a>
              ))}
            </div>
            {about.calendar.display && (
              <a href={about.calendar.link} className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full mb-8 hover:bg-gray-800 transition duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Schedule a consultation</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            )}
          </div>
        </div>

        {about.intro.display && (
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-black">{about.intro.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{about.intro.description}</p>
          </div>
        )}

        {about.work.display && (
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-black">{about.work.title}</h2>
            {about.work.experiences.map((experience, index) => (
              <div key={index} className="mb-10 border-l-4 border-gray-200 pl-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">{experience.company}</h3>
                <p className="text-lg text-gray-600 mb-4">{experience.role} | {experience.timeframe}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="mb-2">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {about.technical.display && (
          <div>
            <h2 className="text-3xl font-semibold mb-8 text-black">{about.technical.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {about.technical.skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-black">{skill.title}</h3>
                  <p className="text-gray-700">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default About