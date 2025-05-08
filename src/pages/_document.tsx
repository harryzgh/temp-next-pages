import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
          `,
          }}
        /> */}
      </body>
    </Html>
  )
}
