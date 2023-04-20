import RenderOutRecepiesModals from "@/components/modals/renderOutRecepiesModals"

import { NextPage } from "next"
import RenderOutRecepieModule from "@/components/modals/renderOutRecepieModule"

interface Props {}
//<RenderOutRecepiesModals />

// <RenderOutRecepieModule />
const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <RenderOutRecepieModule />
    </div>
  )
}

export default Index
