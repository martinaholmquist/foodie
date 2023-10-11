import SearchResultModal from "@/components/modals/searchResultModal"
import SingleRecepieModule from "@/components/modals/singleRecepieModule"
import RubrikRecepieFormView from "@/components/newRecepieComponents/rubrikRecepieFormView"
import useCurrentUser from "@/hooks/useCurrentUser"
import axios from "axios"

import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

type recpieData = {
  title: string
  servings: string
  time: string
  ingredients: [string]
  intructions: [string]
  kuriosa: string
  image: string
  id: any
  author: {
    username: string
    profileImage: string
  }
  likes?: { authorId: string }[]
}

const RecepieView = () => {
  const [data, setData] = useState<recpieData>()
  const [action, setAction] = useState("Ingredienser")

  const { data: currentUser } = useCurrentUser()
  const router = useRouter()
  const id = router.query.recepieID

  const recepieData = async () => {
    const res = await fetch(`/api/recepies/${id}`)
    const recepies = await res.json()
    setData(recepies)
  }

  const handleIngredienserClick = () => {
    setAction("Ingredienser")
  }
  const handleDoLikeThisClick = () => {
    setAction("DoLikeThis")
  }

  const { q } = router.query
  const [encodedSearchQuery, setEncodedSearchQuery] = useState<string>(
    q ? q.toString() : ""
  )

  const likeRecepie = async (recepieId: any) => {
    try {
      await axios.post("/api/recepies/likeRecepie", {
        recepieId: recepieId,
        authorId: currentUser?.id,
      })
    } catch (error) {
      console.log(error)
    }

    setData((prevData) => {
      if (prevData) {
        const likedByCurrentUser = (prevData.likes || []).some(
          (like) => like.authorId === currentUser?.id
        )
        let updatedLikes = []
        if (likedByCurrentUser) {
          // If the current user already liked the recipe, remove their like
          updatedLikes = (prevData.likes || []).filter(
            (like) => like.authorId !== currentUser?.id
          )
        } else {
          // If the current user didn't like the recipe, add their like
          updatedLikes = [
            ...(prevData.likes || []),
            { authorId: currentUser?.id },
          ]
        }

        return {
          ...prevData,
          likes: updatedLikes,
        }
      }

      return prevData
    })
  }

  const handleClick = (id: any) => {
    //puch the search word to the url in home if it exist
    if (encodedSearchQuery) {
      router.push(`/home?q=${encodedSearchQuery}`)
    } else {
      router.push("/home/")
    }
  }

  useEffect(() => {
    if (id) {
      recepieData()
    }
  }, [id])

  return (
    <div className="" key={data?.id}>
      <div className="bg-anotherpink flex items-center flex-col justify-center space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-primaryPink relative pb-[22px] rounded-md">
            <button
              type="button"
              className="absolute top-2 left-2 z-50"
              onClick={handleClick}
            >
              {" "}
              <img src="/Tillbaka-pil.png" alt="tillbakaknapp" />{" "}
            </button>
            <div className=" relative">
              <img
                src={data?.image}
                alt="image"
                width={550}
                height={100}
                className="object-cover rounded-lg w-100 h-52 relative"
              />
              <div className="bg-anotherpink/80 absolute bottom-0  right-0 mr-2 mb-2  px-[13px]  rounded-full ">
                <button
                  onClick={() => {
                    likeRecepie(data?.id)
                    recepieData()
                  }}
                >
                  <img
                    src={
                      data?.likes
                        ?.map((item) => item.authorId)
                        .includes(currentUser.id)
                        ? "/liked.png"
                        : "/like.png"
                    }
                    alt=""
                    width={18.55}
                    height={17}
                    className="mt-[5px]"
                  />
                  <p className="text-sm">{data?.likes?.length}</p>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 ">
              <p className="font-title font-medium text-2xl pl-2 ">
                {data?.title}
              </p>
              <div className="flex items-center pr-3">
                <div>
                  <img src="/klocka.png" alt="klocka" />
                </div>
                <p className="pl-2 font-sans font-medium text-1xl ">
                  {" "}
                  {data?.time}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-[13px] ">
              <div className=" pl-2 flex  items-center">
                <img
                  src="/Profil icon.png"
                  alt="profil icon"
                  className=" h-4 w-4"
                />
                <p className="pl-2 font-sans text-1xl font-medium">
                  {data?.author?.username}
                </p>
              </div>

              <div className="flex items-center pr-3">
                <div>
                  <img src="/bestikikon 1.png" alt="bestick" />
                </div>
                <p className="pl-4 font-sans font-medium text-1xl">
                  {""}
                  {data?.servings} port
                </p>
              </div>
            </div>
          </div>

          <SingleRecepieModule
            col="bg-crimsonRed"
            displayExpl={action === "Ingredienser" ? "absolute" : "hidden"}
            displayPub={action === "DoLikeThis" ? "absolute" : "hidden"}
            onExploreClick={handleIngredienserClick}
            onPublishClick={handleDoLikeThisClick}
            exploreDisabled={action === "Ingredienser"}
            publishDisabled={action === "DoLikeThis"}
            amount={data?.ingredients.length}
          />
          <div>
            {action === "Ingredienser" ? (
              <div>
                {data?.ingredients.map((item) => (
                  <ul className="pl-6 flex items-center pb-5" key={data.id}>
                    <div className="h-4 w-4 rounded-full border-[1px] border-black bg-white"></div>
                    <li className="pl-4">{item}</li>
                  </ul>
                ))}

                <div className="flex items-center pt-6 ">
                  <p className="font-title font-medium text-2xl pl-6 ">
                    {data?.kuriosa && (
                      <>
                        <div className="flex">
                          <img src="/icons8-chef-hat-100 1.png" alt="" />
                          <h2 className="pl-4 font-title">
                            {" "}
                            {data?.author?.username}s kuriosa
                          </h2>
                        </div>
                        <div className="mt-4 font-sans bg-white">
                          <textarea
                            cols={28}
                            rows={5}
                            value={data?.kuriosa}
                            disabled
                            className="resize-none outline-none cursor-none"
                          ></textarea>
                        </div>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ) : (
              <div>
                {data?.intructions.map((item, index) => (
                  <div className="pb-5" key={item}>
                    <ul
                      className="pl-4 flex items-left
                    "
                    >
                      <div className="pb-6">
                        <div className="  flex justify-center h-6 w-6 rounded-full border-[1px] border-black bg-white">
                          <span>{index + 1}</span>
                        </div>
                      </div>
                      <li className="ml-6 mr-4">{item}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default RecepieView
