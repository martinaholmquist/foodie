import NewRecepiePopUpTableOption from "../newRecepieComponents/newRecepiePopUpTableOption"
import IngredienserRecepieFrom from "../newRecepieComponents/ingredienserRecepieFrom"
import AddfieldForm from "../newRecepieComponents/addfieldForm"
import TillvagagongForm from "../newRecepieComponents/tillvagagongForm"
import { SyntheticEvent, useState } from "react"
import { FormButton } from "../form-components/form-button"
import useCurrentUser from "@/hooks/useCurrentUser"
import { ImageUpload } from "../image_upload-components/imageUpload"

type Recepie = {
  title: string
  time: string
  servings: string
  ingredients: [{}]
  intructions: [{}]
  authorId: string
  image: string
}

interface Input {
  id: number
  value: string
}

const RecepieModule = ({}) => {
  const { data: currentUser } = useCurrentUser()

  const [recepie, setRecepie] = useState<Recepie>({
    title: "",
    time: "",
    servings: "",
    ingredients: [{ id: 1, value: "" }],
    intructions: [{ id: 1, value: "" }],
    authorId: "",
    image: "",
  })

  const [inputs, setInputs] = useState<Input[]>([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ])

  const [instructionInputs, setinstructionInputs] = useState<Input[]>([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ])

  const handleAddInput = () => {
    const newId = inputs[inputs.length - 1].id + 1
    setInputs([...inputs, { id: newId, value: "" }])
  }

  const handleAddInputInstructions = () => {
    const iID = instructionInputs[instructionInputs.length - 1].id + 1
    setinstructionInputs([...instructionInputs, { id: iID, value: "" }])
  }

  const handleRemoveInput = (id: number) => {
    const updatedInputs = inputs.filter((input) => input.id !== id)
    setInputs(updatedInputs)
  }

  const handleRemoveInstructionInput = (id: number) => {
    const updatedInputs = instructionInputs.filter((input) => input.id !== id)
    setinstructionInputs(updatedInputs)
  }

  const handleInputChange = (id: number, value: string) => {
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, value } : input
    )
    setInputs(updatedInputs)
  }

  const handleInstructionInputChange = (id: number, value: string) => {
    const updatedInputs = instructionInputs.map((input) =>
      input.id === id ? { ...input, value } : input
    )
    setinstructionInputs(updatedInputs)
  }

  const inputValues = inputs.map((input) => input.value)

  const instructionValues = instructionInputs.map((inputs) => inputs.value)

  const body = {
    authorId: currentUser?.id,
    title: recepie.title,
    time: recepie.time,
    servings: recepie.servings,
    ingredients: inputValues,
    intructions: instructionValues,
  }

  const onSubmit = async (e: SyntheticEvent) => {
    const data = await fetch("http://localhost:3000/api/createrecepie", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
    const res = await data.json()
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={onSubmit} className="">
        <div className=" pt-8  px-6">
          <div>
            <input
              type="text"
              placeholder="Namn på maträtt"
              value={recepie.title}
              className="border rounded-md w-full h-12 px-2 font-sans shadow-lg"
              onChange={(e) =>
                setRecepie({ ...recepie, title: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-center pt-5">
            <label
              htmlFor="dropzone-file"
              className="flex justify-center w-96 h-52 bg-secondarypink rounded-md shadow-lg"
            >
              <div className="flex flex-col items-center justify-center ">
                <img src="image 60.svg" alt="foto link" />
                <p className="text-xl">Lägg till en bild</p>
              </div>
              <ImageUpload />
            </label>
          </div>

          <NewRecepiePopUpTableOption
            name="Antal portioner"
            a={"2"}
            b={"4"}
            c={"6"}
            d={"8"}
            value={recepie.servings}
            onChange={(e) =>
              setRecepie({ ...recepie, servings: e.target.value })
            }
          />

          <NewRecepiePopUpTableOption
            name="Tid"
            a={"5"}
            b={"15"}
            c={"45"}
            d={"60"}
            value={recepie.time}
            onChange={(e) => setRecepie({ ...recepie, time: e.target.value })}
          />

          <div className=" pt-12">
            <h2 className="  font-title font-bold text-2xl">Ingredienser</h2>
          </div>

          {inputs.map((inputs) => (
            <IngredienserRecepieFrom
              placeholderProp={"Ingrediens"}
              siffra={inputs.id}
              value={inputs.value}
              onClick={() =>
                inputs.id == 3 ? null : handleRemoveInput(inputs.id)
              }
              onChange={(e) => handleInputChange(inputs.id, e.target.value)}
            />
          ))}

          <AddfieldForm
            placeholderProp={"Lägg till ingrediens"}
            onClick={handleAddInput}
          />

          <div className=" pt-12">
            <h2 className="  font-title font-bold text-2xl">
              Tillvägagångssätt
            </h2>
          </div>

          {instructionInputs.map((inputs) => (
            <TillvagagongForm
              placeholderProp={"Steg"}
              siffra={inputs.id}
              value={inputs.value}
              onClick={() =>
                inputs.id == 3 ? null : handleRemoveInstructionInput(inputs.id)
              }
              onChange={(e) =>
                handleInstructionInputChange(inputs.id, e.target.value)
              }
            />
          ))}

          <AddfieldForm
            placeholderProp={"Lägg till steg"}
            onClick={handleAddInputInstructions}
          />

          <div className=" pt-12">
            <h2 className="  font-title font-bold text-2xl">Kuriosa</h2>
          </div>
          <div className="flex w-full items-center pt-4">
            <textarea
              name=""
              id=""
              placeholder={"Vad vill du berätta?"}
              cols={100}
              rows={4}
              className=" resize-none rounded-sm px-3 pt-3"
            ></textarea>
          </div>

          <div className=" pt-12">
            <h2 className="  font-title font-bold text-2xl">Kategori</h2>
          </div>
          <AddfieldForm placeholderProp={"Lägg till taggar"} />

          <FormButton
            value={"Skicka"}
            type={"submit"}
            className="rounded-md  w-full h-12 bg-primaryPink  text-black  font-semibold "
          />
        </div>
      </form>
    </>
  )
}

export default RecepieModule

/*
<form action="" className="space-y-4">
        <div className=" text-center">
          <input
            type="text"
            placeholder="Namn på maträtt"
            value=""
            className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg"
          />
        </div>

        <div className="flex items-center justify-center">
          <label
            htmlFor="dropzone-file"
            className="flex justify-center w-96 h-52 bg-secondarypink rounded-md shadow-lg"
          >
            <div className="flex flex-col items-center justify-center ">
              <img src="image 60.svg" alt="foto link" />
              <p className="text-xl">Lägg till en bild</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <NewRecepiePopUpTableOption
          name="Antal portioner"
          a={"2"}
          b={"4"}
          c={"6"}
          d={"8"}
          value={recepie.servings}
          onChange={(e) => setRecepie({ ...recepie, servings: e.target.value })}
        />
        <NewRecepiePopUpTableOption
          name="Tid"
          a={"5"}
          b={"15"}
          c={"45"}
          d={"60"}
          value={recepie.time}
          onChange={(e) => setRecepie({ ...recepie, time: e.target.value })}
        />

      
        <h2 className=" px-5 font-title font-bold text-2xl">Ingredienser</h2>
        <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={1} />
        <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={2} />
        <IngredienserRecepieFrom placeholderProp={"Ingrediens"} siffra={3} />
        <AddfieldForm placeholderProp={"Lägg till"} />

    
        <h2 className=" px-5 font-title font-bold text-2xl">
          Tillvägagångssätt
        </h2>
        <TillvagagongForm placeholderProp={"Steg"} siffra={1} />
        <TillvagagongForm placeholderProp={"Steg"} siffra={2} />
        <TillvagagongForm placeholderProp={"Steg"} siffra={3} />
        <AddfieldForm placeholderProp={"Lägg till steg"} />

      
        <h2 className=" px-5 font-title font-bold text-2xl">Kuriosa</h2>
        <div className="flex justify-center pt-[10px]">
          <label htmlFor="">
            <textarea
              name=""
              id=""
              cols={41}
              rows={5}
              placeholder="Vad vill du berätta?"
              className="rounded-sm shadow-lg placeholder: pt-2 pl-2"
            ></textarea>
          </label>
        </div>

      
        <h2 className=" px-5 font-title font-bold text-2xl">Kategori</h2>
        <div className="text-center">
          <div className="relative">
            <div className="absolute left-11 top-[14px]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.88 10.64H10.12V18.84H8.36V10.64H0.6V8.88H8.36V0.679999H10.12V8.88H17.88V10.64Z"
                  fill="black"
                />
              </svg>
            </div>
            <button className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg text-center bg-white">
              {"Lägg till taggar!"}
            </button>
          </div>
        </div>
       
        <input type="submit" />
      </form>
    </>*/
