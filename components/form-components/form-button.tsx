interface ButtonProps {
  onClick?: (...args: any) => any
  value: any
  type?: any
  name?: string
  className?: string
}
export const FormButton = ({
  value,
  type,
  name,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <div className="mx-6 mb-5">
      <button onClick={onClick} name={name} type={type} className={className}>
        {value}
      </button>
    </div>
  )
}
