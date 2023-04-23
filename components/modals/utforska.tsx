import { useEffect, useState } from "react"
import RubrikRecepieFormView from "../newRecepieComponents/rubrikRecepieFormView"

import { NextPage } from "next"
import { useSession } from "next-auth/react"

import { useRouter } from "next/router"

type recepieProps = {
  id?: string
  name?: string
  profileImage?: string
  recepies?: [{ title: string; image: string; time: string }]
}

const Utforska: NextPage<recepieProps> = ({}) => {
  const [data, setData] = useState<recepieProps[]>([])

  const { data: session, status } = useSession()
  const router = useRouter()

  const handleClick = (id: any) => {
    router.push(`/home/${id}`)
  }

  const recepieData = async () => {
    const res = await fetch("http://localhost:3000/api/nestedFetch")
    const recepies = await res.json()
    setData(recepies)
  }
  useEffect(() => {
    recepieData()
  }, [])

  return (
    <div className="bg-anotherpink flex flex-col justify-center space-y-4">
      <div> </div>{" "}
      <div className="">
        {data.map((item) => (
          <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
            {item.recepies?.map((items) => (
              <div className=" bg-primaryPink rounded-lg">
                <img
                  src={items.image}
                  alt="image"
                  width={550}
                  height={100}
                  className="object-cover rounded-lg w-100 h-96"
                />
                <p className="font-title font-bold text-2xl">{items.title}</p>
                <div className="flex  items-center">
                  <div className="h-4 w-4 bg-red-800 rounded-full"></div>
                  <p className="pl-4 font-sans text-1xl">{item.name}</p>
                </div>
                <div className="flex  items-center">
                  <div>
                    <img src="/klocka.png" alt="klocka" />
                  </div>
                  <p className="pl-4 font-sans text-1xl"> {items.time}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Utforska
