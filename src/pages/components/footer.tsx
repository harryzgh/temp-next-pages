import footerStyles from "../styles/footer.module.scss"
import { RootState } from "../../store"
import { useSelector } from "react-redux"

export default function Foot() {
  const count = useSelector((state: RootState) => state.counter.value)
  const person = useSelector((state: RootState) => state.counter.person)

  return (
    <footer className={footerStyles.footer}>
      <p>姓名： alsdj</p>
      <p>电话号码： 12321321</p>
      <div>
        <h1>Count: {count}</h1>
      </div>
      <div>
        <p>person name: {person.name}</p>
        <p>person age: {person.age}</p>
        <p>children name: {person.children.name}</p>
        <p>children age: {person.children.age}</p>
      </div>
    </footer>
  )
}
