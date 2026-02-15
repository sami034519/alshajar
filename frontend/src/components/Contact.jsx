import React, { useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            data-aos="fade-up"
          >
            📞 Contact Us
          </h2>
          <p
            className="text-gray-500 mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get in touch for original and aftermarket car spare parts in UAE
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info Box */}
          <div
            className="bg-gray-700 p-8 rounded-2xl shadow-lg space-y-6"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4">
              <Phone className="text-white w-8 h-8" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-white">+971 50 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-white w-8 h-8" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-white">info@yourautoparts.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-white w-8 h-8" />
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-white">Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-gray-700 p-8 rounded-2xl shadow-lg"
            data-aos="fade-left"
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
              ></textarea>

              <button
                type="submit"
                className="bg-white border border-green-700 slide-hover text-green-700 px-6 py-2 rounded-lg font-semibold transition"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
