import prismadb from "@/libs/prismadb"

import type { NextApiRequest, NextApiResponse } from "next"
import { type } from "os"

type Like = {
  id: string
  authorId: string
  recepieId: string
}

interface Recepie {
  id: string
  likes: Like[]
  author: {
    id: string
    username: string
    profileImage: string | null
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Recepie[]>
) {
  if (req.method !== "GET") {
    return res.status(404).end()
  }

  try {
    // fetch all recipes
    const recepie = await prismadb.recepie.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        author: {
          select: {
            username: true,
            profileImage: true,
            id: true,
          },
        },
        likes: {},
      },
    })

    return res.status(200).json(recepie)
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
