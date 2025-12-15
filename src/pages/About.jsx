import about from "../assets/images/about.png";
import aboutImg from "../assets/images/cetering1.png";

export default function About() {
  return (
    <main className="bg-slate-700 text-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={about}
          alt="About Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="md:text-5xl uppercase tracking-widest text-5xl sm:text-4xl  mb-2 sm:mb-4">
            About Us
          </h1>
          <p className="max-w-xl mx-auto text-white mt-4 uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10">
            Serving taste, tradition, and unforgettable experiences
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <p className="uppercase tracking-widest text-sm text-orange-400">
              Our Story
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              A Passion for Great Food & Warm Hospitality
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Founded with a love for authentic flavors, our restaurant is
              dedicated to serving delicious meals crafted from the finest
              ingredients. Every dish reflects our commitment to quality,
              tradition, and innovation.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether it’s a family dinner, corporate gathering, or wedding
              celebration, we create moments that people remember.
            </p>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={aboutImg}
              alt="Restaurant interior"
              className="w-full h-100 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-cyan-100 py-5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-zinc-600 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-400">
              To deliver exceptional food and service that brings people
              together and turns every meal into a celebration.
            </p>
          </div>

          <div className="bg-zinc-600 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-400">
              To become a trusted name in hospitality, known for quality,
              creativity, and unforgettable experiences.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-12 tracking-widest">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Fresh Ingredients",
              "Experienced Chefs",
              "Custom Catering",
              "Warm Hospitality",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
