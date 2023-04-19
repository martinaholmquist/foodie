import { useState } from "react"
import FirstRecepieFrom from "./firstRecepieFrom"
import FirstRecepieFromPhoto from "./firstRecepieFromPhoto"
import NewRecepiePopUpTableOption from "./newRecepiePopUpTableOption"

type Recepie = {
  title: string
  time: string
  servings: string
  ingredients: []
  intructions: []
  authorId: string
  image: string
}

const FirstRecepieFromView = ({ }) => {
  
const [recepie, setRecepie] = useState<Recepie>({
  title: "",
  time: "",
  servings: "",
    ingredients: [],
    intructions: [],
    authorId: "",
    image: "",
  })

  return (
    <div className="space-y-4 py-8 flex flex-col justify-center">
      <FirstRecepieFrom
        placeholderProp={"Namn på maträtt"}
        value={recepie.title}
        onChange={(e) => setRecepie({ ...recepie, title: e.target.value })}
      />

      <FirstRecepieFromPhoto value={""} />
      <NewRecepiePopUpTableOption
        name="Antal portioner"
        a={"2"}
        b={"4"}
        c={"6"}
        d={"8"}
        value={recepie.servings}
        onChange={(e) => setRecepie({ ...recepie, servings: e.target.value })}
      />
      <NewRecepiePopUpTableOption
        name="Tid"
        a={"5"}
        b={"15"}
        c={"45"}
        d={"60"}
        value={recepie.time}
        onChange={(e) => setRecepie({ ...recepie, time: e.target.value })}
      />
    </div>
  )
}

export default FirstRecepieFromView