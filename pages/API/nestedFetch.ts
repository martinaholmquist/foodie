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
    const allRecepies = await prismadb.recepie.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],

      include: {
        author: {
          select: {
            name: true,
            profileImage: true,
            id: true,
          },
        },
      },
    })

    return res.status(200).json(allRecepies)
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}

/**********************gamla nested fech för USER******************** 

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
          orderBy: {
            createdAt: "desc",
          },
          select: {
            title: true,
            image: true,
            time: true,
            id: true,
            createdAt: true,
          },
        },
      },
    })

    return res.status(200).json(allRecepies)
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}*/
