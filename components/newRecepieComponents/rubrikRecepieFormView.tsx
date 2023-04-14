import Link from "next/link"


interface Props {}

const RubrikRecepieFormView = ({}) => {
    return (
      <div>
        {/* bild / exit */}
        <div className="h-[75px] pl-3 pt-8 mt-4">
          <img src="Logo Foodie Black 1 (1).svg" alt="Foodie.logo" />
        </div>
        {/* rubrik */}
        <div className="flex justify-center h-10 space-x-10 text-[30px] mt-14 mb-2">
          <div className="font-title">
            <button>Utforska</button>
          </div>
          <div className="text-[35px]">
            <p>|</p>
          </div>
          <div className="font-title">
            <button>Publicera</button>
          </div>
        </div>
      </div>
    )    
}

export default RubrikRecepieFormView