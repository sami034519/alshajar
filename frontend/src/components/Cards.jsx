import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import spareparts from '../images/spare parts.webp';
import battery from '../images/Battery.jpg'
import Oil from '../images/oil.jpeg'
import fluid from '../images/fluid.jpg'
import bikebattery from '../images/bikebattery.webp'

import mobile from '../images/responsive.png'
import accessories from '../images/accessories.webp'
const productCards = [
  {
    title: "SPARE PARTS",
    subtitle: "For Any Vehicle",
    image: spareparts,
  },
  {
    title: "BATTERY",
    subtitle: "For Any Vehicle",
    image: battery,
  },
  {
    title: "OIL & LUBRICANTS",
    subtitle: "For Any Vehicle",
    image: Oil,
  },
  {
    title: "FLUIDS",
    subtitle: "For Any Vehicle",
    image: fluid,
  },
  {
    title: "BIKE & BOAT BATTERY",
    subtitle: "For Any Vehicle",
    image:bikebattery,
  },
  
  {
    title: "ACCESSORIES",
    subtitle: "For Any Vehicle",
    image: accessories,
  },

  
  // Add more cards as needed
];

export default function ProductCards() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: false,    // Animate only once when scrolling
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
    <div className="max-w-7xl mx-auto mt-5 px-4 pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productCards.map((card, index) => (
        <div
          key={index}
          className="relative rounded-lg cursor-pointer overflow-hidden shadow-lg group"
          data-aos="flip-left"             // AOS animation
          data-aos-delay={index * 100}   // Stagger cards
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay always visible */}
          <div className="
            absolute inset-0
            bg-black bg-opacity-60
            flex flex-col justify-center items-start p-6
          ">
            {/* Inner sliding layer for hover effect */}
            <div className="
              absolute inset-0
              bg-green-700 bg-opacity-70
              transform -translate-x-full
              group-hover:translate-x-0
              transition-transform duration-500
              z-0
            "></div>

            {/* Text content */}
            <div className="relative z-10">
              <p className="text-white text-sm mb-2">{card.subtitle}</p>
              <h2 className="text-white text-2xl font-bold mb-4">{card.title}</h2>
              <button className="bg-white slide-hover text-gray-600 hover:text-white px-6 py-2 rounded-full transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <section className="w-full relative min-h-[420px] mt-5 lg:mt-0 flex items-center overflow-hidden">
      {/* LEFT SIDE (Text Area) */}
      <div className="w-full bg-gradient-to-r from-green-950 to-green-500 text-white px-16 py-16 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold lg:mt-auto mt-24 leading-tight mb-6"  data-aos="fade-down-right">
          No.1 Automotive Parts Online Store
        </h1>

        <p className="text-base md:text-lg leading-relaxed max-w-xl" data-aos="fade-down-left">
          In UAE with a catalogue of over 1 Million auto spare parts.
          Visit our store at your convenience from any of your devices.
        </p>
      </div>

      {/* RIGHT SIDE (Image Area) */}
      <div className="w-1/2 lg:h-full  flex items-center   justify-center absolute lg:top-auto top-20 left-20 lg:left-auto  lg:right-0">
        {/* Replace this with your image */}
        <img
          src={mobile}
          alt="Devices Preview"
          className="max-h-[300px] object-contain absolute"
          data-aos="flip-right"
          
        />
      </div>
    </section>
    </>
  );
}
