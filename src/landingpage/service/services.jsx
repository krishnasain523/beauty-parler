// Services.jsx
import React from 'react';
import {  FaCut, FaMagic, FaLeaf, FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    category: 'Makeup',
    icon: <FaMagic size={30} className="text-pink-300" />,
    image: '/images/gallery/img13.jpg',
    items: [
      'Bridal Makeup',
      'Party Makeup',
      'Engagement / Reception Looks',
      'Festive & Everyday Glam',
    ],
  },
  {
    category: 'Hair Services',
    icon: <FaCut size={30} className="text-pink-300" />,
    image: '/images/gallery/img1.jpg',
    items: [
      'Hair Rebonding',
      'Hair Straightening',
      'Hair Colouring & Highlights',
      'Haircut (All Styles)',
      'Hair Spa',
    ],
  },
  {
    category: 'Skin Care',
    icon: <FaLeaf size={30} className="text-pink-300" />,
    image: '/images/gallery/img12.jpg',
    items: [
      'Facial (Glow, Gold, Fruit, Herbal)',
      'Bleaching',
      'Waxing (Full body / arms / legs)',
      'Threading & Basic Clean-ups',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white py-16 px-6 md:px-20" id="services">
      <h2 className="text-3xl font-bold font-serif text-center text-black mb-12" data-aos="fade-up">💇‍♀️ Our Beauty Services</h2>
      
      <div className="grid gap-25 md:gap-10 md:grid-cols-3" data-aos="fade-up">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black shadow-xl rounded-2xl overflow-hidden hover:shadow-black transition duration-700" 
          >
            <img
              src={service.image}
              alt={service.category}
              className="w-full h-[350px]  object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-white">
                {service.icon}
                {service.category}
              </div>
              <ul className="space-y-2 text-white text-sm">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink-400 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-pink-50 border-l-4 border-pink-500 p-4 rounded-xl shadow-sm">
        <p className="text-gray-700 text-center font-medium">
          Customized packages available based on occasion and skin/hair type.
        </p>
      </div>
    </div>
  );
}
