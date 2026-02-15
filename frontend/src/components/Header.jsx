import { ShoppingCart, User, Search, ArrowDown } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/alshajarlogo.png";
import "../css/Hover.css";
import "animate.css";

export function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const navigate = useNavigate();

  const brands = ["Toyota", "Honda", "Suzuki", "BMW"];
  const products = ["Spare Parts", "Oil & Lubricants", "Batteries", "Accessories"];
  const categories = ["Spare Parts", "Oil & Lubricants", "Batteries", "Accessories"];

  const toUrl = (str) => str.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

  // Helper for NavLink active class
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-green-700 font-bold slide-hover"
      : "text-gray-600 hover:text-green-700 slide-hover";

  return (
    <header className="bg-white shadow-md uppercase relative z-50 w-full">
      {/* TOP HEADER */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Auto Parts" className="h-16 w-auto" />
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 max-w-xl relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded-full py-2 px-4 pr-14 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-700 p-2 px-5 rounded-full">
            <Search className="text-white w-4 h-4 " />
          </button>
        </div>

        {/* Account & Cart */}
        <div className="flex items-center gap-6 text-gray-700">
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1 text-green-700 font-bold slide-hover"
                : "flex items-center gap-1 slide-hover"
            }
          >
            <User className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">My Account</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1 text-green-700 font-bold slide-hover"
                : "flex items-center gap-1 slide-hover"
            }
          >
            <ShoppingCart className="w-5 h-5" />
            <span>$0.00</span>
          </NavLink>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <div className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Shop By Category Button */}
          <button
            onClick={() => setOpenCategory(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-green-700 text-green-600 slide-hover"
          >
            <span>☰ Shop By Category</span>
          </button>

          {/* MENU LINKS */}
          <nav className="hidden lg:flex gap-10 text-gray-600 font-medium">
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>

            {/* Brands Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenBrands(true)}
              onMouseLeave={() => setOpenBrands(false)}
            >
              <button className="flex items-center gap-1 slide-hover">
                Car Brands <ArrowDown className="w-4 h-4" />
              </button>
              {openBrands && (
                <div className="absolute left-0 mt-0 w-48 bg-white border z-30 border-gray-200 rounded-md shadow-lg overflow-hidden animate-slide-in">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      className="block w-full text-left px-4 py-2 text-gray-700 slide-hover"
                      onClick={() => {
                        navigate(`/products?brand=${encodeURIComponent(brand)}`);
                        setOpenBrands(false);
                      }}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenProducts(true)}
              onMouseLeave={() => setOpenProducts(false)}
            >
              <button className="flex items-center gap-1 slide-hover">
                PRODUCTS <ArrowDown className="w-4 h-4" />
              </button>
              {openProducts && (
                <div className="absolute left-0 mt-0 w-60 bg-white z-50 border border-gray-200 rounded-md shadow-lg overflow-hidden animate-slide-in">
                  {products.map((item) => (
                    <button
                      key={item}
                      className="block w-full text-left px-4 py-2 text-gray-700 slide-hover"
                      onClick={() => {
                        navigate(`/products?category=${encodeURIComponent(item)}`);
                        setOpenProducts(false);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/products" className={activeClass}>
              Shop
            </NavLink>

            <NavLink to="/about" className={activeClass}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={activeClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenCategory(true)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* SLIDE-IN DROPDOWN ANIMATION */}
      <style>
        {`
          @keyframes slide-in {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slide-in 0.2s ease-out forwards;
          }
        `}
      </style>

      {/* CATEGORY DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          openCategory ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            openCategory ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpenCategory(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
            openCategory ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold text-green-700">
              Shop by Category
            </h2>
            <button
              onClick={() => setOpenCategory(false)}
              className="text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Categories */}
          <ul className="p-4 space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="block w-full text-left px-4 py-2 rounded-md text-gray-700 slide-hover"
                onClick={() => {
                  navigate(`/products?category=${encodeURIComponent(cat)}`);
                  setOpenCategory(false);
                }}
              >
                {cat}
              </button>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full justify-center items-center bg-green-700 text-white font-medium text-lg py-2">
        <h1 className="flex items-center gap-2 animate-pulse">
          <span className="text-xl">🚗</span>
          <span>
            Your One-Stop Shop for Genuine & Aftermarket Car Spare Parts
          </span>
        </h1>
      </div>
    </header>
  );
}
