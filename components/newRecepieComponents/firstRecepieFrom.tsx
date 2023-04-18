interface Props {
  placeholderProp: string
  value: string
  onChange?: (...args: any) => any
}

const FirstRecepieFrom = ({placeholderProp, value, onChange}: Props) => {
  return (
    <div className=" text-center">
      <input
        type="text"
        placeholder={placeholderProp}
        value={value}
        onChange={onChange}
        className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg"
      />
    </div>
  )
}

export default FirstRecepieFrom
