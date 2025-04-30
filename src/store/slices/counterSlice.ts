import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { isDeepEqual } from "../../utils/commonFunction"

interface PersonType {
  name: string
  age: number
  children: {
    name: string
    age: number
  }
}

interface CounterState {
  countNum: number
  person: PersonType
}

// 页面中使用 useSelector 获取多层对象person，如果
const initialState: CounterState = {
  countNum: 0,
  person: {
    name: "xiaoming",
    age: 20,
    children: {
      name: "xiaoli",
      age: 2,
    },
  },
}

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.countNum = 0
    },
    decrement: (state) => {
      state.countNum -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.countNum += action.payload
    },
    changePerson: (state, action: PayloadAction<PersonType>) => {
      const newPerson = action.payload
      // 如果传入的对象跟之前对象内容完全一致，则不给state对象赋值，减少不必要的赋值操作及页面刷新
      //
      if (!isDeepEqual(state.person, action.payload)) {
        state.person = newPerson
      }
    },
  },
})

export const { increment, decrement, incrementByAmount, changePerson } =
  counterSlice.actions
export default counterSlice.reducer
