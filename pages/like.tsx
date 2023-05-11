import { NextPage } from "next"

import { Recepie } from "@/utils/types.recepie"
import { SyntheticEvent, useState } from "react"

type recepieProps = {
  title: string
  servings: string
  time: string
  ingredients: [string]
  intructions: [string]
  kuriosa: string
  image: string
  id: any
  likes: [string]
  author: {
    id: string
    name: string
    profileImage: string
  }
}

const Like: NextPage<recepieProps> = ({}) => {
  const [data, setData] = useState<recepieProps[]>([])

  const body = {
    recepieId: "6433b31ae218fc0778f747b6",
    userId: "6447b519a513f5fe1dd649c5",
  }

  const handleClick = async (e: SyntheticEvent) => {
    const data = await fetch("api/recepies/likeRecepie", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
    const res = await data.json()
    console.log(res)
  }

  const showLikes = async () => {
    const data = await fetch("/api/nestedFetch")
    const recepies = await data.json()
    setData(recepies)
    console.log(data)
  }

  return (
    <>
      <div>
        <button onClick={handleClick}> Like Me </button>
        <br />
        <button onClick={showLikes}> Click to get data </button>
      </div>
      <div>
        {data.map((item) => (
          <div key={item?.id}>
            Title ={item.title}
            Likes ={item.likes.length}
          </div>
        ))}
      </div>
    </>
  )
}

export default Like
