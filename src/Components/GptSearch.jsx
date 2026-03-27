import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import Galaxy from "./Galaxy";

const GptSearch = () => {
    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">           
            <div className="absolute inset-0 z-0">
                <Galaxy
                    mouseRepulsion
                    mouseInteraction
                    density={1}
                    glowIntensity={0.3}
                    saturation={0}
                    hueShift={140}
                    twinkleIntensity={0.3}
                    rotationSpeed={0.1}
                    repulsionStrength={2}
                    autoCenterRepulsion={0}
                    starSpeed={0.5}
                    speed={1}
                />
            </div>
         
            <div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>
          
            <div className="relative z-20 flex flex-col items-center pt-20">
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>

        </div>
    );
};

export default GptSearch;