interface FormFielldProps {
  htmlFor: string
  label: string
  type?: string
  value: any
  placeholder?: string
  onChange?: (...args: any) => any
}

export const FormFielld = ({
  htmlFor,
  label,
  type,
  value,
  onChange,
  placeholder,
}: FormFielldProps) => {
  return (
    <>
      <div className="border-black border-[1px] mx-6 rounded-xl mb-3  h-16 relative">
        <label
          className=" font-medium text-xs absolute top-2 left-4 "
          htmlFor={htmlFor}
        >
          {label}
        </label>
        <div className="w-full h-full flex items-center pt-3 pl-4">
          <input
            className="  text-black focus:outline-none w-full font-bold text-lg font-sans"
            type={type}
            name={htmlFor}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </>
  )

  // Add Order
}
