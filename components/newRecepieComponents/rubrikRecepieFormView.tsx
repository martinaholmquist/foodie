

interface Props {}

const RubrikRecepieFormView = ({}) => {
    return (
      <div>
        {/* bild / exit */}
        <div className="h-24 pl-4 pt-4">
          <img src="Loggo_B&W.png" alt="Foodie.logo" width={100} />
        </div>
        {/* rubrik */}
        <div className="h-10">
          <h1 className="text-center font-title font-bold text-2xl">
            Publicera recept
          </h1>
        </div>
      </div>
    )
}

export default RubrikRecepieFormView