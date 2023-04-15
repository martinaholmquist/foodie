import { useState } from "react"

interface Props {
  name: string
  a: string
  b: string
  c: string
  d: string
}

const NewRecepiePopUpTableOption = ({ name,a,b,c,d }: Props) => {
    
    const [amount, setAmount] = useState()

  return (
    <div className="h-auto text-center">
      <select
        name=""
        id=""
        className="border rounded-md w-96 h-12 px-2 font-sans shadow-lg bg-white"
      >
        <optgroup>
          <option value="">{name}</option>
          <option value="">{a}</option>
          <option value="">{b}</option>
          <option value="">{c}</option>
          <option value="">{d}</option>
        </optgroup>
      </select>
    </div>
  )
}

export default NewRecepiePopUpTableOption
