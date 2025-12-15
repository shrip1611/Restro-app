// Footer.jsx
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Restaurant Info */}
          <div>
            <img src={logo} alt="logo" className="h-25 w-25" />
            <p className="text-sm leading-relaxed">
              Serving delicious food made with love. Enjoy fresh ingredients,
              authentic taste, and a warm dining experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li> <NavLink to="/"
                className="hover:text-green-400 cursor-pointer"
              >Home
              </NavLink></li>

              <li><NavLink to="/about" className="hover:text-green-400 cursor-pointer"
              >About</NavLink></li>

              <li><NavLink to="/contact" className="hover:text-green-400 cursor-pointer"
              >Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Pune, Maharashtra
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 51762 93512
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@foodies.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="hidden md:flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 cursor-pointer text-gray-300 hover:text-blue-600 transition" />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 cursor-pointer text-gray-300 hover:text-sky-500 transition" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 cursor-pointer text-gray-300 hover:text-pink-500 transition" />
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm py-6">
          © {new Date().getFullYear()} Foodies Restaurant. All rights reserved.
        </div>
      </div>
    </footer >
  );
}
