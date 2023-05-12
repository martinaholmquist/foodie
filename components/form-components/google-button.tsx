import Image from "next/image"

interface ButtonProps {
  onClick?: (...args: any) => any
  value: any
  type?: any
  name?: string
  className?: string
}
export const GoogleButton = ({
  value,
  type,
  name,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <div className="mx-6 mt-8 relative ">
      <button onClick={onClick} name={name} type={type} className={className}>
        <Image
          src={"/google_icon.png"}
          width={22}
          height={22}
          alt="Google Icon"
          className=" absolute left-14 top-3"
        ></Image>
        {value}
      </button>
    </div>
  )
}
