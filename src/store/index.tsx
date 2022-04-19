import { configureStore } from '@reduxjs/toolkit';
import {clickReducer} from "./click/reducer";

const store = configureStore({
    reducer: {
        click: clickReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;