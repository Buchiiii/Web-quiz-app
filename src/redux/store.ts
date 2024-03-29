import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import scoreReducer from "./slices/score";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  score: scoreReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
