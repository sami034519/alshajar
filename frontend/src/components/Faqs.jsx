import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import faqsimage from "../images/Faqs.jpg"; // make sure your path is correct

const faqs = [
  {
    question: "What types of spare parts do you offer?",
    answer:
      "We offer various auto spare parts Abu Dhabi, genuine and aftermarket spares for auto such as engines, brakes, batteries, tyres, fluids, lubricants, and accessories. We have got you covered whether you need a particular spare for performance or for daily maintenance at Best Auto Parts Al Ain.",
  },
  {
    question: "Do you supply parts for all vehicle makes and models?",
    answer:
      "Yes, we supply spare parts for all popular vehicle makes and models including Toyota, Honda, BMW, Mercedes, and more.",
  },
  {
    question: "Are your spare parts genuine or aftermarket?",
    answer:
      "We provide both genuine and high-quality aftermarket parts depending on your preference and budget.",
  },
  {
    question: "How can I check if a part is compatible with my vehicle?",
    answer:
      "You can check compatibility by providing your vehicle’s make, model, and year. Our team will assist you or you can use our online compatibility checker.",
  },
  {
    question: "Do you provide a warranty on your spare parts?",
    answer:
      "Yes, most of our spare parts come with a warranty. Specific warranty terms depend on the part and manufacturer.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order online through our website or contact our sales team via phone or email. Payment is secure and delivery is fast.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: false});
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex lg:flex-row flex-col overflow-hidden w-full justify-center gap-x-10 items-center mx-auto my-5 px-4">
      
      {/* Header image */}
      <div
        className="relative flex items-center justify-center h-[400px] mb-6"
        data-aos="fade-up"
      >
        {/* Right overlay panel */}
       <div className="absolute top-0 right-0 w-[30%] h-full bg-green-700 rounded-lg flex flex-col items-center justify-center text-black p-4 
transition-all duration-500 ease-in-out hover:translate-x-[-200px] cursor-pointer translate-x-0">

          <div className="text-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M4.93 4.93l14.14 14.14"
              />
            </svg>
          </div>
          <p className="font-bold text-center">DELIVERY ALL OVER THE GCC</p>
          <div className="flex mt-2 space-x-2">
            <span className="w-3 h-3 rounded-full bg-black"></span>
            <span className="w-3 h-3 rounded-full border border-black"></span>
          </div>
        </div>

        {/* Main image */}
        <img
          src={faqsimage}
          alt="Product"
          className="object-cover h-full w-full rounded-lg"
        />
      </div>

      <div>
        {/* Heading */}
        <h2
          className="text-3xl font-bold text-center mb-5 text-slate-700"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ list */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-2 border rounded-md lg:w-[700px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger effect
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex slide-hover justify-between items-center px-4 py-3 font-semibold text-left ${
                openIndex === index ? "bg-green-700 text-white" : "bg-gray-100 text-gray-800"
              }`}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700 text-xs">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
