import React from 'react';
import { FaGraduationCap, FaCode, FaProjectDiagram, FaCertificate } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-white text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Qualification */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <FaGraduationCap className="mr-2" />
          Qualification
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>B.Tech in CSE - Madanapalle Institute of Technology & Science, 9.4 CGPA (2022-2026)</li>
          <li>Intermediate - SUGM Junior College, B. Kothakota – 86%</li>
          <li>Matriculation - Chaitanya Children's Academy – 78%</li>
        </ul>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <FaCode className="mr-2" />
          Technical Skills
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
          <li>Python</li>
          <li>Java (Basics)</li>
          <li>React.js</li>
          <li>Firebase</li>
          <li>HTML / CSS / JS</li>
          <li>MySQL</li>
          <li>Linux & Windows</li>
        </ul>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <FaCertificate className="mr-2" />
          Certifications
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>AWS Cloud Practitioner Essentials</li>
          <li>Python Programming – HackerRank (3 Star)</li>
          <li>German Language Certified (56%)</li>
        </ul>
      </motion.div>

      {/* Projects & Internship */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <FaProjectDiagram className="mr-2" />
          Projects & Internship
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Chatbot “Tara” for department fest (Team Lead)</li>
          <li>Attendance Calculator (Individual project)</li>
          <li>Employee Management System (Internship – 45 Days)</li>
          <li>No Due Management Website</li>
          <li>Advanced Energy Management System</li>
        </ul>
      </motion.div>

      {/* Soft Skills & Interests */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <GiSkills className="mr-2" />
          Soft Skills & Interests
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Team Leadership, Coordination, Independent Thinking</li>
          <li>Passion for IoT, Cloud, Web Dev & Real-World Problem Solving</li>
          <li>Watching News, Tech Exploration, Competitive Programming</li>
        </ul>
      </motion.div>
    </div>
  );
}
