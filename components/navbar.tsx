import { Logo } from "./hero-components/logo"

const NavBar = () => {
  return (
    <div className="flex justify-center pt-6">
      <Logo foodieLogo={"/Loggo_B&W.png"} height={75} width={100} />
    </div>
  )
}
export default NavBar
