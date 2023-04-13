import prismadb from "@/lib/prismadb"
import { NextApiRequest, NextApiResponse } from "next"

export default async function updateRecepie(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await prismadb.recepie.update
    return res.status(200).json(response)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
