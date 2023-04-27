import { useEffect, useState } from "react"
import RubrikRecepieFormView from "../newRecepieComponents/rubrikRecepieFormView"
//import RecepieView from "../modals/[singleRecepieModule]"
import { NextPage } from "next"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { Layout } from "../layout"

type recepieProps = {
  title?: string
  image?: string
  time?: string
  id?: string

  author?: {
    name: string
    profileImage: string
    id: string
  }
}
const RenderOutRecepiesModals: NextPage<recepieProps> = ({}) => {
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
    <div className="bg-anotherpink flex items-center flex-col justify-center space-y-4">
      <div className="">
        {data.map((item) => (
          <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
            <div
              className="bg-primaryPink rounded-lg"
              onClick={() => handleClick(item.id)}
            >
              <img
                src={item.image}
                alt="image"
                width={550}
                height={100}
                className="object-cover rounded-lg w-100 h-52"
              />
              <p className="font-title font-medium text-2xl pl-2 pt-2 ">
                {item.title}
              </p>
              <div className=" pl-2 pt-1 flex  items-center">
                <div className="h-4 w-4 bg-crimsonRed rounded-full"></div>
                <p className="pl-4 font-sans text-1xl font-medium">
                  {item.author?.name}
                </p>
              </div>
              <div className=" pl-2 pt-1 pb-2 flex  items-center">
                <div>
                  <img src="/klocka.png" alt="klocka" />
                </div>
                <p className="pl-4 font-sans font-medium text-1xl">
                  {" "}
                  {item.time} min
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RenderOutRecepiesModals
