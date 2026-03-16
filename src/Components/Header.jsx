import NetflixLogo from "../assets/NetflixLogo.png";

const Header = () => {
    return (
        <div className="absolute top-0 flex justify-between left-0 w-full px-8 py-2 bg-linear-to-b from-black z-10">
            <img
                className="w-44 cursor-pointer"
                src={NetflixLogo}
                alt="Netflix Logo"
            />
            
        </div>
    );
};

export default Header;