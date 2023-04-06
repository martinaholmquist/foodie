import Image from "next/image"
import Link from "next/link"

interface HeroProps {
  heroTitle: string
  heroText: string
  bulletOne: string
  bulletTwo: string
  bulletThree: string
  ctaText: string
}

export const Hero = ({
  heroTitle,
  heroText,
  bulletOne,
  bulletTwo,
  bulletThree,
  ctaText,
}: HeroProps) => {
  return (
    <div className="">
      <div className="absolute bottom-0 -z-20">
        <Image
          src={"/tre_sparrisar.40.png"}
          width={300}
          height={250}
          alt="picture of vegatables"
        ></Image>
      </div>
      <div>
        <h1 className="text-center pt-6 pb-3 text-3xl font-title font-bold">
          {heroTitle}
        </h1>
      </div>
      <div className="flex justify-center px-2">
        <p className="text-center font-normal text-xl w-6/6">{heroText}</p>
      </div>
      <div className="">
        <ul className=" font-semibold text-xl pb-10 pt-10">
          <li className=" list-none flex items-center space-x-3 pt-5 pl-8 pr-8">
            <Image
              src={"/icon1_publicera.png"}
              width={30}
              height={30}
              alt="picture of vegatables"
            ></Image>
            <span>{bulletOne}</span>
          </li>
          <li className=" list-none flex items-center space-x-3 pt-10 pl-8 pr-8">
            <Image
              src={"/icon2_uppskattning.png"}
              width={30}
              height={30}
              alt="picture of vegatables"
            ></Image>
            <span>{bulletTwo}</span>
          </li>
          <li className="list-none flex items-center space-x-3 pt-10 pl-8 pr-8">
            <Image
              src={"/icon3_smaker.png"}
              width={30}
              height={30}
              alt="picture of vegatables"
            ></Image>
            <span>{bulletThree}</span>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-28 right-0 -z-10">
        <Image
          src={"/Sparris_tallrik.png"}
          width={200}
          height={0}
          alt="picture of vegatables"
        ></Image>
      </div>
      <div className="flex justify-center h-40 items-end pb-0 sm:h-64 md:h-60 xs:h-64">
        <Link
          className="font-semibold text-lg cursor-pointer bg-secondaryWhite px-7 py-4 rounded-3xl shadow-sm  shadow-black"
          href={
            "https://docs.google.com/spreadsheets/d/1m8fA3InZtMA7jzUt5ooNFvNnnu0x7rlsw9FMW0XFo-8/edit?usp=sharing"
          }
        >
          {ctaText}
        </Link>
      </div>
    </div>
  )
}

/*
const HeroTitle = ({ heroTitle }: Hero) => {
  return (
    <h1 className="text-center pt-6 pb-3 text-3xl font-title font-bold">
      {heroTitle}
    </h1>
  )
}

const HeroText = ({ heroText }: Hero) => {
  return (
    <div className="flex justify-center">
      <p className="text-center font-normal text-xl w-5/6">{heroText}</p>
    </div>
  )
}

const HeroBullets = ({ heroText, heroImage }: Hero) => {
  return (
    <div className="">
      <li className=" list-none flex items-center space-x-3 text-2xl font-semibold pt-10 pl-8 pr-8">
        <img src={`${heroImage}`} alt="recipe book icon" />
        <span>{heroText}</span>
      </li>
    </div>
  )
}

const HeroBackGroundImage = ({ heroImage: heroBackground }: Hero) => {
  return (
    <div className="absolute bottom-0 -z-20">
      <img width={250} src={`${heroBackground}`} alt="picture of vegatables" />
    </div>
  )
}

const HeroImage = ({ heroImage }: Hero) => {
  return (
    <div className="absolute bottom-16 right-0 -z-10">
      <img width={200} src={`${heroImage}`} alt="picture of plate" />
    </div>
  )
}

const HeroButton = ({ heroText }: Hero) => {
  return (
    <div className="flex justify-center h-72 items-end pb-3">
      <button className=" cursor-pointer bg-secondaryWhite px-7 py-4 rounded-3xl shadow-sm  shadow-black">
        {heroText}
      </button>
    </div>
  )
}*/
