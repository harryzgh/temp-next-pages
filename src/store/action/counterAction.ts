/**
 * 用于处理跟counterSlice.ts全局变量相关的功能
 */
import { useSelector } from "react-redux"
import { RootState, AppDispatch } from "../index"
import { changePerson } from "../slices/counterSlice"

export function useCountNum() {
  return useSelector((state: RootState) => state.counterSlice.countNum)
}
export function usePerson() {
  return useSelector((state: RootState) => state.counterSlice.person)
}

export function changePersonAction(dispatch: AppDispatch) {
  dispatch(
    changePerson({
      name: "xiaoming",
      age: 2,
      children: {
        name: "xiaoli",
        age: 2,
      },
    })
  )
}
