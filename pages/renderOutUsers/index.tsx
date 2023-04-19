import RubrikRecepieFormView from "@/components/newRecepieComponents/rubrikRecepieFormView"
import { NextPage } from "next"
import { useState, useEffect } from "react"

interface recepieProps {
  id: string
  name: string
  profileImage: string
  recepies: [{ title: string; image: string }]
}

const index: NextPage<recepieProps> = ({}) => {
  const [data, setData] = useState<recepieProps[]>([])

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
      <div>
        {" "}
        <RubrikRecepieFormView />
      </div>{" "}
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 ">
        {data.map((items) => (
          <div key={items.id} className=" bg-primaryPink rounded-lg">
            {items.profileImage && (
              <img
                src={items.profileImage}
                alt=""
                width={550}
                height={100}
                className="object-cover rounded-lg w-100 h-96"
              />
            )}

            <div className="rounded-lg p-2">
              <p className="font-title font-bold text-2xl">namn {items.name}</p>
              <p className="font-sans text-1xl">
                {" "}
                Tid{" "}
                {items.recepies.map((items) => (
                  <div>
                    {items.title}
                    <div>{items.image}</div>
                  </div>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default index
