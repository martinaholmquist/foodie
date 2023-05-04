import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

type recepieProps = {
  title?: string;
  image?: string;
  time?: string;
  id?: string;
  category?: string;

  author?: {
    name: string;
    profileImage: string;
    id: string;
  };
};

const RenderOutRecepiesModals: NextPage<recepieProps> = ({}) => {
  // State för lagra all recipes
  const [data, setData] = useState<recepieProps[]>([])

  // State för lagra filtrerad recipes baserad på category
  const [filteredData, setFilteredData] = useState<recepieProps[]>([])

  const router = useRouter()

  // Handle click event when a recipe is clicked
  const handleClick = (id: any) => {
    router.push(`/home/${id}`)
  }

  // State för lagra the valda category
  const [category, setCategory] = useState("")

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
  const handleCategoryFilter = (selectedCategory: string) => {
    setCategory(selectedCategory)

    // If "All" category is selected, display all recipes
    if (selectedCategory === "All") {
      setFilteredData(data)

      // Filter recipes based on selected category
    } else {
      const filteredRecepies = data.filter(
        (recep) => recep.category === selectedCategory
      )
      setFilteredData(filteredRecepies)
    }
  }

  return (
    <div className="bg-anotherpink flex items-center flex-col justify-center space-y-4">
      <div className="">

        {/* Button för "All" category */}
        <button
          type="button"
          className={`bg-white p-1 px-5 rounded-full mt-[20px] shadow-lg focus:bg-primaryPink focus:border-none border-[1px] "border-primaryPink" : "border-black/20"}`}
          onClick={() => handleCategoryFilter("All")}
        >
          All
        </button>

        {/* Button för "Pasta" category */}
        <button
          type="button"
          className={`bg-white p-1 px-5 rounded-full mt-[20px] shadow-lg focus:bg-primaryPink focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
          onClick={() => handleCategoryFilter("Pasta")}
        >
          Pasta
        </button>

        {/* Button för "Vegetariskt" category */}
        <button
          type="button"
          className={`bg-white p-1 px-5 rounded-full mt-[20px] shadow-lg focus:bg-primaryPink focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          `}
          onClick={() => handleCategoryFilter("Vegetariskt")}
        >
          Vegetariskt
        </button>
        {/* Button för "Fågel" category */}
        <button
          type="button"
          className={`bg-white p-1 px-5 rounded-full mt-[20px] shadow-lg focus:bg-primaryPink focus:border-none border-[1px] "border-primaryPink" : "border-black/20"
          }`}
          onClick={() => handleCategoryFilter("Fågel")}
        >
          Fågel
        </button>

        {/* Renderar filtrerad recipes */}
        {filteredData.map((item) => (
          <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
            <div
              className="bg-primaryPink rounded-lg"
              onClick={() => handleClick(item.id)}
            >
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

             
