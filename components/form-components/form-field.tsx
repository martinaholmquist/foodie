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
      <label htmlFor={htmlFor}>{label}</label>
      <div className=" shadow-md shadow-gray-400 p-2 rounded-md">
        <input
          className=" bg-transparent border-b-2 border-gray-300 text-black focus:outline-none "
          type={type}
          name={htmlFor}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  )

  // Add Order
}
