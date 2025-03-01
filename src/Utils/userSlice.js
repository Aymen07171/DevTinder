import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    }
});

// Export actions correctly
export const { addUser, removeUser } = userSlice.actions;

// Export the reducer as default
export default userSlice.reducer;
