import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const BackgroundVideo = ({ movieid }) => {
    useTrailerVideo(movieid);

    const trailerVideo = useSelector(
        (store) => store.movies.trailerVideo
    );

    if (!trailerVideo) return null;

    return (
        <div className="absolute inset-0 overflow-hidden">
            <iframe
                className="w-full h-full scale-125 pointer-events-none"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo.key +
                    "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
                    trailerVideo.key
                }
                title="YouTube video player"
                allow="autoplay; encrypted-media"
            ></iframe>
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black pointer-events-none"></div>

        </div>
    );
};

export default BackgroundVideo;
