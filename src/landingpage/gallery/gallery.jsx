import React, { useState } from 'react';

const galleryImages = [
  '/images/gallery/img4.jpg',
  '/images/gallery/img8.jpg',
  '/images/gallery/img13.jpg',
  '/images/gallery/img14.jpg',
  '/images/gallery/img15.jpg',
  '/images/gallery/img16.jpg',
  '/images/gallery/img17.jpg',
  '/images/gallery/img9.jpg',
  '/images/gallery/img1.jpg',
  '/images/gallery/img5.jpg',
  '/images/gallery/img3.jpg',
  '/images/gallery/img7.jpg',
  '/images/gallery/img-11.jpg',
  '/images/gallery/img6.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="gallery" className="bg-white py-20 px-6 md:px-20 " >
      <h2 className="text-3xl font-bold text-center font-serif text-black mb-12">
        📸 Our Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 fade-right">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            onClick={() => openModal(src)}
            className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-100 object-cover" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300"
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-4xl font-bold focus:outline-none"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Full"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl transition-transform duration-300"
          />
        </div>
      )}
    </section>
  );
}
