interface Props {
  placeholderProp: string
  value: string
}

const RenderAllRecepies = ({ placeholderProp, value }: Props) => {
  return (
    <div className=" text-center">
      <input
        type="text"
        placeholder={placeholderProp}
        value={value}
        className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg"
      />
    </div>
  )
}
export default RenderAllRecepies
