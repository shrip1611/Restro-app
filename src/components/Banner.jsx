

const url = "./src/assets/images/";


const Banner = () => {
  return (
    <section className="w-full bg-blue-200 py-5 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className=" space-y-5">
          <p className="text-green-600 font-semibold text-lg">
            Special Offer
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">
            Burgers With Onion Dip and Potato Chips
          </h1>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Per Serving: 510 calories, fat 26g, saturated fat 10g,
            cholesterol 88mg, sodium 883mg, protein 31g,
            carbohydrates 36g, sugars 9g, fiber 1g.
          </p>

          {/* PRICE & BUTTON */}
          <div className="flex items-center gap-6 flex-wrap">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Order Now →
            </button>

            <div className="flex items-center gap-3">
              <span className="text-yellow-800 text-2xl font-bold">
                Rs.150
              </span>
              <span className="line-through text-gray-500">
                RS.300
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={`${url}banner1.png`}
            alt="Burger Offer"
            className="w-80 max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />

          {/* DISCOUNT BADGE */}
          <div className="absolute top-0 left-0 w-25 h-25">
            <img src={`${url}banner2.png`}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
