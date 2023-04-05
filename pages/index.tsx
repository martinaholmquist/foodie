//import { NextPage } from "next"
import styles from "@/styles/Home.module.css"
/*
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return <div>Hello Tina</div>
}

export default Index
*/

import type { NextPage } from "next"
import Link from "next/link"
import { useState } from "react"

const Home: NextPage = () => {
  const [data, setData] = useState({
    name: "",
    ingredients: "",
    description: "",
    pic: "",
  })

  const add = () => {
    fetch("/API/create", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(({ data }) => console.log(data))
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-4">RECEPT</h1>
      {["name"].map((item) => (
        <form
          key={"name"}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="Name"
            value={
              // @ts-ignore
              data[item]
            }
            onChange={(e) => setData({ ...data, [item]: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
        </form>
      ))}

      {["ingredients"].map((item) => (
        <form
          key={"ingredients"}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="Ingredients"
            value={
              // @ts-ignore
              data[item]
            }
            onChange={(e) => setData({ ...data, [item]: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
        </form>
      ))}

      {["description"].map((item) => (
        <form
          key={"description"}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="Description"
            value={
              // @ts-ignore
              data[item]
            }
            onChange={(e) => setData({ ...data, [item]: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
        </form>
      ))}

      {["pic"].map((item) => (
        <form
          key={"pic"}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="Pic"
            value={
              // @ts-ignore
              data[item]
            }
            onChange={(e) => setData({ ...data, [item]: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
        </form>
      ))}

      <button className="bg-blue-500 text-white rounded-p-1" onClick={add}>
        Add +
      </button>
    </div>
  )
}

export default Home
