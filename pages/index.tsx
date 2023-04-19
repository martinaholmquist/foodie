/*interface recepieProps {
  recepies: [
    {
      id: string
      servings: string
      title: string
      time: string
      ingredients: string
      intructions: string
      kuriosa: string
    }
  ]
}

export default function Home({ recepies }: recepieProps) {
  return (
    <div>
      {recepies.map((items) => (
        <div key={items.id}>
          <li>{items.title}</li>
          <li>{items.ingredients}</li>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/recepies")
  const recepies = await res.json()
  return {
    props: { recepies },
  }
}*/

/*
import { NextPage, GetServerSideProps } from "next"

interface recepieProps {
  recepies: [
    {
      id: string
      servings: string
      title: string
      time: string
      ingredients: string
      intructions: string
      kuriosa: string
    }
  ]
}

const Index: NextPage<recepieProps> = ({ recepies }) => {
  return (
    <div>
      {recepies.map((items) => (
        <div key={items.id}>
          <li>{items.title}</li>
          <li>{items.ingredients}</li>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/recepies")
  const recepies = await res.json()
  return {
    props: { recepies },
  }
}

export default Index
*/
import { signOut } from "next-auth/react"
import useCurrentLoggedInUser from "@/hooks/useCurrentUser"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { Layout } from "@/components/layout"

interface recepieProps {
  id: string
  servings: string
  title: string
  time: string
  ingredients: string
  intructions: string
  kuriosa: string
}

const Index: NextPage<recepieProps> = ({}) => {
  return <div>Home Page</div>
}

export default Index

/*
  <div>
      <button
        className=" p-5 bg-white"
        onClick={() => signOut({ callbackUrl: "/auth" })}
      >
        Sign Out
      </button>
      <h1>{session?.user?.email}</h1>
    </div>
    

*/
