//import { PrismaClient } from "@prisma/client"
//const prisma = new PrismaClient()

import { prisma } from "../../lib/prisma"

import type { NextApiRequest, NextApiResponse } from "next"

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, ingredients, description, pic } = req.body

  try {
    await prisma.recepie.create({
      data: {
        name,
        ingredients,
        description,
        pic,
      },
    })
    res.status(200).json({ message: "Recepie created" })
  } catch (error) {
    console.log("det sket sig")
  }
}
