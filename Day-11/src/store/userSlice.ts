import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../App";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addUser : (state, action: PayloadAction<User>)=>{
            return action.payload
        }
    }
})
export const {addUser} = userSlice.actions;

export default userSlice.reducer;