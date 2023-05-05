import { Logo } from "../hero-components/logo"

import { useRouter } from "next/router" //tina
import { useState } from "react" //tina
import RenderOutRecepiesModals from "../modals/homeModal"
import SearchResultModal from "../modals/searchResultModal"

interface Props {
  onExploreClick: () => void
  onPublishClick: () => void

  exploreDisabled: boolean
  publishDisabled: boolean
  displaySearchDisabled: boolean

  displayPub: string
  displaySearchBar: string
  displaySearch: string
  displayExpl: string
  col: string
}

const RubrikRecepieFormView = (props: Props) => {
  {
    /*ta in vad användaren skriver i sökrutan och skriva det i url:en */
  }
  const [searchQuery, setSearchQuery] = useState("") //tina
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false) //tina sista kollen

  const router = useRouter()

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault()
    const encodedSearchQuery = encodeURI(searchQuery)
    //router.push(`/search?q=${encodedSearchQuery}`)
    router.push(`/home?q=${encodedSearchQuery}`)
    setIsSearchSubmitted(true) //tina sista kollen
  }

  /* onSearchSubmit = () => {
    //tina sista kollen
    setIsSearchSubmitted(true)
    {
      ;`${props.setIsSearchSubmitted}`
    }
  }*/

  return (
    <div className="bg-anotherpink">
      {/* bild / exit */}
      <div className="h-[75px] pl-5 pt-8 ">
        <Logo foodieLogo={"/Loggo_B&W.png"} height={75} width={100} />
      </div>
      {/* rubrik */}
      <div className="flex justify-center space-x-10 text-[30px] mt-14 mb-2">
        <div className="font-title relative">
          <button
            className=""
            onClick={props.onExploreClick}
            disabled={props.exploreDisabled}
          >
            Utforska
          </button>
          <div
            className={`${props.col} h-[5px] w-full ${props.displayExpl}  bottom-1 rounded-md`}
          ></div>
        </div>
        <div className="text-[35px]">
          <p>|</p>
        </div>
        <div className="font-title relative ">
          <button
            onClick={props.onPublishClick}
            disabled={props.publishDisabled}
          >
            Publicera
          </button>
          <div
            className={`${props.col} h-[5px] w-full  ${props.displayPub}  bottom-1 rounded-md`}
          ></div>
        </div>
      </div>

      {/* search field */}
      <div
        className={`relative flex flex-col gap-10 items-center p-4 ${props.displaySearchBar} `}
      >
        <form className="flex justify-center w-2/3" onSubmit={onSearch}>
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-black bg-primaryPink rounded-full"
            placeholder="vad söker du efter?"
          />
        </form>
      </div>
      <div
        className={`relative flex flex-col gap-10 items-center p-4 ${props.displaySearch} ${props.displaySearchDisabled}`}
      >
        {""}
        {isSearchSubmitted && <SearchResultModal />}{" "}
      </div>
    </div>
  )
}

export default RubrikRecepieFormView
