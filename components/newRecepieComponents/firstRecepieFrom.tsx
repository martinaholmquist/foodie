interface Props {
  placeholderProp: string
}

const FirstRecepieFrom = ({placeholderProp}: Props) => {
  return (
    <div className=" text-center">
      <input
        type="text"
        placeholder= {placeholderProp}
        className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg"
      />
    </div>
  )
}

export default FirstRecepieFrom
