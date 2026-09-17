import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return null;

    return (
        <div className="w-full mt-6 p-4 bg-black/80 backdrop-blur-md rounded-2xl text-white">
            {movieNames.map((movieName, index) => (
                <MovieList
                    key={movieName}
                    title={movieName}
                    movies={movieResults[index]}
                />
            ))}
        </div>
    );
};

export default GptMovieSuggestion;