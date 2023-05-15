import type { NextApiRequest, NextApiResponse } from "next"
import prismadb from "@/libs/prismadb"
import serverAuth from "@/libs/serverAuth"

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { recepieId, authorId } = req.body

  if (req.method !== "POST") {
    return res.status(404).end
  }

  try {
    const existingRecepieLike = await prismadb.like.findFirst({
      where: {
        authorId,
        recepieId,
      },
    })

    if (existingRecepieLike) {
      await prismadb.like.delete({
        where: {
          id: existingRecepieLike.id,
        },
      })
      return res.status(200).json(existingRecepieLike)
    } else {
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
    }
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
