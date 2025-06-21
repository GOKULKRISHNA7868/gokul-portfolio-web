import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-700 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have a question, opportunity, or just want to connect? I'm always open to discussing new projects or ideas.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left text-gray-800 dark:text-gray-100">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <span>+91 94941 87868</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <span>gokultupakula@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <span>Andhra Pradesh, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
