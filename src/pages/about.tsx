/**
 * 首页
 */
import type { ReactElement } from 'react'
import { GetStaticPropsContext } from 'next'
import Layout from './components/layout'
// import NestedLayout from './components/nested-layout'
import type { NextPageWithLayout } from './_app'
import { useTranslations } from "next-intl"
import Head from 'next/head'

const AboutPage: NextPageWithLayout = () => {
  const t = useTranslations()

  return (
    <div>
      <Head>
        <title>这是about页</title>
        <meta name="description" content="about页貌似还没啥内容"></meta>
        <meta name="keywords" content="这真的是about页"></meta>
      </Head>
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>
    </div>
  )
}

AboutPage.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default AboutPage

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`../locales/${context.locale}.json`)).default
    }
  }
}
