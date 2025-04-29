/**
 * 首页
 */
import type { ReactElement } from "react"
import { useState, FormEvent } from "react"
import { GetStaticPropsContext } from "next"
import Layout from "./components/layout"
// import NestedLayout from './components/nested-layout'
import type { NextPageWithLayout } from "./_app"
import { useTranslations } from "next-intl"
import Head from "next/head"
import { useRouter } from "next/router"

const AboutPage: NextPageWithLayout = () => {
  const t = useTranslations()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // 当新请求开始时清除之前的错误

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("提交数据失败。请重试。")
      }

      // 如有必要，处理响应
      // const data = await response.json()
      // ...
    } catch (error) {
      // 捕获错误消息以显示给用户
      // setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div>
      <Head>
        <title>这是about页</title>
        <meta name="description" content="about页貌似还没啥内容"></meta>
        <meta name="keywords" content="这真的是about页"></meta>
      </Head>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={onSubmit}>
        <input type="text" name="name" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "加载中..." : "提交"}
        </button>
      </form>
      <h1>{t("hello")} about页面</h1>
      <p>{t("welcome")}</p>
      <button type="button" onClick={() => router.push("/")}>
        这是about页，Click me进入首页
      </button>
    </div>
  )
}

AboutPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default AboutPage

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`../locales/${context.locale}.json`)).default,
    },
  }
}
