import { useState } from "react"
import { storage } from "@/libs/firebase"
import { ref, uploadBytesResumable } from "firebase/storage"

export const ImageUpload = () => {
  const [imageUpload, setImageUpload] = useState<File>()

  const uploadImage = async () => {
    if (imageUpload == null) return
    const imageRef = ref(storage, `images/${imageUpload.name}`)

    const myUpload = uploadBytesResumable(imageRef, imageUpload, {
      contentType: "image/png",
    }).then(() => {
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
