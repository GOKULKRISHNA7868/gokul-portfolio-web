import React from 'react';
import { FaGraduationCap, FaCode, FaProjectDiagram, FaCertificate } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function About() {
  return (
     <div className="max-w-6xl mx-auto px-6 py-24 pt-28 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            TUPAKULA GOKUL KRISHNA
          </h2>
          <div className="text-gray-700 dark:text-gray-300 text-xl font-bold border-l-4 border-blue-600 pl-4">
  <Typewriter
    options={{
      strings: [
        'Co-Founder of FutureForgex Pvt. Ltd.',
        'A visionary leader and passionate developer.',
        'Building impactful solutions in AI, ML, IoT, and Web Technologies.'
      ],
      autoStart: true,
      loop: true,
      delay: 40,
      deleteSpeed: 20
    }}
  />
</div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/profile.jpg"
            alt="Tupakula Gokul Krishna"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
      </motion.div>

      {/* Qualification */}
     {/* <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-4">
          <FaGraduationCap className="mr-2" /> Qualification
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 dark:border-gray-600 text-left">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                <th className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">Education</th>
                <th className="px-4 py-2">Institute</th>
                <th className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">Score</th>
                <th className="px-4 py-2">Academic Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">B.Tech in CSE</td>
                <td className="px-4 py-2">MITS</td>
                <td className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">9.4 CGPA</td>
                <td className="px-4 py-2">2022-2026</td>
              </tr>
              <tr className="hover:bg-blue-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">Intermediate</td>
                <td className="px-4 py-2">SUGM Jr College, B. Kothakota</td>
                <td className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">86%</td>
                <td className="px-4 py-2">2020-2022</td>
              </tr>
              <tr className="hover:bg-blue-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">Matriculation</td>
                <td className="px-4 py-2">Chaitanya Children's Academy</td>
                <td className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">78%</td>
                <td className="px-4 py-2">2019-2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>*/}

      {/* Tech Stack */}
      {/*<motion.div
        className="mb-10"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <FaCode className="mr-2" /> Technical Skills
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
          <li>Python</li>
          <li>Java (Basics)</li>
          <li>React.js</li>
          <li>Firebase</li>
          <li>HTML / CSS / JS</li>
          <li>MySQL</li>
          <li>Linux & Windows</li>
        </ul>
      </motion.div>*/}

      {/* Certifications */}
      {/*<motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <FaCertificate className="mr-2" /> Certifications
        </div>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>AWS Cloud Practitioner Essentials</li>
          <li>Python Programming – HackerRank (3 Star)</li>
          <li>German Language Certified (56%)</li>
        </ul>
      </motion.div>*/}

      {/* Projects & Internship */}
      {/*<motion.div
        className="mb-10"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <FaProjectDiagram className="mr-2" /> Projects & Internship
        </div>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Chatbot “Tara” for department fest (Team Lead)</li>
          <li>Attendance Calculator (Individual project)</li>
          <li>Employee Management System (Internship – 45 Days)</li>
          <li>No Due Management Website</li>
          <li>Advanced Energy Management System</li>
        </ul>
      </motion.div>*/}

      {/* Soft Skills & Interests */}
      {/*<motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center text-xl font-semibold text-blue-600 mb-2">
          <GiSkills className="mr-2" /> Soft Skills & Interests
        </div>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Team Leadership, Coordination, Independent Thinking</li>
          <li>Passion for IoT, Cloud, Web Dev & Real-World Problem Solving</li>
          <li>Watching News, Tech Exploration, Competitive Programming</li>
        </ul>
      </motion.div> */}
    </div>
  );
}
