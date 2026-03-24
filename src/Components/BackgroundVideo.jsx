
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const BackgroundVideo = ({ movieid }) => {
    useTrailerVideo(movieid);
    const trailerVideo = useSelector((store) => store.movies.trailerVideo); 
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <iframe className="w-full h-full scale-125 pointer-events-none"
            src={"https://www.youtube.com/embed/" + trailerVideo?.key +
                "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
                trailerVideo?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>
    )
};
export default BackgroundVideo;