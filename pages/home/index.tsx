import { Layout } from "@/components/layout"
import RenderOutRecepiesModals from "@/components/modals/homeModal"
import RecepieModule from "@/components/modals/publishRecepie"
import RubrikRecepieFormView from "@/components/newRecepieComponents/rubrikRecepieFormView"
import { NextPage } from "next"
import { useSession } from "next-auth/react"
import { useState } from "react"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const [action, setAction] = useState("explore")
  const [background, setBackground] = useState("")
  const { data: session, status } = useSession()

  const openRecepieModal = () => {
    setAction("explore")
    setBackground("bg-white")
  }

  const openPublishModal = () => {
    setAction("publish")
    setBackground("bg-primaryPink")
  }

  return (
    <>
      <Layout bg={background}>
        {status == "authenticated" && (
          <div>signed in as {session.user?.email}</div>
        )}

        <RubrikRecepieFormView
          onClick={action == "explore" ? openPublishModal : openRecepieModal}
        />
        {action == "explore" ? <RenderOutRecepiesModals /> : <RecepieModule />}
      </Layout>
    </>
  )
}

export default Index
