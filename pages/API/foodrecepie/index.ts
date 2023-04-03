import { GetStaticProps, NextApiRequest, NextApiResponse } from "next"
/*  DENNA FUNKAR*****************************************
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
  // Read all users from the database and print them to the console
  const allUsers = await prisma.recepie.findMany()
  console.log(allUsers)
}

main().catch((e) => console.error(e))*/

/*
export async function getServerSideProps() {
  const prisma = new PrismaClient()
  const data = await prisma.recepie.findMany()
  return {
    props: {
      data: data.map((x) => x.name),
    },
  }
}*/

/*
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.recepie.findMany({
    select: { name: true },
  })

  return {
    props: { feed },
  }
}*/

/*
// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, ingredients, description, pic } = req.body
  //const recepie = await prisma.recepie.findMany()({
  const result = await prisma.recepie.create({
    data: {
      name: name,
      ingredients: ingredients,
      description: description,
      pic: pic,
    },
  })
  return res.status(201).json(result)
}*/

/*
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const recepie = await prisma.recepie.findMany()
    return res.send(recepie)
  } else if (req.method === "POST") {
    const { body: data } = req //behöver kontrollera datan, dvs validera så att datan sommer in är "korrekt", detta behövs läggas in i koden senare
    console.log(data)
    const newRecepie = await prisma.recepie.create({ data })
    return res.status(201).send(newRecepie)
  }
}*/

/*
export const getStaticProps: GetStaticProps = async () => {
  const recepie = await prisma.recepie.findMany()
  console.log(recepie)
  return {
    props: { recepie },
  }
}*/

/*
export default async function handle(
  req: { body: { name: any; ingredients: any; description: any; pic: any } },
  res: { json: (arg0: any) => void }
) {
  const { name, ingredients, description, pic } = req.body
  const result = await prisma.recepie.create({
    data: {
      name: name,
      ingredients: ingredients,
      description: description,
      pic: pic,
    },
  })
  res.json(result)
}*/

/*
export default async function getStaticProps() {
  // Get all foods in the "food" db
  const allfoods = await prisma.recepie.findMany()

  return {
    props: allfoods,
  }
}*/

/*
export default async function getStaticProps(req: { body: { name: any; ingredients: any; description: any; pic: any } },
    res: { json:  (arg0: any) => void })
  {
    const { name, ingredients, description, pic } = req.body
    //const recepie = await prisma.recepie.findMany()({
    const result = await prisma.recepie.create({
      data: {
        name: name,
        ingredients: ingredients,
        description: description,
        pic: pic,
      },
    })
    return res.result(201).json(result)
  }*/
