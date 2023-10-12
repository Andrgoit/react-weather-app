import { configureStore } from "@reduxjs/toolkit";

import { settingReducer } from "./setting/settingSlice";
import { queryReducer } from "./query/querySlice";
import { cityesReducer } from "./cityes/cityesSlice";
import { weatherReducer } from "./weather/weatherSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, settingReducer);

export const store = configureStore({
  reducer: {
    setting: persistedReducer,
    cityes: cityesReducer,
    query: queryReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
