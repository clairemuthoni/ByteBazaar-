import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import crmImage from "./assets/cheap-crm-software.webp";
import improvecustexp from "./assets/customer_experience.png";
import improveopeff from "./assets/improve_operational_efficiency.webp";
import incbusgrow from "./assets/increase_business_growth.webp";
import logo1 from "./assets/logo1.png";
import { showConfirmDialog, showInfoAlert, showToast } from "./utils/sweetAlerts";

const Navbar = ({ onGetStarted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link to="/" className="flex items-center">
                <img src={logo1} alt="ByteBazaar Logo" className="h-12 w-auto cursor-pointer" />
              </Link>
            {/* <Link to="/" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              Byte<span className="text-primary">Bazaar</span>
            </Link> */}
          </div>
          <div className="hidden md:flex space-x-8 items-center">
          <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" to="/">Home</Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" to="/features">Features</Link>
            {/* <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" href="#why-us">Why Us</a> */} 
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" to="/contact-sales">Contact Us</Link>
            <a className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg cursor-pointer" onClick={onGetStarted}>Get Started</a>
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
                to="/features"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <a 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <Link 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                to="/contact-sales"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg text-center cursor-pointer" 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onGetStarted(e);
                }}
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

const Hero = ({ onRequestDemo }) => (
  <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background-dark"></div>
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Build better customer relationships.  <span className="text-primary">Grow your business faster</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            ByteBazaar is a modern CRM that helps you understand your customers, communicate at scale, and make data-driven decisions, all from one platform.
          </p>
      <div>
            <a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-primary hover:bg-secondary shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 cursor-pointer" onClick={(e) => onRequestDemo(e, 'Hero')}>
              Request Demo 
              <span className="material-icons ml-2">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition duration-300"></div>
          <div className="relative bg-white dark:bg-surface-dark rounded-2xl shadow-2xl p-4 border border-gray-100 dark:border-gray-700 overflow-hidden">
            <img
              alt="Dashboard analytics visualization"
              className="rounded-lg w-full h-auto object-cover opacity-90 hover:opacity-100 transition"
              src={crmImage}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionWave = ({ top = false }) => (
  <div className={`w-full h-16 ${top ? 'bg-surface-light dark:bg-surface-dark' : 'bg-white dark:bg-background-dark'} overflow-hidden`}>
    <svg className="w-full h-full text-surface-light dark:text-surface-dark fill-current" fill="none" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
      <path d={top ? "M0 0C240 60 480 100 720 100C960 100 1200 60 1440 0V100H0V0Z" : "M0 100C240 40 480 0 720 0C960 0 1200 40 1440 100V0H0V100Z"}></path>
    </svg>
  </div>
);

const WhyUsSection = () => (
  <section className="py-20 bg-surface-light dark:bg-surface-dark" id="why-us">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Designed to improve customer experience and fuel growth</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Everything you need to serve customers better and make smarter business decisions.</p>
      </div>
      <div className="space-y-24">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img alt="Scattered documents and chaos" className="rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 object-cover h-64 w-full" src={improvecustexp} />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Improve Customer Experience</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Better communication. Better understanding. More personal service.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                <span>Customer dashboards to track engagement and activity.</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                <span>Bulk messaging for timely, relevant communication.</span>
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
              <strong className="text-gray-900 dark:text-white">Customers feel understood, valued, and more likely to stay</strong>
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <img alt="Frustrated person looking at receipts" className="rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 object-cover h-64 w-full" src={improveopeff} />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Improve Operational Efficiency</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Less manual work. More consistency. Clear visibility.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                <span>One system for customers, sales, and finances.</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                <span>Automated and bulk actions instead of repetitive tasks.</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                <span>Real-time dashboards instead of manual reporting.</span>
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
              <strong className="text-gray-900 dark:text-white">Teams move faster, make fewer mistakes, and focus on high-value work.</strong>
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img alt="Person analyzing complex data" className="rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 object-cover h-64 w-full" src={incbusgrow} />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Increase Business Growth</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Growth driven by insight, not guesswork.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                <span>Sales dashboards to monitor performance and pipelines.</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                <span>Financial dashboards for revenue and cash flow visibility.</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                <span>Customer and financial reports to guide strategy.</span>
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
              <strong className="text-gray-900 dark:text-white">Confident decisions, scalable operations, and sustained growth</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = ({ onGetStarted, onRequestDemo, onContactSales }) => (
  <section className="py-20 bg-white dark:bg-background-dark" id="pricing">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Invest in Your Growth</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Scalable plans designed for high-performing retail teams.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="relative bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Essential tools to manage customers, orders, and daily operations.</p>
          <ul className="space-y-3 mb-4 flex-1 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>Customer Management & Profiles</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>Product & Inventory Management</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>Order & Delivery Tracking</span>
            </li>
          </ul>
          <a href="#pricing-features" className="text-xs text-primary mb-4 font-medium block hover:underline cursor-pointer">+ 5 more features below</a>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 italic">Best for startups, solo operators, and small businesses.</p>
          <a className="block w-full text-center py-3 px-4 border border-primary text-primary dark:text-white dark:border-white font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition cursor-pointer" onClick={onGetStarted}>Get Started</a>
        </div>
        {/* Professional Plan */}
        <div className="relative bg-white dark:bg-surface-dark border-2 border-primary rounded-2xl p-8 shadow-2xl scale-105 z-10 flex flex-col">
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">⭐ MOST POPULAR</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Advanced tools to improve customer experience, team productivity, and sales performance.</p>
          <ul className="space-y-3 mb-4 flex-1 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>Advanced Customer Insights & Analytics</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>Bulk Messaging (SMS & WhatsApp)</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>Sales & Performance Dashboards</span>
            </li>
          </ul>
          <a href="#professional-features" className="text-xs text-primary mb-4 font-medium block hover:underline cursor-pointer">+ 5 more features below</a>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 italic">Best for growing teams and high-volume businesses.</p>
          <a className="block w-full text-center py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary shadow-md transition cursor-pointer" onClick={(e) => onRequestDemo(e, 'Professional')}>Request Demo</a>
        </div>
        {/* Enterprise Plan */}
        <div className="relative bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Enterprise-grade analytics, compliance, and customization for large operations.</p>
          <ul className="space-y-3 mb-4 flex-1 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>AI-Powered Analytics & Forecasting</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>Advanced Financial Reports (P&L, Cash Flow, Balance Sheet)</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-primary mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
              <span>Multi-Branch / Multi-Store Support</span>
            </li>
          </ul>
          <a href="#enterprise-features" className="text-xs text-primary mb-4 font-medium block hover:underline cursor-pointer">+ 5 more features below</a>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 italic">Best for enterprises, franchises, and regulated businesses.</p>
          <a className="block w-full text-center py-3 px-4 border border-primary text-primary dark:text-white dark:border-white font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition cursor-pointer" onClick={onContactSales}>Contact Sales</a>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="mt-16" id="pricing-features">
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Complete Feature Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white dark:bg-surface-dark rounded-lg shadow-lg">
            <thead>
              <tr className="bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Feature</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">Starter</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white bg-primary/5">Professional</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Customer Management & Profiles</td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Product & Inventory Management</td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Order & Delivery Tracking</td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Automated Invoicing & Receipts</td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Basic Sales Reports</td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Task & JobCard Management</td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Email Notifications</td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">File & Document Storage</td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr className="bg-surface-light dark:bg-surface-dark" id="professional-features">
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Advanced Features</td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6 bg-primary/5"></td>
                <td className="text-center py-4 px-6"></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Advanced Customer Insights & Analytics</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Loyalty & Rewards Program</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Bulk Messaging (SMS & WhatsApp)</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Sales & Performance Dashboards</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Smart Inventory Alerts</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Employee Performance Tracking</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Refunds, Returns & Warranty Management</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Digital Signatures & JobCard Verification</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="material-icons text-primary">check_circle</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr className="bg-surface-light dark:bg-surface-dark" id="enterprise-features">
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Enterprise Features</td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6 bg-primary/5"></td>
                <td className="text-center py-4 px-6"></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">AI-Powered Analytics & Forecasting</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Advanced Financial Reports (P&L, Cash Flow, Balance Sheet)</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Tax & Compliance Tools</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Multi-Branch / Multi-Store Support</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Advanced Role-Based Access Control</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Legal & Audit-Ready Documentation</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Custom Workflows & Integrations</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Priority Support & Dedicated Onboarding</td>
                <td className="text-center py-4 px-6"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6 bg-primary/5"><span className="text-gray-400">—</span></td>
                <td className="text-center py-4 px-6"><span className="material-icons text-primary">check_circle</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

const FaqSection = () => (
  <section className="py-20 bg-white dark:bg-background-dark" id="faq">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">CRM FAQ&apos;s</h2>
      <div className="space-y-4">
        <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
            Who uses ByteBazaar CRM?
            <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
              <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
            </span>
          </summary>
          <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            We are purpose-built for retail businesses, repair shops, and service providers who need to consolidate order tracking, customer data, and staff management into one reliable system.
          </div>
        </details>
        <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
            Is the setup process complicated?
            <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
              <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
            </span>
          </summary>
          <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Not at all. We focus on a "plug-and-play" experience. Our intuitive onboarding wizard helps you import data and get operational in minutes, not days.
          </div>
        </details>
        <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
            Do I need an IT team?
            <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
              <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
            </span>
          </summary>
          <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Absolutely not. ByteBazaar is a cloud-based solution built for business owners, not developers. We handle the technical side so you can focus on sales.
          </div>
        </details>
        <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
            Is my business data secure?
            <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
              <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
            </span>
          </summary>
          <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Yes. We utilize enterprise-grade encryption and security protocols to ensure your customer lists and financial data are protected around the clock.
          </div>
        </details>
        <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
            What kind of support is available?
            <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
              <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
            </span>
          </summary>
          <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            All plans include comprehensive email support. Enterprise users gain access to priority support lines and dedicated onboarding specialists.
          </div>
        </details>
        <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
            Can I manage my entire team here?
            <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
              <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
            </span>
          </summary>
          <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Yes. Assign specific roles and permission levels to each staff member to ensure they have the access they need while keeping sensitive data secure.
          </div>
        </details>
      </div>
    </div>
  </section>
);

const GetStartedSection = ({ onEmailSignup }) => (
  <section className="relative py-24 bg-surface-light dark:bg-surface-dark overflow-hidden" id="get-started">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path className="text-primary" d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
      </svg>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Stop Managing Tools. Start Managing Growth.</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Join the smart retailers and service providers who have reclaimed their time and revenue with ByteBazaar.
      </p>
      <form onSubmit={onEmailSignup} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
        <input className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-primary py-3 px-4 shadow-sm" placeholder="Enter your work email" type="email" name="email" required />
        <button type="submit" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 whitespace-nowrap text-center">
          Request Demo 
        </button>
      </form>
    </div>
  </section>
);

const Footer = ({ onGetStarted }) => (
  <footer className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-200 dark:border-gray-800" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={logo1} alt="ByteBazaar Logo" className="h-8 w-auto cursor-pointer" />
            </Link>
            {/* <span className="font-bold text-xl text-gray-900 dark:text-white">Byte<span className="text-primary">Bazaar</span></span> */}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p className="flex items-center"><span className="material-icons text-base mr-2">phone</span> +254 738 476 283</p>
            <p className="flex items-center"><span className="material-icons text-base mr-2">email</span> support@bytebazaar.com</p>
            <p className="mt-4 text-xs leading-relaxed opacity-75">
              "Support available for onboarding and setup"
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Product / Solutions</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-primary transition" href="/features#customers-crm">Customers & CRM</a></li>
            <li><a className="hover:text-primary transition" href="/features#orders-delivery">Orders & Delivery</a></li>
            <li><a className="hover:text-primary transition" href="/features#products-inventory">Products & Inventory</a></li>
            <li><a className="hover:text-primary transition" href="/features#staff-task-management">Staff & Task Management</a></li>
            <li><a className="hover:text-primary transition" href="/features#analytics-reports">Analytics & Reports</a></li>
            <li><a className="hover:text-primary transition" href="/features#jobcards-repairs">JobCard & Repairs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Resources & Company</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-primary transition" href="#pricing">Pricing</a></li>
            <li><a className="hover:text-primary transition" href="#faq">FAQs</a></li>
            <li><a className="hover:text-primary transition cursor-pointer" onClick={onGetStarted}>Get Started</a></li>
            <li><Link className="hover:text-primary transition" to="/contact-sales">Contact Us</Link></li>
            <li><Link className="hover:text-primary transition" to="/request-demo">Request a demo</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary transition" href="https://www.tiktok.com/@bytebazaarcrm?_r=1&_t=ZS-935kfwhRJ3Z" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary transition" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary transition" href="#">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-500">2026 Byte Bazaar CRM. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-500">
          <Link className="hover:text-primary transition" to="/privacy-policy">Privacy Policy</Link>
          <Link className="hover:text-primary transition" to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handler for Get Started button
  const handleGetStarted = (e) => {
    e.preventDefault();
    showConfirmDialog(
      'Ready to Get Started?',
      'You will be redirected to the ByteBazaar login page',
      'Continue',
      'Not yet'
    ).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://bytebazaar.ma3.co.ke/Login';
      }
    });
  };

  // Handler for Request Demo button from pricing
  const handleRequestDemo = (e, planName) => {
    e.preventDefault();
    showInfoAlert(
      `${planName} Plan Demo`,
      'Let us show you how ByteBazaar can transform your business operations!'
    ).then(() => {
      navigate('/request-demo');
    });
  };

  // Handler for Enterprise Contact Sales
  const handleContactSales = (e) => {
    e.preventDefault();
    showInfoAlert(
      'Enterprise Solutions',
      'Our sales team will help customize a perfect plan for your organization\'s needs'
    ).then(() => {
      navigate('/contact-sales');
    });
  };

  // Handler for email signup
  const handleEmailSignup = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    if (email) {
      showToast('success', 'Thanks! We\'ll reach out soon!');
      setTimeout(() => {
        navigate('/request-demo');
      }, 1500);
    }
  };

  useEffect(() => {
    // Handle hash scrolling when component mounts or location changes
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top when navigating to home page without hash
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 150);
    }
  }, [location, navigate]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-200">
      <Navbar onGetStarted={handleGetStarted} />
      <Hero onRequestDemo={handleRequestDemo} />
      <SectionWave top />
      <WhyUsSection />
      <SectionWave />
      <PricingSection 
        onGetStarted={handleGetStarted}
        onRequestDemo={handleRequestDemo}
        onContactSales={handleContactSales}
      />
      <FaqSection />
      <GetStartedSection onEmailSignup={handleEmailSignup} />
      <Footer onGetStarted={handleGetStarted} />
    </div>
  );
};

export default App;
