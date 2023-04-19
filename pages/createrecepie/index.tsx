import { NextPage } from "next"
import { SyntheticEvent, useState } from "react"
import { Logo } from "@/components/hero-components/logo"

type Recepie = {
  title: string
  ingredients: string
  intructions: string
  authorId: string
  image: string
}

const Index: NextPage = ({}) => {
  const [recepie, setRecepie] = useState<Recepie>({
    title: "",
    ingredients: "",
    intructions: "",
    authorId: "",
    image: "",
  })

  const onSubmit = async (e: SyntheticEvent) => {
    const data = await fetch("http://localhost:3000/api/createrecepie", {
      method: "POST",
      body: JSON.stringify(recepie),
      headers: { "Content-Type": "application/json" },
    })
    const res = await data.json()
    e.preventDefault()
  }

  return (
    <div className="h-screen flex justify-center">
      <form
        className=" flex flex-col justify-center items-center space-y-10"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="recepie[title]"
          placeholder="Recepie Title"
          value={recepie.title}
          onChange={(e) => setRecepie({ ...recepie, title: e.target.value })}
        />

        <input
          type="text"
          name="recepie[ingredients]"
          placeholder="ingredients"
          value={recepie.ingredients}
          onChange={(e) =>
            setRecepie({ ...recepie, ingredients: e.target.value })
          }
        />
        <input
          type="text"
          name="recepie[intructions]"
          placeholder="intructions"
          value={recepie.intructions}
          onChange={(e) =>
            setRecepie({ ...recepie, intructions: e.target.value })
          }
        />
        <input
          type="text"
          name="recepie[authorId]"
          placeholder="authorId"
          value={recepie.authorId}
          onChange={(e) => setRecepie({ ...recepie, authorId: e.target.value })}
        />

        <input
          type="text"
          name="recepie[image]"
          placeholder="image"
          value={recepie.image}
          onChange={(e) => setRecepie({ ...recepie, image: e.target.value })}
        />

        <input
          type="submit"
          name="Sign Up"
          className=" bg-slate-900 text-white p-5"
        />
      </form>
    </div>
  )
}

export default Index
