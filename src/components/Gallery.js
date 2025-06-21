import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes, FaDownload } from 'react-icons/fa';

const gallerySections = [
  {
    title: 'My Journey',
    description: 'Snapshots from my travel and personal growth — beyond the screen and into the world.',
    images: ['/seminar1.jpg', '/seminar2.jpg', '/project1.jpg', '/j1.jpg', '/j2.jpg', '/j3.jpg'],
  },
  //{
    //title: 'Friends & Memories',
    //description: 'Cherished memories with friends through college events, outings, and shared milestones.',
    //images: ['/friends1.jpg', '/friends2.jpg'],
  //},
  {
    title: 'Campus Life & Events',
    description: 'Highlights from hackathons, college fests, project expos, and tech activities.',
    images: ['/cr1.jpg', '/cr2.jpg'],
  },
];

// Required by react-modal
Modal.setAppElement('#root');

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
   <div className="max-w-6xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">Gallery</h2>

      {gallerySections.map((section, index) => (
        <div key={index} className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{section.title}</h3>
          <p className="text-gray-600 mb-4">{section.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.images.map((src, i) => (
              <div
                key={i}
                onClick={() => openModal(src)}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              >
                <img
                  src={src}
                  alt={`${section.title} ${i}`}
                  className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:brightness-105"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal Viewer */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Viewer"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-xl bg-red-600 hover:bg-red-700 p-2 rounded-full"
            title="Close"
          >
            <FaTimes />
          </button>

          {/* Download Button */}
          <a
            href={selectedImage}
            download
            className="absolute top-2 left-2 text-white text-xl bg-green-600 hover:bg-green-700 p-2 rounded-full"
            title="Download"
          >
            <FaDownload />
          </a>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      </Modal>
    </div>
  );
}
