import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import scoreReducer from "./slices/score";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    score: scoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
