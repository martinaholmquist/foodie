interface Props {
  placeholderProp: string
  onClick?: (...args: any) => any
}

const AddfieldForm = ({ onClick, placeholderProp }: Props) => {
  return (
    <div className="text-center">
      <div className="relative pt-4">
        <button
          type="button"
          className=" relative border rounded-md w-full h-12 px-2 font-sans shadow-lg text-center bg-white"
          onClick={onClick}
        >
          {placeholderProp}
        </button>
      </div>
    </div>
  )
}

export default AddfieldForm
