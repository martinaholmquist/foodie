import { NextApiRequest, NextApiResponse } from "next"
import prismadb from "../../libs/prismadb"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end()
  }

  try {
    const { title, ingredients, intructions, authorId } = req.body

    const user = await prismadb.recepie.create({
      data: {
        title,
        ingredients,
        intructions,
        authorId,
      },
    })

    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
