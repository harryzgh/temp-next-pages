
import styles from './header.module.scss'
import { useRouter } from 'next/router'

export default function Header () {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button style={{color: styles.primaryColor}}
        onClick={() => {
          const locale = 'cn'
          router.push(`/${locale}${pathname}`, undefined, { shallow: false, locale })
        }}>中文</button>
        <button onClick={() => {
            const locale = 'en'
            router.push(`/${locale}${pathname}`, undefined, { shallow: false, locale })
        }}>英文</button>
        <button onClick={() => {
          const locale = 'es'
          router.push(`/${locale}${pathname}`, undefined, { shallow: false, locale })
        }}>俄语</button>
        <button onClick={() => {
          const locale = 'fr'
          router.push(`/${locale}${pathname}`, undefined, { shallow: false, locale })
        }}>泰语</button>
      </div>
      <div className={styles.headerRight}>
        <button>登录</button>
        <button>注册</button>
      </div>
    </header>
  )
}
