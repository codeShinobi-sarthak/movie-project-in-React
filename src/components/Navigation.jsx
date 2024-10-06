import React from "react";
import { Link } from "react-router-dom";

function Navigation({ showMenu }) {
    return (
        <nav
            className={`fixed top--10 left-0 h-full w-64 bg-gray-900 shadow-lg p-6 transition-transform duration-300 ease-in-out z-50 lg:static lg:transform-none lg:opacity-100 ${
                showMenu
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
            }`}>
            <ul className="space-y-4">
                <li>
                    <Link
                        to="/"
                        className="block py-2 px-4 text-lg font-semibold text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/intheater"
                        className="block py-2 px-4 text-lg font-semibold text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                        In Theater
                    </Link>
                </li>
                <li>
                    <Link
                        to="/popular"
                        className="block py-2 px-4 text-lg font-semibold text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                        Popular
                    </Link>
                </li>
                <li>
                    <Link
                        to="/toprated"
                        className="block py-2 px-4 text-lg font-semibold text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                        Top Rated
                    </Link>
                </li>
                <li>
                    <Link
                        to="/upcoming"
                        className="block py-2 px-4 text-lg font-semibold text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                        Upcoming
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
