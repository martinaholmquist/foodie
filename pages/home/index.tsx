import { Layout } from "@/components/layout"
import RenderOutRecepiesModals from "@/components/modals/homeModal"
import RecepieModule from "@/components/modals/publishRecepie"
import SearchResultModal from "@/components/modals/searchResultModal"
import RubrikRecepieFormView from "@/components/newRecepieComponents/rubrikRecepieFormView"
import { NextPage } from "next"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const [action, setAction] = useState("explore")

  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false)

  const { data: session, status } = useSession()

  const handleExploreClick = () => {
    setAction("explore")
  }
  const handlePublishClick = () => {
    setAction("publish")
  }

  return (
    <>
      <Layout>
        <RubrikRecepieFormView
          displayExpl={action === "explore" ? "absolute" : "hidden"}
          displayPub={action === "publish" ? "absolute" : "hidden"}
          displaySearchBar={action === "explore" ? "absolute" : "hidden"}
          displaySearch={action === "explore" ? "absolute" : "hidden"}
          onExploreClick={handleExploreClick}
          onPublishClick={handlePublishClick}
          exploreDisabled={action === "explore"}
          publishDisabled={action === "publish"}
          displaySearchDisabled={action === "explore"}
          isSearchSubmitted={isSearchSubmitted}
          setIsSearchSubmitted={setIsSearchSubmitted}
          col="bg-crimsonRed"
        />

        {action == "explore" && !isSearchSubmitted && (
          <RenderOutRecepiesModals />
        )}
        {action == "publish" && <RecepieModule />}
      </Layout>
    </>
  )
}

export default Index
