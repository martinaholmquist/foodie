import FirstRecepieFromView from "./firstRecepieFromView"
import IngredienserRecepieFromView from "./ingredienserRecepieFromView"
import KategoriView from "./kategoriView"
import KuriosaFormView from "./kuriosaFormView"
import RubrikRecepieFormView from "./rubrikRecepieFormView"
import TillvagagongFormView from "./tillvagagongFormView"

interface Props {}

const weebPageLayout = ({}) => {
  return (
    <div className="h-screen">
      {/* Rubrik + foodie */}
      <RubrikRecepieFormView />
      {/* 1 formulär */}
      <FirstRecepieFromView />
      {/* 2 formulär */}
      <IngredienserRecepieFromView />
      {/* 3 formulär */}
      <TillvagagongFormView/>
      {/* Kuriosa */}
      <KuriosaFormView/>
      {/* Kategori */}
      <KategoriView/>
    </div>
  )
}

export default weebPageLayout
