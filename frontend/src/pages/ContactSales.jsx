import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const ContactSales = () => {
  const [state, handleSubmit] = useForm("mzddbdko");
  const [optIn, setOptIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="material-icons text-primary text-3xl">shopping_cart</span>
              <Link to="/" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                Byte<span className="text-primary">Bazaar</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition" to="/features">Features</Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition" to="/#why-us">Why Us</Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition" to="/contact-sales">Contact</Link>
              <Link className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-semibold transition shadow-md" to="/">Get Started</Link>
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
                <Link 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                  to="/#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why Us
                </Link>
                <Link 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
                  to="/contact-sales"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-semibold transition shadow-md text-center" 
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="wave-bg pt-20 pb-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                See if ByteBazaar <br className="hidden md:block" /> is right for you
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Talk to Sales to learn how ByteBazaar can help you reach your business goals.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white dark:bg-surface-dark rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 relative z-20">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Thank you for contacting us!
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    We've received your information and our sales team will get back to you within 24 hours.
                  </p>
                  <Link
                    to="/"
                    className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter first name"
                        required
                        type="text"
                      />
                      <ValidationError
                        prefix="First Name"
                        field="firstName"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter last name"
                        required
                        type="text"
                      />
                      <ValidationError
                        prefix="Last Name"
                        field="lastName"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Job Title */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="jobTitle">
                        Job Title
                      </label>
                      <input
                        className="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="e.g. Manager"
                        required
                        type="text"
                      />
                      <ValidationError
                        prefix="Job Title"
                        field="jobTitle"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="company">
                        Company
                      </label>
                      <input
                        className="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                        id="company"
                        name="company"
                        placeholder="Enter company name"
                        required
                        type="text"
                      />
                      <ValidationError
                        prefix="Company"
                        field="company"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Company Size */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="companySize">
                        Company Size
                      </label>
                      <select
                        className="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                        id="companySize"
                        name="companySize"
                        required
                        defaultValue=""
                      >
                        <option disabled value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201+">201+ employees</option>
                      </select>
                      <ValidationError
                        prefix="Company Size"
                        field="companySize"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                        id="email"
                        name="email"
                        placeholder="work@company.com"
                        required
                        type="email"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        required
                        type="tel"
                      />
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-6 pt-4">
                    {/* Opt-in Checkbox */}
                    <div className="flex items-start gap-3">
                      <div className="flex items-center h-5">
                        <input
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                          id="optIn"
                          name="optIn"
                          type="checkbox"
                          checked={optIn}
                          onChange={(e) => setOptIn(e.target.checked)}
                        />
                      </div>
                      <label className="text-sm text-gray-600 dark:text-gray-400 leading-normal cursor-pointer" htmlFor="optIn">
                        Yes, I would like to receive marketing communications regarding ByteBazaar products, services, and events. I can unsubscribe at any time.
                      </label>
                    </div>

                    {/* Privacy Statement */}
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                      We value your privacy. To learn more, visit our <a className="text-primary hover:underline font-medium" href="#">Privacy Statement</a>.
                    </p>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                      <button
                        className="bg-primary hover:bg-secondary text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 w-full md:w-auto min-w-[240px] text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        type="submit"
                        disabled={state.submitting}
                      >
                        {state.submitting ? 'Sending...' : 'Contact Us'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark pt-12 pb-8 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <a className="hover:text-primary transition" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition" href="#">Terms of Service</a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">© 2026 Byte Bazaar CRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSales;

