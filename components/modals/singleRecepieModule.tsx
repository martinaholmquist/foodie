import { Layout } from "../layout"

interface Props {
  onExploreClick: () => void
  onPublishClick: () => void
  exploreDisabled: boolean
  publishDisabled: boolean
  displayPub: string
  displayExpl: string
  col: string
  amount?: number
}

const SingleRecepieModule = (props: Props) => {
  return (
    <div className="">
      {/* rubrik */}
      <div className="flex justify-center space-x-16 text-2xl mb-2  ">
        <div className="font-title relative">
          <button
            className="pb-2"
            //className="border-b-[6px] border-black rounded-[3px]"
            onClick={props.onExploreClick}
            disabled={props.exploreDisabled}
          >
            Ingredienser ({props.amount})
          </button>
          <div
            className={`${props.col} h-[5px] w-full ${props.displayExpl}  bottom-1 rounded-md`}
          ></div>
        </div>

        <div className="font-title relative">
          <button
            onClick={props.onPublishClick}
            disabled={props.publishDisabled}
          >
            Gör så här
          </button>
          <div
            className={`${props.col} h-[5px] w-full  ${props.displayPub}  bottom-1 rounded-md`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default SingleRecepieModule
