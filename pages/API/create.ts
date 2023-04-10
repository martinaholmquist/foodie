//This API route will create a product in the database.

//const prisma = new PrismaClient()  HELA TIDEN GÖMD
//import { PrismaClient, recepie } from "@prisma/client"

import prisma from "../../libs/prismadb"
/*
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end()
  }

  try {
    const { name, ingredients, description, pic } = req.body
    const recepie = await prisma.recepie.create({
      data: { name, ingredients, description, pic },
    })
    return res.status(200).json({ recepie })
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}*/
