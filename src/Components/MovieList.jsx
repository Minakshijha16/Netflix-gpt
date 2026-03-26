import { useRef } from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
    const scrollRef = useRef(null);

    const handleMouseMove = (e) => {
        const container = scrollRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        const edge = 100;

        if (mouseX < edge) {
            container.scrollBy({ left: -60, behavior: "smooth" });
        } else if (mouseX > rect.width - edge) {
            container.scrollBy({ left: 60, behavior: "smooth" });
        }
    };

    return (
        <div className="px-6 text-white">

            <h1 className="text-2xl font-semibold mb-3">
                {title}
            </h1>

            <div
                ref={scrollRef}
                onMouseMove={handleMouseMove}
                className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
            >
                {movies?.map((movie) => (
                    <MovieCards
                        key={movie.id}
                        posterPath={movie.poster_path}
                    />
                ))}
            </div>

        </div>
    );
};

export default MovieList;