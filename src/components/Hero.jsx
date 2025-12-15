
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";



const url = "./src/assets/images/";

const slides = [
  {
    title: "Spicy Burger With Crispy Fries",
    desc: "A perfect combination of juicy burger, fresh veggies, and crispy fries made just for you.",
    img: "cetering4.png",
    details: {
      calories: "510 kcal",
      protein: "31g",
      fat: "26g",
      carbs: "36g",
    },
  },
  {
    title: "Hot Chicken Pizza Delight",
    desc: "Loaded with spicy chicken, cheese burst, and rich Italian flavors.",
    img: "cetering3.png",
    details: {
      calories: "620 kcal",
      protein: "35g",
      fat: "29g",
      carbs: "42g",
    },
  },
];

export default function Hero() {
  const [activeDish, setActiveDish] = useState(null);
  const [popupType, setPopupType] = useState(null); // "order" | "details"

  const closePopup = () => {
    setActiveDish(null);
    setPopupType(null);
  };

  return (
    <section className="bg-black text-white">
      {/* HERO SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="py-16 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* LEFT */}
                <div className="space-y-6">
                  <p className="text-green-400 uppercase tracking-widest">
                    Featured Dish
                  </p>

                  <h1 className="text-4xl md:text-5xl font-bold">
                    {item.title}
                  </h1>

                  <p className="text-gray-400">{item.desc}</p>

                  <div className="flex gap-4 flex-wrap">
                    <button
                      onClick={() => {
                        setActiveDish(item);
                        setPopupType("order");
                      }}
                      className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full font-semibold transition"
                    >
                      Order Now
                    </button>

                    <button
                      onClick={() => {
                        setActiveDish(item);
                        setPopupType("details");
                      }}
                      className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                  <img
                    src={`${url}${item.img}`}
                    alt={item.title}
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* POPUP MODAL */}
      {popupType && activeDish && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-2xl p-6 w-full max-w-md relative">

            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-xl font-bold hover:text-red-600"
            >
              ✕
            </button>

            {/* ORDER FORM */}
            {popupType === "order" && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Order {activeDish.title}
                </h2>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full border rounded-lg px-4 py-2"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full border rounded-lg px-4 py-2"
                  />

                  <textarea
                    placeholder="Delivery Address"
                    rows="3"
                    required
                    className="w-full border rounded-lg px-4 py-2"
                  />

                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition"
                  >
                    Confirm Order
                  </button>
                </form>
              </>
            )}

            {/* DETAILS */}
            {popupType === "details" && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  {activeDish.title}
                </h2>

                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🔥 Calories: {activeDish.details.calories}</li>
                  <li>🥩 Protein: {activeDish.details.protein}</li>
                  <li>🧀 Fat: {activeDish.details.fat}</li>
                  <li>🍞 Carbs: {activeDish.details.carbs}</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

