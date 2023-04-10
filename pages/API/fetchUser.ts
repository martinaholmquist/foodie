import prismadb from "@/libs/prismadb"
import type { NextApiRequest, NextApiResponse } from "next"

interface Data {
  email: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(405).end()
  }
  try {
    const user = await prismadb.user.findMany({})
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
