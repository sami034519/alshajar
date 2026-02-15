import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import toyota from '../images/toyota2.jpg';
import lexus from '../images/lexus.jpg';
import nissan from '../images/nissan1.jpg';
import infinity from '../images/infinity2.jpg';
import dodge from '../images/Dodgeram2.jpg'
import chalvoret from '../images/Chevrolet.jpg'
import ford from '../images/ford1.jpg'
import GMC from '../images/gmc.webp'
import jeep from '../images/jeep.jpg'
import Chrysler from '../images/Chrysler.jpg'
import volvo from '../images/volvo.png'
import tesla from '../images/tesla.jpg'
import banner from '../images/banner4.png'


export default function CarCarousel() {
 const slides = [
  {
    
    subtitle: "BMW, Range Rover, Mercedes Benz, Jaguar, Audi, Porsche and much more!",
    image: banner,
  },
  {
    title: "FIND PARTS THAT FIT YOUR VEHICLE",
    subtitle: "BMW, Range Rover, Mercedes Benz, Jaguar, Audi, Porsche and much more!",
    image: toyota,
  },
  {
    title: "PREMIUM LEXUS AUTO PARTS",
    subtitle: "High-quality and durable spare parts for Lexus vehicles",
    image: lexus,
  },
  {
    title: "NISSAN PERFORMANCE UPGRADES",
    subtitle: "Enhance your Nissan with premium performance parts",
    image: nissan,
  },
  {
    title: "INFINITI PERFORMANCE PARTS",
    subtitle: "Upgrade your Infiniti with high-performance components",
    image: infinity,
  },
 
 
  {
    title: "DODGE RAM HEAVY-DUTY TRUCK PARTS",
    subtitle: "Powerful and durable parts built for Dodge Ram trucks",
    image: dodge,
  },
  {
    title: "CHEVROLET PERFORMANCE COLLECTION",
    subtitle: "Premium upgrades and spare parts for Chevrolet vehicles",
    image: chalvoret,
  },
  {
    title: "FORD PERFORMANCE PARTS",
    subtitle: "Enhance your Ford with high-quality auto parts",
    image: ford,
  },
  {
    title: "GMC TRUCK & SUV PARTS",
    subtitle: "Heavy-duty parts built for GMC performance",
    image: GMC,
  },
  {
    title: "JEEP OFF-ROAD PERFORMANCE PARTS",
    subtitle: "Upgrade your Jeep for ultimate off-road power",
    image: jeep,
  },
  {
  title: "CHRYSLER PREMIUM AUTO PARTS",
  subtitle: "Luxury and performance parts for Chrysler vehicles",
  image: Chrysler,
},
{
  title: "VOLVO SAFETY & PERFORMANCE PARTS",
  subtitle: "Premium parts designed for Volvo safety and reliability",
  image: volvo,
},
{
  title: "TESLA SAFETY & PERFORMANCE PARTS",
  subtitle: "Premium parts designed for Volvo safety and reliability",
  image: tesla,
},

];



  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[80vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[80vh] object-cover"
            />
            {/* Overlay with left-aligned text */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center ">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-5xl bg-opacity-55 bg-black font-bold p-5 text-white drop-shadow-lg mb-4">
                  {slide.title}
                </h1>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
