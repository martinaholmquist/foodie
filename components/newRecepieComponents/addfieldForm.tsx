interface Props {
    placeholderProp: string
}

const AddfieldForm = ({ placeholderProp }: Props) => {
  return (
    <div className="text-center">
      <div className="relative">
        <div className="absolute left-11 top-[14px]">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.88 10.64H10.12V18.84H8.36V10.64H0.6V8.88H8.36V0.679999H10.12V8.88H17.88V10.64Z"
              fill="black"
            />
          </svg>
        </div>
        <button className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg text-center bg-white">
          {placeholderProp}
        </button>
      </div>
    </div>
  )
}

export default AddfieldForm