import prismadb from "@/libs/prismadb"
import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { AuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
  // Next Auth Inställningar för inlogg
  adapter: PrismaAdapter(prismadb),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      id: "credentials",
      name: "credentials ",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      //Kontroll av epost och lösenord
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required")
        }
        //Kontroll av befentlig användare med epost
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        //Kontroll att användaren finns
        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist ")
        }
        //Kontroll av lösenord mot databas
        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        )
        //Felhantering för ogiltig lösenord
        if (!isCorrectPassword) {
          throw new Error("Incorrect password")
        }
        return user
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV == "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth(authOptions)
