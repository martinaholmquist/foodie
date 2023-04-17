import IngredienserRecepieFrom from "./ingredienserRecepieFrom"
import AddfieldForm from "./addfieldForm"

interface Props {}

const IngredienserRecepieFromView = ({}) => {
  return (
    <div className="h-auto">
      <h2 className=" px-5 font-title font-bold text-2xl">Ingredienser</h2>
      <div className=" flex flex-col py-8 space-y-4">
        <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={1} />
        <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={2} />
        <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={3} />
        <AddfieldForm placeholderProp="Lägg till ingrediens"/>
      </div>
    </div>
  )
}

export default IngredienserRecepieFromView
