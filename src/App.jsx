import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

const App = () => {
    const [searchUrl, setSearchUrl] = useState("");
    const [showMenu, setShowMenu] = useState(false);

    // Function to handle movie search
    const handleSearch = (title) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            title
        )}&include_adult=false&language=en-US&page=1`;
        setSearchUrl(url); // Update the state with the new search URL
        console.log(url);
    };

    const handleNav = () => {
        setShowMenu(!showMenu); // Toggle the menu visibility
    };

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Pass search handler to Header */}
                <Header onSearch={handleSearch} handleNav={handleNav} />

                {/* Responsive Layout */}
                <div className="flex flex-1">
                    {/* Navigation Menu */}
                    <Navigation showMenu={showMenu} />

                    {/* Main Content */}
                    <main className="flex-1 p-4 md:p-8 bg-gray-100">
                        <Routes>
                            <Route
                                path="/"
                                element={<Home url={searchUrl} />} // Pass search URL to Home
                            />
                            <Route
                                path="/intheater"
                                element={<Movies type="intheater" />}
                            />
                            <Route
                                path="/popular"
                                element={<Movies type="popular" />}
                            />
                            <Route
                                path="/toprated"
                                element={<Movies type="toprated" />}
                            />
                            <Route
                                path="/upcoming"
                                element={<Movies type="upcoming" />}
                            />
                            <Route
                                path="/movie/:id"
                                element={<MovieDetails />}
                            />
                        </Routes>
                    </main>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
