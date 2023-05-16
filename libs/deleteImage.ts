import { ref, deleteObject } from "firebase/storage"
import { storage } from "./firebase"

const deleteImage = async (fileName: any) => {
  const desertRef = ref(storage, "images/" + fileName)
  deleteObject(desertRef)
    .then(() => {
      console.log("Delete Succsess")
    })
    .catch((error) => {})
}
export default deleteImage
