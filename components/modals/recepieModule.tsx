import RubrikRecepieFormView from "../newRecepieComponents/rubrikRecepieFormView"
import FirstRecepieFrom from "../newRecepieComponents/firstRecepieFrom"
import FirstRecepieFromPhoto from "../newRecepieComponents/firstRecepieFromPhoto"
import NewRecepiePopUpTableOption from "../newRecepieComponents/newRecepiePopUpTableOption"
import IngredienserRecepieFrom from "../newRecepieComponents/ingredienserRecepieFrom"
import AddfieldForm from "../newRecepieComponents/addfieldForm"
import TillvagagongForm from "../newRecepieComponents/tillvagagongForm"
import KuriosaForm from "../newRecepieComponents/kuriosaForm"
import NewRecepieShareButton from "../newRecepieComponents/newRecepieShareButton"
import { SyntheticEvent, useState } from "react"

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
  onChange?: (...args: any) => any
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
  
 /*  const onSubmit = async (e: SyntheticEvent) => {
    const data = await fetch("http://localhost:3000/api/newRecepie", {
      method: "POST",
      body: JSON.stringify(recepie),
      headers: { "Content-Type": "application/json" },
    })
    const res = await data.json()
    e.preventDefault()
  } */

  return (
    <>
       <form action=""   className="space-y-4"> 
        {/* autherID hidden */}
        <FirstRecepieFrom
          placeholderProp={""}
          value={"643003e89aa23529f72677a7"}
          onChange={(e) => setRecepie({ ...recepie, authorId: e.target.value })}
        />

        {/* Publicing button */}
        {/* <NewRecepieShareButton /> */}

        {/* Rubrik */}
        <RubrikRecepieFormView />
        {/* Första formuläradelen */}
        <FirstRecepieFrom
          placeholderProp={"Namn på maträtt"}
          value={recepie.title}
          onChange={(e) => setRecepie({ ...recepie, title: e.target.value })}
        />
        <FirstRecepieFromPhoto
          value={recepie.image}
          onChange={(e) => setRecepie({ ...recepie, image: e.target.value })}
        />
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
        <h2 className=" px-5 font-title font-bold text-2xl">
          Tillvägagångssätt
        </h2>
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

        {/* <input type="submit"/> */}
      </form>
    </>
  )
}

export default RecepieModule