import footerStyles from "../styles/footer.module.scss"
import { useCountNum, usePerson } from "../../store/action/counterAction"

export default function Foot() {
  const countNum = useCountNum()
  const person = usePerson()

  return (
    <footer className={footerStyles.footer}>
      <p>姓名： alsdj</p>
      <p>电话号码： 12321321</p>
      <div>
        <h1>Count: {countNum}</h1>
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
