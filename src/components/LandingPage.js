import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-center px-4">
      <motion.div
        className="animate-fadeIn flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transition-transform hover:scale-105">
          <img
            src="/profile.jpg"
            alt="Tupakula Gokul Krishna"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800">
          Hi, I'm <span className="text-blue-900">Tupakula Gokul Krishna</span> 👋
        </h1>

        <div className="text-lg md:text-xl text-gray-700 max-w-2xl">
          <Typewriter
            options={{
              strings: [
                "Software Developer | Web App Enthusiast",
                "Co-Founder of FutureForgex Pvt. Ltd.",
                "Exploring AI, ML, Cloud, and IoT Solutions"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="text-gray-600 max-w-xl text-base md:text-lg mt-2">
          I’m a passionate developer from Andhra Pradesh who loves building web apps,
          solving real-world problems, and exploring new technologies like AI, ML, Firebase, IoT,
          and cloud platforms.
        </p>

        <motion.div
          className="mt-6 max-w-3xl text-gray-700 text-base md:text-lg px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>
            <strong>Tupakula Gokul Krishna</strong> is a highly active and forward-thinking leader, known for his dynamic approach to technology and innovation. As the Co‑Founder of <strong>FutureForgex Pvt. Ltd.</strong>, he continuously drives impactful projects and inspires others through his technical expertise and vision.
          </p>
          <p className="mt-4">
            Gokul thrives in collaborative environments, excels in problem-solving, and demonstrates a commitment to continuous learning and leadership in the tech space, especially in cutting-edge fields like Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}