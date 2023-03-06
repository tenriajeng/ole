import { configureStore, createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "course",
    initialState: { course: null },
    reducers: {
        setCourse(state, action) {
            state.course = action.payload;
        },
    },
});

const authSlice = createSlice({
    name: "authenticate",
    initialState: { authenticate: null },
    reducers: {
        setAuthenticate(state, action) {
            state.authenticate = action.payload;
        },
    },
});

export const actions = courseSlice.actions;
export const authentication = authSlice.actions;

const store = configureStore({
    reducer: {
        courseReducer: courseSlice.reducer,
        authReducer: authSlice.reducer,
    },
});

export default store;
