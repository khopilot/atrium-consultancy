import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-8">Privacy Policy</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">1. Introduction</h3>
          <p className="mb-4">
            Atrium Consultants Ltd is committed to protecting the privacy and confidentiality of our clients and website visitors. This Privacy Policy outlines our practices concerning the collection, use, and protection of your personal information.
          </p>

          <h3 className="text-xl font-semibold mb-4">2. Information Collection</h3>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you contact us through our website or engage our services. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-semibold mb-4">3. Use of Information</h3>
          <p className="mb-4">
            The information we collect is used solely for the purpose of providing our consultancy services, responding to your inquiries, and improving our services. We do not share your personal information with third parties except as required by law or with your explicit consent.
          </p>

          <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
          <p className="mb-4">
            We implement strict security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-xl font-semibold mb-4">5. Confidentiality in Business Transactions</h3>
          <p className="mb-4">
            We understand the sensitive nature of the transactions we facilitate. All business dealings and client information are treated with the utmost confidentiality. We adhere to strict non-disclosure practices and only share information on a need-to-know basis within our organization.
          </p>

          <h3 className="text-xl font-semibold mb-4">6. Changes to This Policy</h3>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h3 className="text-xl font-semibold mb-4">7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@atriumconsultants.com.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy