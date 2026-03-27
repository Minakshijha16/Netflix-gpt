import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "English",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        
    }
});

export default configSlice.reducer;
export const { changeLanguage } = configSlice.actions;