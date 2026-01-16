import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/">
              <img src={logo1} alt="ByteBazaar Logo" className="h-12 w-auto cursor-pointer" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" to="/">Home</Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" to="/features">Features</Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" to="/contact-sales">Contact Us</Link>
            <a className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg" href="#get-started">Get Started</a>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              <span className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col space-y-3">
              <Link 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                to="/features"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <a 
                className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg text-center" 
                href="#get-started"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last Updated: January 15, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User" or "you") and ByteBazaar ("Company," "we," "us," or "our") concerning your access to and use of our CRM platform and related services (the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Services.
              </p>
            </div>

            {/* Account Registration */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Account Registration and Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.1 Account Creation</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>Have the authority to enter into this agreement on behalf of your organization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.2 Account Security</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized access or security breach.
              </p>
            </div>

            {/* Use of Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Use of Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.1 License Grant</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.2 Prohibited Activities</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer, decompile, or disassemble the Services</li>
                <li>Use the Services for any unlawful or fraudulent purpose</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Resell or redistribute the Services without our written consent</li>
              </ul>
            </div>

            {/* Fees and Payment */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Fees and Payment</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.1 Subscription Fees</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You agree to pay all fees associated with your chosen subscription plan. Fees are billed in advance on a monthly or annual basis and are non-refundable except as required by law or as expressly stated in these Terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.2 Price Changes</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify our pricing with 30 days' notice. Continued use of the Services after the price change constitutes acceptance of the new pricing.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.3 Payment Methods</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You must provide valid payment information. You authorize us to charge your payment method for all fees incurred. If payment fails, we may suspend or terminate your access to the Services.
              </p>
            </div>

            {/* Data and Content */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Your Data and Content</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">5.1 Ownership</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You retain all ownership rights to the data and content you upload to the Services ("Your Data"). You grant us a limited license to use, store, and process Your Data solely to provide the Services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">5.2 Responsibility for Your Data</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You are solely responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>The accuracy, quality, and legality of Your Data</li>
                <li>Obtaining necessary permissions to use and process Your Data</li>
                <li>Complying with data protection laws applicable to Your Data</li>
                <li>Maintaining backups of Your Data</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The Services, including all software, designs, text, graphics, and other content, are owned by ByteBazaar and protected by intellectual property laws. Our trademarks and logos may not be used without our prior written permission.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Nothing in these Terms grants you any right, title, or interest in our intellectual property except for the limited license to use the Services as described herein.
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Warranties and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">7.1 Service Availability</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                While we strive to provide reliable Services, we do not guarantee uninterrupted or error-free access. The Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">7.2 Disclaimer</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR BE SECURE OR ERROR-FREE.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BYTEBAZAAR SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Service interruptions or data loss</li>
                <li>Third-party actions or omissions</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Indemnification</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You agree to indemnify, defend, and hold harmless ByteBazaar and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Services, Your Data, or your violation of these Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">10.1 Termination by You</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You may terminate your account at any time through your account settings or by contacting us. Termination does not entitle you to a refund of prepaid fees.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">10.2 Termination by Us</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may suspend or terminate your access to the Services at any time if:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>You violate these Terms</li>
                <li>Your account is inactive for 12 consecutive months</li>
                <li>You fail to pay fees when due</li>
                <li>We are required to do so by law</li>
                <li>Providing the Services becomes unlawful or impractical</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">10.3 Effect of Termination</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Upon termination, your right to use the Services immediately ceases. You may export Your Data within 30 days of termination. After 30 days, we may delete Your Data from our systems.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may modify these Terms at any time. We will notify you of material changes via email or through the Services. Your continued use of the Services after changes take effect constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Services.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Dispute Resolution and Governing Law</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">12.1 Governing Law</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">12.2 Dispute Resolution</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Any disputes arising from these Terms or the Services shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration or the courts of Kenya.
              </p>
            </div>

            {/* General Provisions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. General Provisions</h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and ByteBazaar regarding the Services.</li>
                <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions shall remain in effect.</li>
                <li><strong>Waiver:</strong> Failure to enforce any right or provision does not constitute a waiver of that right or provision.</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our written consent. We may assign these Terms at any time.</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control.</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300"><strong>ByteBazaar CRM</strong></p>
                <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:legal@bytebazaar.com" className="text-primary hover:underline">legal@bytebazaar.com</a></p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +254 738 476 283</p>
                <p className="text-gray-700 dark:text-gray-300">Support: <a href="mailto:support@bytebazaar.com" className="text-primary hover:underline">support@bytebazaar.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 ByteBazaar CRM. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link className="hover:text-primary transition" to="/privacy-policy">Privacy Policy</Link>
              <Link className="hover:text-primary transition" to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;

