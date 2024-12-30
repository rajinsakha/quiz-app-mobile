import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import AsyncStorage from '@react-native-async-storage/async-storage';


import authReducer from "./features/authReducer";



const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["authReducer"], // Specify the reducer(s) you want to persist
};

const rootReducer = combineReducers({
  authReducer: authReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Use persistedReducer, not persistReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
