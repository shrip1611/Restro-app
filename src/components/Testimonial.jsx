import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import testimonials from "../services/testimonials.json"

const url = "./src/assets/images/";

export default function Testimonial() {

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section className="bg-teal-800 py-5 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="uppercase tracking-widest text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">
          Testimonial
        </h1>
        <p className="uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10">
          What customers say about us
        </p>

        {/* Swiper for testimonial text */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="relative mb-8 sm:mb-12 px-2"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="px-2 sm:px-6">
              <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ">
                {item.text}
              </p>
              <p className="mt-4 text-xs sm:text-sm">
                <span className="font-semibold">{item.name}</span> – From {item.location}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

      
        <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`focus:outline-none rounded-full transition-all duration-300 ${activeIndex === index
                  ? "ring-4 ring-white scale-125"
                  : "opacity-60 hover:opacity-100"
                }`}
            >
              <img
                src={`${url}${item.image}`}
                alt={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
              />
            </button>
          ))}
        </div>


        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-6 mt-8 sm:mt-10">
          <button className="custom-prev bg-white text-pink-600 p-2 rounded-full hover:scale-110 transition">
            <ChevronLeft size={20} />
          </button>
          <button className="custom-next bg-white text-pink-600 p-2 rounded-full hover:scale-110 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
