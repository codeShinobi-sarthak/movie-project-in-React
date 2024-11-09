import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import Navigation from "./Navigation";

const Header = ({ onSearch, handleNav }) => {
    const searchIcon =
        "https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg";

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
        console.log(searchTerm);
        navigate("/");
    };

    return (
        <header className="w-full bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section: Logo and Menu for Mobile */}
                <div className="flex items-center space-x-3">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden block"
                        onClick={handleNav}>
                        <img
                            className="w-8 h-8"
                            src={menu}
                            alt="menu"
                        />
                    </button>

                    {/* Logo */}
                    <img
                        className="md:w-12 md:h-12 w-0 "
                        src={logo}
                        alt="logo"
                    />

                    {/* App Name: Hidden on small screens */}
                    <Link
                        to="/"
                        className="hidden md:block text-2xl font-bold text-white hover:text-gray-400 transition-colors duration-300">
                        Cinema Guide
                    </Link>
                </div>

                {/* Right Section: Search Bar (Mobile and Desktop) */}
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-sm md:max-w-lg lg:max-w-xl bg-[#1f2123] rounded-full">
                    <input
                        type="text"
                        placeholder="Search for a movie"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow flex-shrink px-4 py-2 text-base sm:text-lg text-gray-300 bg-transparent outline-none rounded-l-full"
                    />
                    <button
                        type="submit"
                        className="flex items-center justify-center p-2 sm:p-4 rounded-r-full hover:bg-gray-700 transition-colors duration-300">
                        <img
                            src={searchIcon}
                            alt="search-icon"
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
