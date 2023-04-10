import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  const user = await prisma.user.create({
    data: {
      name: "cam",
      email: "test@gmail.com",
    },
  })
  const allUsers = await prisma.user.findMany()

  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
