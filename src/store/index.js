import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    quotes: [],
}

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        addQuote(state, action){
            const quote = {
                ...action.payload,
                id: 'q1' + Math.floor(Math.random() * 100),
            };
            state.quotes.push(quote);
        },
    }
})

const store = configureStore({
    reducer : {
        quote: quoteSlice.reducer,
    }
})

export const QuoteActions = quoteSlice.actions;
export default store;