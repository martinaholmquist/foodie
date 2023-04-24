import { AllHTMLAttributes } from "react"

type background = {
  bg: string
}

export const Layout = ({
  bg,
  children,
}: {
  bg: string
  children: React.ReactNode
}) => {
  return <div className={` min-h-screen w-screen ${bg} `}>{children}</div>
}
