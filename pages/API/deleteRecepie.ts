import prismadb from "@/lib/prismadb"
import { NextApiRequest, NextApiResponse } from "next"

// API rout för delete
export default async function deleteRecepie(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.body
    const post = await prismadb.recepie.delete({
      where: {
        id: id,
      },
    })
    res.json(post)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
