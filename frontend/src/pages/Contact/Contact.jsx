// ContactPage.js
import React, { useEffect } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactPage() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // ✅ animation will repeat every scroll
  });
}, []);

  return (
    <section className="w-full">

      {/* Hero Section with Google Map */}
      <div className="w-full h-[60vh] relative">
        <iframe
          title="Al Shajar Auto Parts Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.485580394804!2d54.511679215003694!3d24.373877284383452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e412810070339%3A0xe7d1035dc42c05bf!2sAl%20Shajar%20Auto%20Parts!5e0!3m2!1sen!2sae!4v1705123456789!5m2!1sen!2sae"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">

        {/* Left Side: Contact Info */}
        <div data-aos="fade-right" className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Reach out for inquiries, assistance, or to find the right auto parts for your vehicle.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-green-700 mt-1" />
              <span>Mussafah M7, Plot No. 70, near LLH hospital, Abu Dhabi, P.O. Box 9798</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-700" />
              <span>050 4970097 / 056 9984165</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-green-700" />
              <span>info@bestautoparts.ae</span>
            </div>
          </div>

          {/* Red "Need Help?" Section */}
          <div className="bg-green-700 text-white rounded-lg p-6 mt-6 space-y-4 shadow-lg">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Need help?</h3>
            </div>
            <p>Call our product expert <span className="font-bold">+971 50 4970097</span></p>
            <button className="bg-white slide-hover text-green-700 py-2 px-4 rounded  transition flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Chat With Us
            </button>
            <p className="text-sm">Mondays – Sundays | 8:00 AM – 9:30 PM</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div data-aos="fade-left" className="bg-white shadow-md rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="text"
              placeholder="Chassis Number"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="text"
              placeholder="Parts Required"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <textarea
              placeholder="Message *"
              className="w-full border p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-green-700 md:col-span-2"
              required
            ></textarea>
            <button
              type="submit"
              className=" text-green-700 border border-green-700 slide-hover py-3 px-6 rounded  transition md:col-span-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
