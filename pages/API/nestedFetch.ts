import prismadb from "@/libs/prismadb"
import type { NextApiRequest, NextApiResponse } from "next"

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(404).end()
  }

  try {
    const allRecepies = await prismadb.user.findMany({
      include: {
        recepies: {
          select: {
            title: true,
            image: true,
            id: true,
          },
        },
      },
    })
    // console.log(allRecepies)
    return res.status(200).json(allRecepies)
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
