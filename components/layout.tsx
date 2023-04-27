import { AllHTMLAttributes } from "react"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" min-h-screen w-screen bg-anotherpink">{children}</div>
}
