interface Props {
  placeholderProp: string
  onClick?: (...args: any) => any
}

const AddfieldForm = ({ onClick, placeholderProp }: Props) => {
  return (
    <div className="text-center">
      <div className="pt-4">
        <button
          type="button"
          className=" reletive border rounded-md w-full h-12 font-sans shadow-lg text-center bg-white"
          onClick={onClick}
        >
          <img
            src="/plustecken.png"
            alt="plustecken"
            className="absolute px-3 py-[2px]"
          />
          {placeholderProp}
        </button>
      </div>
    </div>
  )
}

export default AddfieldForm
