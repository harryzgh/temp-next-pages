/**
 * 需要用到的库
 * "react-redux": "^9.2.0" && "@reduxjs/toolkit": "^2.7.0" && "next-redux-wrapper": "^8.1.0"
 */
import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import counterSlice from "./slices/counterSlice"
import themeSlice from "./slices/themeSlice"
import { useDispatch } from "react-redux"

const rootReducer = {
  counterSlice,
  themeSlice,
}

export const store = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  })

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

export const wrapper = createWrapper<AppStore>(store, {
  debug: process.env.NODE_ENV === "development",
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
