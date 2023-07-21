import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    user: string;
}
const initialState: IState = {
    user: '',
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = ''
        }
    }
})
export default authSlice.reducer;
export const { addUser,clearUser } = authSlice.actions;