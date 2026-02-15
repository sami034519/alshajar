import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    name: "Ahmed Al-Mansoori",
    city: "Dubai",
    rating: 5,
    review: "Excellent quality spare parts and fast delivery. Highly recommended!",
  },
  {
    name: "Khalid Khan",
    city: "Sharjah",
    rating: 4,
    review: "Good prices and original parts. Customer support is helpful.",
  },
  {
    name: "Fatima Al Zahra",
    city: "Abu Dhabi",
    rating: 5,
    review: "Professional service and genuine products. Very satisfied!",
  },
];

export default function CustomerReviews() {
  const sliderRef = useRef(null);

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  // Auto Slider
  useEffect(() => {
    let scrollAmount = 0;
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      scrollAmount += 340;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-100 overflow-hidden py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          ⭐ Customer Reviews
        </h2>

        <p className="text-gray-500 mt-2" data-aos="fade-up" data-aos-delay="200">
          Trusted by car owners across the UAE
        </p>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 mt-10 pb-4 overflow-x-hidden"
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 150}
              className="min-w-[320px] bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < item.rating ? "text-green-700" : "text-gray-300"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm italic">“{item.review}”</p>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <span className="text-xs text-gray-500">{item.city}, UAE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
