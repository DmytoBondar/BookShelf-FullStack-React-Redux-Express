import { createSlice } from "@reduxjs/toolkit";

interface IState {
    user: {};
}
const initialState: IState = {
    user: {},
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        }
    }
})
export default authSlice.reducer;
export const { addUser } = authSlice.actions;