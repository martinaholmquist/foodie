import type { NextApiRequest } from "next"
import { getSession } from "next-auth/react"
import prismadb from "@/libs/prismadb"

const serverAuthentication = async (req: NextApiRequest) => {
  const session = await getSession({ req })
  if (!session?.user?.email) {
    throw new Error("Not Signed In")
  }
  const currentLoggedInUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  })
  if (!currentLoggedInUser) {
    throw new Error("Not signed in")
  }
  return { currentLoggedInUser }
}
export default serverAuthentication
