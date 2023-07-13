import { createSlice } from "@reduxjs/toolkit";
import { Details } from "../ArrayofObject/Objects";

const Collections = createSlice({
  name: "sample",
  initialState: {
    Building: Details,
    Home: [],
    Locations:[],
    List:[],
  },
  reducers: {
    Home: (state, action) => {
      state.Home = action.payload;
    },
    Locations:(state,action)=>{
      state.Locations=action.payload
    },
    List:(state,action)=>{
      state.List=action.payload
    }
  }
});

export const { Building, Home ,Locations,List } = Collections.actions;
export default Collections.reducer;
