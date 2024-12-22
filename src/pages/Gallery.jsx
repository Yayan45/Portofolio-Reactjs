import React, { useState } from "react";
import Footer from "../components/Footer";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/public/img/gallery/1.jpg" },
    { src: "/public/img/gallery/2.jpeg" },
    { src: "/public/img/gallery/4.jpg" },
    { src: "/public/img/gallery/5.jpg" },
    { src: "/public/img/gallery/6.jpg" },
    { src: "/public/img/gallery/3.jpg" },
  ];

  // Handle image click to open the modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="dark:bg-dark">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-[#FF9D1A] mb-12">
          Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-semibold">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative bg-white p-4 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-3 top-1 text-white bg-[#FF9D1A] rounded-full w-12 h-12 flex items-center justify-center text-2xl"
                onClick={closeModal}
              >
                X
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
        <a
          href="/"
          className="px-8 py-3 bg-[#FF9D1A] text-white rounded-lg text-sm font-semibold shadow-lg hover:bg-[#FF7F0D] focus:outline-none focus:ring-4 focus:ring-[#FF9D1A] focus:ring-opacity-50 transition duration-300 mt-6 inline-block"
        >
          Back to Home
        </a>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Gallery;
