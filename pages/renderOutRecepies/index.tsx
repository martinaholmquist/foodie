import RenderOutRecepiesModals from "@/components/modals/renderOutRecepiesModals"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <RenderOutRecepiesModals
        id={""}
        servings={""}
        title={""}
        time={""}
        ingredients={""}
        intructions={""}
        kuriosa={""}
        image={""}
      />
    </div>
  )
}

export default Index
