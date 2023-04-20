import { useState } from "react"
import { storage } from "@/libs/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export const ImageUpload = () => {
  const [imageUpload, setImageUpload] = useState<File>()
  const [url, setURL] = useState("")
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
      .then((url) => setURL(url))
  }
  return (
    <>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        onChange={(e: any) => {
          setImageUpload(e.target.files[0])
        }}
      />
    </>
  )
}
