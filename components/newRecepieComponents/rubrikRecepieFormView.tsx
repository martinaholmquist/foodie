interface Props {
  onClick?: (...args: any) => any
}

const RubrikRecepieFormView = ({ onClick }: Props) => {
  return (
    <div className="">
      {/* bild / exit */}
      <div className="h-[75px] pl-5 pt-8 ">
        <img src="Logo Foodie Black 1 (1).svg" alt="Foodie.logo" />
      </div>
      {/* rubrik */}
      <div className="flex justify-center h-10 space-x-10 text-[30px] mt-14 mb-2">
        <div className="font-title">
          <button className="no-underline hover:underline" onClick={onClick}>
            Utforska
          </button>
        </div>
        <div className="text-[35px]">
          <p>|</p>
        </div>
        <div className="font-title">
          <button className="no-underline hover:underline" onClick={onClick}>
            Publicera
          </button>
        </div>
      </div>
    </div>
  )
}

export default RubrikRecepieFormView
