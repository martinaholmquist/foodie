import { useEffect, useState } from "react"
import RubrikRecepieFormView from "../newRecepieComponents/rubrikRecepieFormView"
import RenderAllRecepies from "../rendercomponents/renderAllRecepies"
import { NextPage } from "next"
import { useSession } from "next-auth/react"

interface recepieProps {
  id: string
  servings: string
  title: string
  time: string
  ingredients: string
  intructions: string
  kuriosa: string
  image: string
}

const RenderOutRecepiesModals: NextPage<recepieProps> = ({}) => {
  const [data, setData] = useState<recepieProps[]>([])

  const { data: session, status } = useSession()

  const recepieData = async () => {
    const res = await fetch("http://localhost:3000/api/recepies")
    const recepies = await res.json()
    setData(recepies)
  }
  useEffect(() => {
    recepieData()
  }, [])

  return (
    <div className="bg-anotherpink flex flex-col justify-center space-y-4">
      <div>
        {" "}
        <RubrikRecepieFormView />
      </div>{" "}
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 ">
        {data.map((items) => (
          <div key={items.id} className=" bg-primaryPink rounded-lg">
            {items.image && (
              <img
                src={items.image}
                alt=""
                width={550}
                height={100}
                className="object-cover rounded-lg w-100 h-96"
              />
            )}

            <div className="rounded-lg p-2">
              <p className="font-title font-bold text-2xl">{items.title}</p>
              <div>
                {status == "authenticated" && (
                  <div className="font-sans text-1xl">
                    Receptägare {session.user?.name}
                  </div>
                )}
              </div>
              <p className="font-sans text-1xl"> Tid {items.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RenderOutRecepiesModals
