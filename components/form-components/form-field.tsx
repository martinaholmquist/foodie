interface FormFielldProps {
  htmlFor: string
  label: string
  type?: string
  value: any
  onChange?: (...args: any) => any
}

export const FormFielld = ({
  htmlFor,
  label,
  type,
  value,
  onChange,
}: FormFielldProps) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} name={htmlFor} onChange={onChange} value={value} />
    </>
  )
}
