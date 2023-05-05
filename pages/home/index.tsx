import { Layout } from "@/components/layout"
import RenderOutRecepiesModals from "@/components/modals/homeModal"
//import RenderOutRecepiesModals from "@/components/modals/homeModalNew"
import RecepieModule from "@/components/modals/publishRecepie"
import SearchResultModal from "@/components/modals/searchResultModal"
import RubrikRecepieFormView from "@/components/newRecepieComponents/rubrikRecepieFormView"
import SearchInput from "@/components/searchInput"
import { NextPage } from "next"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const [action, setAction] = useState("explore")

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
        <div>Inloggad som {session?.user?.email}</div>

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
          //isSearchSubmitted={action === "searchResult"}
          col="bg-crimsonRed"
        />

        {action == "explore" ? <RenderOutRecepiesModals /> : <RecepieModule />}
      </Layout>
    </>
  )
}

export default Index
