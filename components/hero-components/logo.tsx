import useCurrentLoggedInUser from "@/hooks/useCurrentUser"

interface Logo {
  foodieLogo: string
  className: string
}
export const Logo = ({ foodieLogo, className }: Logo) => {
  return (
    <div className="flex justify-center pt-5">
      <img
        className={className}
        src={`${foodieLogo}`}
        alt="foodie-logo"
        width={200}
      />
    </div>
  )
}
