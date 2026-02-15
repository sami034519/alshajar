import React from "react";

import logo from '../images/alshajarlogo.png'
import { Facebook, Instagram, Linkedin, Youtube,MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 md:grid-cols-2 gap-10">

        {/* LEFT LOGO + ABOUT */}
        <div>
          <div className="flex items-center mb-4">
           
             <img src={logo} className="" alt="" />
           
          </div>

          <p className="text-sm leading-relaxed">
            At Best Auto Parts, we’re a trusted name in the UAE auto parts industry,
            known for over 35 years of providing high-quality genuine and aftermarket parts.
          </p>

          {/* Feedback */}
          <div className="mt-6 flex items-start gap-3">
            <MessageCircle className="text-yellow-400" />
            <div>
              <h4 className="text-yellow-400 font-semibold">Feedback</h4>
              <p className="text-xs">Your comments help us improve our website</p>
              <button className="text-white mt-2 underline text-sm">Send Us Your Feedback →</button>
            </div>
          </div>
        </div>

        {/* CONTACT INFO TOP */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">WHATSAPP US</h3>
          <p>+971 56 998 4165</p>

          <h3 className="text-white font-semibold">CALL US</h3>
          <p>+971 50 4970097</p>

          <h3 className="text-white font-semibold">MAIL US</h3>
          <p>info@bestautoparts.ae</p>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="text-white font-semibold mb-3">POLICIES</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Terms Of Use</li>
            <li>Return & Refund Policy</li>
            <li>Payment Terms</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-white font-semibold mb-3">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Chairman Message</li>
            <li>Milestones</li>
            <li>Awards & Events</li>
            <li>Vision & Mission</li>
          </ul>
        </div>

        {/* SHOP & ENQUIRE */}
        <div>
          <h3 className="text-white font-semibold mb-3">SHOP NOW</h3>
          <ul className="space-y-2 text-sm">
            <li>Oil & Lubricants</li>
            <li>Transmission Fluid</li>
            <li>Care & Maintenance</li>
            <li>Automotive Batteries</li>
          </ul>

          <h3 className="text-white font-semibold mt-6 mb-3">ENQUIRE NOW</h3>
          <ul className="space-y-2 text-sm">
            <li>Genuine Auto Parts</li>
            <li>After Market Parts</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2024 Best Auto Parts. All rights reserved.</p>

        {/* Social Icons */}
       <div className="flex gap-3 mt-4 md:mt-0">
  
  <a href="#" className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white slide-hover hover:scale-110 transition">
    <Facebook size={20} />
  </a>

  <a href="#" className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white slide-hover  hover:scale-110 transition">
    <Instagram size={20} />
  </a>

  <a href="#" className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white slide-hover hover:scale-110 transition">
    <Linkedin size={20} />
  </a>

  <a href="#" className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white slide-hover hover:scale-110 transition">
    <Youtube size={20} />
  </a>

</div>
      </div>
    </footer>
  );
}
