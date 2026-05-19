import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
});

export const { toggleGptSearchView } = GPTSearchSlice.actions;
export default GPTSearchSlice.reducer