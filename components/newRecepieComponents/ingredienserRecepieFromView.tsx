import IngredienserRecepieFrom from "./ingredienserRecepieFrom"
import AddfieldForm from "./addfieldForm"

interface Props {}

const IngredienserRecepieFromView = ({}) => {
  return (
    <div className="h-auto">
      <h2 className=" px-5 font-title font-bold text-2xl">Ingredienser</h2>
      <div className=" flex flex-col py-8 space-y-4">
        <IngredienserRecepieFrom placeholder={"Ingrediens"} Number={1} />
        <IngredienserRecepieFrom placeholder={"Ingrediens"} Number={2} />
        <IngredienserRecepieFrom placeholder={"Ingrediens"} Number={3} />
        <AddfieldForm placeholderProp="Lägg till ingrediens"/>
      </div>
    </div>
  )
}

export default IngredienserRecepieFromView
