import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../api/Api";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

function Intheater() {
    const [movies, setMovies] = useState([]);

    // function to search movie with title
    const searchMovies = async (url) => {
        const data = await fetchData({ url });
        console.log(data);
        setMovies(data.results);
    };

    //   useeffect hook
    useEffect(() => {
        const url = "now_playing?language=en-US&page=1";
        searchMovies(url);
    }, []);

    return (
        <div>
            {/*  searched movies */}
            {movies?.length > 0 ? (
                <div className="flex flex-wrap justify-center items-center w-full">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default Intheater;