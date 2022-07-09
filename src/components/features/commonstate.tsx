import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: 'commonslice',
    initialState:{
        isHamburger : false
    },
    reducers:{
        openHamburger: (state,action)=>{
            state.isHamburger = !state.isHamburger
        }
    }
})

export const {openHamburger} = commonSlice.actions

export default commonSlice.reducer