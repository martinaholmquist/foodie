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
"use client"
import useCurrentLoggedInUser from "@/hooks/useCurrentUser"
import { NextPage } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
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
  const [data, setData] = useState<recepieProps[]>([])

  const recepieData = async () => {
    const res = await fetch("http://localhost:3000/api/recepies")
    const recepies = await res.json()
    setData(recepies)
  }
  useEffect(() => {
    recepieData()
  }, [])

  return (
    <div>
      {data.map((items) => (
        <div key={items.id}>
          <li>{items.title}</li>
          <li>{items.ingredients}</li>
          <div></div>
        </div>
      ))}
    </div>
  )
}

export default Index
