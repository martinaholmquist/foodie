/*

//import RenderOutRecepiesModals from "@/components/modals/homeModalNew"

import { NextPage } from "next"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import useSWR from "swr"

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
const Index = () => {
  const search = useSearchParams()
  const searchQuery = search ? search.get("q") : null
  const encodedSearchQuery = encodeURI(searchQuery || "")

  const { data, isLoading } = useSWR(
    `/api/searchAll?q=${encodedSearchQuery}`,
    fetchResult
  )

  if (!data?.allRecepies) {
    return null
  }

  console.log("HERE IS DATA", data)

  //console.log("Search params", encodedSearchQuery)

  return (
    <>
      <div>här kommer search-page</div>
      <div>
        {data.allRecepies.map((item) => (
          <div>
            Title: {item.title} tid: {item.time} portioner: {item.servings}
          </div>
        ))}
      </div>
    </>
  )
}

export default Index
/* <div>{data.allRecepies.map(item => (
        <div>{item.title}</div>
      ))}</div>*/
