import serverAuthentication from "@/libs/serverAuthentication"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end()
  }
  try {
    const currentLoggedInUser = await serverAuthentication(req)

    return res.status(400).json(currentLoggedInUser)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
