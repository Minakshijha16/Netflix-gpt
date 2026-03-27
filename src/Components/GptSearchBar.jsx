const GptSearchBar = () => {
    return (
        <div className="mt-[8%] w-full flex justify-center">
            <form className="bg-black/70 backdrop-blur-md shadow-lg rounded-2xl flex items-center w-1/2 border border-gray-700">

                <input
                    className="flex-1 p-4 bg-transparent text-white placeholder-gray-400 outline-none rounded-l-2xl focus:ring-2 focus:ring-red-600 transition-all duration-300"
                    type="text"
                    placeholder="What would you like to watch today?"
                />

                <button className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-r-2xl transition-all duration-300 hover:scale-105">
                    Search
                </button>

            </form>
        </div>
    );
};

export default GptSearchBar;