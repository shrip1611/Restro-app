import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-600 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="md:text-5xl text-white uppercase tracking-widest text-5xl sm:text-4xl  mb-2 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 mt-3 uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10">
            Get in touch with us for reservations & catering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div className="text-white space-y-6">
            <h2 className="text-2xl font-semibold"></h2>

            <p className="text-gray-400">
              📍 153 Food Street, Pune, Maharashtra
            </p>
            <p className="text-gray-400">
              📞 +91 51762 93512
            </p>
            <p className="text-gray-400">
              ✉️ info@foodies.com
            </p>

            {/* MAP */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="map"
                className="w-full h-full"
                src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
