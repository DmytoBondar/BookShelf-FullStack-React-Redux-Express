import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    search: string;
}
const initialState: IState = {
    search: '',
}
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        searchValue: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        }
    }
})
export default bookSlice.reducer;
export const { searchValue } = bookSlice.actions;