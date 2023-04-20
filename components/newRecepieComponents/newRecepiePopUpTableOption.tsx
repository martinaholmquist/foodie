import { useState } from "react"

interface Props {
  name: string
  a: string
  b: string
  c: string
  d: string
  value: string
  onChange?: (...args: any) => any
}

const NewRecepiePopUpTableOption = ({
  name,
  a,
  b,
  c,
  d,
  value,
  onChange,
}: Props) => {
  return (
    <div className="h-auto text-center pt-4">
      <select
        name=""
        id=""
        className="border rounded-md w-full h-12 px-2 font-sans shadow-lg bg-white"
        value={value}
        onChange={onChange}
      >
        <option value="">{name}</option>
        <option value={a}>{a}</option>
        <option value={b}>{b}</option>
        <option value={c}>{c}</option>
        <option value={d}>{d}</option>
      </select>
    </div>
  )
}

export default NewRecepiePopUpTableOption
