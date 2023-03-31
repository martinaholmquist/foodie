import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Public_Sans } from "@next/font/google"

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-publicSans",
})

//weight: ["300", "400", "500"],
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={publicSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
