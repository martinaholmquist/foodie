import prismadb from "@/libs/prismadb"
import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next"
/*

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end()
  }
  try {
    const recepie = await prismadb.recepie.findMany({})
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}*/

/*
export default async function handler() {
  const recepieSheet = await prismadb.recepie.findMany({})

  return {
    props: {
      recepieSheet: JSON.stringify(recepieSheet),
    },
  }
}*/

/*
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // load all scores from the database and include player name
  // from the players table.
  const allRecepies = await prismadb.recepie.findMany({})

  return {
    statusCode: 200,
    body: JSON.stringify(
      allRecepies.map((recepie) =>
        // flatten player name into score entry
        ({})
      ),
      (key, value) =>
        // need to add a custom serializer because CockroachDB IDs map to
        // JavaScript BigInts, which JSON.stringify has trouble serializing.
        typeof value === "bigint" ? value.toString() : value
    ),
  }
}

export { handler }*/

export const getAllUsers = async () => {
  const recepies = await prismadb.recepie.findMany({})
  return recepies
}
