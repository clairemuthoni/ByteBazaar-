import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo3 from "../assets/logo3.png";
import logo1 from "../assets/logo1.png";
import { showSuccessAlert, showConfirmDialog } from '../utils/sweetAlerts';

const Navbar = ({ onGetStarted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img src={logo3} alt="ByteBazaar Logo" className="h-12 w-auto" />
            {/* <Link to="/" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              Byte<span className="text-primary">Bazaar</span>
            </Link> */}
          </div>
          <div className="hidden md:flex space-x-8 items-center">
          <Link className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition" to="/">Home</Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition" to="/features">Features</Link>
            {/* <Link className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition" to="/#why-us">Why Us</Link> */}
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition" to="/contact-sales">Contact Us</Link> 
            <a className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-semibold transition shadow-md cursor-pointer" onClick={onGetStarted}>Get Started</a>
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
                className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                to="/features"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <a 
                className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                href="/#why-us"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <Link 
                className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                to="/contact-sales"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-semibold transition shadow-md text-center cursor-pointer" 
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

const RequestDemo = () => {
  const navigate = useNavigate();

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
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Initialize Calendly widget when component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly event scheduling
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Show success alert when demo is booked
        showSuccessAlert(
          'Demo Booked! 🎉',
          'Looking forward to seeing you then!'
        ).then(() => {
          // Redirect to home page after alert
          navigate('/');
        });
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      // Cleanup: remove script and event listener when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [navigate]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <Navbar onGetStarted={handleGetStarted} />

      {/* Hero Section */}
      <header className="pt-16 pb-12 lg:pt-24 lg:pb-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            See ByteBazaar CRM in action
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Experience a live, personalized walkthrough of how ByteBazaar helps businesses manage customers, orders, products, staff, and communication in one unified system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="bg-primary hover:bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1" href="#booking">
              Book a time
            </a>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            <p>No commitment • No hard sell</p>
            <p>Just a clear look at how ByteBazaar fits your business</p>
          </div>
        </div>
      </header>

      {/* What You'll See Section */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">What You'll see in the Demo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4 p-6 rounded-2xl bg-blue-50/50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700">
              <span className="material-icons text-primary text-3xl shrink-0">hub</span>
              <p className="text-gray-700 dark:text-gray-300 font-medium">How customer data, orders, and communication stay connected in one place.</p>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-blue-50/50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700">
              <span className="material-icons text-primary text-3xl shrink-0">inventory_2</span>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Managing products, inventory, and service jobs without spreadsheets.</p>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-blue-50/50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700">
              <span className="material-icons text-primary text-3xl shrink-0">assignment_ind</span>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Tracking staff tasks, assignments, and accountability.</p>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-blue-50/50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700">
              <span className="material-icons text-primary text-3xl shrink-0">analytics</span>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Real-time reports that actually answer business questions.</p>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-blue-50/50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700">
              <span className="material-icons text-primary text-3xl shrink-0">account_tree</span>
              <p className="text-gray-700 dark:text-gray-300 font-medium">How ByteBazaar adapts to your specific workflow.</p>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-blue-50/50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700">
              <span className="material-icons text-primary text-3xl shrink-0">verified_user</span>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Security protocols and data protection for your retail data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50" id="booking">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Book your free demo</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Choose a time that works for you. The demo takes approximately 30 minutes and is tailored to your business needs.
          </p>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/muthoniclaire555/30min"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Who is this for?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/10 p-10 rounded-3xl border border-blue-100 dark:border-blue-800/50">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="material-icons">check_circle</span>
                Ideal for:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="material-icons text-primary text-xl mt-0.5">done</span>
                  E-commerce businesses managing growing order volume
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="material-icons text-primary text-xl mt-0.5">done</span>
                  Retail stores tired of fragmented systems
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="material-icons text-primary text-xl mt-0.5">done</span>
                  Repair and service businesses tracking jobs, parts, and customers
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="material-icons text-primary text-xl mt-0.5">done</span>
                  Teams that want visibility without complexity
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                <span className="material-icons">cancel</span>
                Not ideal if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <span className="material-icons text-gray-400 text-xl mt-0.5">close</span>
                  You're just browsing with no implementation plans
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <span className="material-icons text-gray-400 text-xl mt-0.5">close</span>
                  You're looking for a generic CRM with no operational depth
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <span className="material-icons text-gray-400 text-xl mt-0.5">close</span>
                  You only need simple lead tracking and nothing else
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">What happens after you book</h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start relative">
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 shadow-md">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">You book a time that works for you</h4>
                <p className="text-gray-600 dark:text-gray-400">Select a slot on our calendar and receive an instant confirmation.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start relative">
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 shadow-md">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">We review your business context before the call</h4>
                <p className="text-gray-600 dark:text-gray-400">Our specialist prepares a demo focused on your specific challenges.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start relative">
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 shadow-md">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">You get a live walkthrough via Google Meet</h4>
                <p className="text-gray-600 dark:text-gray-400">Interact directly with the system and ask any technical questions.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 shadow-md">4</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">You receive a recap and next steps after the demo</h4>
                <p className="text-gray-600 dark:text-gray-400">Get a recording of the session and a custom pricing quote.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-background-dark" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
                Is the demo free?
                <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
                  <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
                </span>
              </summary>
              <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Yes, the demo is absolutely free with no obligation to purchase. It's designed to help you understand if ByteBazaar is the right fit for your business goals.
              </div>
            </details>
            <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
                Will this be recorded?
                <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
                  <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
                </span>
              </summary>
              <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Yes, we record every demo session and send the link to you afterwards so you can share it with your team members who couldn't attend.
              </div>
            </details>
            <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
                Do I need to install anything?
                <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
                  <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
                </span>
              </summary>
              <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                No. The demo is conducted via Google Meet, which runs in your web browser. There is no software to install to see the demo.
              </div>
            </details>
            <details className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-primary/30 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900 dark:text-white">
                Can I invite my team?
                <span className="ml-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-primary group-open:bg-primary group-open:text-white transition duration-300">
                  <span className="material-icons text-sm group-open:rotate-180 transition-transform">add</span>
                </span>
              </summary>
              <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Absolutely! We encourage you to invite key stakeholders from your operations, management, and staff teams so everyone can see how it works for them.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Not Ready CTA */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Not ready for a demo yet?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Explore ByteBazaar features or see how it works in your industry.
          </p>
          <Link className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1" to="/features">
            View Features
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={logo3} alt="ByteBazaar Logo" className="h-8 w-auto" />
              {/* <span className="font-bold text-xl text-gray-900 dark:text-white">Byte<span className="text-primary">Bazaar</span></span> */}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <p className="flex items-center"><span className="material-icons text-base mr-2">phone</span> +254 738 476 283</p>
                <p className="flex items-center"><span className="material-icons text-base mr-2">email</span> support@bytebazaar.com</p>
                <p className="mt-4 text-xs italic opacity-75">"Support available for onboarding and setup"</p>
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
                <li><a className="hover:text-primary transition" href="/#pricing">Pricing</a></li>
                <li><a className="hover:text-primary transition" href="/#faq">FAQs</a></li>
                <li><a className="hover:text-primary transition cursor-pointer" onClick={handleGetStarted}>Get Started</a></li>
                <li><Link className="hover:text-primary transition" to="/contact-sales">Contact Us</Link></li>
                <li><Link className="hover:text-primary transition" to="/request-demo">Request a demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary transition" href="#"><span className="material-icons text-sm">public</span></a>
                <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary transition" href="#"><span className="material-icons text-sm">share</span></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Byte Bazaar CRM. All rights reserved.</p>
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

export default RequestDemo;

