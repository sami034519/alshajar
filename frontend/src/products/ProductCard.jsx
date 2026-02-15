import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
      />

      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
      <p className="text-xs text-green-700 font-semibold mt-1">{product.category}</p>

      <button className="mt-3 w-full border border-green-700 text-green-700 py-2 rounded slide-hover transition">
        View Product
      </button>
    </div>
  );
}
