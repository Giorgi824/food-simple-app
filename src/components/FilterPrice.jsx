import { useState } from "react";

const prices = ["$", "$$", "$$$", "$$$$"];
function FilterPrice({
  setFoods,
  data,
  setActivePrice,
  activePrice,
  activeType,
}) {
  function filterPrice(price) {
    const filteringPrice = data
      .filter((prices) => prices.price === price)
      .filter((item) => {
        if (activeType === "all") return item;
        else return activeType.includes(item.category);
      });
    setActivePrice(price);
    setFoods(() => filteringPrice);
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-gray-700">Filter Price</p>
      <div className="flex flex-wrap gap-x-2 max-w-[390px] w-full">
        {prices.map((price, idx) => (
          <button
            onClick={() => filterPrice(price)}
            key={idx}
            className={`border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white ${
              activePrice === price ? "bg-orange-600 !text-white" : ""
            }`}
          >
            {price}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterPrice;
