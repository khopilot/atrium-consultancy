import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Send,
  ArrowRight,
} from 'lucide-react';
import backgroundImage from '../images/Mind House.png'; // Updated to the new image

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  consent: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: 'General Inquiry',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear errors on change
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'A valid email is required.';
    }
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid phone number.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    if (!formData.consent) {
      newErrors.consent = true; // or simply skip this validation
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: 'General Inquiry',
          message: '',
          consent: false,
        });
      } else {
        setSubmitSuccess('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Contact Information */}
        <div className="md:w-1/2 bg-black text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8">
            We'd love to hear from you. Send us a message using the form, or
            reach out through our contact information below.
          </p>

          <div className="space-y-4">
            <p className="flex items-center">
              <Phone className="mr-4" /> +853 1234 5678
            </p>
            <p className="flex items-center">
              <Mail className="mr-4" />{' '}
              <a href="mailto:info@atriumconsultants.com" className="underline">
                info@atriumconsultants.com
              </a>
            </p>
            <p className="flex items-center">
              <MapPin className="mr-4" /> 61 Avenida de Almeida Ribeiro, 13F -
              A Circle Square Building, Macau, Macau SAR.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Atrium Consultants Ltd</h3>
            <p className="mb-4">
              Connecting Governments with Exclusive Buyers Worldwide
            </p>
          </div>

          <div className="mt-8 flex space-x-4">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="cursor-pointer" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="cursor-pointer" />
            </a>
          </div>

          {/* Map Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.5070661744!2d113.516331!3d22.198745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3401f4c1c1c1c1c1%3A0x1234567890abcdef!2s61%20Avenida%20de%20Almeida%20Ribeiro%2C%2013F%20-%20A%20Circle%20Square%20Building%2C%20Macau%2C%20Macau%20SAR!5e0!3m2!1sen!2smo!4v1610000000000!5m2!1sen!2smo"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 p-8 flex flex-col" id="contact-form">
          {submitSuccess && (
            <div
              className={`mb-4 p-4 rounded ${
                submitSuccess.includes('successfully')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitSuccess}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="firstName" className="block mb-2 font-medium">
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border-b ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-black`}
                  autoComplete="given-name"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="lastName" className="block mb-2 font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                  autoComplete="family-name"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border-b ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-black`}
                  autoComplete="email"
                  placeholder="john.doe@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 font-medium"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full p-2 border-b ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-black`}
                  autoComplete="tel"
                  placeholder="+1 234 567 8900"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 font-medium">
                Select Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Partnerships">Partnerships</option>
                <option value="Project Proposal">Project Proposal</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-medium">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border-b ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-black`}
                rows={4}
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mr-2"
                />
                I consent to the processing of my personal data.*
              </label>
              {errors.consent && (
                <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full flex items-center justify-center disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2" size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ContactHero Component
const ContactHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Contact ATRIUM CONSULTANCY"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch with ATRIUM CONSULTANCY
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Unlock Exclusive Investment Opportunities in Southeast Asia
          </motion.p>
          <motion.a
            href="#contact-form"
            className="bg-white text-black px-8 py-4 rounded-full inline-flex items-center font-semibold text-lg hover:bg-gray-200 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Request a Private Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
