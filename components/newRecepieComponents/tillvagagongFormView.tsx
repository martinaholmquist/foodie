import TillvagagongForm from "./tillvagagongForm"

interface Props {}

const TillvagagongFormView = ({}) => {
  return (
    <div className="h-auto">
      <h2 className=" px-5 font-title font-bold text-2xl">Tillvägagångssätt</h2>
      <div className="space-y-4 py-[16px]"></div>
      <TillvagagongForm />
    </div>
  )
}

export default TillvagagongFormView
