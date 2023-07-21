import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAddUserPayload {
    accessToken: string;
    userId: string;
}
interface IState {
    token: string;
    userId: string;
}
const initialState: IState = {
    token: '',
    userId: '',
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IAddUserPayload>) => {
            state.token = action.payload.accessToken;
            state.userId = action.payload.userId;
        },
        clearUser: (state) => {
            state.token = '';
            state.userId = '';
        }
    }
})
export default authSlice.reducer;
export const { addUser, clearUser } = authSlice.actions;