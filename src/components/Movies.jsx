import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../api/Api";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

function Movies({ type }) {
    const [movies, setMovies] = useState([]);

    // function to search movie with title
    const searchMovies = async (url) => {
        const data = await fetchData({ url });
        console.log(data);
        setMovies(data.results);
    };

    const getApiUrl = (typeOf) => {
        switch (typeOf) {
            case "intheater":
                return "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
            case "popular":
                return "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
            case "toprated":
                return "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
            case "upcoming":
                return "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
            default:
                return "";
        }
    };
    //   useeffect hook
    useEffect(() => {
        const url = getApiUrl(type);
        console.log(url);
        searchMovies(url);
    }, [type]);

    return (
        <div>
            {/*  searched movies display */}
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

export default Movies;
