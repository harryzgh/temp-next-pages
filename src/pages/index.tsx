/**
 * 首页
 */
import indexStyle from "./styles/index.module.scss"
import type { ReactElement } from "react"
import { GetStaticPropsContext } from "next"
import Layout from "./components/layout"
// import NestedLayout from './components/nested-layout'
import type { NextPageWithLayout } from "./_app"
import { useTranslations } from "next-intl"
import Head from "next/head"
import { useRouter } from "next/router"

const HomePage: NextPageWithLayout = () => {
  const t = useTranslations()
  const router = useRouter()
  return (
    <div className={indexStyle.ceshi}>
      <Head>
        <title>这是首页</title>
        <meta name="description" content="首页貌似还没啥内容"></meta>
        <meta name="keywords" content="这真的是首页"></meta>
      </Head>
      <h1>{t("hello")} 首页</h1>
      <p>{t("welcome")}</p>
      <button type="button" onClick={() => router.push("/about")}>
        这是首页，Click me进入about页
      </button>
    </div>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
      {/* <NestedLayout></NestedLayout> */}
    </Layout>
  )
}

export default HomePage

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`../locales/${context.locale}.json`)).default,
    },
  }
}
