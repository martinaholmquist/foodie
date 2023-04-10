import { FormButton } from "@/components/form-components/form-button"
import { FormFielld } from "@/components/form-components/form-field"
import { Layout } from "@/components/layout"
import { NextPage } from "next"
import { useState } from "react"

type FormData = {
  title: string
  ingredients: string
  intructions: string
}

const Index: NextPage<FormData> = ({}) => {
  const [recepies, getRecepies] = useState<FormData>({
    title: "",
    ingredients: "",
    intructions: "",
  })
  return (
    <div>
      <form action="/api/fetchRecepie" method="GET">
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="ingredients" name="ingredients" />
        <input type="text" placeholder="intructions" name="intructions" />
      </form>
    </div>
  )
}

export default Index
