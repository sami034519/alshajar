import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import tyota from '../../images/toyota (1).jpg'
import mitsubishi from '../../images/mitsubishi.jpg'
import nissan from '../../images/nissan.jpg'
import lexus from '../../images/lexus (1).jpg'
import honda from '../../images/honda.jpg'
import acdelco from '../../images/acdelco.jpg'
import xpro from '../../images/xpro.jpg'
import stp from '../../images/stp.jpg'

import heroImg from '../../images/About_bg.png';
import dealerImg from '../../images/car-parts-on-a-white-001.jpg';


export default function AboutUs() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const brands = [tyota, mitsubishi, nissan, lexus, honda, acdelco, xpro, stp];

  const features = [
    "Customer Focus",
    "Quality Assurance",
    "Transparency And Trust",
    "Commitment To Community"
  ];

  return (
    <div className="about-us-page font-sans text-gray-800">

      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
        <h1 
          className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white"
          data-aos="zoom-in"
        >
          About Us
        </h1>
      </section>

      {/* Leading Dealer Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right">
          <p className="text-green-700 font-medium mb-2">About Alshajar Auto Parts</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The UAE’s Leading Auto Parts Dealer
          </h2>
          <p className="mb-6">
            Best Auto Parts has been carrying on its legacy for over 35 years in its coveted position
            within the UAE’s automotive parts industry.
          </p>

          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2" data-aos="fade-up">
                <span className="w-3 h-3 rounded-full bg-green-700 animate-pulse"></span>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative" data-aos="fade-left">
          <img src={dealerImg} alt="Dealer" className="w-full rounded-lg" />
          <div className="absolute bottom-4 left-4 bg-yellow-400 p-4 rounded-md text-black font-bold text-lg">
            35+ Years of Trust
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4" data-aos="fade-up">
          <p className="text-green-700 font-medium">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Journey and Legacy</h2>
          <p>
            We started our journey with a vision to be the one-stop destination for genuine and aftermarket auto parts.
          </p>
          <p>
            We supply customers with the finest products under leading brands such as Toyota, Nissan, Hyundai, and more.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-green-700 font-medium mb-2">Most Valuable Brands Are Available</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          We are authorized dealers of many well-known brands.
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {brands.map((url, idx) => (
            <img 
              key={idx}
              src={url}
              alt={`Brand ${idx}`}
              className="h-20 object-contain"
              data-aos="zoom-in"
            />
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-gray-50 py-16 px-4 space-y-8 max-w-4xl mx-auto text-center">
        <div data-aos="fade-up">
          <p className="text-green-700 font-medium mb-2">Commitment</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Commitment to Innovation</h2>
          <p>
            We use digital solutions and ERP systems to manage inventory and provide fast service.
          </p>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking Ahead</h2>
          <p>
            We aim to expand product offerings and deliver excellence in quality and service.
          </p>
        </div>
      </section>

    </div>
  );
}
