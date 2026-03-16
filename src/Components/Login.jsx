import Header from "./Header";
import Background from "../assets/Background.jpg"
import { useState,useRef } from "react";
import { ValidateData } from "../utils/Validate";
const Login = () => {
    const [isSignIn, setisSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    
    const CheckinputData = () => {
    
        const message = isSignIn ? ValidateData(email.current.value, password.current.value) : ValidateData(email.current.value, password.current.value, name.current.value)
        setErrorMessage(message);
    
     }

    const ToggleSignForm = () => {
        setisSignIn(!isSignIn);
    }
    return (
        <div>
            <Header /> 
            <div className="absolute">
                <img src={Background} alt="Bg-image"  />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 "></input>}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 "></input>
                <input ref={password} type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 "></input>
                <p className="text-red-700">{errorMessage }</p>
                <button onClick={CheckinputData} className="p-4 my-6 bg-red-700 w-full font-semibold text-lg rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 " onClick={ToggleSignForm}>{ isSignIn? "New to Netflix? Sign Up Now": "Already a user? Sign In Now"}</p>

            </form>
    
        </div>
    )
};

export default Login;