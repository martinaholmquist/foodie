import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Public_Sans } from "@next/font/google"
import { Bodoni_Moda } from "@next/font/google"

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-publicSans",
})
const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
  style: "normal",
  variable: "--font-bodoniModa",
})
//weight: ["300", "400", "500"],
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={publicSans.className}>
      <div className={bodoniModa.className}></div>
      <Component {...pageProps} />
    </main>
  )
}
