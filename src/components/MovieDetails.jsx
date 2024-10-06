import React, { useEffect, useState } from "react";
import fetchData from "../api/Api";
import { useParams } from "react-router-dom";
import Loader from "./Loader"; // Import the Loader component

function MovieDetails() {
    const [details, setDetails] = useState();
    const { id } = useParams();

    const fetchDetails = async (url) => {
        const data = await fetchData({ url });
        setDetails(data);
    };

    useEffect(() => {
        const URL = `https://api.themoviedb.org/3/movie/${id}`;
        fetchDetails(URL);
    }, [id]);

    if (!details) {
        return <Loader />;
    }

    const {
        backdrop_path,
        poster_path,
        original_title,
        tagline,
        overview,
        vote_average,
        release_date,
        genres,
    } = details;

    return (
        <div className="relative overflow-hidden bg-black text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
                }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div className="relative container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title}
                    className="w-96 h-auto rounded-lg shadow-lg"
                />
                <div className="ml-8 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">
                        {original_title}
                    </h1>
                    <h2 className="text-xl font-semibold text-gray-400 mb-2">
                        {tagline}
                    </h2>
                    <p className="text-gray-300 mb-4">{overview}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {genres.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="text-yellow-400 text-lg font-semibold mr-4">
                            Rating: {vote_average}
                        </span>
                        <span className="text-gray-500">
                            {new Date(release_date).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
