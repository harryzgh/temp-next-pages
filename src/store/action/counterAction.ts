/**
 * 用于处理跟counterSlice.ts全局变量相关的功能
 */
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../index"
import { increment, decrement, changePerson } from "../slices/counterSlice"

export function useCountNum() {
  return useSelector((state: RootState) => state.counter.countNum)
}
export function usePerson() {
  return useSelector((state: RootState) => state.counter.person)
}

export function useIncrementCountNum() {
  const dispatch = useDispatch<AppDispatch>()
  return () => dispatch(increment())
}

export function useDecrementCountNum() {
  const dispatch = useDispatch<AppDispatch>()
  return () => dispatch(decrement())
}

export function useChangePerson() {
  const dispatch = useDispatch<AppDispatch>()
  return () =>
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
