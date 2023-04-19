import prismadb from "@/libs/prismadb"
import type { NextApiRequest, NextApiResponse } from "next"

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(404).end
  }

  try {
    const allUsers = await prismadb.user.findMany()

    return res.status(200).json(allUsers)
  } catch (error) {
    return res.status(400).end()
  }
}
