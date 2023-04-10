import { Logo } from "./hero-components/logo"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full bg-white ">
      <Logo
        foodieLogo={"/Loggo_B&W.png"}
        className="absolute top-0 left-0 w-40"
      />
      {children}
    </div>
  )
}
