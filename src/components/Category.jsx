import { categories } from "../data/data";
function Category() {
  return (
    <div className="mx-auto max-w-[1640px] px-4 py-12 flex flex-col gap-10">
      <h1 className="capitalize text-orange-600 font-bold text-4xl text-center">
        top rated menu items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {categories.map(({ id, name, image }) => (
          <div
            key={id}
            className="bg-gray rounded-lg p-4 justify-between items-center flex bg-gray-100"
          >
            <h2 className="font-bold sm:text-xl">{name}</h2>
            <img className="w-20" src={image} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
