function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="relative rounded-xl overflow-hidden">
        {/* overlay */}
        <div className="flex flex-col absolute w-full h-full bg-black/50  text-white">
          <p className="text-2xl font-bold px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="capitalize border-white bg-white text-black mx-2 mb-4 mt-auto self-start">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FsYWR8ZW58MHwwfDB8fHww"
          alt=""
        />
      </div>
      {/* card */}
      <div className="relative rounded-xl overflow-hidden">
        {/* overlay */}
        <div className="flex flex-col absolute w-full h-full bg-black/50  text-white">
          <p className="text-2xl font-bold px-2 pt-4">New Restaurant</p>
          <p className="px-2">Added Daily</p>
          <button className="capitalize border-white bg-white text-black mx-2 mb-4 mt-auto self-start">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D"
          alt=""
        />
      </div>
      {/* card */}
      <div className="relative rounded-xl overflow-hidden">
        {/* overlay */}
        <div className="flex flex-col absolute w-full h-full bg-black/50  text-white">
          <p className="text-2xl font-bold px-2 pt-4">
            We Deliver Desserts Too
          </p>
          <p className="px-2">Tasty Treats</p>
          <button className="capitalize border-white bg-white text-black mx-2 mb-4 mt-auto self-start">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.unsplash.com/photo-1517084166762-9edca41416e6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeadlineCards;
