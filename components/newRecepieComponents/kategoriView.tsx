import AddfieldFrom from "./addfieldForm"

interface Props {}

const KategoriView = ({}) => {
  return (
    <div className="h-1/4 pt-8">
      <h2 className=" px-5 font-title font-bold text-2xl">Kategori</h2>
      <div className="pt-4">
        <AddfieldFrom placeholderProp="Lägg till taggar" />
      </div>
    </div>
  )
}

export default KategoriView
