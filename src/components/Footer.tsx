import React, { useState } from 'react'
import { Linkedin, Twitter, ArrowUp } from 'lucide-react'

interface FooterProps {
  setCurrentPage: (page: string) => void
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('')

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Atrium Consultants Ltd</h2>
            <p className="text-sm mb-2">Connecting Governments with Exclusive Buyers Worldwide</p>
            <address className="text-sm not-italic">
              61 Avenida de Almeida Ribeiro,<br />
              13F - A Circle Square Building,<br />
              Macau, Macau SAR.
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav>
              <ul className="text-sm space-y-2">
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-gray-300">Services</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-gray-300">Contact Us</button></li>
                <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-gray-300">Privacy Policy</button></li>
                <li><button onClick={() => setCurrentPage('terms')} className="hover:text-gray-300">Terms of Service</button></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">Email: info@atriumconsultants.com</p>
            <p className="text-sm mb-4">Phone: +853 1234 5678</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 hover:text-gray-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-6 h-6 hover:text-gray-300" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleNewsletterSignup} className="mb-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex-grow"
                />
                <button type="submit" className="px-3 py-2 bg-white text-black rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  Subscribe
                </button>
              </div>
            </form>
            <div>
              <label htmlFor="language" className="sr-only">Select language</label>
              <select id="language" className="bg-white text-black px-3 py-2 rounded-md">
                <option value="en">English</option>
                <option value="zh">中文</option>
                {/* Add more language options as needed */}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-wrap justify-between items-center">
          <p className="text-sm">&copy; 2024 Atrium Consultants Ltd. All rights reserved.</p>
          <button onClick={scrollToTop} className="text-sm flex items-center hover:text-gray-300" aria-label="Back to top">
            <ArrowUp className="w-4 h-4 mr-1" /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
