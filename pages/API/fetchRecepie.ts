import prismadb from "@/libs/prismadb"
import { PrismaClient } from "@prisma/client"
import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next"

/*

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prismadb.recepie.findMany()
    /*return data.map(({ title, ingredients, intructions }) => ({
      title,
      ingredients,
      intructions,
    }))*/
/*
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
}*/
/*
type data = {
  title: string
  ingredients: string
  intructions: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<data>
) {
  const response = await fetch("http://localhost:3000/api/fetchRecepie")
  const data = await response.json()
  const newRecepie: data = {
    title: data.title,
    ingredients: data.ingredients,
    intructions: data.intructions,
  }
  res.status(200).json(newRecepie)
}*/

/* denna funkar!!!!
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(404).end
  }
  try {
    const allRecepies = await prismadb.recepie.findMany()
    return res.status(200).json(allRecepies)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await prismadb.recepie.findMany()
    return res.status(200).json(response)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
