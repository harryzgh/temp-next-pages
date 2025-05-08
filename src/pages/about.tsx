/**
 * 首页
 */
import commonStyles from "./styles/common.module.scss"
import type { ReactElement } from "react"
import { useState, FormEvent } from "react"
import { GetStaticPropsContext } from "next"
import Layout from "./components/layout"
// import NestedLayout from './components/nested-layout'
import type { NextPageWithLayout } from "./_app"
import { useTranslations } from "next-intl"
import Head from "next/head"
import { useRouter } from "next/router"
import { z } from "zod"
import { DynamicHello } from "@/router/index"

interface ErrorMsgType {
  nameError: ""
  ageError: ""
  emailError: ""
}

const AboutPage: NextPageWithLayout = () => {
  const t = useTranslations()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorText, setError] = useState<string | null>(null)
  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<number>()
  const [email, setEmail] = useState<string>("")
  const [errorMsg, setErrorMsg] = useState<ErrorMsgType>({
    nameError: "",
    ageError: "",
    emailError: "",
  })

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // setIsLoading(true)
    setError(null) // 当新请求开始时清除之前的错误

    // 1. 定义 Schema
    const userSchema = z.object({
      name: z.string().min(2, "至少2个字符"),
      age: z.number().int().positive("年龄必须为正数"),
      email: z.string().email("无效邮箱"),
    })

    // 2. 验证数据
    const rawData = { name, age, email }
    const result = userSchema.safeParse(rawData) // 安全解析，不抛异常
    if (!result.success) {
      const errorMsgObj: ErrorMsgType = {
        nameError: "",
        ageError: "",
        emailError: "",
      }
      result.error.issues.forEach((issue) => {
        const path = issue.path[0]
        Object.assign(errorMsgObj, {
          [`${path}Error`]: issue.message,
        })
        console.log("errorMsgObj+++++++", errorMsgObj)
        console.log(`${issue.path}: ${issue.message}`)
        // 输出如: "age: 年龄必须为正数"
      })
      setErrorMsg(errorMsgObj)
    } else {
      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          body: JSON.stringify(result.data),
        })

        if (!response.ok) {
          throw new Error("提交数据失败。请重试。")
        }
        // 如有必要，处理响应, 页面跳转等逻辑
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
  }
  console.log("errorMsg++++++++++++++++++++++++++++")
  return (
    <div>
      <Head>
        <title>这是about页</title>
        <meta name="description" content="about页貌似还没啥内容"></meta>
        <meta name="keywords" content="这真的是about页"></meta>
      </Head>
      <DynamicHello />
      {/* 表单验证开始 */}
      {errorText && <div style={{ color: "red" }}>{errorText}</div>}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">姓名：</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errorMsg.nameError && (
            <div className={commonStyles.warn}>{errorMsg.nameError}</div>
          )}
        </div>
        <div>
          <label htmlFor="age">年龄：</label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Enter your age"
          />
          {errorMsg.ageError && (
            <div className={commonStyles.warn}>{errorMsg.ageError}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">email：</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errorMsg.emailError && (
            <div className={commonStyles.warn}>{errorMsg.emailError}</div>
          )}
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "加载中..." : "提交"}
        </button>
      </form>
      {/* 表单验证结束 */}
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
