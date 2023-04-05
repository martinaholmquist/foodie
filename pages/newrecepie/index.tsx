import { Butterfly_Kids } from "@next/font/google"

import { useState } from "react"

import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <div>
        <form action="/api/create" method="POST">
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="ingredients" name="ingredients" />
          <input type="text" placeholder="description" name="description" />
          <input type="text" placeholder="pic" name="pic" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Index

/*
interface FormData {
  name: string
  ingredients: string
  description: string
  pic: string
  id: string
}



const Index: NextPage = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    ingredients: "",
    description: "",
    pic: "",
    id: "",
  })

  async function create(data: FormData) {
    try {
      await fetch("http://localhost:3000/API/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() =>
        setForm({ name: "", ingredients: "", description: "", pic: "", id: "" })
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-4">RECEPT</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(form)
        }}
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <textarea
          placeholder="Ingredients"
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <textarea
          placeholder="Pic"
          value={form.pic}
          onChange={(e) => setForm({ ...form, pic: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <button type="submit" className="bg-blue-500 text-white rounded-p-1">
          {" "}
          Add +
        </button>
      </form>
    </div>
  )
}
export default Index*/
