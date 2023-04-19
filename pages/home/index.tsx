import { Layout } from "@/components/layout"
import RenderOutRecepiesModals from "@/components/modals/homeModal"
import RecepieModule from "@/components/modals/publishRecepie"
import RubrikRecepieFormView from "@/components/newRecepieComponents/rubrikRecepieFormView"
import { NextPage } from "next"
import { useState } from "react"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const [action, setAction] = useState("explore")

  const openRecepieModal = () => {
    setAction("explore")
  }

  const openPublishModal = () => {
    setAction("publish")
  }

  return (
    <>
      <Layout>
        <RubrikRecepieFormView
          onClick={action == "explore" ? openPublishModal : openRecepieModal}
        />

        {action == "explore" ? <RenderOutRecepiesModals /> : <RecepieModule />}
      </Layout>
    </>
  )
}

export default Index
