import React, { useState } from 'react';
import { Menu, X, Droplets, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToIntroduction = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { title: 'Ergonomic Grip', description: 'Stair-step structure improves grip' },
    { title: 'Durable Build', description: 'BPA-free, eco-friendly Steel' },
    { title: 'Leak-proof Design', description: 'Safe carrying in bags' },
    { title: 'Modular Compartments', description: 'Separate sections for different liquids' },
    { title: 'Temperature Resistant', description: 'Keeps liquids at desired temperature' },
    { title: 'Portable & Lightweight', description: 'Perfect for active users' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Droplets className="h-8 w-8 text-blue-600" />
              </motion.div>
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="ml-2 text-xl font-bold text-gray-900"
              >
                Stair Bottle
              </motion.span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#introduction" className="text-gray-700 hover:text-blue-600">Introduction</a>
                <a href="#design" className="text-gray-700 hover:text-blue-600">Design</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <div className="pt-20 pb-3 space-y-1 px-4">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Home</a>
            <a href="#introduction" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Introduction</a>
            <a href="#design" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Design</a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Features</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                Stair Water Bottle
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-blue-600"
              >
                Dual Temperature, One Smart Sip
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Revolutionary hydration solution with smart design.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10"
          >
            <div className="rounded-lg overflow-hidden shadow-w-[80%] transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/bottle.png"
                alt="Smart Water Bottle"
                className="w-full h-[100%] w-[80%] mx-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>
          
          {/* Scroll Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToIntroduction}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <span className="text-sm font-medium mb-2 flex content-center absolute bottom-8 left-1/2 transform -translate-x-1/2">Discover More</span>
              <ChevronDown className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Introduction</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              The Stair Water Bottle is an innovative hydration solution designed to promote consistent water intake through a smart design. Inspired by modern lifestyles and wellness trends, this project focuses on user-centric ergonomics, ease of use, and health-oriented functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Section */}
      <section id="design" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Design & Ergonomics</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/Design & Ergonomics.png"
                  alt="Bottle Design"
                  className="rounded-lg shadow-lg h-[378px] w-full object-contain mx-auto"
                />
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                    <span>Easy grip and hold, reducing accidental drops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                    <span>Balanced water distribution and portion-controlled drinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                    <span>Aesthetic appeal that stands out from traditional cylindrical bottles</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Contact Us</h2>
            <div className="max-w-lg mx-auto">
              {isSubmitted ? (
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <p className="text-green-600 font-medium">Thanks for reaching out! We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">We're a team of innovators reimagining hydration through smart design and sustainable thinking.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>kaifsk488@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 7416914165</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                <li><a href="#introduction" className="hover:text-blue-400">Introduction</a></li>
                <li><a href="#design" className="hover:text-blue-400">Design</a></li>
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/SKMDKAIF0409" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" /></svg></a>
                <a href="https://www.linkedin.com/in/shaik-mahammad-kaif/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Linkedin className="h-6 w-6" /></a>
                <a href="mailto:kaifsk488@gmail.com" className="hover:text-blue-400"><Mail className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 Stair Water Bottle | All Rights Reserved.</p>
            <p className="text-gray-400 mt-2">Designed with ❤️ for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
