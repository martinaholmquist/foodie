import useCurrentLoggedInUser from "@/hooks/useCurrentUser"

interface Logo {
  foodieLogo: string
  className?: string
  width?: number
  height?: number
}
export const Logo = ({ foodieLogo, className, width, height }: Logo) => {
  return (
    <>
      <img
        className={className}
        src={`${foodieLogo}`}
        alt="foodie-logo"
        width={width}
        height={height}
      />
    </>
  )
}
