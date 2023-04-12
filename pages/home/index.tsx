import { NextPage } from "next"
import { Hero } from "@/components/hero-components/hero"
import { Logo } from "@/components/hero-components/logo"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="">
      <Logo foodieLogo={"/Loggo_B&W.png"} className={"w-52 md:w-80"} />
      <Hero
        heroTitle="Dela, smaka och utvecklas!"
        heroText="Foodie skapades av ett gäng matälskare
          som ville dela med sig av egna recept och 
          kunna njuta av andras fräcka tips!"
        bulletOne="Publicera recept"
        bulletTwo="Få uppskattning"
        bulletThree="Nya smaker "
        ctaText="Kom igång"
      />
    </div>
  )
}

export default Index
