import FirstRecepieFrom from "./firstRecepieFrom"
import FirstRecepieFromPhoto from "./firstRecepieFromPhoto"


interface Props {}

const FirstRecepieFromView = ({}) => {
  return (
    <div className="space-y-4 py-8">
      <FirstRecepieFrom placeholderProp={"Namn på maträtt"} />
      <FirstRecepieFromPhoto />
      <FirstRecepieFrom placeholderProp={"Antal portioner"} />
      <FirstRecepieFrom placeholderProp={"Tid"} />
    </div>
  )
}

export default FirstRecepieFromView