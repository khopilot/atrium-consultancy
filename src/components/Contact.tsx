import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Phone, Mail, MapPin, Twitter, Instagram, Send, ArrowRight,
} from 'lucide-react';
import backgroundImage from '../images/Mind House.png';

// TypeScript interfaces for translations
interface HeroSection {
  title: string;
  subtitle: string;
  cta: string;
}

interface ContactContent {
  heading: string;
  description: string;
}

interface ContactInformation {
  title: string;
  phone: string;
  email: string;
  address: string;
}

interface CompanyInfo {
  title: string;
  tagline: string;
}

interface SocialMedia {
  title: string;
  twitter: string;
  instagram: string;
}

interface Location {
  title: string;
  iframeTitle: string;
}

interface ContactFormTranslations {
  successMessage: string;
  errorMessage: string;
  generalErrorMessage: string;
  form: {
    firstName: { label: string; placeholder: string; error: string; };
    lastName: { label: string; placeholder: string; };
    email: { label: string; placeholder: string; error: string; };
    phoneNumber: { label: string; placeholder: string; error: string; };
    subject: {
      label: string;
      options: {
        generalInquiry: string;
        partnerships: string;
        projectProposal: string;
        other: string;
      };
    };
    message: { label: string; placeholder: string; error: string; };
    consent: { label: string; error: string; };
    submitButton: { sending: string; sendMessage: string; };
  };
}

interface ContactTranslations {
  heroSection: HeroSection;
  contactContent: ContactContent;
  contactInformation: ContactInformation;
  companyInfo: CompanyInfo;
  socialMedia: SocialMedia;
  location: Location;
  contactForm: ContactFormTranslations;
}

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
  const { t, ready } = useTranslation('contact');
  const translations = t('contact', { returnObjects: true }) as ContactTranslations;

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: translations.contactForm.form.subject.options.generalInquiry,
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  if (!ready) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = translations.contactForm.form.firstName.error;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = translations.contactForm.form.email.error;
    }
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = translations.contactForm.form.phoneNumber.error;
    }
    if (!formData.message.trim()) {
      newErrors.message = translations.contactForm.form.message.error;
    }
    if (!formData.consent) {
      newErrors.consent = true; // Set to true to indicate an error
    } else {
      newErrors.consent = undefined; // Clear the error if consent is given
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(translations.contactForm.successMessage);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: translations.contactForm.form.subject.options.generalInquiry,
          message: '',
          consent: false,
        });
      } else {
        setSubmitSuccess(translations.contactForm.errorMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(translations.contactForm.generalErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt={translations.heroSection.title}
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
              {translations.heroSection.title}
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {translations.heroSection.subtitle}
            </motion.p>
            <motion.a
              href="#contact-form"
              className="bg-white text-black px-8 py-4 rounded-full inline-flex items-center font-semibold text-lg hover:bg-gray-200 transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {translations.heroSection.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row">
        {/* Left Side - Contact Information */}
        <div className="md:w-1/2 bg-black text-white p-8">
          <h2 className="text-3xl font-bold mb-4">{translations.contactContent.heading}</h2>
          <p className="mb-8">{translations.contactContent.description}</p>

          <div className="space-y-4">
            <p className="flex items-center">
              <Phone className="mr-4" />
              {translations.contactInformation.phone}
            </p>
            <p className="flex items-center">
              <Mail className="mr-4" />
              <a href={`mailto:${translations.contactInformation.email}`} className="underline">
                {translations.contactInformation.email}
              </a>
            </p>
            <p className="flex items-center">
              <MapPin className="mr-4" />
              {translations.contactInformation.address}
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">{translations.companyInfo.title}</h3>
            <p className="mb-4">{translations.companyInfo.tagline}</p>
          </div>

          <div className="mt-8 flex space-x-4">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <Twitter className="cursor-pointer" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <Instagram className="cursor-pointer" />
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">{translations.location.title}</h3>
            <iframe
              title={translations.location.iframeTitle}
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
            <div className={`mb-4 p-4 rounded ${
              submitSuccess === translations.contactForm.successMessage
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {submitSuccess}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="firstName" className="block mb-2 font-medium">
                  {translations.contactForm.form.firstName.label}
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
                  placeholder={translations.contactForm.form.firstName.placeholder}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="lastName" className="block mb-2 font-medium">
                  {translations.contactForm.form.lastName.label}
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                  placeholder={translations.contactForm.form.lastName.placeholder}
                />
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="email" className="block mb-2 font-medium">
                  {translations.contactForm.form.email.label}
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
                  placeholder={translations.contactForm.form.email.placeholder}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="phoneNumber" className="block mb-2 font-medium">
                  {translations.contactForm.form.phoneNumber.label}
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
                  placeholder={translations.contactForm.form.phoneNumber.placeholder}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 font-medium">
                {translations.contactForm.form.subject.label}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
              >
                <option value={translations.contactForm.form.subject.options.generalInquiry}>
                  {translations.contactForm.form.subject.options.generalInquiry}
                </option>
                <option value={translations.contactForm.form.subject.options.partnerships}>
                  {translations.contactForm.form.subject.options.partnerships}
                </option>
                <option value={translations.contactForm.form.subject.options.projectProposal}>
                  {translations.contactForm.form.subject.options.projectProposal}
                </option>
                <option value={translations.contactForm.form.subject.options.other}>
                  {translations.contactForm.form.subject.options.other}
                </option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-medium">
                {translations.contactForm.form.message.label}
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
                placeholder={translations.contactForm.form.message.placeholder}
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
                {translations.contactForm.form.consent.label}
              </label>
              {errors.consent && (
                <p className="text-red-500 text-sm mt-1">
                  {translations.contactForm.form.consent.error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full flex items-center justify-center disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>{translations.contactForm.form.submitButton.sending}</span>
              ) : (
                <>
                  {translations.contactForm.form.submitButton.sendMessage}
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

export default Contact;
