import FirstRecepieFrom from "./firstRecepieFrom"
import FirstRecepieFromPhoto from "./firstRecepieFromPhoto"
import NewRecepiePopUpTableOption from "./newRecepiePopUpTableOption"

interface Props {}

const FirstRecepieFromView = ({}) => {
  return (
    <div className="space-y-4 py-8 flex flex-col justify-center">
      <FirstRecepieFrom placeholderProp={"Namn på maträtt"} />
      <FirstRecepieFromPhoto />
      <NewRecepiePopUpTableOption name="Antal portioner" a={"2"} b={"4"} c={"6"} d={"8"} />
      <NewRecepiePopUpTableOption name="Tid" a={"5"} b={"15"} c={"45"} d={"60"} />
      
    </div>
  )
}

export default FirstRecepieFromView