/**
 * 处理跟counterSlice.ts全局变量相关的功能
 */
import { useSelector } from "react-redux"
import { RootState, AppDispatch } from "../index"
import { setTheme } from "../slices/themeSlice"
import { type ChangeEvent } from "react"
import { STORAGE_CONST, THEME } from "@/utils/const"

export function useTheme() {
  return useSelector((state: RootState) => state.themeSlice.theme)
}

export function changeThemeAction(
  event: ChangeEvent<HTMLSelectElement>,
  dispatch: AppDispatch
) {
  const themeString = event.target.value
  const theme = themeString === THEME.dark ? THEME.dark : THEME.light
  localStorage.setItem(STORAGE_CONST.theme, themeString)
  dispatch(setTheme(theme))
}
