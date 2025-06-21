import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaFire,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaJava,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiC } from 'react-icons/si';

const techSkills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Firebase', icon: <FaFire className="text-orange-500" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
  { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-600" />, altIcon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'MySQL', icon: <FaDatabase className="text-blue-900" /> },
  { name: 'C Language', icon: <SiC className="text-blue-800" /> },
  { name: 'Java (Basics)', icon: <FaJava className="text-red-700" /> },
];

const softSkills = [
  { name: 'Team Leadership', icon: <FaUsers className="text-violet-500" /> },
  { name: 'Communication', icon: <FaComments className="text-pink-500" /> },
  { name: 'Problem Solving', icon: <FaLightbulb className="text-yellow-400" /> },
];

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        I'm a passionate developer with a blend of technical expertise and interpersonal skills.
        From frontend design with React and Tailwind to backend logic using Python, Firebase and databases,
        I enjoy building full-stack solutions. I also take pride in leadership and team collaboration.
      </motion.p>

      {/* Technical Skills */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4 text-center">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-600 p-4 rounded-xl shadow hover:shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl">{skill.icon} {skill.altIcon}</div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4 text-center">Leadership & Interpersonal Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {softSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center gap-2 bg-violet-50 dark:bg-violet-900 text-violet-800 dark:text-violet-200 border border-violet-200 dark:border-violet-600 p-4 rounded-xl shadow hover:shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl">{skill.icon}</div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}