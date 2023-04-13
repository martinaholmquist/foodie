/* TODO - 
Skapa resten av formuläret
Skapa X knapp och ta bort fält knapp.
Skapa funktionalitet till user och recepie när skapat nytt recept.
Skapa 1 publicerings, Granska och Spara knapp.
Skapa pop upp alternativ till tid antal portioner.

Lägga in rätt foodie icon.
Lägga in bild i file field.
lägga in bilder och text i knapparna.

Fixa korrekt posiktionering på allt.
Fixa rätt färger t.ex. i file field secandaryPink i tailwind.config.js behöver sjusteras.
 */

import NewRecepieFrom from "@/components/newRecepieComponent/newRecepieFrom"
import { NextPage } from "next"
import Link from "next/link"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="h-screen">
      {/* bild / exit */}
      <div className=" h-24 flex justify-evenly space-x-52">
        <img src="Loggo_B&W.png" alt="Foodie.logo" width={100} />
        <div className="text-center py-8">
          <Link
            href={"/"}
            className="border rounded-full border-black my-1 mx-2 px-2 py-1"
          >
            X
          </Link>
        </div>
      </div>

      {/* rubrik */}
      <div className="h-10">
        <h1 className="text-center font-title font-bold text-2xl">
          Publicering recept
        </h1>
      </div>

      {/* första formulär */}
      <div className="space-y-4 py-8">
        <div className=" text-center">
          <input
            type="text"
            placeholder="Namn på maträtt"
            className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg"
          />
        </div>
        {/* boxen för bilden */}
        <div className="flex items-center justify-center shadow-lg">
          <label
            htmlFor="dropzone-file"
            className="flex justify-center w-96 h-60 bg-secondarypink"
          >
            <div className="flex items-center justify-center ">
              <p className="text-xl">Lägg till en bild</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
          {/* första formulär */}
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Antal portioner"
            className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg"
          />
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Tid"
            className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg"
          />
        </div>
      </div>

      {/* formulär för ingredienser */}
      <div className="bg-gray-500 h-1/4">
        <h2 className=" px-5 font-title font-bold text-2xl">Ingredienser</h2>
      </div>

      {/* formulär för Tillvägagångssätt */}
      <div className="bg-pink-500 h-1/4">
        <h2 className=" px-5 font-title font-bold text-2xl">
          Tillvägagångssätt
        </h2>
      </div>

      {/* Kuriosa */}
      <div className="bg-purple-500 h-1/5">
        <h2 className=" px-5 font-title font-bold text-2xl">Kuriosa</h2>
      </div>

      {/* Kategori */}
      <div className="bg-yellow-200 h-1/5">
        <h2 className=" px-5 font-title font-bold text-2xl">Kategori</h2>
      </div>
    </div>
  )
}

export default Index
