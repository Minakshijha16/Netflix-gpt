const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-[30%] left-12 z-20 max-w-xl text-white">

            <h1 className="text-5xl font-bold drop-shadow-lg">
                {title}
            </h1>

            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
                {overview}
            </p>

            <div className="mt-6 flex gap-4">
                <button className="bg-white text-black px-6 py-2 text-lg rounded-md font-semibold hover:bg-opacity-80 transition">
                    ▶ Play
                </button>

                <button className="bg-gray-600/70 backdrop-blur-sm text-white px-6 py-2 text-lg rounded-md font-semibold hover:bg-gray-600 transition">
                    ⓘ More Info
                </button>
            </div>

        </div>
    );
};
export default VideoTitle;