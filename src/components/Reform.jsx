import axios from "axios";
import { useState, useEffect, useRef, useReducer } from "react";
import {Check} from 'lucide-react';
import {X} from 'lucide-react';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

function formReducer(state, action) {
  switch (action.type) {
    case "SUBMIT_START":
      return { loading: true, success: false, error: null };
    case "SUBMIT_SUCCESS":
      return { loading: false, success: true, error: null };
    case "SUBMIT_ERROR":
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
}
const Reform = () => {
    
  const nameRef = useRef(null);

  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      setServices([
        "Catering",
        "Event Booking",
        "Home Delivery",
      ]);
    }, 800);
    
    // nameRef.current.focus();

  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.service) {
      return "All fields are required";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Invalid email address";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      return "Phone must be 10 digits";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMsg = validateForm();
    if (errorMsg) {
      dispatch({ type: "SUBMIT_ERROR", payload: errorMsg });
      return;
    }

    try {
      dispatch({ type: "SUBMIT_START" });

      await axios.post(
        "https://jsonplaceholder.typicode.com/posts", formData
      );

      dispatch({ type: "SUBMIT_SUCCESS" });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        service: "",
      });
    } catch (error) {
      dispatch({
        type: "SUBMIT_ERROR",
        payload: "Something went wrong. Please try again.",
      });
    }
  };



  return (
    <>
     <h2 className="text-3xl font-bold text-center mb-2">
          Contact / Catering Request
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill the form and we will get back to you
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            ref={nameRef}
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select Required Service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          
          {state.success && (
            <p className="text-green-600 flex justify-center text-center font-medium">
              <Check /> Form submitted successfully!
            </p>
          )}
           
          {state.error && (
            <p className="text-red-600 flex justify-center text-center font-medium">
              <X /> {state.error}
            </p>
          )}
          
          <button
            type="submit"
            disabled={state.loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              state.loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            {state.loading ? "Submitting..." : "Submit Request"}
          </button>

        </form>
    </>
  )
}

export default Reform