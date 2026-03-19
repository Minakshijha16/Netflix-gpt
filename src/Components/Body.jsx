import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import Login from "./Login"
import Browse from "./Browse";




const Body = () => {
    const dispatch = useDispatch();
 
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ])
    useEffect(
        onAuthStateChanged(auth, (user) => {
    if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ email: email, uid: uid, displayName: displayName, }));

    } else {
        dispatch(removeUser());
    }
})
, []);
    


    return (
        <div>
         <RouterProvider router = {appRouter}  /> 
        </div>
    )
};

export default Body;