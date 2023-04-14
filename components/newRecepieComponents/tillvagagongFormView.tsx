import TillvagagongForm from "./tillvagagongForm"
import AddfieldForm from "./addfieldForm"

interface Props {}

const TillvagagongFormView = ({}) => {
  return (
    <div className="h-auto space-y-4">
      <h2 className=" px-5 font-title font-bold text-2xl">Tillvägagångssätt</h2>
      <TillvagagongForm placeholderProp={"Steg"} siffra={1} />
      <TillvagagongForm placeholderProp={"Steg"} siffra={2} />
      <TillvagagongForm placeholderProp={"Steg"} siffra={3} />
      <AddfieldForm placeholderProp={"Lägg till steg"}/>
    </div>
  )
}

export default TillvagagongFormView
