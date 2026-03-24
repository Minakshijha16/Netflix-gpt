const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-full aspect-video pt-40 px-12 absolute text-white bg-linear-to-r from-black">

            <h1 className="text-5xl font-bold drop-shadow-lg">
                {title}
            </h1>

            <p className="mt-4 w-1/2 text-lg text-gray-200">
                {overview}
            </p>

            <div className="mt-6 flex gap-4">
                <button className="bg-white text-black px-6 py-2 text-lg rounded-md font-semibold hover:opacity-70 transition duration-200">
                    ⯈ Play
                </button>

                <button className="bg-gray-600/50 text-white px-6 py-2 text-lg rounded-md font-semibold hover:bg-gray-600 transition duration-200">
                    ⓘ More Info
                </button>
            </div>

        </div>
    );
};

export default VideoTitle;