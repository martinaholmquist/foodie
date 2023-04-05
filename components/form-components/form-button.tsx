interface ButtonProps {
  onClick?: (...args: any) => any
  value: any
  type?: any
  name?: string
}
export const FormButton = ({ value, type, name, onClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        name={name}
        type={type}
        className="rounded-xl mt-2 bg-secondaryWhite px-3 py-2 text-black font-semibold transition duration-300 ease-in-out  hover:bg-black hover:text-secondaryWhite hover:-translate-y-1"
      >
        {value}
      </button>
    </>
  )
}
