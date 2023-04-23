import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage"
import { useState } from "react"
import { storage } from "./firebase"

type Props = {
  imageUpload: File | null
  setUrl: (url: string) => void
}
const handleUpload = async ({ imageUpload, setUrl }: Props) => {
  if (imageUpload == null) return
  const imageRef = ref(storage, `images/${imageUpload.name}`)

  const myUpload = uploadBytesResumable(imageRef, imageUpload, {
    contentType: "image/png",
  })
    .then(() => {
      alert("Image Uploaded")
    })
    .then(() => getDownloadURL(ref(storage, `images/${imageUpload.name}`)))
    .then((url) => {
      setUrl(url)
    })
}

export default handleUpload
