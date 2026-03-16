import Header from "./Header";
import Background from "../assets/Background.jpg"
import { useState } from "react";
const Login = () => {
    const [isSignIn, setisSignIn] = useState(true);

    const ToggleSignForm = () => {
        setisSignIn(!isSignIn);
    }
    return (
        <div>
            <Header /> 
            <div className="absolute">
                <img src={Background} alt="Bg-image"  />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 "></input>}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 "></input>
                <input type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 "></input>
                <button className="p-4 my-6 bg-red-700 w-full font-semibold text-lg rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 " onClick={ToggleSignForm}>{ isSignIn? "New to Netflix? Sign Up Now": "Already a user? Sign In Now"}</p>

            </form>
    
        </div>
    )
};

export default Login;