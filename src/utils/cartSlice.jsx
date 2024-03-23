import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["pizza", "biryani"]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: () => {
            state.items.length = 0;
        }
    }
})

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;