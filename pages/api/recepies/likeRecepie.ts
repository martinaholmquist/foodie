import type { NextApiRequest, NextApiResponse } from "next"
import prismadb from "@/libs/prismadb"

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { recepieId, authorId } = req.body
  if (req.method !== "POST") {
    return res.status(404).end
  }

  try {
    const updatedRecipe = await prismadb.recepie.update({
      where: { id: recepieId },
      data: {
        likes: {
          create: {
            authorId,
          },
        },
      },
      include: {
        likes: true,
      },
    })

    return res.status(200).json(updatedRecipe)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
