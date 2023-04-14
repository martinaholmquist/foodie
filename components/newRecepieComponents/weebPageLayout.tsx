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
      <RubrikRecepieFormView />

      <FirstRecepieFromView />

      <IngredienserRecepieFromView />

      <TillvagagongFormView />

      <KuriosaFormView />

      <KategoriView />
    </div>
  )
}

export default weebPageLayout
