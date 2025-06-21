import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/GOKULKRISHNA7868"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/gokul-krishna-tupakula-0b7641288"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gokultupakula@gmail.com"
            className="hover:text-gray-300 transition-transform transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/gokul_krishna.t?igsh=dzNqaHNlYjExYjk4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-transform transform hover:scale-125"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} Tupakula Gokul Krishna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
