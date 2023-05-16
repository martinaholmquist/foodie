import prismadb from "@/libs/prismadb"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
          },
        },
      },
    })

    return res.status(200).json(recepie)
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
