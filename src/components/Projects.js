import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Online Result Portal',
    desc: 'A dynamic web application for publishing and searching student results. CSV uploads integrated with Firebase for fast access and security.',
  },
  {
    title: 'Chatbot for Fest (Tara)',
    desc: 'Developed "Tara", a smart Python-based chatbot that provided real-time event info and user engagement during our college fest.',
  },
  {
    title: 'Farmer Website',
    desc: 'A dedicated platform designed to help farmers access real-time crop suggestions, weather updates, and market rates.',
  },
  {
    title: 'Attendance Calculator',
    desc: 'An automation tool that reduced attendance tracking time from 4 minutes to 30 seconds using Python.',
  },
  {
    title: 'No Due Management Website',
    desc: 'Built a platform for students and faculty to manage fee dues and clearances efficiently with Firebase backend.',
  },
  {
    title: 'Advanced Energy Management System',
    desc: 'Worked on an energy optimization system focused on real-time monitoring and management of consumption data.',
  },
  {
    title: 'Employee Management System',
    desc: 'Built a complete web-based platform for managing employee profiles, leave, chat, and performance tracking using Flask, MySQL, and JavaScript.',
  },
  {
    title: 'Library Management System',
    desc: 'Developed a Flask and MySQL-powered system to manage book records, user borrowing, and return dates with a user-friendly JavaScript frontend.',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.h2
        className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        I've worked on real-world applications across domains like education, agriculture, employee systems, and automation. Here are some of the highlighted projects built using Python, React, Flask, Firebase, and MySQL.
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{proj.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}