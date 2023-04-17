import { useState } from "react"
import RubrikRecepieFormView from "../newRecepieComponents/rubrikRecepieFormView"
import FirstRecepieFrom from "../newRecepieComponents/firstRecepieFrom"
import FirstRecepieFromPhoto from "../newRecepieComponents/firstRecepieFromPhoto"
import NewRecepiePopUpTableOption from "../newRecepieComponents/newRecepiePopUpTableOption"
import IngredienserRecepieFrom from "../newRecepieComponents/ingredienserRecepieFrom"
import AddfieldForm from "../newRecepieComponents/addfieldForm"
import TillvagagongForm from "../newRecepieComponents/tillvagagongForm"
import KuriosaForm from "../newRecepieComponents/kuriosaForm"

type Recepie = {
  title: string
  time: string
  servings: string
  ingredients: []
  intructions: []
  authorId: string
  image: string
}

interface props {
  placeholder: string
  Number: number
}

const RecepieModule = ({}) => {
 
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
    <div className="flex flex-col justify-center space-y-4">
      {/* Rubrik */}
      <RubrikRecepieFormView />
      {/* Första formuläradelen */}
      <FirstRecepieFrom
        placeholderProp={"Namn på maträtt"}
        value={recepie.title}
        onChange={(e) => setRecepie({ ...recepie, title: e.target.value })}
      />
      <FirstRecepieFromPhoto />
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
      {/* IngredienserFrom */}
      <h2 className=" px-5 font-title font-bold text-2xl">Ingredienser</h2>
      <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={1} />
      <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={2} />
      <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={3} />
      <AddfieldForm placeholderProp={""} />

      {/* Tillvägagångssätt */}
      <h2 className=" px-5 font-title font-bold text-2xl">Tillvägagångssätt</h2>
      <TillvagagongForm placeholderProp={"Steg"} siffra={1} />
      <TillvagagongForm placeholderProp={"Steg"} siffra={2} />
      <TillvagagongForm placeholderProp={"Steg"} siffra={3} />
      <AddfieldForm placeholderProp={"Lägg till steg"} />

      {/* Kuriosa */}
      <h2 className=" px-5 font-title font-bold text-2xl">Kuriosa</h2>
      <KuriosaForm />

      {/* Kategori */}
      <h2 className=" px-5 font-title font-bold text-2xl">Kategori</h2>
      <AddfieldForm placeholderProp="Lägg till taggar" />
    </div>
  )
}

export default RecepieModule