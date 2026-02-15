import React from "react";

export default function ProductFilter({ brands, categories, selectedBrands, selectedCategories, setSelectedBrands, setSelectedCategories }) {

  // Handle brand checkbox toggle
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Handle category checkbox toggle
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg space-y-4">
      {/* Brands */}
      <div>
        <h2 className="font-bold text-lg mb-2">Filter By Brand</h2>
        <div className="flex flex-col gap-2">
          {brands.map((b) => (
            <label key={b} className="flex slide-hover cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(b)}
                onChange={() => handleBrandChange(b)}
                className="form-checkbox"
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="font-bold text-lg mb-2">Filter By Category</h2>
        <div className="flex flex-col gap-2">
          {categories.map((c) => (
            <label key={c} className="flex slide-hover cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(c)}
                onChange={() => handleCategoryChange(c)}
                className="form-checkbox"
              />
              {c}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
