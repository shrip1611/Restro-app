import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-green-600">
                        <NavLink to="/"
                            className="text-green-700"
                        >
                            <img src={logo} alt="logo" className="h-15"/>
                        </NavLink>
                    </div>

                    {/* Desktop Navbar */}
                    <nav className="hidden md:flex space-x-8">
                        <NavLink to="/"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500" : "text-gray-700 hover:text-green-700"
                            }>Home
                        </NavLink>

                         <NavLink to="/menu"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500" : "text-gray-700 hover:text-green-700"
                            }>Menu
                        </NavLink>
                        
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "text-orange-500" : "text-gray-700 hover:text-green-700"
                        }>About</NavLink>

                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "text-orange-500" : "text-gray-700 hover:text-green-700"
                        }>Contact</NavLink>
                    </nav>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex space-x-4">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook className="w-5 h-5 cursor-pointer text-gray-600 hover:text-blue-600 transition" />
                        </a>

                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter className="w-5 h-5 cursor-pointer text-gray-600 hover:text-sky-500 transition" />
                        </a>

                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className="w-5 h-5 cursor-pointer text-gray-600 hover:text-pink-500 transition" />
                        </a>
                    </div>


                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <a href="#" className="text-gray-700 hover:text-green-600 hover:underline">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-600 hover:underline ">
                            About
                        </a>
                
                        <a href="#" className="text-gray-700 hover:text-green-600 hover:underline">
                            Contact
                        </a>


                        <div className="flex space-x-6 pt-2">
                            <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                            <Twitter className="w-5 h-5 text-gray-600 hover:text-sky-500" />
                            <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500" />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
