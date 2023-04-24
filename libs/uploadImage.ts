import { useState } from "react"
import { storage } from "./firebase"
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage"

type ImageUploadProps = {
  setImageUrl: (url: string) => void
}

export const ImageUpload = ({ setImageUrl }: ImageUploadProps) => {
  const [imageUpload, setImageUpload] = useState<File>()

  const uploadImage = async () => {
    if (imageUpload == null) return
    const imageRef = ref(storage, `images/${imageUpload.name}`)

    const myUpload = uploadBytesResumable(imageRef, imageUpload, {
      contentType: "image/png",
    })
      .then(() => {
        alert("Image Uploaded")
      })
      .then(() => getDownloadURL(ref(storage, `images/${imageUpload.name}`)))
      .then((url) => setImageUrl(url))
  }
}
