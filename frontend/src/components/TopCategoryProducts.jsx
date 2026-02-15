import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../images/productlogo.png"; // adjust path
import oilproducts from "../products/OilProducts";

export default function TopCategoryProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const cardWidth = 320; // Adjust to your card width + gap
  const visibleCards = 3; // Number of visible cards at once

  const maxIndex = oilproducts.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">
            <span className="text-green-700">Top</span> Category Products
          </h2>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className=" slide-hover border border-green-700 text-green-700 w-10 h-10 rounded-full disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className=" slide-hover border border-green-700 text-green-700 w-10 h-10 rounded-full disabled:opacity-50"
              disabled={currentIndex === maxIndex}
            >
              ❯
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {oilproducts.map((item, index) => (
              <div
                key={index}
                className="min-w-[100px] max-w-[200px] flex-shrink-0 bg-white rounded-xl shadow p-5 text-center mx-2"
                data-aos="flip-right"
              >
                {/* Image Wrapper */}
                <div className="relative ">
                  {/* Same Logo for All */}
                  <img
                    src={logo}
                    alt="logo"
                    className="absolute border border-green-700 z-30 top-2 left-2 h-10 w-10 bg-white object-contain rounded-full p-1 shadow-md"
                  />

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt=""
                    className="h-40 cursor-pointer mx-auto object-contain transform z-10 transition-transform duration-500 ease-in-out hover:scale-125"

                  />
                </div>

                <h3 className="mt-3 font-bold text-sm h-16">{item.title}</h3>

                <button className="slide-hover mt-3 border border-green-700 text-green-700 font-medium px-6 py-1 rounded-full">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}
