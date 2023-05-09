import { Logo } from "../hero-components/logo"

import { useRouter } from "next/router" //tina
import { useEffect, useState } from "react" //tina
import RenderOutRecepiesModals from "../modals/homeModal"
import SearchResultModal from "../modals/searchResultModal"

interface Props {
  onExploreClick: () => void
  onPublishClick: () => void

  exploreDisabled: boolean
  publishDisabled: boolean
  displaySearchDisabled: boolean

  isSearchSubmitted: boolean
  setIsSearchSubmitted: (value: boolean) => void

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
  //const [isSearchSubmitted, setIsSearchSubmitted] = useState(false) //tina sista kollen

  const router = useRouter()

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault()
    const encodedSearchQuery = encodeURI(searchQuery)
    //router.push(`/search?q=${encodedSearchQuery}`)
    router.push(`/home?q=${encodedSearchQuery}`)
    props.setIsSearchSubmitted(true) //tina sista kollen
    //sessionStorage.setItem("searchValue", encodedSearchQuery)
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

      {/* search field SEARCH BAR */}
      <div
        className={`relative flex flex-col gap-10 items-center p-4 ${props.displaySearchBar} `}
      >
        <img
          src="\Frame 27.png"
          alt="search"
          className="absolute left-12 py-[7px]"
        />

        <form className="flex justify-center w-80" onSubmit={onSearch}>
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="px-10 py-1 flex-1 bg-primaryPink rounded-full"
          />
        </form>
      </div>
      <div
        className={`relative flex flex-col gap-10 items-center p-4 ${props.displaySearch} ${props.displaySearchDisabled}`}
      >
        {""}
        {props.isSearchSubmitted && <SearchResultModal />}{" "}
      </div>
    </div>
  )
}

export default RubrikRecepieFormView
/*
<div className="flex items-center pr-3">
                <div>
                  <img src="/klocka.png" alt="klocka" />
                </div>*/
