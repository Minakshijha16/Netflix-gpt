import NetflixLogo from "../assets/NetflixLogo.png";
import SignOut from "../assets/SignOut.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {
    
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
           navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }
    const user = useSelector((store) => store.user);
    return (
        <div className="absolute top-0 flex justify-between left-0 w-full px-8 py-2 bg-linear-to-b from-black z-10">
            <img
                className="w-44 cursor-pointer"
                src={NetflixLogo}
                alt="Netflix Logo"
            />
            
            {user && <div className="flex items-center gap-2 cursor-pointer group">
                <img className="w-10 h-10" src={SignOut} alt="sign out" />
                <button onClick={handleSignOut} className="text-white font-bold group-hover:text-red-500 transition duration-200">Sign Out</button>
            </div>}
            
        </div>
    );
};

export default Header;