import { configureStore } from "@reduxjs/toolkit";

import { settingReducer } from "./setting/settingSlice";
import { queryReducer } from "./query/querySlice";
import { weatherReducer } from "./weather/weatherSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, settingReducer);

export const store = configureStore({
  reducer: {
    setting: persistedReducer,
    query: queryReducer,
    weather: weatherReducer,
  },
});

export const persistor = persistStore(store);
