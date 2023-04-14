import { FormButton } from "@/components/form-components/form-button"
import { FormFielld } from "@/components/form-components/form-field"
import { Layout } from "@/components/newRecepieComponents/weebPageLayout"
import { NextApiRequest, NextApiResponse, NextPage } from "next"
import prismadb from "@/libs/prismadb"
import { GetServerSideProps } from "next"
import { useState, useEffect } from "react"

import { PrismaClient } from "@prisma/client"
import { table } from "console"

/*
<div className="max-w-5xl mx-auto">
      <h2 className="mt-24 font-bold text-grey-700 text-3xl ">RECEPT</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <table>
          <tr className="border border-grey-500 rounded-lg">
            <th>title</th>
            <th>ingredients</th>
            <th>intructions</th>
            <th>image</th>
          </tr>
          {recepies.map((items) => (
            <tr
              key={items.id}
              className="border border-grey-500 rounded-lg p-3"
            >
              <td>TITLE{items.title}</td>
              <td>ingredients{items.ingredients}</td>
              <td>intructions{items.intructions}</td>
              <td>
                {items.image && (
                  <img
                    src={items.image}
                    alt=""
                    width={250}
                    height={100}
                    className="object-cover rounded-lg border border-grey-500"
                  />
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
    */

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
      image: string
    }
  ]
}

export default function Home({ recepies }: recepieProps) {
  /* // delete recepie
  const [recepieId, setRecepieId] = useState<recepieProps>()
  const deleteRecepie = async (id: recepieProps) => {

    setRecepieId(id)

    const res = await fetch("http://localhost:3000/api/deleteRecepie", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: recepieId,
    })
  const deletedRecepie = await res.json()
  } */

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="mt-24 font-bold text-grey-700 text-3xl text-center">
        RECEPT
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-2 ">
        {recepies.map((items) => (
          <div key={items.id} className="border border-pink-900 rounded-lg p-5">
            {items.image && (
              <img
                src={items.image}
                alt=""
                width={550}
                height={100}
                className="p-4 object-cover rounded-full"
              />
            )}

            <div className="border border-grey-500 rounded-lg p-3 m-2">
              <dt className="flex justify-center ">Titel</dt>
              <dt>{items.title}</dt>
            </div>

            <div className="border border-grey-500 rounded-lg p-3 m-2">
              <ul className="flex justify-center">Ingredients</ul>
              <li className="marker:text-pink-900 list-disc pl-5 space-y-3 text-slate-500">
                {items.ingredients}
              </li>
            </div>

            <div className="border border-grey-500 rounded-lg p-3 m-2">
              <dt className="flex justify-center">Intructions</dt>
              <dt>{items.intructions}</dt>
            </div>
            {/* <button onClick={deleteRecepie}>Delete id: {items.id}</button> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/fetchRecepie")
  const recepies = await res.json()
  return {
    props: { recepies },
  }
}

/*

type FormData = {
  title: string
  ingredients: string
  intructions: string
}

const Index: NextPage<FormData> = ({}) => {
  const [recepies, getRecepies] = useState<FormData>({
    title: "",
    ingredients: "",
    intructions: "",
  })
  return (
    <div>
      <form action="/api/fetchRecepie" method="GET">
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="ingredients" name="ingredients" />
        <input type="text" placeholder="intructions" name="intructions" />
      </form>
    </div>
  )
}

export default Index*/

/*hhhhhhhhhhhhhhhhhhhhhhhhh
async function getPosts() {
  const res = await fetch("http://localhost:3000/api/fetchRecepie")
  if (!res.ok) {
  }
  const jsondata = await res.json()
  return jsondata
}

const Index: NextPage = ({}) => {
  const data = getPosts()
  console.log("hejsan här kommer datan", data)

  return (
    <div className="text-3xl text-indigo-700">
      <head>
        <title>Recept listan</title>
      </head>
      <main className="text-3xl text-red-200">
        <ul className="text-3xl text-green-300">
          {data.map((item) => (
            <li key="item.id">{item.title}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Index
*/

/*

type matLista = {
  title: string;
  ingredients: string;
  intructions: string;
};

const Mat: React.FunctionComponent<matLista> = (props) => {
  const { title, ingredients, intructions } = props;

  const Mat = ({matLista})=>{

  return(
    <table>
      <tr>
        <th>title</th>
        <th>ingredients</th>
        <th>intructions</th>
      </tr>
      {matLista.map((recepie)=>(
      <tr key={recepie.id}>
        <td>{recepie.title}</td>
        <td>{recepie.ingredients}</td>
        <td>{recepie.intructions}</td>
      </tr>
      
      ))}
    </table>
  )
}
const prisma = new PrismaClient();

export const getServerSideProps = async() =>{
  const allarecept = await prisma.recepie.findMany();
  return{
    props: {
      matLista: allarecept
    }
  }
}
export default Mat
*/

/*
const Index: NextPage = ({}) => {
  const [title, setTilte] = useState("")
  async function getPosts() {
    const res = await fetch("http://localhost:3000/api/fetchRecepie")
    const jsondata = await res.json()
    return jsondata.title
  }
  useEffect(() => {
    console.log("här kommer nåt", getPosts())
  })

  return <div className="text-3xl text-indigo-700"></div>
}



  return (
    <div className="text-3xl text-indigo-700">
      {data.map((post) => (
        <h1 className="text-lg py-5">{post.id}</h1>
      ))}
    </div>
  )
export default Index*/

/*

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/fetchRecepie")
  if (!res.ok) {
  }
  return res.json()
}

export default async function Home() {
  const data: { id: string; title: string }[] = await getPosts()
  console.log(data)
  return (
    <table>
      <tr>
        <th>title</th>
        <th>ingredients</th>
        <th>intructions</th>
      </tr>
      {data.map((post) => (
        <tr key={post.id}>
          <td>{post.title}</td>
        </tr>
      ))}
    </table>
  )
}*/
