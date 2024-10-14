import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, Send, Bot } from 'lucide-react'

interface Message {
  text: string;
  isBot: boolean;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [chatMessages, setChatMessages] = useState<Message[]>([
    { text: "Hello! I'm an AI assistant. How can I help you today?", isBot: true }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChatSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage: Message = { text: inputMessage, isBot: false }
    setChatMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Simulate AI response (replace with actual API call in production)
    setTimeout(() => {
      const botResponse: Message = { text: `Thank you for your message: "${inputMessage}". How else can I assist you?`, isBot: true }
      setChatMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        
        {/* AI Chatbot Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="bg-black p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Bot className="h-8 w-8 mr-3" />
              AI Assistant
            </h3>
            <div className="h-96 overflow-y-auto mb-6 space-y-4 pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-3/4 p-4 rounded-xl ${msg.isBot ? 'bg-gray-800' : 'bg-blue-600'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleChatSubmit} className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-4 py-3 bg-gray-800 text-white rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-r-xl hover:bg-blue-700 transition duration-300">
                <Send className="h-6 w-6" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Main Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300 flex items-center justify-center">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              <span>contact@atriumconsultants.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
