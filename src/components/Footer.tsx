import React from 'react'

interface FooterProps {
  setCurrentPage: (page: string) => void
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Atrium Consultants Ltd</h3>
            <p className="text-sm">Connecting Governments with Exclusive Buyers Worldwide</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-gray-300">Services</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-gray-300">Contact Us</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-gray-300">Privacy Policy</button></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-sm">&copy; 2024 Atrium Consultants Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer