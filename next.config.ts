import type { NextConfig } from "next"
import {locales, defaultLocale} from './src/locales/localesManage'

const nextConfig: NextConfig = {
  // 是否使用react严格模式，默认为true (严格模式会使代码执行两遍)
  reactStrictMode: false,
  // sassOptions: {
  //   implementation: 'sass-embedded',
  // },
  i18n: {
    locales,
    defaultLocale,
  },
}

export default nextConfig
