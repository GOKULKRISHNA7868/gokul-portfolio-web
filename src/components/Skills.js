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
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800 bg-white">
      <motion.h2
        className="text-4xl font-bold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12"
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
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-4">
          {techSkills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform"
            >
              {skill.icon}
              {skill.altIcon && skill.altIcon}
              <span>{skill.name}</span>
            </div>
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
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Leadership & Interpersonal Skills</h3>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-violet-100 text-violet-800 px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
