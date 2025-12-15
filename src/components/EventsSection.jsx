import useEvents from "../hooks/useEvents";

export default function EventsSection() {
  const events = useEvents();
  const url = './src/assets/images/';
  return (
    <section className="bg-cyan-800 py-5 px-4">
      <div>
        <h1 className="uppercase tracking-widest text-3xl text-center text-white sm:text-4xl md:text-5xl mb-2 sm:mb-4">
          Events
        </h1>
        <p className="uppercase tracking-widest text-white text-center text-xs sm:text-sm mb-8 sm:mb-10">
          Perfectly Crafted for Every Occasion
        </p>
      </div>
      <div className="max-w-7xl mx-auto ">

        {events.map((event, index) => (
          <div
            key={event.id}
            className={`section-row grid grid-cols-1 md:grid-cols-2 sm:gap-6 gap-12 items-center sm:mb-6
              `}
          >
            <div className="text-white space-y-5">
              <p className="uppercase tracking-widest text-bold text-md text-amber-600">
                {event.tag}
              </p>

              <h2 className="text-3xl md:text-4xl leading-tight">
                {event.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {event.desc}
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition">
                Read More
              </button>
            </div>

            {/* IMAGE */}
            <div className="section-image h-[270px] relative overflow-hidden rounded-xl group">

              <img
                src={`${url}${event.image}`}
                alt={event.title}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
