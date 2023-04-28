import { createSlice } from "@reduxjs/toolkit";

export const ModeSlice = createSlice({
    name:'Mode',
    initialState:{
        value:'light'
    },
    reducers:{
        darkMode: state=>{state.value = 'dark'},
        lightMode: state=>{state.value = 'light'}
    }
});

export const {darkMode,lightMode}= ModeSlice.actions;

export default ModeSlice.reducer