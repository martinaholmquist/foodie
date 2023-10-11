import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Public_Sans } from "@next/font/google"
import { SessionProvider } from "next-auth/react"
import Head from "next/head"

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-publicSans",
})

//startpunkten inom vår app
//weight: ["300", "400", "500"],
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Foodie</title>
      </Head>
      <main className={publicSans.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
