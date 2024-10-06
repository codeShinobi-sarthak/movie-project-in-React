import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import Navigation from "./Navigation";

const Header = ({ onSearch, handleNav}) => {

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
        <header className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center w-full">
                    <div className="flex justify-between gap-3">
                        {/* <div className="md:hidden block"> */}
                        <button
                            className="md:hidden block"
                            onClick={handleNav}>
                            <img
                                className="size-10"
                                src={menu}
                                alt="menu"
                            />
                        </button>
                        {/* </div> */}
                        <img
                            className="size-16"
                            src={logo}
                            alt="logo"
                        />
                        <Link
                            to="/"
                            className=" w-60 text-2xl font-bold text-white hover:text-gray-400 transition-colors duration-300">
                            Cinema Guide
                        </Link>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full ml-4 bg-[#1f2123] rounded-full">
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-grow px-4 py-2 text-xl font-medium text-gray-300 bg-transparent outline-none rounded-l-full"
                        />
                        <button
                            type="submit"
                            className="flex items-center justify-center p-5  rounded-r-full hover:bg-gray-700 transition-colors duration-300">
                            <img
                                src={searchIcon}
                                alt="search-icon"
                                className="w-6 h-6"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
