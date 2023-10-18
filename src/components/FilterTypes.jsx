import { useState } from "react";

const foodTypes = ["all", "burgers", "pizza", "salads", "chicken"];

function FilterTypes({
  setFoods,
  data,
  setActivePrice,
  setActiveType,
  activeType,
}) {
  function filteringFoods(category) {
    const filtered = data.filter((item) => category.includes(item.category));
    setActiveType(category);
    setActivePrice("");
    if (category === "all") setFoods(data);
    else setFoods(filtered);
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-gray-700">Filter Type</p>
      <div className="flex flex-wrap gap-x-2">
        {foodTypes.map((item, idx) => (
          <button
            key={idx}
            className={`border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white ${
              activeType === item ? "bg-orange-600 !text-white" : ""
            } capitalize`}
            onClick={() => filteringFoods(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterTypes;
