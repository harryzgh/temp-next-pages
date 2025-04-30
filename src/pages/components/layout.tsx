import { ReactElement, useEffect } from "react"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }: { children: ReactElement }) {
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(false)
  useEffect(() => {
    /*  async function fetchData() {
      try {
        const res = await fetch('https://api.github.com/repos/vercel/next.js')
        if (res.status === 200) {
          const data = await res.json()
          console.log('data++++', data)
          setData(data)
        } else {
          setError(true)
        }
      } catch {
        setError(true)
      }
    }
    fetchData() */
  }, [])

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
