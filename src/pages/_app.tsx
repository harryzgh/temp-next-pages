/**
 * 入口文件
 */
import "./styles/globals.css"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { NextIntlClientProvider } from "next-intl"
import { useRouter } from "next/router"
import { Provider } from "react-redux"
import { wrapper } from "../store"

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function onError() {
  // console.log('ceshi+++++', e)
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const { store, props } = wrapper.useWrappedStore(pageProps)
  // Use the layout defined at the , page level, if available
  // Component.getLayout ?? ((page) => page)  等同于 Component.getLayout || ((page) => page)
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      {getLayout(
        <NextIntlClientProvider
          locale={router.locale}
          onError={onError}
          messages={props.messages}
        >
          <Component {...props} />
        </NextIntlClientProvider>
      )}
    </Provider>
  )
}

export default MyApp
