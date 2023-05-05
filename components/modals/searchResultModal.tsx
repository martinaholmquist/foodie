import { useEffect, useState } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"

import { useSearchParams } from "next/navigation"
import useSWR from "swr"

type allRecepies = {
  title?: string
  image?: string
  time?: string
  id?: string
  servings?: string

  author?: {
    username: string
    profileImage: string
    id: string
  }
}

//fetchar värdet som användaren skriver in i url:en
const fetchResult = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Failed to fetch responses as typed in")
  }

  console.log(response)
  return response.json()
}

//tar in värdet och kodar om stringen så den kan använas att söka med i databasen

const SearchResultModal = ({}) => {
  const search = useSearchParams()
  const searchQuery = search ? search.get("q") : null
  const encodedSearchQuery = encodeURI(searchQuery || "")

  const { data, isLoading } = useSWR(
    `/api/searchAll?q=${encodedSearchQuery}`,
    fetchResult
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data?.allRecepies || data?.allRecepies.length === 0) {
    return (
      <div>
        Tyvärr finns det inget recept som matchar ditt sökord, försök gärna
        igen!
      </div>
    )
  }

  const router = useRouter()
  const handleClick = (id: any) => {
    router.push(`/home/${id}`)
  }

  console.log("HERE IS DATA", data)

  return (
    <>
      <div>Här kommer recept som matchar ditt sökord:</div>
      <div className="bg-anotherpink flex items-center flex-col justify-center space-y-4">
        <div className="">
          {data.allRecepies.map((item: allRecepies) => (
            <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
              <div
                className="bg-primaryPink rounded-lg"
                onClick={() => handleClick(item.id)}
              >
                <img
                  src={item.image}
                  alt="image"
                  width={550}
                  height={100}
                  className="object-cover rounded-lg w-100 h-52"
                />
                <p className="font-title font-medium text-2xl pl-2 pt-2 ">
                  {item.title}
                </p>
                <div className=" pl-2 pt-1 flex  items-center">
                  <div className="h-4 w-4 bg-crimsonRed rounded-full"></div>
                  <p className="pl-4 font-sans text-1xl font-medium">
                    {item.author?.username}
                  </p>
                </div>
                <div className=" pl-2 pt-1 pb-2 flex  items-center">
                  <div>
                    <img src="/klocka.png" alt="klocka" />
                  </div>
                  <p className="pl-4 font-sans font-medium text-1xl">
                    {" "}
                    {item.time} min
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          Det var alla sökresultat, lycka till med matlagningen! ...pssst, om
          inget passar så kika nedan.
        </div>
      </div>
    </>
  )
}

export default SearchResultModal
