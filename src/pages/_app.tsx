/**
 * 入口文件
 */
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import {NextIntlClientProvider} from 'next-intl'
import {useRouter} from 'next/router'
import '../styles/globals.css'


export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function onError () {
  // console.log('ceshi+++++', e)
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  // Use the layout defined at the page level, if available
  // Component.getLayout ?? ((page) => page)  等同于 Component.getLayout || ((page) => page)
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <NextIntlClientProvider
      locale={router.locale}
      onError={onError}
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  )
}
