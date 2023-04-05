import prismadb from "@/libs/prismadb"
import { RegisterForm } from "./types.server"
import { json } from "stream/consumers"

export const register = async (form: RegisterForm) => {
  const exists = await prismadb.user.count({ where: { email: form.email } })

  if (exists) {
    return json()
  }
}
