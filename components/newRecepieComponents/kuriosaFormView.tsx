
import KuriosaForm from "./kuriosaForm"

interface Props {

}

const KuriosaFormView = ({}) => {
    return (
      <div className=" h-auto pt-8">
        <h2 className=" px-5 font-title font-bold text-2xl">
          Kuriosa
        </h2>
        <KuriosaForm />
      </div>
    )
}

export default KuriosaFormView