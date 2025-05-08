import headStyles from "../styles/header.module.scss"
import { useRouter } from "next/router"
import { useAppDispatch } from "@/store"
import { useTheme, changeThemeAction } from "@/store/action/themeAction"
import { setTheme } from "@/store/slices/themeSlice"
import { STORAGE_CONST, THEME } from "@/utils/const"
import { useEffect } from "react"

export default function Header() {
  const router = useRouter()
  const pathname = router.pathname
  const theme = useTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // 初始化theme
    const savedTheme = localStorage.getItem(STORAGE_CONST.theme)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const theme =
      (savedTheme === THEME.dark && THEME.dark) ||
      (savedTheme === THEME.light && THEME.light) ||
      (mediaQuery.matches ? THEME.dark : THEME.light)
    dispatch(setTheme(theme))
    // 设置浏览器背景主题更改监听器
    const handler = (e: MediaQueryListEvent) =>
      dispatch(setTheme(e.matches ? THEME.dark : THEME.light))
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [dispatch])

  useEffect(() => {
    // 应用主题到 body
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <header className={headStyles.header}>
      <div className={headStyles.headerLeft}>
        <button
          style={{ color: headStyles.primaryColor }}
          onClick={() => {
            const locale = "cn"
            router.push(`/${locale}${pathname}`, undefined, {
              shallow: false,
              locale,
            })
          }}
        >
          中文
        </button>
        <button
          onClick={() => {
            const locale = "en"
            router.push(`/${locale}${pathname}`, undefined, {
              shallow: false,
              locale,
            })
          }}
        >
          英文
        </button>
        <button
          onClick={() => {
            const locale = "es"
            router.push(`/${locale}${pathname}`, undefined, {
              shallow: false,
              locale,
            })
          }}
        >
          俄语
        </button>
        <button
          onClick={() => {
            const locale = "fr"
            router.push(`/${locale}${pathname}`, undefined, {
              shallow: false,
              locale,
            })
          }}
        >
          泰语
        </button>
      </div>
      <div className={headStyles.headerRight}>
        <button>登录</button>
        <button>注册</button>
      </div>

      <div>
        <label htmlFor="dropdown">选择主题：</label>
        <select
          id="dropdown"
          value={theme}
          onChange={(event) => changeThemeAction(event, dispatch)}
        >
          <option value={THEME.light}>浅色主题</option>
          <option value={THEME.dark}>深色主题</option>
        </select>
        <p>你选择了：{theme}</p>
      </div>
    </header>
  )
}
