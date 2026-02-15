// ProductPage.js
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import allProducts from "./Products";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import productbanner from '../images/productBanner.png';

export default function ProductPage() {
  const [searchParams] = useSearchParams();

  // Initialize as empty arrays
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Read URL params when page loads or URL changes
  useEffect(() => {
    const brandParam = searchParams.get("brand");
    const categoryParam = searchParams.get("category");

    setSelectedBrands(brandParam ? [brandParam] : []);
    setSelectedCategories(categoryParam ? [categoryParam] : []);
  }, [searchParams]);

  const filteredProducts = allProducts.filter(
    (p) =>
      (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
      (selectedCategories.length === 0 || selectedCategories.includes(p.category))
  );

  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center">
        <img
          className="w-full object-cover max-h-[36vh]"
          src={productbanner}
          alt=""
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-4 gap-6">
        {/* Filter Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilter
            brands={["Toyota","Nissan","Ford","GMC","Jeep","Lexus"]}
            categories={["Spare Parts","Oil & Lubricants","Batteries","Accessories"]}
            selectedBrands={selectedBrands}
            selectedCategories={selectedCategories}
            setSelectedBrands={setSelectedBrands}
            setSelectedCategories={setSelectedCategories}
          />
        </div>

        {/* Product Grid with Vertical Scroll */}
        <div className="lg:col-span-3">
          <h1 className="text-2xl font-bold mb-5">
            {selectedBrands.length > 0 ? selectedBrands.join(", ") : "All Brands"}{" "}
            {selectedCategories.length > 0 ? selectedCategories.join(", ") : "Products"}
          </h1>

          {/* Scrollable container */}
          <div className="h-[70vh] overflow-y-auto pr-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
