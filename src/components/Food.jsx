import { useState } from "react";
import { data } from "../data/data";
import FilterTypes from "./FilterTypes";
import FilterPrice from "./FilterPrice";
function Food() {
  const [foods, setFoods] = useState(data);
  const [activePrice, setActivePrice] = useState("");
  const [activeType, setActiveType] = useState("all");
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        {/* filter type */}
        <FilterTypes
          setFoods={setFoods}
          data={data}
          setActivePrice={setActivePrice}
          setActiveType={setActiveType}
          activeType={activeType}
        />
        {/* filter price */}
        <FilterPrice
          setFoods={setFoods}
          data={data}
          setActivePrice={setActivePrice}
          activePrice={activePrice}
          activeType={activeType}
        />
      </div>
      {/* display foods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map(({ category, id, image, name, price }) => (
          <div
            key={id}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-[200px] object-cover"
            />
            <div className="flex justify-between px-2 py-4 gap-2 wrap">
              <p className="font-bold">{name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
