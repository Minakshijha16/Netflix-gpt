import { CDN_URL } from "../utils/constants";

const MovieCards = ({posterPath}) => {
    return (
        <div className="min-w-35 h-50 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-110 hover:z-20 relative cursor-pointer">
            <img className="rounded-lg shadow-lg w-full h-full object-cover" src={CDN_URL+posterPath} alt="Movie Card" />  
        </div>
    )
};
export default MovieCards;