import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { geminiModel } from "../utils/gemini";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langkey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Search a single movie by name in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
                encodeURIComponent(movie.trim()) +
                "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
        const query = searchText.current?.value?.trim();
        if (!query) return;

        setLoading(true);
        setError(null);

        try {
            const gptQuery =
                "Act as a Movie Recommendation system and suggest some movies for the query: " +
                query +
                ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

            const result = await geminiModel.generateContent(gptQuery);
            const responseText = result.response.text();

            // Parse comma-separated movie names
            const gptMovies = responseText
                .split(",")
                .map((m) => m.trim())
                .filter(Boolean)
                .slice(0, 5);

            // Search each movie in TMDB in parallel
            const tmdbResults = await Promise.all(
                gptMovies.map((movie) => searchMovieTMDB(movie))
            );

            dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
        } catch (err) {
            console.error("GPT Search Error:", err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-[8%] w-full flex flex-col items-center gap-3">
            <form
                className="bg-black/70 backdrop-blur-md shadow-lg rounded-2xl flex items-center w-[90%] md:w-1/2 border border-gray-700"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    className="flex-1 p-4 bg-transparent text-white placeholder-gray-400 outline-none rounded-l-2xl focus:ring-2 focus:ring-red-600 transition-all duration-300"
                    type="text"
                    placeholder={lang[langkey].gptSearchPlaceholder}
                />
                <button
                    type="button"
                    onClick={handleGptSearchClick}
                    disabled={loading}
                    className="px-6 py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:opacity-60 text-white font-semibold rounded-r-2xl transition-all duration-300 hover:scale-105"
                >
                    {loading ? "Searching..." : lang[langkey].Search}
                </button>
            </form>
            {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
    );
};

export default GptSearchBar;