import RubrikRecepieFormView from "@/components/newRecepieComponents/rubrikRecepieFormView"
import { NextPage } from "next"
import { useState, useEffect } from "react"

interface userProps {
  id: string
  name: string
  profileImage: string
  recepies: [{ title: string; image: string; time: string }]
}

const index: NextPage<userProps> = ({}) => {
  const [data, setData] = useState<userProps[]>([])

  const recepieData = async () => {
    const res = await fetch("http://localhost:3000/api/nestedFetch")
    const recepiesUsers = await res.json()
    setData(recepiesUsers)
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
      {data.map((item) => (
        <div>
          {item.recepies.map((items) => (
            <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 ">
              <img src={items.image} alt="image" />
              <p className="font-title font-bold text-2xl">
                {items.title} {item.name} {items.time}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default index

/*
 <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 ">
        </div>




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
        ))}*/
