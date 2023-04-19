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
import { authOptions } from "@/pages/api/auth/[...nextauth]"


/* TODO-
ingrediens och instruktions varje tabel egen arrayindex nu har alla samma
*/

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
    authorId: "643003e89aa23529f72677a7",
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
    <div className="flex flex-col justify-center">
      <form action="" onSubmit={onSubmit} className="space-y-4">
        {/* autherID hidden */}
        <div hidden>
          <FirstRecepieFrom
            placeholderProp={""}
            value={recepie.authorId}
            onChange={(e) =>
              setRecepie({ ...recepie, authorId: e.target.value })
            }
          />
        </div>
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
        <IngredienserRecepieFrom
          placeholderProp={"Ingrediens"}
          siffra={1}
          value={recepie.ingredients}
          onChange={(e) =>
            setRecepie({ ...recepie, ingredients: e.target.value })
          }
        />
        <IngredienserRecepieFrom
          placeholderProp={"Ingrediens"}
          siffra={2}
          value={recepie.ingredients}
          onChange={(e) =>
            setRecepie({ ...recepie, ingredients: e.target.value })
          }
        />
        <IngredienserRecepieFrom
          placeholderProp={"Ingrediens"}
          siffra={3}
          value={recepie.ingredients}
          onChange={(e) =>
            setRecepie({ ...recepie, ingredients: e.target.value })
          }
        />
        {/* <AddfieldForm placeholderProp={""} />
 */}
        {/* Tillvägagångssätt */}
        <h2 className=" px-5 font-title font-bold text-2xl">
          Tillvägagångssätt
        </h2>
        <TillvagagongForm
          placeholderProp={"Steg"}
          siffra={1}
          value={recepie.intructions}
          onChange={(e) =>
            setRecepie({ ...recepie, intructions: e.target.value })
          }
        />
        <TillvagagongForm
          placeholderProp={"Steg"}
          siffra={2}
          value={recepie.intructions}
          onChange={(e) =>
            setRecepie({ ...recepie, intructions: e.target.value })
          }
        />
        <TillvagagongForm
          placeholderProp={"Steg"}
          siffra={3}
          value={recepie.intructions}
          onChange={(e) =>
            setRecepie({ ...recepie, intructions: e.target.value })
          }
        />
        <AddfieldForm placeholderProp={"Lägg till steg"} />

        {/* Kuriosa */}
        <h2 className=" px-5 font-title font-bold text-2xl">Kuriosa</h2>
        <KuriosaForm />

        {/* Kategori */}
        <h2 className=" px-5 font-title font-bold text-2xl">Kategori</h2>
        <AddfieldForm placeholderProp="Lägg till taggar" />

        <input type="submit" name="Post" />
      </form>
    </div>
  )
}

export default RecepieModule
