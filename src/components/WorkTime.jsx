import { NavLink,useNavigate } from "react-router-dom";
import work from "../assets/images/working-hours.png";

const WorkingHours = () => {

    const navigate = useNavigate();
    const handleClick = () => {
    navigate("/form");
  };

    return (
        <section
            className="relative bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url(${work})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto py-5 px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                    {/* LEFT CONTENT */}
                    <div className="text-white space-y-6">
                        <p className="uppercase tracking-widest text-sm text-gray-300">
                            Event Reservation
                        </p>

                        <h2 className="md:text-5xl uppercase tracking-widest text-5xl m-2">
                            Working Hours
                        </h2>

                        <div className="flex gap-4 flex-wrap">
                            <button
                                onClick={handleClick}
                                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition"
                            >
                                Book Your Event
                            </button>

                            <NavLink to="/contact">
                                <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                                    Contact Us
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-8 rounded-2xl max-w-sm ml-auto w-full shadow-xl">
                        <div className="mb-6">
                            <h3 className="font-semibold text-center">Monday to Wednesday</h3>
                            <p className="text-gray-200 text-sm mt-1 text-center">
                                09:00 AM - 03:00 PM
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-center">Thursday to Sunday</h3>
                            <p className="text-gray-200 text-sm mt-1 text-center">
                                09:00 AM - 10:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkingHours
