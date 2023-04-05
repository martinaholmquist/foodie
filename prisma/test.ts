import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      name: "Rich",
      email: "hello@prisma.com",
      username: "cstreete",
      posts: {
        create: {
          body: "Lots of really interesting stuff",
        },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
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
