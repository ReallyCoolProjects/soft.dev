import { createSlice } from "@reduxjs/toolkit";


const commonSlice = createSlice({
    name: 'commonslice',
    initialState:{
        isHamburger : false
    },
    reducers:{
        openHamburger: (state: any,action: any)=>{
            state.isHamburger = !state.isHamburger
        }
    }
}) 

export const {openHamburger} = commonSlice.actions

export default commonSlice.reducer