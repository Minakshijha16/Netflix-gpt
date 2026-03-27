import NetflixLogo from "../assets/NetflixLogo.png";
import SignOut from "../assets/SignOut.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";
import { Supported_languages } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error")
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ email: email, uid: uid, displayName: displayName, }));
                navigate("/browse");
    
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        })
        return () => unsubscribe();
    }
    , []);
        
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleGptSearch = () => {
        dispatch(toggleGptSearch())
    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }
    
    return (
        <div className="absolute top-0 flex justify-between left-0 w-full px-8 py-2 bg-linear-to-b from-black z-30">
            <img
                className="w-44 cursor-pointer"
                src={NetflixLogo}
                alt="Netflix Logo"
            />
            
            {user && (
                <div className="flex items-center gap-2"> 
                    {showGptSearch &&<select className="p-2 m-2 bg-gray-400 text-white" onChange={handleLanguageChange}>
                        {Supported_languages.map((lang) => (<option key={lang.identifier}>{lang.name}</option>))}
                    </select>}   
                    <button
                        className="py-2 px-6 m-2 rounded-xl bg-linear-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-700 hover:scale-105 transition-all duration-200 ease-in-out"
                        onClick={handleGptSearch}
                    >
                        {showGptSearch ? "Home page" : "🔍 GPT Search"} 
                    </button>
                   
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <img className="w-10 h-10" src={SignOut} alt="sign out" />

                        <button
                            onClick={handleSignOut}
                            className="text-white font-bold group-hover:text-red-500 transition duration-200"
                        >
                            Sign Out
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Header;