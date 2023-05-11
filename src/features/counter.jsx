import { createSlice } from "@reduxjs/toolkit";
const initialState = 0 ;
export const counterSlice = createSlice(
    {
        name : 'coutner' , 
        initialState , 
        reducers : {
        increment:(state) => state +=1 ,
            decrement : (state) => state -= 1 ,
            reset : (state) => state = 0 
            
        }
    }
)

export  const {increment , decrement ,reset } = counterSlice.actions;
export default counterSlice.reducer; 