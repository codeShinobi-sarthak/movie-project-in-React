import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="w-full sm:w-60 md:w-72 h-auto mx-2 my-4 rounded-lg overflow-hidden border-none shadow-[0px_13px_10px_-7px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_30px_18px_-8px_rgba(0,0,0,0.1)]">
                <div className="w-full h-full">
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.original_title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 sm:p-6 bg-gray-800">
                    <span className="block text-xs uppercase tracking-wider font-medium text-gray-400">
                        Rating: {movie.vote_average}
                    </span>
                    <h3 className="mt-1 text-base sm:text-lg font-semibold text-yellow-400">
                        {movie.original_title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
