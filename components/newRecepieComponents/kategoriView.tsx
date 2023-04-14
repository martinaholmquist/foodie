import AddfieldFrom from "./addfieldForm"

interface Props {}

const KategoriView = ({}) => {
  return (
    <div className="bg-yellow-200 h-1/5">
      <h2 className=" px-5 font-title font-bold text-2xl">Kategori</h2>
      <AddfieldFrom placeholderProp="Lägg till taggar"/>
    </div>
  )
}

export default KategoriView
