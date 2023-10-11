import { Logo } from "../hero-components/logo"

import { useRouter } from "next/router" //tina
import { useEffect, useState } from "react" //tina
import RenderOutRecepiesModals from "../modals/homeModal"
import SearchResultModal from "../modals/searchResultModal"
import { signOut } from "next-auth/react"
import { link } from "fs"

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
    router.push(`/home?q=${encodedSearchQuery}`)
    props.setIsSearchSubmitted(true) //tina sista kollen
  }

  //when press exit search
  const handleClick = () => {
    props.setIsSearchSubmitted(false)
    router.push(`/home`)
    setSearchQuery("")
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="bg-anotherpink">
      {/* bild / exit */}
      <div className="h-[75px] pl-5 pt-8 ">
        <Logo foodieLogo={"/Loggo_B&W.png"} height={75} width={100} />
      </div>
      {/* exit */}
      <div className="absolute right-4 py-[18px] top-[1.2rem]">
        <button
          className="bg-white shadow-md shadow-black/40 rounded-full w-28 py-[5px]"
          //onClick={() => handleClickLogOut()}
          onClick={() => setShowModal(true)}
        >
          <div className="pl-6 text-sm font-sans">Logga ut</div>
          <img
            src="\Logout.png"
            alt="search"
            className="absolute right-[5.5rem] py-[5px] top-[1.4rem]"
          />
        </button>
      </div>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="rounded-[2rem] bg-white shadow-md shadow-black/40  relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5">
                  <p className="text-small font-bold font-sans">
                    Är du säker på att du vill logga ut?
                  </p>
                </div>
                <div className="flex justify-between p-4">
                  <button
                    className="bg-white shadow-md shadow-black/40 rounded-full w-28 py-[5px]"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Avbryt X
                  </button>
                  <button
                    className="bg-white shadow-md shadow-black/40 rounded-full w-28 py-[5px]"
                    type="button"
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth",
                      })
                    }
                  >
                    Logga ut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
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
        className={`relative flex flex-col gap-10 items-center pt-3 ${props.displaySearchBar} `}
      >
        <form className="flex justify-center w-full px-5  " onSubmit={onSearch}>
          <div className=" flex justify-between w-full ">
            <img
              src="\Frame 27.png"
              alt="search"
              className="absolute left-10 top-[1.2rem] py-[8px]"
            />

            <img
              onClick={() => handleClick()}
              src="\extitSearch.png"
              alt="search"
              className="absolute right-10 py-[9px] top-[1.2rem]"
            />

            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="flex-1 bg-white shadow-md shadow-black/40 rounded-full outline-none pl-12 h-12 "
            />
          </div>
        </form>
      </div>
      <div
        className={`relative flex flex-col gap-10 items-center ${props.displaySearch} ${props.displaySearchDisabled}`}
      >
        {""}
        {props.isSearchSubmitted && <SearchResultModal />}{" "}
      </div>
    </div>
  )
}

export default RubrikRecepieFormView
