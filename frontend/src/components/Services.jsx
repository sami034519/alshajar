import { Truck, Heart, Award, User, Shield } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <Truck className="w-6 h-6 font-medium text-green-700" />,
    title: "Deliver all over UAE",
    description: "Delivery of goods all over UAE & Beyond",
  },
  {
    icon: <Heart className="w-6 h-6 font-medium text-green-700" />,
    title: "Satisfied or Refunded",
    description: "Guaranteed product quality and warranty",
  },
  {
    icon: <Award className="w-6 h-6 font-medium text-green-700" />,
    title: "Great prices and quality",
    description: "From essential components to specialized accessories.",
  },
  {
    icon: <User className="w-6 h-6 font-medium text-green-700" />,
    title: "Top-Notch Support",
    description: "Our live chat support is available Monday through Saturday",
  },
  {
    icon: <Shield className="w-6 h-6 font-medium text-green-700" />,
    title: "Secure Payments",
    description: "Your payment information is processed securely",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="max-w-7xl overflow-hidden mx-auto mt-10 px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-2"
            data-aos="fade-up" // <-- AOS animation
            data-aos-delay={index * 100} // optional: stagger effect
          >
            <div>{service.icon}</div>
            <h3 className="font-bold text-gray-900">{service.title}</h3>
            <p className="text-gray-500 text-xs">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
