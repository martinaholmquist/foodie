import { useEffect, useState } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"

type recepieProps = {
  title?: string
  image?: string
  time?: string
  id?: string
  category?: string

  author?: {
    name: string
    profileImage: string
    id: string
  }
}

const RenderOutRecepiesModals: NextPage<recepieProps> = ({}) => {
  // State för lagra all recipes
  const [data, setData] = useState<recepieProps[]>([])

  // State för lagra filtrerad recipes baserad på category
  const [filteredData, setFilteredData] = useState<recepieProps[]>([])

  // State för lagra the valda category
  const [category, setCategory] = useState<string[]>([])

  const [showMoreCategories, setShowMoreCategories] = useState(false)

  const handleToggle = () => {
    setShowMoreCategories(!showMoreCategories)
  }

  const router = useRouter()

  // Handle click event when a recipe is clicked
  const handleClick = (id: any) => {
    router.push(`/home/${id}`)
  }

  // Function to fetch recipe data from the API
  const recepieData = async () => {
    const res = await fetch("http://localhost:3000/api/nestedFetch")
    const recepies = await res.json()
    setData(recepies)
    setFilteredData(recepies)
  }

  useEffect(() => {
    // Fetch recipe data when the component mounts
    recepieData()
  }, [])

  // Handle category filter selection
  const handleCategoryFilter = (selectCategory: any) => {
    const updatedCategories = category.includes(selectCategory)
      ? category.filter((category) => category !== selectCategory)
      : [...category, selectCategory]
    setCategory(updatedCategories)

    // Om ingen category är vald, vissa alla recept
    if (updatedCategories.length === 0) {
      setFilteredData(data)

      // filtrerar recepten beroende påi vilken category som är vald
    } else {
      const filteredRecepies = data.filter((recipe) =>
        updatedCategories.includes(recipe.category)
      )
      setFilteredData(filteredRecepies)
    }
  }

  return (
    <div className="bg-anotherpink flex items-center flex-col justify-center space-y-4">
      <div className="">
        <div className="flex justify-center space-x-2">
          {/* Button för "Pasta" category */}
          <button
            type="button"
            className={`bg-white p-1 px-5 rounded-full mt-[20px] shadow-lg focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
            onClick={() => handleCategoryFilter("Pasta")}
          >
            Pasta
          </button>

          {/* Button för "Vegetariskt" category */}
          <button
            type="button"
            className={`bg-white p-1 px-5 rounded-full mt-[20px] shadow-lg  focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          `}
            onClick={() => handleCategoryFilter("Vegetariskt")}
          >
            Vegetariskt
          </button>
          {/* Button för "Fågel" category */}
          <button
            type="button"
            className={`bg-white p-1 px-5 rounded-full mt-[20px] shadow-lg focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
            onClick={() => handleCategoryFilter("Fågel")}
          >
            Fågel
          </button>

          {/* Button för "Extra" category */}
          <button
            className="w-9 h-9 bg-white mt-5 rounded-full bottom-2 right-2 shadow-lg focus:border-none border-[1px]"
            type="button"
            onClick={handleToggle}
          >
            <span className="text-secondaryBlack text-xl">+</span>
          </button>
        </div>
        {/* Extra */}

        {showMoreCategories && (
          <div className=" top-0 w-full h-auto bg-anotherpink rounded-3xl  flex items-center justify-center z-10">
            <div className="">
              <button
                className={`bg-white p-1 px-5 ml-[16px] mr-[12px]  rounded-full  shadow-lg focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
                onClick={() => handleCategoryFilter("Fisk och skaldjur")}
              >
                Fisk och skaldjur
              </button>
              <button
                className={`bg-white p-1 px-5 rounded-full  mr-[12px] mt-[16px] shadow-lg focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
                onClick={() => handleCategoryFilter("Kött och chark")}
              >
                Kött och chark
              </button>
              <button
                className={`bg-white p-1 px-5 rounded-full mr-[12px] ml-[16px] mt-[16px] shadow-lg focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
                onClick={() => handleCategoryFilter("Bakning")}
              >
                Bakning
              </button>
              <button
                className={`bg-white p-1 px-5 rounded-full mr-[12px]  mt-[16px] shadow-lg focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
                onClick={() => handleCategoryFilter("Dessert")}
              >
                Dessert
              </button>
              <button
                className={`bg-white p-1 px-5 rounded-full mr-[12px] mt-[16px] shadow-lg focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
                onClick={() => handleCategoryFilter("Dryck")}
              >
                Dryck
              </button>
              <div className="flex justify-end pr-[16px]">
                <button
                  className={`bg-white p-1 px-5 rounded-full mt-[16px] shadow-lg focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
                  onClick={() => setFilteredData(data)}
                >
                  Rensa val
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Renderar filtrerad recipes */}
        {filteredData.map((item) => (
          <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
            <div
              className="bg-primaryPink rounded-lg"
              onClick={() => handleClick(item.id)}
            >
              Category: {item.category}
              {/* Vissar recipe bild */}
              <img
                src={item.image}
                alt="image"
                width={550}
                height={100}
                className="object-cover rounded-lg w-100 h-52"
              />
              {/* Vissar recipe title */}
              <p className="font-title font-medium text-2xl pl-2 pt-2 ">
                {item.title}
              </p>
              <div className=" pl-2 pt-1 flex  items-center">
                <div className="h-4 w-4 bg-crimsonRed rounded-full"></div>

                {/* Vissar author namn */}
                <p className="pl-4 font-sans text-1xl font-medium">
                  {item.author?.name}
                </p>
              </div>
              <div className=" pl-2 pt-1 pb-2 flex  items-center">
                <div>
                  <img src="/klocka.png" alt="klocka" />
                </div>

                {/* Vissar recipe till lagningstid */}
                <p className="pl-4 font-sans font-medium text-1xl">
                  {item.time} min
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RenderOutRecepiesModals
