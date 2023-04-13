interface Props {
  htmlFor: string
  label: string
  type?: string
  value: any
}

export const NewRecepieFrom = ({}) => {
  return (
    <div>
      <form action="" placeholder="namn på marätt" className="border w-20 h-1">
        <label htmlFor="" placeholder="" ></label>
      </form>
    </div>
  )
}

export default NewRecepieFrom
