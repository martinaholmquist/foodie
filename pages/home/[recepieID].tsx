import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

type recpieData = {
  title: string
  servings: string
  time: string
  ingredients: [string]
  intructions: [string]
  kuriosa: string
  image: string
}

const RecepieView = ({}) => {
  const [data, setData] = useState<recpieData>()
  const router = useRouter()
  const id = router.query.recepieID

  const recepieData = async () => {
    const res = await fetch(`/api/recepies/${id}`)
    const recepies = await res.json()
    setData(recepies)
  }

  useEffect(() => {
    recepieData()
  }, [])

  return (
    <div className="">
      <div>
        <img src={data?.image} alt="image" height={400} width={400} />
      </div>
      <h1>{data?.title}</h1>
      <h1>{data?.time} min</h1>
      <h1>{data?.servings} personer</h1>
      <ul>
        <br />
        <h1>Ingredienser</h1>
        {data?.ingredients.map((item) => (
          <li>{item}</li>
        ))}
        <br />
        <h1>Instruktioner</h1>
        {data?.intructions.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <Link href={"/home"}> Back </Link>
    </div>
  )
}
export default RecepieView
