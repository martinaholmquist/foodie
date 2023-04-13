import ImageUpload from "@/components/image_upload-components/imageUpload"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <ImageUpload />
    </div>
  )
}

export default Index
