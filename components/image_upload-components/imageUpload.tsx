import { useState } from "react"
import { storage } from "@/libs/firebase"
import { ref, uploadBytes } from "firebase/storage"
import { Blob } from "buffer"

type Image = {
  name: string
  type: any
}

const ImageUpload = () => {
  const [imageUpload, setImageUpload] = useState<Image>()

  const uploadImage = async () => {
    if (imageUpload == null) return
    const imageRef = ref(storage, `images/${imageUpload.name}`)
    uploadBytes(imageRef, imageUpload.type).then(() => {
      alert("Image Uploaded")
    })
  }
  return (
    <div>
      <input
        type="file"
        onChange={(e: any) => {
          setImageUpload(e.target.files[0])
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  )
}
export default ImageUpload
