import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomersCRM from "../assets/Customers&CRM.webp";
import OrdersDelivery from "../assets/orders&delivery.png";
import ProductsInventory from "../assets/products&inventory.webp";
import StaffTaskManagement from "../assets/staff&taskmanagement.png";
import AnalyticsReports from "../assets/analytics&reports.png";
import JobCardsRepairs from "../assets/jobcard&repairs.jpg";
import logo2 from "../assets/logo2.png";
import { showConfirmDialog } from "../utils/sweetAlerts";

const Navbar = ({ onGetStarted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img src={logo2} alt="ByteBazaar Logo" className="h-12 w-auto" />
            {/* <Link to="/" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              Byte<span className="text-primary">Bazaar</span>
            </Link> */}
          </div>
            <div className="hidden md:flex space-x-8 items-center">
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" to="/">Home</Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" to="/features">Features</Link>
            {/* <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" href="/#why-us">Why Us</a> */}
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
                href="/#why-us"
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

const HeroSection = () => (
  <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
        Everything you need to <span className="text-primary">run and grow</span> your business
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        From customer relationships to operations and insights, our CRM brings all your core business tools into one platform.
      </p>
    </div>
  </section>
);

const FeatureSection = ({ id, title, description, features, imageSrc, imageAlt, reverse = false, bgClass = "" }) => (
  <section id={id} className={bgClass}>
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${bgClass ? 'py-24' : ''}`}>
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className={`relative group ${reverse ? 'lg:order-2' : 'order-2 lg:order-1'}`}>
          <div className={`absolute inset-0 bg-primary/10 rounded-2xl transform ${reverse ? '-rotate-2 group-hover:-rotate-1' : 'rotate-2 group-hover:rotate-1'} transition duration-300`}></div>
          <img
            alt={imageAlt}
            className="relative rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
            src={imageSrc}
          />
        </div>
        <div className={`space-y-6 ${reverse ? 'lg:order-1' : 'order-1 lg:order-2'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li 
                key={index} 
                id={`${id}-feature-${index + 1}`}
                className="flex items-start gap-3 scroll-mt-20"
              >
                <span className="material-icons text-primary">check_circle</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const GetStartedSection = () => (
  <section className="relative pt-16 pb-24 bg-surface-light dark:bg-surface-dark overflow-hidden" id="get-started">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path className="text-primary" d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
      </svg>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Ready to see it in action ?</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Explore our pricing or request a demo to find the right plan for your business. 
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
        <input className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-primary py-3 px-4 shadow-sm" placeholder="Enter your work email" type="email" />
        <Link className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 whitespace-nowrap text-center" to="/request-demo">
          Request Demo 
        </Link>
      </div>
    </div>
  </section>
);

const Footer = ({ onGetStarted }) => (
  <footer className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo2} alt="ByteBazaar Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">Byte<span className="text-primary">Bazaar</span></span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p className="flex items-center"><span className="material-icons text-base mr-2">phone</span> +254 738 476 283</p>
            <p className="flex items-center"><span className="material-icons text-base mr-2">email</span> support@bytebazaar.com</p>
            <p className="mt-4 text-xs leading-relaxed opacity-75 italic">"Support available for onboarding and setup"</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Product / Solutions</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-primary transition" href="#customers-crm">Customers & CRM</a></li>
            <li><a className="hover:text-primary transition" href="#orders-delivery">Orders & Delivery</a></li>
            <li><a className="hover:text-primary transition" href="#products-inventory">Products & Inventory</a></li>
            <li><a className="hover:text-primary transition" href="#staff-task-management">Staff & Task Management</a></li>
            <li><a className="hover:text-primary transition" href="#analytics-reports">Analytics & Reports</a></li>
            <li><a className="hover:text-primary transition" href="#jobcards-repairs">JobCard & Repairs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Resources & Company</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-primary transition" href="/#pricing">Pricing</a></li>
            <li><a className="hover:text-primary transition" href="/#faq">FAQs</a></li>
            <li><a className="hover:text-primary transition cursor-pointer" onClick={onGetStarted}>Get Started</a></li>
            <li><Link className="hover:text-primary transition" to="/contact-sales">Contact Us</Link></li>
            <li><Link className="hover:text-primary transition" to="/request-demo">Request a demo</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary transition" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary transition" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary transition" href="#">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">2026 Byte Bazaar CRM. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
          <Link className="hover:text-primary transition" to="/privacy-policy">Privacy Policy</Link>
          <Link className="hover:text-primary transition" to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

const Features = () => {
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

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const features = [
    {
      id: "customers-crm",
      title: "Customers & CRM",
      description: "Understand your customers and engage them better.",
      features: [
        "Centralized customer profiles",
        "Customer dashboards for activity and engagement"
      ],
      imageSrc: CustomersCRM,
      imageAlt: "Customers & CRM Interface",
      reverse: false,
      bgClass: ""
    },
    {
      id: "orders-delivery",
      title: "Orders & Delivery",
      description: "Clear visibility from order to fulfilment.",
      features: [
        "Create and manage customer orders",
        "Track delivery status in real time",
        "Reduce errors with structured workflows"
      ],
      imageSrc: OrdersDelivery,
      imageAlt: "Orders & Delivery Dashboard",
      reverse: true,
      bgClass: "bg-surface-light dark:bg-surface-dark py-24"
    },
    {
      id: "products-inventory",
      title: "Products & Inventory",
      description: "Stay in control of stock and products.",
      features: [
        "Manage products, pricing, and variants",
        "Real-time inventory tracking",
        "Low-stock alerts and inventory insights"
      ],
      imageSrc: ProductsInventory,
      imageAlt: "Products & Inventory Management",
      reverse: false,
      bgClass: ""
    },
    {
      id: "staff-task-management",
      title: "Staff & Task Management",
      description: "Keep your team aligned and productive.",
      features: [
        "Assign and track tasks in one place",
        "Monitor staff activity and performance",
        "Improve accountability across teams"
      ],
      imageSrc: StaffTaskManagement,
      imageAlt: "Staff & Task View",
      reverse: true,
      bgClass: "bg-blue-50 dark:bg-gray-900 py-24"
    },
    {
      id: "analytics-reports",
      title: "Analytics & Reports",
      description: "Make decisions backed by data.",
      features: [
        "Customer, sales and financial dashboards",
        "Real-time performance insights",
        "Downloadable business reports"
      ],
      imageSrc: AnalyticsReports,
      imageAlt: "Analytics & Reports Interface",
      reverse: false,
      bgClass: ""
    },
    {
      id: "jobcards-repairs",
      title: "JobCards & Repairs",
      description: "Simplify service jobs and repair workflows.",
      features: [
        "Create and manage job cards digitally",
        "Track job status, staff, and parts used",
        "Customer and technician sign-offs"
      ],
      imageSrc: JobCardsRepairs,
      imageAlt: "Repair Workflow Interface",
      reverse: true,
      bgClass: "bg-indigo-50 dark:bg-gray-800 py-24"
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-200">
      <Navbar onGetStarted={handleGetStarted} />
      <HeroSection />
      <div className="space-y-24 pt-20">
        {features.map((feature, index) => (
          <FeatureSection
            key={index}
            id={feature.id}
            title={feature.title}
            description={feature.description}
            features={feature.features}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            reverse={feature.reverse}
            bgClass={feature.bgClass}
          />
        ))}
      </div>
      <GetStartedSection />
      <Footer onGetStarted={handleGetStarted} />
    </div>
  );
};

export default Features;

